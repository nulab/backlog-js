# backlog-js [![CI](https://github.com/nulab/backlog-js/actions/workflows/nodejs.yml/badge.svg)](https://github.com/nulab/backlog-js/actions/workflows/nodejs.yml) [![npm version](https://badge.fury.io/js/backlog-js.svg)](https://badge.fury.io/js/backlog-js)
Backlog API version 2 client for browser and node.

## Required reading
Please check out the [Nulab Backlog API page](https://developer.nulab.com/docs/backlog/).

## Installation
npm:
``` sh
$ npm install --save backlog-js
```

## Getting started
Append your "API Key" or "OAuth2 Access Token" to requests to the API to return data.

Create a client with `createClient`, then pass it as the first argument of the API functions. Import only the functions you use and your bundler can drop the rest.

``` javascript
import { createClient, getSpace } from 'backlog-js';

// 'xxx.backlog.jp' or 'xxx.backlogtool.com' or 'your package host'
const host = 'yourSpaceHost';
const apiKey = 'yourApiKey';
const accessToken = 'yourAccessToken';

// Use API Key
const client = createClient({ host, apiKey });

// Use OAuth2 Access Token
const client = createClient({ host, accessToken });

// Returns information about your space.
try {
  const space = await getSpace(client);
  console.log('space:', space);
} catch (err) {
  console.log('error:', err.message);
}
```

Each function takes the client first, followed by the parameters of the Backlog API it calls:

``` javascript
import { createClient, getIssue, getIssues, patchIssue } from 'backlog-js';

const client = createClient({ host, apiKey });

const issue = await getIssue(client, 'PROJ-1');
const issues = await getIssues(client, { projectId: [issue.projectId], count: 20 });
await patchIssue(client, 'PROJ-1', { summary: 'New summary' });
```

### `Backlog` class

The `Backlog` class is still available and has a method for every function, without the client argument:

``` javascript
import { Backlog } from 'backlog-js';

const backlog = new Backlog({ host, apiKey });

const space = await backlog.getSpace();
```

A `Backlog` instance is also a client, so it can be passed to the functions as well.

### Other Example

#### Download File

``` javascript
import { createClient, getSpaceIcon } from 'backlog-js';

const client = createClient({ host, apiKey });
const data = await getSpaceIcon(client);

// node
import { createWriteStream } from 'node:fs';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';

await pipeline(Readable.fromWeb(data.body), createWriteStream(`./${data.filename}`));

// browser
const blob = await data.blob();
const objectURL = URL.createObjectURL(blob);
const element = window.document.querySelector('#image');
element.src = objectURL;
```

#### Upload File

``` javascript
import { createClient, postSpaceAttachment } from 'backlog-js';

const client = createClient({ host, apiKey });

// node
import { openAsBlob } from 'node:fs';

const formData = new FormData();
formData.append('file', await openAsBlob('./sample.png'), 'sample.png');

// browser
// <form id="upload_form" method="post" enctype="multipart/form-data" >
//   <input type="file" name="file" >
// </form>
const $form = window.document.querySelector('#upload_form');
const formData = new FormData($form);

try {
  const data = await postSpaceAttachment(client, formData);
  console.log('success:', data);
} catch (err) {
  console.log('error:', err.message);
}
```

## Use OAuth2 for authentication

Details on the OAuth2 process are available [here](https://developer.nulab-inc.com/docs/backlog/auth#oauth2).

Here are the basic steps for OAuth2 using [Hono](https://hono.dev/):
```` javascript
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { OAuth2, createClient, getMyself } from 'backlog-js';

const app = new Hono();

const host = 'xxx.backlog.jp'; // or 'xxx.backlogtool.com' or 'your package host'
const clientId = 'yourClientId';
const clientSecret = 'yourClientSecret';
const redirectUri = 'http://localhost:3000/callback';
const state = 'yourState';

const credentials = { clientId, clientSecret };
const oauth2 = new OAuth2(credentials);

const authorizationURL = oauth2.getAuthorizationURL({ host, redirectUri, state });

app.get('/auth', (c) => c.redirect(authorizationURL));

app.get('/callback', async (c) => {
  const code = c.req.query('code');
  try {
    const accessToken = await oauth2.getAccessToken({ host, code, redirectUri });
    console.log('Access Token:', accessToken);

    // save access token.

    const client = createClient({ host, accessToken: accessToken.access_token });
    const myself = await getMyself(client);
    console.log('Myself:', myself);

    return c.redirect('/');
  } catch (e) {
    console.log('Access Token Error', e.message);
    return c.redirect('/login');
  }
});

app.get('/', (c) => c.text('Hello'));

app.get('/login', (c) => c.html('<a href="/auth">Login with Backlog</a>'));

serve({ fetch: app.fetch, port: 3000 });

console.log('Hono server started on port 3000');
````

## HTTP proxy support

You can route requests through an HTTP proxy by injecting a custom `fetch` function
into `createClient` (or the `Backlog` constructor) and the `OAuth2` constructor.

```javascript
import { createClient } from 'backlog-js';
import { ProxyAgent, fetch as undiciFetch } from 'undici';

const dispatcher = new ProxyAgent('https://proxy.example.com:8080');

const client = createClient({
  host: 'example.backlog.com',
  apiKey: 'YOUR_API_KEY',
  fetch: (input, init) => undiciFetch(input, { ...init, dispatcher }),
});
```

## License

MIT License

* http://www.opensource.org/licenses/mit-license.php

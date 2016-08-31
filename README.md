# backlog-js
---
Backlog API version 2 client for browser and node.


## Required reading
---
Please check out the [Nulab Developers portal page](http://developer.nulab-inc.com/docs/backlog/api/2/).


## Installation
---
Install the client library using npm:

``` sh
$ npm install --save backlog-js
```

## Getting started
---

Append your "API Key" or "OAuth2 Access Token" to requests to the API to return data.

``` javascript
import 'isomorphic-form-data';
import 'isomorphic-fetch';
import * as es6promise from 'es6-promise';
import * as backlogjs from 'backlog-js';

es6promise.polyfill();

// 'xxx.backlog.jp' or 'xxx.backlogtool.com' or 'your package host'
const host = 'yourSpaceHost';
const apiKey = 'yourApiKey';
const accessToken = 'yourAccessToken';

// Use API Key
const backlog = new backlogjs.Backlog({ host, apikey });

// Use OAuth2 Access Token
const backlog = new backlogjs.Backlog({ host, accessToken });

// Returns information about your space.
backlog.getSpace().then(data => {
  console.log('space:', data);
}).catch(err => {
  console.log('error:', err.message);
});

```

### Example

#### Download File

``` javascript
backlog.getSpaceIcon().then(data => {
    
  // node
  data.body.pipe(fs.createWriteStream(`./${data.filename}`));
    
  // browzer
  data.blob().then((blob) => {
    const objectURL = URL.createObjectURL(blob);
    const element = window.document.querySelector('#image');
    element.src = objectURL;
  });
          
}).catch(err => {
  console.log('error:', err.message);
});
```

#### Upload File

``` javascript
// node
const formData = new FormData();
formData.append("filename", "sample.png");
formData.append("file", fs.createReadStream("./sample.png"));

// browzer
const $form = window.document.querySelector('#upload_form');
const formData = new FormData($form);

backlog.postSpaceAttachment(formData).then(data => {
  console.log('success:', data);
}).catch(err => {
  console.log('error:', err.message);
});
```

## License

MIT License

* http://www.opensource.org/licenses/mit-license.php

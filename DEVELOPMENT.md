# For contributers

## Before you commit

* Create your branch from master branch. And your pull requests should head to master branch in general.
* Run `npm run build` to build `dist/*` and commit them. They are **not** `.gitignore`d.

# For repository owners

## Release procedure

### 0. Requirements

* [ghch](https://github.com/Songmu/ghch)

### 1. Create new tag

**Be sure your local master branch is up-to-date.**

1. Create a release branch from master branch.
    1. `git switch master && git pull`
    1. `git switch -c <BRANCH_NAME>`
1. Update the change log.
    1. `VERSION=<TAG> npm run changelog`
1. Update versions in `package.json` and `package-lock.json`.
    1. Manually 😜
1. Commit and push. Create a pull request.
    1. `git commit -m "<TAG>"`
    1. `git push`
    1. Create a pull request in your favourite way.
1. After the PR is merged, add new tag to the HEAD of master branch.
    1. `git switch master && git pull`
    1. `git tag <TAG>`
    1. `git push origin <TAG>`

### 2. Publish to npm

1. `npm login`
    1. Be sure you are logging in to the `nulab` account.
1. `npm publish --dry-run`
1. `npm publish`
1. `npm logout`

### 3. Create a release in GitHub

1. Push `Draft a new release` button in https://github.com/nulab/backlog-js/releases .
1. Paste a URL which links to the `CHANGELOG.md`.
    1. e.g. https://github.com/nulab/backlog-js/blob/master/CHANGELOG.md#0120-2021-01-08

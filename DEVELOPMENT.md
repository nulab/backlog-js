# For contributers

## Before you commit

* Create your branch from master branch. And your pull requests should head to master branch in general.
* `dist/*` is generated during the release workflow and is **not** committed to the repository.
* Run `npm run lint` ([oxlint](https://oxc.rs/docs/guide/usage/linter)), `npm run typecheck`, and `npm test` locally. All three run in CI. Use `npm run lint:fix` to auto-fix lint issues.

# For repository owners

## Release procedure

Releases are published from GitHub Actions via the [Release workflow](./.github/workflows/release.yml).

1. Open the [Release workflow](https://github.com/nulab/backlog-js/actions/workflows/release.yml) on the Actions tab.
1. Click **Run workflow** and select the version bump (`patch` / `minor` / `major`).
1. Approve the deployment to the `production` environment when prompted.

The workflow runs CI, bumps the version, builds the package, then:

* Publishes to npm using [Trusted Publishing (OIDC)](https://docs.npmjs.com/trusted-publishers/) and [provenance](https://docs.npmjs.com/generating-provenance-statements).
* Pushes the new version tag.
* Pushes the bumped `package.json` and `package-lock.json` back to the master branch.
* Creates a GitHub Release with auto-generated release notes.

### Required setup

#### npm: Trusted Publishing

Allow OIDC publishing from GitHub Actions on the [package access settings](https://www.npmjs.com/package/backlog-js/access):

* **Publisher**: `GitHub Actions`
* **Organization or user**: `nulab`
* **Repository**: `backlog-js`
* **Workflow filename**: `release.yml`
* **Environment name**: `production`

#### GitHub: `production` environment

Create a `production` environment on the [Environment settings page](https://github.com/nulab/backlog-js/settings/environments). Adding a maintainer to **Required reviewers** lets you require approval before the `publish` step runs.

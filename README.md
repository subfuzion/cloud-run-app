# Overview

This is a starter Node.js app configured for TypeScript. The app is generated
using [@subfuzion/create-cloud-run-app].

Configuration boilerplate includes:

-   [TypeScript]
-   [Jest]
-   Linting and formatting
  -   [EditorConfig]
  -   [ESLint]
  -   [Prettier]

The linting and formatting tools have been configured to  work together:

* `.editorconfig` has format settings that feed into Prettier
* `.eslintrc.json` uses Prettier for formatting

It is also configured with a `pre-commit` hook using [Husky] and [lint-staged]
that will automatically reformat your source files when you commit.

## Development

The generated app includes a number of package scripts, most importantly:

- `build`
- `test` | `test:watch`
- `deploy`

For normal development, just run `test:watch`. This will restart the Express app
on file changes under the `src` or `test` directories, and also re-run tests.

There is also a `prepare` script that configures a git `commit` hook (using
[Husky]) for linting. You need to run this if you cloned this repo instead of
generating the app using [@subfuzion/create-cloud-run-app].

> **NOTE**
>
> Currently under development. This implementation assumes:
>
> 1. You're running the latest LTS or Current version of [Node.js]
> 2. `node` and `npm` (automatically installed with Node.js) are in the path.
> 3. `git` is in your path and [user.name] and [user.email] are already
>    configured.
> 4. Your system can run a `bash` script (for now).

## License

Licensed under [MIT].

[@subfuzion/create-cloud-run-app]: https://github.com/subfuzion/create-cloud-run-app/
[EditorConfig]: https://editorconfig.org/
[ESLint]: https://eslint.org/
[Husky]: https://typicode.github.io/husky/
[Jest]: https://jestjs.io/
[lint-staged]: https://github.com/okonet/lint-staged/
[MIT]: ./LICENSE
[Node.js]: https://nodejs.org/en/download/
[Prettier]: https://prettier.io/
[repo]: https://github.com/subfuzion/create-typescript-app/
[TypeScript]: https://typescriptlang.org/
[user.email]: https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-email-address-for-every-repository-on-your-computer/
[user.name]: https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git#setting-your-git-username-for-every-repository-on-your-computer/

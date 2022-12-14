<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AntoninJuquel/react-ts-eslint-prettier-husky-template/blob/main/license)
[![ci](https://github.com/AntoninJuquel/react-ts-eslint-prettier-husky-template/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/AntoninJuquel/react-ts-eslint-prettier-husky-template/actions)
[![codecov.io](https://codecov.io/gh/AntoninJuquel/react-ts-eslint-prettier-husky-template/coverage.svg?branch=main)](https://codecov.io/gh/AntoninJuquel/react-ts-eslint-prettier-husky-template?branch=master)
<!-- [![Codacy Badge](https://app.codacy.com/project/badge/Grade/4c695ce061c34c1bb1698acc19278f0e)](https://www.codacy.com/gh/AntoninJuquel/react-ts-eslint-prettier-husky-template/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=AntoninJuquel/react-ts-eslint-prettier-husky-template&amp;utm_campaign=Badge_Grade) -->

<!-- # React - TypeScript and Github Actions Template with Vite -->
# Vite, React and Github Actions

This a React v18 + TypeScript + Vitest and React Testing Library + Github Actions starter template built with Vite.

[Demo](https://AntoninJuquel.github.io/react-ts-eslint-prettier-husky-template/)

</div>

## Features
### Overview

- โก๏ธ&nbsp; [Vite](https://vitejs.dev/)
- โ๏ธ&nbsp; [React v18](https://beta.reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- ๐งช&nbsp; [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) + [Cypress](https://www.cypress.io)
- ๐&nbsp; [Github Actions](https://docs.github.com/en/actions) with deployment on [Github Pages](https://pages.github.com/)
- ๐จ&nbsp; [Tailwindcss](https://tailwindcss.com) with all plugins + [daisyUI](https://daisyui.com) with theme switcher hook
- ๐&nbsp; [i18next](https://react.i18next.com) setup and ready to use
- ๐&nbsp; [Storybook](https://storybook.js.org)
### Coding Style

- VSCode settings & extensions recommendations
- [EditorConfig](https://editorconfig.org/)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) configured (with [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier))

### Git Hooks

- [Husky](https://typicode.github.io/husky/#/)
  - [`commitlint`](https://commitlint.js.org/) @ `commit-msg`
  - [`lint-staged`](https://github.com/okonet/lint-staged) @ `precommit`

### Github Actions

- **Build**, **Test** and **Coverage Analysis** (with [Codecov](https://about.codecov.io/)) at each commit
- **Deploy** to [Github Pages](https://pages.github.com/) on main branch (see deployment of this repo [here](https://AntoninJuquel.github.io/react-ts-eslint-prettier-husky-template/))


<br>

## Getting Started

### Copy template

```
npx degit AntoninJuquel/react-ts-eslint-prettier-husky-template app_name
```

### Usage

> Project was built using [`yarn`](https://yarnpkg.com). If you want to use `npm` or `pnpm`, just don't forget to update Github Actions workflow (`.github/workflows/ci.yml`).

#### Install

```sh
yarn
```

#### Dev

```sh
yarn dev
```

#### Build


```sh
# normal build
yarn build

# build with 404.html file added for Github Pages included
yarn build:ci
```
> See explanation of `404.html` file [here](#github-pages)
#### Test

```sh
# without coverage
yarn test

# with coverage
yarn test:ci

# with cypress
yarn cy
```
#### Serve

```sh
yarn serve
```

<br>

## Configuration for Github Actions

If you want to use Github Actions in your repo, you'll need to make little configuration.

Actual [workflow](https://github.com/AntoninJuquel/react-ts-eslint-prettier-husky-template/blob/main/.github/workflows/ci.yml) is:

![image](https://user-images.githubusercontent.com/57025128/190361775-3c6f8386-48b7-4d6c-8ac2-70dcb4587a7b.png)

### Build & Test job

> Build and test application on all commits

Create a [Github personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) (with `repo` and `workflow` permissions) and add it as a `PERSONAL_ACCESS_TOKEN` secret in your repo

### Coverage job

> Run Codecov analysis on all commits

Create a [Codecov](https://about.codecov.io/) token for your repo and add it as a `CODECOV_TOKEN` secret in your repo

### **Deploy** job

> Manual deploy to Github Pages (only main branch)

- Replace `base` config in `vite.config.ts` to match your repo name
- Create `GIT_AUTHOR_NAME` and `GIT_AUTHOR_EMAIL` secrets in your repo (it will be the author of commits to `gh-pages` branch)
- If you want to keep manual deployments, you need to create a [new environment with manual approve](https://devblogs.microsoft.com/devops/i-need-manual-approvers-for-github-actions-and-i-got-them-now/) in your repo, and then replace `environment` config in the `deploy` job in `.github/workflows/ci.yml`:
  - `environment.name` = name of the environment created in your repo
  - `environment.url` = link to your github pages

## Github Pages

There are modifications on `index.html`, and a new `404.html` file in the project to make it work well with Github Pages.

> See https://github.com/rafgraph/spa-github-pages for more info.

<!--Copyright (c) Laserfiche.
Licensed under the MIT License. See LICENSE in the project root for license information.-->

# Laserfiche Sample App

This app showcases the use of the [Laserfiche UI Components library](https://developer.laserfiche.com) to build a single page application (SPA) that interacts with Laserfiche cloud repository using the REST Repository API.

This application uses the `<lf-login>` UI component to initiate an OAuth2 flow to authenticate the user. SPA OAuth2 applications must first be registered in the Laserfiche account devconsole as SPA.

This particular application is built using Angular, but Laserfiche UI Components are framework-agnostic and support other frameworks such as React.js, Vue, and no-framework HTML5.

This project depends on the following libraries

- From NPM:
  - [@laserfiche/lf-js-utils](https://www.npmjs.com/package/@laserfiche/lf-js-utils)
  - [@laserfiche/lf-ui-components-services](https://www.npmjs.com/package/@laserfiche/lf-ui-components-services)
  - [@laserfiche/types-lf-ui-components](https://www.npmjs.com/package/@laserfiche/types-lf-ui-components)
- From lfxstatics (via NPM)
  - [`<script src="https://lfxstatic.com/npm/@laserfiche/lf-ui-components@16/cdn/lf-ui-components.js" defer></script>`](https://lfxstatic.com/npm/@laserfiche/lf-ui-components@16/cdn/lf-ui-components.js)

## Contribution

We welcome contributions and feedback. Please follow our [contributing guidelines](./CONTRIBUTING.md).

## Pre-Requisites

- Visual Studio Code
- Node 16 (LTS)
- all other Angular pre-reqs are in the local package.json

## First Time Setup

0. Clone the repo
1. Create a new Single Page App in devconsole for [US](https://app.laserfiche.com/devconsole/apps), [Canada](https://app.laserfiche.ca/devconsole/apps), or [Europe](https://app.eu.laserfiche.com/devconsole/apps) (depending on your region) and add the authentication redirect URI (e.g.: <https://myapp.example.com/lf-sample-app/>). This redirect URI in the devconsole must match the REDIRECT_URI variable in `src/app/config.ts`, which must match the host address.
   - Select required scope(s) needed to read and write to the repository in the 'Authentication' tab  ("repository.Read" and "repository.Write" ). Scopes are case-sensitive and space-delimited. 
   - Note that in order to access the devconsole, your user account must have been given Developer Console Administrator Access Rights by an Account Administrator. Otherwise you will see a message along the lines of "You do not have permission to view the developer console."
2. Open folder (containing package.json) with Visual Studio Code
3. In `src/app/config.ts` update the REDIRECT_URI and CLIENT_ID with the app client_id and redirect_uri as registered in step 1. You only need to update HOST_NAME if you are not using cloud production (laserfiche.com).
4. In VS Code, open a New Terminal window.
5. Run `npm install` in root folder. This command installs dependencies packages.
6. Run `ng build` in root folder. This command builds the project into `dist/` directory. See below for suggestions on how to host this folder.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Web Hosting

- This application should be hosted in a web server or CDN so that can be reached at URL: <https://myapp.example.com/lf-sample-app/>
- IMPORTANT security considerations: this application should not share HTTP origin (domain or subdomain) with other untrusted web pages to avoid leaking sensitive information such as Access Tokens via local store.
- On a Windows machine you can use IIS Service Manager and create a new web application or virtual directory to publish the `dist/` folder
- It is recommended to configure IIS website to use HTTPS and disable HTTP
- Browse to <https://myapp.example.com/lf-sample-app/> and sign-in

## Things to verify before creating a Pull Request

### Run tests

```sh
npm run test
```

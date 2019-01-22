# React webpack 4, styled components starter template

This is webpack 4 starter testing ES6 web components using babel version 7.

## NPM installation scripts

Just run `npm install` and all libs mentioned below will be installed.

```bash
  # 1. install webpack modules
  npm i -D webpack webpack-cli webpack-dev-server webpack-bundle-analyzer
  # 2. install other webpack util plugins
  npm i -D html-webpack-plugin url-loader file-loader copy-webpack-plugin uglifyjs-webpack-plugin clean-webpack-plugin
  # 3. install babel loaders - basics v7
  npm i -D babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators
  # 6. ESLint for react and styled components
  npm i -D eslint babel-eslint eslint-plugin-react
  # 7. install prettier for
  npm i -D prettier eslint-plugin-prettier
  # 8. babel polyfills (basic), fetch polyfil for ie11
  npm i -s @babel/polyfill whatwg-fetch
  # 9. testing with jest & enzyme incl. eslint plugin
  npm i -D jest eslint-plugin-jest enzyme enzyme-adapter-react-16

```

## NPM scripts

- `npm start:` start webpack in watch mode passing dev environment (--env=dev).
- `npm run dev:` start webpack-dev-server using dev environment (--env=dev)
- `npm run build:dev:` Build development version.
- `npm run build:` Build production version to dist folder. Note that previous build will be removed first.

## Webpack config scripts

Webpack configuration is stored in webpack folder. Initially 2 separate def files are created. Based on --env parameter passed on init one of the configuration files is loaded as webpack config module (see webpack.config.js)

- `dev:` this is development environment setup (webpack/dev.js)
- `prod:` this is production build setup (webpack/prod.js).

**Note! Configuration is not 'shared' between files. When updating, please adjust/update the properties in both files where needed.**

BTW: I have chosen here simpler approach with some code duplication above more complex setup (without code duplication).

## Folder Structure

- **`assets`**: all asset files used like original logo and other images etc. Excel template for creating json files is also here.
- **`dist`**: builds are here
- **`src`**: holds all react code to be processed by webpack. **All js/css files need to be inside `src` folder**, otherwise Webpack won’t see them.
  - **component**: holds shared/general react components used by multiple pages
  - **layout**: holds react components which define global page layout
  - **page**: holds react components that represent pages (uniek in design/composition)
  - **router**: holds defined routes, react router setup and main router component. This router component is then integrated into main/global layout component.
  - **store**: holds all redux files used to setup redux store including implementation of custom middleware functions.
  - **styles**: holds css (js possible too) files related to defining global styles, overrides, css variables etc.
  - **utils**: holds uitility function
- **static**: static files that will be included in the build
- **webpack**: webpack configuration file from react-scipts

## Git branches

- master: complete portions (should be) ready for use
- dev: development branch

## Setup gotcha's :-)

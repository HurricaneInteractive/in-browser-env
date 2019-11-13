# inBrowserEnv

> Uses this [repo](https://github.com/alexjoverm/typescript-library-starter.git) as a base.

inBrowserEnv is a way to check if a process is running in node or in the browser. This is useful when using frameworks like Nextjs or GatsbyJS.

## Usage

### Install

```bash
npm i in-browser-env --save
yarn add in-browser-env
```

### In Code

```js
import inBrowserEnv from "in-browser-env"

if (isBrowserEnv()) {
  // in a browser environment
}
```

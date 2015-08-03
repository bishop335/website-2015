# PHPConf Website 2015

Souce Code for PHPConf Taiwan 2015.

## Usage

```
$ npm install
$ npm start
```

open http://localhost:3000 in any browser.

You can defined other port via the follwoing command

```
$ PORT=3005 npm start
```

open http://localhost:3005 in your browser.

## Deploy

Before deploying to Github `gh-pages` branch, you can use the following example commands to generate static files.

```
$ NODE_ENV=production npm run build
$ npm run deploy
```

## Style Guide

Please refer the following JavaScript Style Guide.

* [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
* [Airbnb JavaScript Style Guide ES2015](https://github.com/airbnb/javascript)

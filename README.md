# node-babel-boilerplate

![npm](https://img.shields.io/npm/v/node-babel-boilerplate.svg) ![license](https://img.shields.io/npm/l/node-babel-boilerplate.svg) ![github-issues](https://img.shields.io/github/issues/revolunet/node-babel-boilerplate.svg) ![Circle CI build status](https://circleci.com/gh/revolunet/node-babel-boilerplate.svg?style=svg)

Simple node+babel+tape boilerplate

![nodei.co](https://nodei.co/npm/node-babel-boilerplate.png?downloads=true&downloadRank=true&stars=true)

## Features

 - [babel](http://babeljs.io) for ES6/ES7
 - compile to ES5 in `/dist`
 - [tape](https://github.com/substack/tape) unit testing with [zuul runner](https://github.com/defunctzombie/zuul)
 - use [node-readme](http://github.com/revolunet/node-readme)

## QuickStart

clone the repo and cleanup in a "myProject" folder

```sh
git clone  --depth=1 http://github.com/revolunet/node-babel-boilerplate myProject
cd myProject
# remove current project history
rm -rf ./.git
# init a new git repo
git init
# init npm dependencies
npm i
```

## Scripts

 - **npm run readme** : `node ./node_modules/node-readme/bin/node-readme.js`
 - **npm run test** : `./node_modules/babel-tape-runner/bin/babel-tape-runner spec/**/*.spec.js | ./node_modules/.bin/tap-spec`
 - **npm run zuul** : `./node_modules/zuul/bin/zuul -- spec/**/*.spec.js`
 - **npm run build** : `babel -d ./dist ./src`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[babel-eslint](https://www.npmjs.com/package/babel-eslint) | 3.1.23 | ✔
[babel-tape-runner](https://www.npmjs.com/package/babel-tape-runner) | 1.1.0 | ✔
[babelify](https://www.npmjs.com/package/babelify) | 6.1.2 | ✔
[es6-template-strings](https://www.npmjs.com/package/es6-template-strings) | 1.0.0 | ✔
[eslint](https://www.npmjs.com/package/eslint) | 0.24.1 | ✔
[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) | 0.0.6 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | 0.1.5 | ✔
[tap-spec](https://www.npmjs.com/package/tap-spec) | 4.0.2 | ✔
[tape](https://www.npmjs.com/package/tape) | 4.0.0 | ✔
[zuul](https://www.npmjs.com/package/zuul) | 3.2.0 | ✔


## Author

Julien Bouquillon <julien@bouquillon.com> http://github.com/revolunet

## License

 - **MIT** : https://spdx.org/licenses/MIT.html

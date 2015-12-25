# node-babel-boilerplate

![npm](https://img.shields.io/npm/v/node-babel-boilerplate.svg) ![license](https://img.shields.io/npm/l/node-babel-boilerplate.svg) ![github-issues](https://img.shields.io/github/issues/revolunet/node-babel-boilerplate.svg) ![Circle CI build status](https://circleci.com/gh/revolunet/node-babel-boilerplate.svg?style=svg)

Lightweight node + babel6 + tape boilerplate

![nodei.co](https://nodei.co/npm/node-babel-boilerplate.png?downloads=true&downloadRank=true&stars=true)

## Features

 - [babel](http://babeljs.io) for ES6/ES7
 - compile to ES5 in `/dist`
 - [tape](https://github.com/substack/tape) unit testing with [zuul runner](https://github.com/defunctzombie/zuul)
 - use [node-readme](http://github.com/revolunet/node-readme)

## QuickStart

Create a new a folder then

```sh
curl -fsSL https://github.com/revolunet/node-babel-boilerplate/archive/master.tar.gz | tar -xz --strip-components=1 node-babel-boilerplate-master
npm i 
git init
```

## Wokflow

- edit your code and commit
- run `npm run build`
- apply semver with `npm version major|minor|patch`
- `npm run publish` to push to github and npm

## Scripts

 - **npm run readme** : `node ./node_modules/.bin/node-readme`
 - **npm run test** : `./node_modules/.bin/babel-tape-runner ./spec/**/*.spec.js | ./node_modules/.bin/tap-spec`
 - **npm run zuul** : `./node_modules/.bin/zuul --local --open -- spec/**/*.spec.js`
 - **npm run build** : `npm run test && npm run readme && ./node_modules/.bin/babel -d ./dist ./src`
 - **npm run publish** : `git push && git push --tags && npm publish`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[babel-cli](https://www.npmjs.com/package/babel-cli) | ^6.3.17 | ✔
[babel-eslint](https://www.npmjs.com/package/babel-eslint) | * | ✔
[babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015) | * | ✔
[babel-tape-runner](https://www.npmjs.com/package/babel-tape-runner) | * | ✔
[babelify](https://www.npmjs.com/package/babelify) | 7.2.0 | ✔
[eslint](https://www.npmjs.com/package/eslint) | * | ✔
[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) | * | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.8 | ✔
[tap-spec](https://www.npmjs.com/package/tap-spec) | ^4.0.2 | ✔
[tape](https://www.npmjs.com/package/tape) | ^4.0.0 | ✔
[zuul](https://www.npmjs.com/package/zuul) | ^3.8.0 | ✔


## Author

Julien Bouquillon <julien@bouquillon.com> http://github.com/revolunet

## License

 - **MIT** : http://opensource.org/licenses/MIT

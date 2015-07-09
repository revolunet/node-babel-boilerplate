# node-babel-boilerplate ![npm](https://img.shields.io/npm/v/node-babel-boilerplate.svg) ![license](https://img.shields.io/npm/l/node-babel-boilerplate.svg) ![github-issues](https://img.shields.io/github/issues/revolunet/node-babel-boilerplate.svg)

Basic Node, Babel, Tape boilerplate

![nodei.co](https://nodei.co/npm/node-babel-boilerplate.png?downloads=true&downloadRank=true&stars=true)

## Features

 - babel for ES6/ES7
 - compile to ES5 in `/dist`
 - tape tests
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

 - **npm run readme** : `node ./node_modules/node-readme/.bin/node-readme.js`
 - **npm run test** : `./node_modules/babel-tape-runner/bin/babel-tape-runner spec/**/*.spec.js | ./node_modules/.bin/tap-spec`
 - **npm run build** : `babel -d ./dist ./src`


## Author

Julien Bouquillon <julien@bouquillon.com> http://github.com/revolunet

## License

 - **MIT** : https://spdx.org/licenses/MIT.html

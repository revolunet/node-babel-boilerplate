'use strict';

let test = require('tape');

import hello from '../src';

test("should work too", (t) => {

    let expected = 'hello, world';
    let result = hello('world');

    t.equal(result, expected, `${result} should equal ${expected}`);
    t.end();

});

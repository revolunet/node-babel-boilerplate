'use strict';

var test = require('tape');

test("should fail", (t) => {
	t.equal(1, 2);
	t.end();
});

test("should work", (t) => {
	t.equal(1, 1);
	t.end();
});

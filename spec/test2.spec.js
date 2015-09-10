'use strict';

var test = require('tape');

test("should NOT work", (t) => {
	t.equal(1, 2);
	t.end();
});

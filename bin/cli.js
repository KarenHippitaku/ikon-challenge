#!/usr/bin/env node
//^ This one up here, is an instance of a shebang line. Funny fact: Windows does not support shebang lines, it ignores them... but, they're still needed on the npm context. You NEED this line, if you want to invoke a Node.js source file directly, like CLI's based on Node.js source files as part of an npm package. So, here she is.

'use strict';

const ikon = require('../index'); //The module needed. If it fails, CHECK THE PATH (:
const givenPath = process.argv[2]; //
const idOne = process.argv[3]; //here you'll get the first id
const idTwo = process.argv[4]; //and here the second one

let ids = [idOne, idTwo];

// To do: Probably rewrite this file, I am not shure about it anymore xD

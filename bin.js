#!/usr/bin/env node

const getLocalesFromDir = require('./')

const dir = process.argv[2] || process.cwd()
const res = getLocalesFromDir(dir)

console.log(JSON.stringify(res, null, 2))

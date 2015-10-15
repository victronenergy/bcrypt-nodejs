#!/usr/bin/env node

var bcrypt = require("./bCrypt");

var setting = bcrypt.genSaltSyncFromString(8, "2c44fdb9f6c32c44fdb9f6c3")
var hash = bcrypt.hashSync("test", setting)

console.log(hash)



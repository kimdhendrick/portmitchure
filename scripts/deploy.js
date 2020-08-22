const sh = require('shelljs');
const upath = require('upath');

const destPath = upath.resolve(upath.dirname(__filename), '../dist');

sh.cp('CNAME', `${destPath}/CNAME`)

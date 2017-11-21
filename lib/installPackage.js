'use strict';

/**
 * @file install package
 * @author xudeming208@126.com
 */

var execFun = require('./execFun');
var config = require('./config');

// install package
var installPackage = function installPackage() {
  execFun(['cd mid', 'rm -rf tmp/*', 'cd nest', 'rm -rf node_modules', 'npm install'], 'install package', config);
};

module.exports = installPackage;
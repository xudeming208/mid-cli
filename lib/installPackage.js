'use strict';

/**
 * @file install package
 * @author xudeming208@126.com
 */

const execFun = require('./execFun');
const config = require('./config');

// install package
const installPackage = () => {
  execFun(['cd mid', 'rm -rf tmp/*', 'cd nest', 'rm -rf node_modules', 'npm install'], 'install package', config);
};

module.exports = installPackage;
//# sourceMappingURL=installPackage.js.map
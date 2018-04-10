'use strict';

/**
 * @file 框架配置
 * @author xudeming208@126.com
 */

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('colors');
const fs = require('fs');
const path = require('path');
const nodeopen = require('nodeopen');
const execFun = require('./execFun');
const ip = require('./getIp')();
const serverPort = 8083;
const jserverPort = 8084;

// config
const config = () => {
	let fileName = path.resolve('./mid/server/config/config.json');
	let content = require(fileName);
	// let serverPort = Math.random() * 1000 | 0 + 6000;
	// let jserverPort = serverPort + 1;
	// content.etc.serverPort = serverPort;
	// content.etc.jserverPort = jserverPort;
	content.site.staticHost = `http://${ip}:${jserverPort}`;

	/* eslint-disable arrow-parens */
	fs.writeFile(fileName, (0, _stringify2.default)(content, null, '\t'), 'utf-8', err => {
		/* eslint-enable arrow-parens */
		if (err) {
			console.dir(err);
		}
		// exec framework
		execFun(['cd mid', 'npm run start'], 'framework start', () => {
			/* eslint-disable quotes */
			console.log(`In the browser input`, `127.0.0.1:${serverPort}`.green.underline, `or`, `${ip}:${serverPort}`.green.underline, `, and then can see the pages.\n`);
			nodeopen(`http://${ip}:${serverPort}`, () => {
				console.log(`browser has opened!`);
			});
			/* eslint-enable quotes */
		});
	});
};

module.exports = config;
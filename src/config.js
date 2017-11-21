'use strict';

/**
 * @file 框架配置
 * @author xudeming208@126.com
 */

require('colors');
const fs = require('fs');
const path = require('path');
const nodeopen = require('nodeopen');
const execFun = require('./execFun');
const ip = require('./getIp')();

// config
const config = () => {
	let fileName = path.resolve('./mid/nest/config/config.json');
	let content = require(fileName);
	let serverPort = Math.random() * 1000 | 0 + 6000;
	let jserverPort = serverPort + 1;
	let staticHost = `http://${ip}:${jserverPort}`;
	content.etc.serverPort = serverPort;
	content.etc.jserverPort = jserverPort;
	content.site.staticHost = staticHost;

	/* eslint-disable arrow-parens */
	fs.writeFile(fileName, JSON.stringify(content, null, '\t'), 'utf-8', (err) => {
		/* eslint-enable arrow-parens */
		if (err) {
			console.dir(err);
		}
		// exec framework
		execFun(['cd mid/nest', 'npm run start'], 'framework start', () => {
			/* eslint-disable quotes */
			console.log(`In the browser input`, `127.0.0.1:${serverPort}`.green.underline, `or`,
				`${ip}:${serverPort}`.green.underline, `, and then can see the pages.\n`);
			nodeopen(`http://${ip}:${serverPort}`, () => {
				console.log(`browser has opened!`);
			});
			/* eslint-enable quotes */
		});
	});
};

module.exports = config;

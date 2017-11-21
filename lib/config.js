'use strict';

/**
 * @file 框架配置
 * @author xudeming208@126.com
 */

require('colors');
var fs = require('fs');
var path = require('path');
var nodeopen = require('nodeopen');
var execFun = require('./execFun');
var ip = require('./getIp')();

// config
var config = function config() {
	var fileName = path.resolve('./mid/nest/config/config.json');
	var content = require(fileName);
	var serverPort = Math.random() * 1000 | 0 + 6000;
	var jserverPort = serverPort + 1;
	var staticHost = 'http://' + ip + ':' + jserverPort;
	content.etc.serverPort = serverPort;
	content.etc.jserverPort = jserverPort;
	content.site.staticHost = staticHost;

	/* eslint-disable arrow-parens */
	fs.writeFile(fileName, JSON.stringify(content, null, '\t'), 'utf-8', function (err) {
		/* eslint-enable arrow-parens */
		if (err) {
			console.dir(err);
		}
		// exec framework
		execFun(['cd mid/nest', 'npm run start'], 'framework start', function () {
			/* eslint-disable quotes */
			console.log('In the browser input', ('127.0.0.1:' + serverPort).green.underline, 'or', (ip + ':' + serverPort).green.underline, ', and then can see the pages.\n');
			nodeopen('http://' + ip + ':' + serverPort, function () {
				console.log('browser has opened!');
			});
			/* eslint-enable quotes */
		});
	});
};

module.exports = config;
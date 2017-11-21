'use strict';

/**
 * @file 获取IP地址
 * @author xudeming208@126.com
 */

var getIp = function getIp() {
	var ifaces = require('os').networkInterfaces();
	var ret = [];
	/* eslint-disable guard-for-in */
	for (var dev in ifaces) {
		ifaces[dev].forEach(function (details) {
			if (details.family === 'IPv4' && !details.internal) {
				ret.push(details.address);
			}
		});
	}
	return ret.length ? ret[0] : '127.0.0.1';
};
module.exports = getIp;
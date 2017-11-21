'use strict';

/**
 * @file 获取IP地址
 * @author xudeming208@126.com
 */


const getIp = () => {
	let ifaces = require('os').networkInterfaces();
	let ret = [];
	/* eslint-disable guard-for-in */
	for (let dev in ifaces) {
		ifaces[dev].forEach(details => {
			if (details.family === 'IPv4' && !details.internal) {
				ret.push(details.address);
			}
		});
	}
	return ret.length ? ret[0] : '127.0.0.1';
};
module.exports = getIp;

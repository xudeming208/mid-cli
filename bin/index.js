#!/usr/bin/env node

if (parseFloat(process.versions.node) < 0.6) {
	return console.warn('Node 版本过低, 请升级至最新版本.');
}

require('../lib/init');
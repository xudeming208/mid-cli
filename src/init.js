'use strict';

/**
 * @file init
 * @author xudeming208@126.com
 */

const Commander = require('commander');
const CFonts = require('cfonts');
const pkg = require('../package.json');
const execFun = require('./execFun');
const installPackage = require('./installPackage');



// 没有参数的情况
if (!process.argv.slice(2).length) {
	// return Commander.help()
	console.log('请执行"mid-cli -h"查看帮助');
}


Commander.usage('<command> [options]');

// version
Commander.option('-v, -V, --version', 'output the version number', () => {
	console.log('\nversion: ' + pkg.version + '\n');

	CFonts.say('MID-CLI', {
		font: '3d',
		align: 'left',
		colors: ['white', 'black'],
		background: 'Black',
		letterSpacing: 1,
		lineHeight: 1,
		space: true,
		maxLength: '0'
	});
});

// init
Commander
	.command('init')
	.description('init project')
	.action(() => {
		execFun('git clone https://github.com/xudeming208/mid.git', 'git clone', installPackage);
	});

Commander.parse(process.argv);

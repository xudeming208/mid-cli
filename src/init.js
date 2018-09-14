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


Commander.usage('<command> [options]');

Commander.on('--help', function () {
	console.log('');
	console.log('');
	console.log('  Mid: https://github.com/xudeming208/mid\n');
	console.log('  Home: https://github.com/xudeming208/mid-cli\n');
});

// version
Commander.option('-v, -V, --version', 'output the version number', () => {
	console.log('\nversion: ' + pkg.version + '\n');

	CFonts.say('MID-CLI', {
		font: '3d',
		align: 'left',
		colors: ['white', 'black'],
		background: 'black',
		letterSpacing: 1,
		lineHeight: 1,
		space: true,
		maxLength: '0'
	});
});

// init
Commander
	.command('init')
	.description('Init Mid project.')
	.action(() => {
		execFun('git clone https://github.com/xudeming208/mid.git', 'git clone', installPackage);
	});

Commander.parse(process.argv);


// 没有参数的情况
if (!process.argv.slice(2).length) {
	Commander.help();
}

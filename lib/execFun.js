'use strict';

/**
 * @file 执行函数
 * @author xudeming208@126.com
 */

var exec = require('child_process').exec;

// execFun
var execFun = function execFun(todo, msg, cbk) {
	!Array.isArray(todo) && (todo = [todo]);
	var t = '';
	var progressFun = function progressFun() {
		process.stdout.write('\n"' + msg + '" starting\n wait.');
		t = setInterval(function () {
			process.stdout.write('.');
		}, 500);
	};
	progressFun();
	exec(todo.join(' && '), function (error, stdout, stderr) {
		if (error) {
			console.dir(error);
		}
		t && clearInterval(t);
		console.log('\n"' + msg + '" finised\n');
		cbk && typeof cbk === 'function' && cbk();
	});
};

module.exports = execFun;
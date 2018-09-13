'use strict';

/**
 * @file 执行函数
 * @author xudeming208@126.com
 */

const exec = require('child_process').exec;

// execFun
const execFun = (todo, msg, cbk) => {
	!Array.isArray(todo) && (todo = [todo]);
	let t = '';
	let progressFun = () => {
		process.stdout.write(`\n"${msg}" starting\n wait.`);
		t = setInterval(() => {
			process.stdout.write('.');
		}, 500);
	};
	progressFun();
	exec(todo.join(' && '), (error, stdout, stderr) => {
		if (error) {
			console.dir(error);
		}
		t && clearInterval(t);
		console.log(`\n"${msg}" finised\n`);
		cbk && typeof cbk === 'function' && cbk();
	});
};

module.exports = execFun;
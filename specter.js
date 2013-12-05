module.exports = function (params, next) {

	var that = this;
	var url = params.url;
	var selector = params.selector;
	var fn = params.fn;
	var childProcess = require('child_process');
	var exec = childProcess.exec;
	var path = [__dirname, 'fetch.js'].join('/');

	process.env['PARAMS'] = JSON.stringify({ 
		url: url,
		selector: selector,
		fn: fn
	}); 

	exec('phantomjs ' + path, function (error, stdout, stderr) {
		stdout = stdout.replace('\n', '');
		next(error, stdout);
	});
	
};

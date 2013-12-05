module.exports = function (params, next) {

  var that = this;
  var url = params.url;
  var wait = params.wait;
  var select = params.select;
  var childProcess = require('child_process');
  var exec = childProcess.exec;
  var path = [__dirname, 'fetch.js'].join('/');

  process.env['PARAMS'] = JSON.stringify({ 
    url: url,
    wait: wait,
    select: select
  }); 

  exec('phantomjs ' + path, {
   
     maxBuffer: 500*1024
  
  }, function (error, stdout, stderr) {

    stdout = stdout.replace('\n', '');
    next(error, stdout);

  });
  
};

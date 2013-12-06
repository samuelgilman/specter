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
   
     maxBuffer: (1024*10*10*10*10)
  
  }, function (error, stdout, stderr) {

    next(error, stdout);

  });
  
};

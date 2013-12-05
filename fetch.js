var webpage = require('webpage');
var page = webpage.create();
var system = require('system');
var env = system.env;
var params = JSON.parse(env.PARAMS);
var url = params.url;
var selector = params.selector;
var wait = (params.wait || 0);
var select = params.select;

page.open(url, function (status) {

  if (status !== 'success') {
    
    console.log('Could not open', url);
    phantom.exit();
  
  } else {

    if (select) {

      setInterval(function () {

        var result = page.evaluate(function (select) {
          return document.querySelector(select);
        }, select);

        if (result) {
          console.log(page.content);
          phantom.exit();
        }

      }, 500);

    }

    setTimeout(function () {

      console.log(page.content);
      phantom.exit();

    }, wait);
  
  }

});


var webpage = require('webpage');
var page = webpage.create();
var system = require('system');
var env = system.env;
var params = JSON.parse(env.PARAMS);
var url = params.url;
var selector = params.selector;
var fn = params.fn;

page.open(url, function (status) {

	if (status !== 'success') {
		
		console.log('Could not open', url);
		phantom.exit();
	
	} else {
		
		setTimeout(function () {
	
			var data = page.evaluate(function (selector, fn) {
				var query = document.querySelector(selector);
				if (query) {
					var result = query[fn];
				} else {
					var result = null;
				}
				return result;
			}, selector, fn);
	
			console.log(data);
			phantom.exit();
	
		},3000);
	
	}

});


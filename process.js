module.exports = {

	process: function (specters, next) {

		var that = this;
		var specter = require('./specter')

		that.specter = specter;
		that.processSpecter({
			index: 0,
			specters: specters
		}, next);

	},

	processSpecter: function (params, next) {

		var that = this;
		var specter = that.specter;
		var specters = params.specters;
		var index = params.index;
		var spec = specters[index];
			
		if (spec) {

			var url = spec.url;
			var select = spec.select;
			var get = spec.get;
		
			specter({
				
				url: url, 
				selector: select,
				fn: get
			
			}, function (err, data) {
			
				next(err, {
					specter: spec,
					data: data 
				});	
				
				that.processSpecter({
					index: (index + 1),
					specters: specters
				}, next);			
		
			});

		}

	}

};

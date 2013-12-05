module.exports = {

  process: function (urls, next) {

    var that = this;
    var specter = require('./specter')
    var $ = require('jquery');

    that.$ = $;    
    that.specter = specter;
    
    that.processUrl({
      index: 0,
      urls: urls 
    }, next);

  },

  processUrl: function (params, next) {

    var that = this;
    var $ = that.$;
    var specter = that.specter;
    var urls = params.urls;
    var index = params.index;
    var url = urls[index];
   
    if (url) {
    
      var address = url.address;
      var wait = url.wait;      
      var select = url.select;      
      console.log(select);

      specter({
        
        url: address,
        wait: wait,
        select: select
      
      }, function (err, data) {

        if (err) {
          next(err);  
        } else if (!data) {
          next(err); 
        } else {
          next(err, data, $(data));
        }
        
        that.processUrl({
          index: (index + 1),
          urls: urls
        }, next);     
    
      });

    }

  }

};

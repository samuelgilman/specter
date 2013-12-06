module.exports = {

  process: function (urls, next) {

    var that = this;
    var specter = require('./specter')

    that.specter = specter;
    
    that.processUrl({
      index: 0,
      urls: urls 
    }, next);

  },

  processUrl: function (params, next) {

    var that = this;
    var specter = that.specter;
    var urls = params.urls;
    var index = params.index;
    var url = urls[index];
   
    if (url) {
    
      var address = url.address;
      var wait = url.wait;      
      var select = url.select;      

      specter({
        
        url: address,
        wait: wait,
        select: select
      
      }, function (err, data) {

        next(err, data);
 
        that.processUrl({
          index: (index + 1),
          urls: urls
        }, next);     
    
      });

    }

  }

};

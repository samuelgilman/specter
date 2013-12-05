Specter 
===

Specter is a Node.js wrapper for PhantomJs. PhantomJS is a headless browser which enables developers to load webpages that rely on Javascript. Specter was made to easily access these dynamically and asynchronously created HTML pages using Node.js as a wraper for PhantomJS in the easiest manner.


Setup
---

1) Install [PhantomJS](http://phantomjs.org/release-1.1.html)

2) Install [Node.js](http://nodejs.org/)

3) Install Specter (npm install specter * coming soon...)

Examples
---

     var specter = require('specter');
     var urls = [];

     var address = 'https://www.coindega.com/api/0.0.0/#items'; // Required
     var select = '.items'; // document.querySelector('.items');

     // just get the page onload

     urls.push({
       address: address,
     });

     // wait 15 seconds to ensure all dynamic content has loaded

     urls.push({
       address: address,
       wait: 15000
     });

     // wait for a selector to load

     urls.push({
       address: address,
       select: '.items'
     });

     // wait for a selector to load with a timeout

     urls.push({
       address: address,
       select: '.itmes',
       wait: 10000
     });

     specter.process(urls, function (err, result, $) {

       if (err) {

         console.log(err);

       } else if (!$) {

         console.log('Nothing was returned')

       } else {

         var $el = $.find('.items');
         var html = $el.html();
         console.log(html);

       }

     });


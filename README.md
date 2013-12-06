# Specter (Node.js)
---
Specter is a Node.js wrapper for PhantomJS. PhantomJS is a headless browser which enables developers to load pages that rely on Javascript. Specter was made to easily access these dynamically and asynchronously created HTML pages using Node.js.


## Setup
---
1) Install [PhantomJS](http://phantomjs.org/release-1.1.html)

2) Install [Node.js](http://nodejs.org/)

3) Install Specter (npm install specter * coming soon...)

### 1) Return a page's HTML.
---

This returns the page when it has loaded. Generally this will not return any dynamic context, but it is a good start.

---
    var specter = require('specter');
    var urls = [];

    urls.push({
      address: 'https://www.coindega.com/api/0.0.0/#items'
    });

    specter.process(urls, function (err, html) {

      if (err) {
        console.log(err);
      } else if (!html) {
        console.log('nothing found')
      } else {
        console.log(html);
      }

    });

### 2) Wait for a selector to be present before returning.
---

By providing select Specter will wait for until document.querySelect('.your .item') to return a value. Once it returns a value the entire html document will be returned.

---
    var specter = require('specter');
    var urls = [];

    urls.push({
      address: 'https://www.coindega.com/api/0.0.0/#items',
      select: '.items .title'
    });

    specter.process(urls, function (err, html) {

      if (err) {
        console.log(err);
      } else if (!html) {
        console.log('nothing found')
      } else {
        console.log(html);
      }

    });


### 3) Wait for a selector to be present with a timeout.
---

This does the same thing 

---
    var specter = require('specter');
    var urls = [];

    urls.push({
      address: 'https://www.coindega.com/api/0.0.0/#items',
      select: '.items .title',
      wait: (10 * 1000) // return after 10 seconds if nothing found
    });

    specter.process(urls, function (err, html) {

      if (err) {
        console.log(err);
      } else if (!html) {
        console.log('nothing found')
      } else {
        console.log(html);
      }

    });

### 4) With jQuery.
---

Specter has no dependencies so the response is just a string; howerver, it is trivial to add jQuery.

---
    var jquery = require('jquery');
    var specter = require('specter');
    var urls = [];

    urls.push({
      address: 'https://www.coindega.com/api/0.0.0/#items',
      select: '.items .title',
      wait: (10 * 1000) // return after 10 seconds if nothing found
    });

    specter.process(urls, function (err, html) {

      if (err) {
        console.log(err);
      } else if (!html) {
        console.log('nothing found')
      } else {
        var $ = jquery(html);
        var $el = $.find('.items .title');
        var $first = $el.first();
        var text = $first.text();
        console.log(text);
      }

    });


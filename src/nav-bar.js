'use strict';

var create = function(options) {
  var $el = options.$el;

  $el.html(Handlebars.templates['nav-bar'](options));

  if (options.rightCallback) {
    $el.find('.right-button').click(options.rightCallback);
  }
};

module.exports = {
  create: create
};

require.config({
  baseUrl: 'js',
  //define key lib locations
  paths: {
    jquery: 'vendor/jquery/2_1_0',
    bootstrap: 'vendor/bootstrap/bootstrap.min',
    can: "vendor/canjs/2.0.7/amd.build/can",
    moment: 'vendor/moment/moment',
    domReady: 'vendor/requirejs/domReady'
  },
  shim: {
    'can': ['jquery'],
    'bootstrap': ['jquery']
  }
});

define('jquery-nc', ['jquery'], function($){
  return $.noConflict(true);  // requirejs will cache the returned value
});

require(['jquery', 'modules/timer'], function($, timer) {
  $.each($('.js-timer'), function(i, el) {
    new timer(el,{id: i});
  });
});
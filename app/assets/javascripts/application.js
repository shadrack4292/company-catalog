//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var ready = function() {
  nav_height();
}

var nav_height = function() {
  $('.nav').height($(window).height());
}

$(document).ready(ready);
$(document).on('page:load', ready);

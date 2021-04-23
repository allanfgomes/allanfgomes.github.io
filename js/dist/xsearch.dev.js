"use strict";

$(document).ready(function () {
  $("#mys1").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#mys1table tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
$(document).ready(function () {
  $("#mys2").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#mys2table tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
(function() {
  var js;

  js = ["/js/vendor/jquery.min.js", "/js/vendor/waypoint.min.js"];

  require(js, function() {
    return $(function() {
      var area;
      area = window.location.pathname.match(/\/(.+)\//);
      if (area) {
        return $("header nav ." + area[1] + " a").addClass("active");
      }
    });
  });

}).call(this);

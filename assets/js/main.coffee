# Add scripts to load to this array. These can be loaded remotely like jquery
# is below, or can use file paths, like 'vendor/underscore'
js = [
  # "http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js",
  "/js/vendor/jquery.min.js",
  "/js/vendor/waypoint.min.js"
]

# this will fire once the required scripts have been loaded
require js, ->
  $ ->
    #
    # Set currently active main nav item
    # FIXME hacky as hell
    # (latest roots with path variable now released)
    #

    area = window.location.pathname.match(/\/(.+)\//)
    $("header nav .#{area[1]} a").addClass("active") if area

    #
    # Fix nav menu position when scrolling down
    #

    scrollfix = $("nav.fixed").data('scrolltop')
    nav = $("nav.fixed > ul")
    padding = 20

    if $(window).scrollTop() > scrollfix
      nav.css top: padding

    $(window).on "scroll", ->
      if $(window).scrollTop() > scrollfix
        nav.css top: padding
      else
        nav.css top: scrollfix - $(window).scrollTop()

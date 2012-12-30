#= require "_helper"

# Add scripts to load to this array. These can be loaded remotely like jquery
# is below, or can use file paths, like 'vendor/underscore'
js = ["http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"]

# this will fire once the required scripts have been loaded
require js, ->
  $ ->
    # FIXME hacky as hell
    area = window.location.pathname.match(/\/(.+)\./)
    $("header nav .#{area[1]} a").addClass("active") if area

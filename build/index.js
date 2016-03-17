
require("./clean");
require("./build");
require("./watch");
require("./test");
require("./example");

var gulp = require("gulp"), 
    sequence = require("run-sequence");
    
gulp.task("default", function() {
  return sequence("clean", "build", "watch");
});

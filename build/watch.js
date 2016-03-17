var gulp = require("gulp"),
    config = require("./config"),
    build = require("./build").build,
    
    watch = require("gulp-watch");

gulp.task("watch", function() {
  return watch(config.globs.src, function(file) {
    if(file.event === "unlink") return;
    build(file.path);
  });
});

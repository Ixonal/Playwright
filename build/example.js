var gulp = require("gulp"),
    config = require("./config"),
    
    plumber = require("gulp-plumber"),
    debug = require("gulp-debug"),
    typescript = require("gulp-typescript"),
    uglify = require("gulp-uglify"),
    webserver = require("gulp-webserver"),
    watch = require("gulp-watch"),
    
    sequence = require("run-sequence");

function buildExample(globs) {
  return gulp.src(globs)
             .pipe(plumber())
             .pipe(debug({ title: "Building Example" }))
             .pipe(typescript(config.settings.typescript))
             .pipe(uglify(config.settings.uglify))
             .pipe(gulp.dest(config.locations.exampleDist));
}

gulp.task("build-example", function() {
  return buildExample(config.globs.example);
});

gulp.task("watch-example", function() {
  watch(config.globs.example, function(file) {
    if(file.event === "unlink") return;
    buildExample(file.path);
  });
});

gulp.task("example", ["build-example"], function() {
  return sequence("build-example", "watch-example", function() {
    return gulp.src(config.locations.webserverRoot)
               .pipe(webserver(config.settings.webserver));
  });
});

var gulp = require("gulp"),
    config = require("./config"),
    
    typescript = require("gulp-typescript"),
    plumber = require("gulp-plumber"),
    debug = require("gulp-debug"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    sourcemaps = require("gulp-sourcemaps"),
    
    merge = require("merge2");

function build(globs) {
  var tsResult = gulp.src(globs)
                     .pipe(plumber())
                     .pipe(debug({ title: "Building" }))
                     .pipe(sourcemaps.init())
                     .pipe(typescript(config.settings.typescript));
                     
  return merge([
    tsResult.dts.pipe(gulp.dest(config.locations.dts)),
    tsResult.js.pipe(uglify(config.settings.uglify))
               .pipe(sourcemaps.write("."))
               .pipe(gulp.dest(config.locations.dist))
  ]);
}

gulp.task("build", function() {
  return build(config.globs.src);
});

exports.build = build;

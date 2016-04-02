var gulp = require('gulp'),
    concat = require('gulp-concat'), //alternative to requirejs, browserify
    sourcemaps = require('gulp-sourcemaps'), //for debugging in dev
    uglify = require('gulp-uglify'), //minification for prod
    KarmaServer = require('karma').Server,
    ngAnnotate = require('gulp-ng-annotate')



gulp.task('buildDevJS', function(){
  return gulp.src(['./ui/js/app.js', './ui/js/**/*.js'])
      .pipe(sourcemaps.init())
      .pipe(concat('main.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./public/javascripts'))
})

gulp.task('buildProdJS', function(){
  return gulp.src(['./ui/js/app.js', './ui/js/**/*.js'])
      .pipe(concat('main.js'))
      .pipe(ngAnnotate()) // annotates code to allow for testing before minification
      .pipe(uglify())
      .pipe(gulp.dest('./public/javascripts'))
})

//don't forget to buildDevJS before testing, can pipe later together
gulp.task('testUI', function (done) {
  new KarmaServer({
    configFile: __dirname + '/ui/karma.conf.js',
    singleRun: true
  }, done).start();
});


//TODO: We can do testing on Firefox and not Chrome bc travis doesn't support it
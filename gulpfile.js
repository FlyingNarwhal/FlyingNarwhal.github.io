// minify html, css, js
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin'); // task dist
var cssmin = require('gulp-cssmin'); // task dist
var rename = require('gulp-rename'); 
var uglify = require('gulp-uglify'); // task dist
var responsive = require('gulp-responsive-images'); //task picture
var browserSync = require('browser-sync').create(); //task serve

// production gulp task
gulp.task('dist', function(){
  // Minify css, and move to production
  gulp.src('dev/styles/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('dist/styles'));
  // Move index html to production
  gulp.src('dev/*.html')
    .pipe(gulp.dest('dist'));
  //Move html in views to production 
  gulp.src('dev/**/*.html')
    .pipe(gulp.dest('dist/views'));
  // Minify JS, and move to production
  gulp.src('dev/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
  // move images to production, make sure, gulp picture has been run first
  gulp.src('dev/images/*.{jpg, png}')
    .pipe(gulp.dest('dist/images'));
  // move python scripts to production
  gulp.src('dev/cgi-bin/*.py')
    .pipe(gulp.dest('dist/cgi-bin'));
})

// Create responsive images, keep in development
gulp.task('picture', function(){
  gulp.src('dev/images/**/*')
    .pipe(responsive({
      'background.jpg': [{
        width: 2000,
        suffix: '-2000'
      },{
        width: 1000,
        suffix: '-1000'
      }, {
        width: 500,
        suffix: '-500',
      }],
        'profile.jpg': [{
        width: 200,
        suffix: '-200'
      }]
    }))
  .pipe(gulp.dest('dev/images'));
});

// browsersync stuff, yo
gulp.task('serve', function(){
  browserSync.init({
    server: "dev/",
    port: 3030
  });

  gulp.watch(['dev/index.html', 'dev/js/**/*.js', 'dev/styles/*.css', 'dev/views/*.html']).on('change', browserSync.reload);
});
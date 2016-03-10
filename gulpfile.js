

// minify html, css, js
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
// var cssmin = require('gulp-cssmin');
// var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
 
gulp.task('minify', function () {
    // gulp.src('src/**/*.css')
    //     .pipe(cssmin())
    //     .pipe(rename({suffix: '.min'}))
    //     .pipe(gulp.dest('dist'));
    gulp.src('app/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
    gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

var responsive = require('gulp-responsive-images');

gulp.task('picture', function(){
    gulp.src('app/images/**/*')
        .pipe(responsive({
            'background.jpg': [{
                width: 2000,
                suffix: '-2000'
            }, {
                width: 600,
                suffix: '-600',
                crop: true
            }],
            'profile.jpg': [{
                width: 200,
                suffix: '-200'
            }]
        }))
        .pipe(gulp.dest('app/images'));
});

var browserSync = require('browser-sync').create();

gulp.task('serve', function(){
    browserSync.init({
        server: "./",
        port: 3030
    });

    gulp.watch("**/*").on('change', browserSync.reload);
});


//github pages
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
 
gulp.task('deploy', function() {
  return gulp.src('./app/**/*')
    .pipe(ghPages());
});
// minify html, css, js
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin'); // task dist
var cssmin = require('gulp-cssmin'); // task dist
var rename = require('gulp-rename'); 
var uglify = require('gulp-uglify'); // task dist
var responsive = require('gulp-responsive-images'); //task picture
var browserSync = require('browser-sync').create(); //task serve

gulp.task('dist', function(){
    gulp.src('dev/styles/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/styles'));
    // gulp.src('dev/**/*.html')
    //     .pipe(htmlmin({collapseWhitespace: true}))
    //     .pipe(gulp.dest('dist'));
    gulp.src('dev/js/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js'));
})

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

gulp.task('serve', function(){
    browserSync.init({
        server: "dev/",
        port: 3030
    });

    gulp.watch(['dev/index.html', 'dev/js/**/*.js', 'dev/styles/*.css', 'dev/views/*.html']).on('change', browserSync.reload);
});
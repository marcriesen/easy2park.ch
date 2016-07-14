////////////////////////////////////////////////////////
// main prerequisite
////////////////////////////////////////////////////////

var gulp = require('gulp');

////////////////////////////////////////////////////////
// other prerequisites

var sass = require('gulp-sass'),
    ugly = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    minify = require('gulp-cssnano'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    del = require('del');

////////////////////////////////////////////////////////
// define tasks
////////////////////////////////////////////////////////

gulp.task( 'sass', function() {
    return gulp.src('app/styles/**/*.scss')
        .pipe(plumber())
        .pipe(sass()
            .on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minify({compatibility: 'ie9'}))
        .pipe(autoprefixer({
            browsers:['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css/'))
        .pipe(reload({stream: true}));
});

gulp.task('js', function() {
    return gulp.src('app/scripts/**/*.js')
        .pipe(plumber())
        .pipe(concat('js.js'))
        .pipe(ugly())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/js/'))
        .pipe(reload({stream: true}));

});

gulp.task('jquery', function() {
    return gulp.src('bower_components/jquery/dist/jquery.js')
        .pipe(plumber())
        .pipe(concat('jquery.js'))
        .pipe(ugly())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/js/'))
        .pipe(reload({stream: true}));
});

gulp.task('html', function() {
    return gulp.src('app/**/*.html')
        .pipe(reload({stream: true}));
});

////////////////////////////////////////////////////////
// browser task
////////////////////////////////////////////////////////

// watch app folder
gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: './app',
            open: true,
            notify: true
        },
        port: 4000,
        ui: {
            port: 4001
        }
    });
});

// watch build folder
gulp.task('build:serve', function(){
    browserSync.init({
        server: {
            baseDir: './dist',
            open: true,
            notify: false
        },
        port: 4010,
        ui: {
            port: 4011
        }
    });
});

////////////////////////////////////////////////////////
// build tasks
////////////////////////////////////////////////////////

gulp.task('build:copy', function(){
    return gulp.src('app/**/*')
        .pipe(gulp.dest('dist/'))
});

gulp.task('build:remove', ['build:copy'], function() {
    del([
        'dist/styles',
        'dist/css/!(*.min.css)',
        'dist/scripts',
        'dist/js/!(*.min.js)'
    ])
});

////////////////////////////////////////////////////////
// set default build task
////////////////////////////////////////////////////////

gulp.task('build', ['build:copy', 'build:remove', 'build:serve']);

////////////////////////////////////////////////////////
// watch task
////////////////////////////////////////////////////////

gulp.task('watch', function(){

    // watch and compile scss/css
    gulp.watch('app/styles/**/*.scss', ['sass']);

    // watch and compile js
    gulp.watch('app/scripts/**/*.js', ['js']);

    // watch html
    gulp.watch('app/**/*.html', ['html']);

});

////////////////////////////////////////////////////////
// set default task
////////////////////////////////////////////////////////

gulp.task('default', ['sass', 'js', 'jquery', 'html', 'watch', 'browser-sync'] );


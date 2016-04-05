var gulp = require('gulp');

var fs = require('fs');
var babelify = require('babelify');
var browserify = require('browserify');

var pleeease = require('gulp-pleeease');
var less = require('gulp-less');
var gutil = require('gulp-util');

var settings = {
    less: {
        paths: ['./source/less/includes']
    },
    pleeease: {
        autoprefixer: {
            browsers: ["last 4 versions", "ios 6"]
        },
        filters: {
            oldIE: true
        },
        out: 'style.css'
    }
};

gulp.task('styles', function() {
    return gulp.src('./source/less/main.less') //Just compile from main, manage imports there
        .pipe(less(settings.less))
        .pipe(pleeease(settings.pleeease))
        .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('scripts', function() {
    var bundler = browserify('./source/js/app.js');
    bundler.transform(babelify);

    bundler.bundle().on('error', function(error) {console.error(error)})
        .pipe(fs.createWriteStream('./public/javascripts/bundle.js'))
});

gulp.task('watch', function() {
    gulp.watch(['./source/less/**/*', './source/less/**', './source/js/**'], ['styles', 'scripts']);
});

gulp.task('default', ['watch'], function() {
    return gutil.log('Gulp default is running');
});
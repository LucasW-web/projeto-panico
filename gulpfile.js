const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/styles'));
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/scripts'));
}

function watch() {
    gulp.watch('./src/styles/**/*.scss', styles);
    gulp.watch('./src/scripts/**/*.js', scripts);
}

exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.default = gulp.parallel(styles, scripts);
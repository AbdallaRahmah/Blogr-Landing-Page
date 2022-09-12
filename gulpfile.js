const gulp = require('gulp');
const minhtml = require('gulp-minify-html');
const sass = require('gulp-sass')(require('sass'));
const autoprefix = require('gulp-autoprefixer');
const mincss = require('gulp-clean-css');
const minjs = require('gulp-terser');

function html() {
    return gulp.src('src/*.html')
        .pipe(minhtml())
        .pipe(gulp.dest('dist/'))
}

function styles() {
    return gulp.src('src/styles/*.scss')
        .pipe(sass())
        .pipe(autoprefix())
        .pipe(mincss())
        .pipe(gulp.dest('dist/'))
}

function scripts() {
    return gulp.src('src/scripts/*.js')
        .pipe(minjs())
        .pipe(gulp.dest('dist/'))
}

function watchTask() {
    gulp.watch('src/*.html', html);
    gulp.watch('src/styles/**/*.scss', styles);
    gulp.watch('src/scripts/*.js', scripts);
}

exports.default = gulp.series(
    html,
    styles,
    scripts,
    watchTask
)
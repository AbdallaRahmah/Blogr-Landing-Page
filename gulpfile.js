const { src, dest, watch, series } = require('gulp');
const minhtml = require('gulp-minify-html');
const sass = require('gulp-sass')(require('sass'));
const autoprefix = require('gulp-autoprefixer');
const mincss = require('gulp-clean-css');
const minjs = require('gulp-terser');

function html() {
    return src('src/*.html')
        .pipe(minhtml())
        .pipe(dest('dist/'))
}

function styles() {
    return src('src/styles/*.scss')
        .pipe(sass())
        .pipe(autoprefix())
        .pipe(mincss())
        .pipe(dest('dist/'))
}

function scripts() {
    return src('src/scripts/*.js')
        .pipe(minjs())
        .pipe(dest('dist/'))
}

function img() {
    return src('src/images/*.{png,jpg}')
        .pipe(dest('dist/images/'))
}

function watchTask() {
    watch('src/*.html', html);
    watch('src/styles/**/*.scss', styles);
    watch('src/scripts/*.js', scripts);
    watch('src/images/*.{jpg,png}', img)
}

exports.default = series(
    html,
    styles,
    scripts,
    img,
    watchTask
)
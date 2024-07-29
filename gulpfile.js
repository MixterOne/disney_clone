const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' })) // o estilo de saída src será comprimido
        .pipe(gulp.dest('./dist/css')); // envia os arquvis css ja comprimidos 
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin()) // o estilo de saída src será comprimido
        .pipe(gulp.dest('./dist/images')); // envia os arquvis css ja comprimidos 
}


exports.default = gulp.parallel(styles, images);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}
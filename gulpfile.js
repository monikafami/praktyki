// var gulp = require('gulp-v3')
// var browserSync = require('browser-sync')
// var sass = require('gulp-sass');

// gulp.task('reload', function () {
//     browserSync.reload();
// })
// gulp.task('serve', ['sass'], function () {
//     browserSync({
//         server: 'src'
//     });
//     gulp.watch('src/*.html', ['reload'])
//     gulp.watch('src/scss/**/*.scss', ['sass'])

// })
// gulp.task('sass', function () {
//     return gulp.src('src/scss/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('css'))
//         .pipe(browserSync.stream())
// })
// gulp.task('default', ['serve'])


// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var browserSync = require('browser-sync').create()
// gulp.task('sass', function () {
//     return gulp.src('app/scss/**/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('app/css'));
// });
// gulp.task('watch', function () {
//     gulp.watch('app/scss/**/*.scss', ['sass']);
// });



var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require('browser-sync').create();

function style() {
    return (
        gulp
        .src("app/scss/**/*.scss")
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream())

    );


}

function reload() {
    browserSync.reload();
}

function watch() {
    style()

    // browserSync.init({
    //     server: {
    //         src: "app"
    //     }
    // });
    gulp.watch("app/scss/**/*.scss", style);
    gulp.watch("app/*.html", reload);

}

exports.watch = watch;
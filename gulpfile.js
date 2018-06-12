const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const ghPages = require('gulp-gh-pages')

gulp.task('sass', () => {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./public/css'))
})

gulp.task('sass:watch', () => {
  gulp.watch('./scss/**/*.scss', ['sass'])
})

gulp.task('deploy', () => {
  return gulp.src('./public/**/*').pipe(ghPages())
})

gulp.task('default', ['sass', 'sass:watch'])
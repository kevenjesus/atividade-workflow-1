var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var minifycss = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

gulp.task('minificarCss', function() {
	return sass('./source/scss/**/*.scss')
			.pipe(minifycss())
   			.pipe(gulp.dest('./dist/css'));
});

gulp.task('minificarHtml', function() {
	return gulp.src('./source/**/*.html')
			.pipe(htmlmin({collapseWhitespace: true}))
			.pipe(gulp.dest('dist'));
});

gulp.task('background', function() {
	gulp.watch('./source/scss/**/*.scss', ['minificarCss']);
	gulp.watch('./source/**/*.html', ['minificarHtml']);
});
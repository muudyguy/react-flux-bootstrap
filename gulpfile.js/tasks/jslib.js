var gulp = require('gulp');

gulp.task('jslib', function() {
	gulp.src('./src/js/lib/**/*.js')
  		.pipe(gulp.dest('./build/js/lib'));
});
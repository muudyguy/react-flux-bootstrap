var gulp = require('gulp');

gulp.task('csslib', function() {
	gulp.src('./src/css/lib/**/*.css')
  		.pipe(gulp.dest('./build/css/lib'));
});
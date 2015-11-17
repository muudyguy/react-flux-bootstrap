var gulp = require('gulp');

gulp.task('move-html', function() {
	gulp.src('./src/index.html')
		.pipe(gulp.dest('./build'));
});

gulp.task('build-dev', ['browserify', 'sass-dev', 'move-html'], function() {});
var gulp = require('gulp');
var reactify = require('reactify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');


gulp.task('browserify', function() {
	var bundler = browserify({
		entries: ['./src/js/entry.js'],
		transform: [reactify],
		debug: true,
		cache: {}, packageCache: {}, fullPaths: true
	});

	bundler.bundle()
			.pipe(source('app.js'))
			.pipe(gulp.dest('./build/js'));
});


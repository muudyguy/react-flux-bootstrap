var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var gulpSass = require('gulp-sass');

gulp.task('dev', ['build-dev', 'js-watch', 'sass-watch'], function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

var paths = {
  sass: ['./src/css/**/*.scss'],
  js: ['./src/js/**/*.js'],
  jsx: ['./src/js/**/*.jsx'],
  html: ['./src/index.html']
};

gulp.task('js-watch', ['jslib'], function() {
  gulp.watch(paths.js, ['browserify', 'move-html'], function() {
  	browserSync.reload();
  });
  gulp.watch(paths.jsx, ['browserify'], function() {
  	browserSync.reload();
  });
  
});

gulp.task('sass-watch', function() {
  gulp.watch(paths.sass, ['sass-dev']);
});


gulp.task('html-watch', function() {
  gulp.watch(paths.html, [move-html]);
});


gulp.task('sass-dev', ['csslib'], function() {
	return gulp.src('./src/css/sass/app.scss')
		.pipe(gulpSass({
        
      	}))
      	.pipe(gulp.dest('./build/css'))
      	.pipe(browserSync.stream());
});

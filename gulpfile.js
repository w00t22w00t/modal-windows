const gulp = require('gulp'),
	  browserSync = require('browser-sync');

gulp.task('reload', function(){
	return gulp.src(['app/js/script.js', 'app/css/style.css', 'app/index.html'])
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browserSync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	})
});

gulp.task('watch', function(){
	gulp.watch(['app/js/script.js', 'app/css/style.css', 'app/index.html'], gulp.parallel('reload'));
});
gulp.task('default', gulp.parallel('browserSync', 'reload', 'watch'));
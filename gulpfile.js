var gulp = require('gulp');
gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.sass') // Берем все sass файлы из папки sass и дочерних, если таковые будут
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
});
gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
});

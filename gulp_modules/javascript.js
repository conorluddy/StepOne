'use strict';

var
todo		= require('gulp-todo');


//Export this back to the main gulpfile
module.exports = function( gulp, paths ){

	//CSS || SASS
	gulp.task('javascript', function () {

		return gulp.src( paths.dev.JS )

			//Generate todo.md from comments
			.pipe(todo())

	});

};
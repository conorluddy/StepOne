'use strict';




var mocha = require('gulp-mocha');



//Export this back to the main gulpfile
module.exports = function( gulp, paths ){

	//Mocha testing
	gulp.task('test', function () {

		return gulp.src( paths.test.main , {read: false})

			.pipe( mocha({reporter: 'doc'}) );

	});

};



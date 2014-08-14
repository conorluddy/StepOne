'use strict';


var clean = require('gulp-clean');//Clean out directories



//Export this back to the main gulpfile
module.exports = function( gulp, paths ){



	//	
	//	Empty the public CSS folder
	//	
	gulp.task('clean-css', function () {

	    return gulp.src( paths.dist.CSS, {read: false} )
	    	.pipe(clean());

	});

	//	
	//	Empty the public JS folder
	//	
	gulp.task('clean-js', function () {

	    return gulp.src( paths.dist.JS, {read: false} )
	    	.pipe(clean());

	});

	//
	//	Remove all public HTML
	//	
	gulp.task('clean-html', function () {

	    return gulp.src( paths.dist.HTML, {read: false} )
	    	.pipe(clean());

	});

	//
	//	Shred focking everything
	//
	gulp.task('clean-dist', function () {

	    return gulp.src( paths.dist.DIST_FILES, {read: false} )
	    	.pipe(clean());

	});


};
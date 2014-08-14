'use strict';


var 
rename		= require('gulp-rename');


//TODO
//image optimisation
//sprite generation
//caching



//Export this back to the main gulpfile
module.exports = function( gulp, paths ){

	//Build the HTML
	gulp.task('images', function () {

	    return gulp.src( paths.dev.IMG )

			.pipe( gulp.dest( paths.dist.IMG ) );
			

	});

};

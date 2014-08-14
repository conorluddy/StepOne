'use strict';


var 
swig 		= require('gulp-swig'),
rename	= require('gulp-rename'),
htmlhint	= require('gulp-htmlhint'),
htmlpretty	= require('gulp-prettify');



//Swig options
var options = {
	defaults: { 
		cache: false, //we're not using this as a server, so caching just gets in the way :)
		locals: { 
			site_name: "Liberty" 
		}
	}
};


//Export this back to the main gulpfile
module.exports = function( gulp, paths ){

	//Build the HTML
	gulp.task('templates', function () {

		return gulp.src( paths.dev.SWIG )

			.pipe( swig( options ) )

			.pipe( htmlpretty({
				max_preserve_newlines: 1, 
				indent_char: ' ', 
				indent_size: 2, 
				brace_style: 'collapse',
				indent_scripts  : 'keep'
			}))

			.pipe( htmlhint() )

			.pipe( htmlhint.reporter() )

			.pipe( rename( { extname: ".htm" } ) )

			.pipe( gulp.dest( paths.dist.DIST ) );			

	});

};

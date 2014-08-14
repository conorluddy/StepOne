"use strict"


//Versioning - gets written in filenames and updated in package/bower JSON files
var version = '0.0.1';



//General variables
var 
gulp 		= require('gulp'),
pkg 		= require('./package.json');

//Plugins
var
bump		= require('gulp-bump'),//version numbering
notify		= require('gulp-notify');//Pop up notifications

//Paths
var paths = {
	dev: {
		SASS: 	['./SASS/**/*.scss'],
		TPL:	['./HTML/**/*.tpl'],//This is for Watch - track everything
		SWIG:	['./HTML/**/*.tpl', '!./HTML/_*/**/', '!./HTML/_*/**/*.tpl'],//This is for compiling - ignore underscored files
		JS:		['./JS'],
		IMG: 	['./assets/images/**/*.*'],
		FONTS: 	['./assets/fonts/**/*.eot','./assets/fonts/**/*.svg','./assets/fonts/**/*.ttf','./assets/fonts/**/*.woff']
	},
	//For saving files this needs to be a string, not an array, to work with gulp.dest
	dist: {
		CSS:	'./public/css',
		KSS:	'./public/styleguide',
		JS:		'./public/js',
		IMG:	'./public/images',
		HTML:	'./public/**/*.htm*',
		FONTS:	'./public/css/fonts',
		DIST:	'./public',
		DIST_FILES: ['./public/**/*.*','./public/**/']//files and folders
	},
	test: {
		main:		'./test/test.mocha.js'
	}
};









////////////////////////////////////////////////////////////////////////////////////

//Get the other Gulp files
	
//Clean/purge
require('./gulp_modules/clean.js')( gulp, paths );

//Templates (Swig)
require('./gulp_modules/templates.js')( gulp, paths, version );

//CSS | SASS 
require('./gulp_modules/css.js')( gulp, paths, version );

//JS
require('./gulp_modules/javascript.js')( gulp, paths, version );

//Images
require('./gulp_modules/images.js')( gulp, paths );

//Mocha testing
require('./gulp_modules/test.js')( gulp, paths );

//Express server - TODO - fix
require('./gulp_modules/express.js')( gulp );

//Watch
require('./gulp_modules/watch.js')( gulp, paths );







////////////////////////////////////////////////////////////////////////////////////

//Default Task when you run 'gulp' cmd
gulp.task('default', function () {

	gulp.start('bump');
	
	gulp.start('clean-dist');

	//Wait for cleanup
	setTimeout(function(){
		
		gulp.start('images');
		gulp.start('fonts');
		gulp.start('templates');
		gulp.start('sass');//css.js
		// gulp.start('styleguide');//css.js

		gulp.start('watch');

	}, 200);

});







////////////////////////////////////////////////////////////////////////////////////

//Update our json files and package to the version set up at the top of this file
//(or use one of the bump types to increment each time we Gulp for production?...)

gulp.task('bump', function(){

	gulp.src('./*.json')

		.pipe(bump({version: version}))

		.pipe(gulp.dest('./'));

		// .pipe(bump({type:'patch'}))
		// .pipe(bump({type:'minor'}))
		// .pipe(bump({type:'major'}))
});







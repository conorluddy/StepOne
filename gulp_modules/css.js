'use strict';


var 
sass 		= require('gulp-sass'),
neat 		= require('node-neat').includePaths,
autoprefix 	= require('gulp-autoprefixer'),
minifyCSS	= require('gulp-minify-css'),
rename	= require('gulp-rename'),
gulpkss	= require('gulp-kss');




//Export this back to the main gulpfile
module.exports = function( gulp, paths, version ){

	//Store the original name so we can restore it
	var originalFilename = '';

	//CSS || SASS
	gulp.task('sass', function () {

		return gulp.src( paths.dev.SASS )
			
			//SASS
			.pipe( sass({ includePaths: ['styles'].concat( neat ) }))

			//AutoPrefix
			.pipe( autoprefix( 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ))



			//Add the package version number for archiving
			// .pipe( rename(function (path) {
			// 	originalFilename = path.basename;
			// 	path.basename += version;
			// }))

			//Save this version in the archive (doesn't get cleaned out, public CSS does)
			// .pipe( gulp.dest( paths.archive.CSS ) )
			
			//Remove the package version again
			// .pipe( rename(function (path) {
				// path.basename = originalFilename;
			// }))

			//Save unminified CSS
			.pipe( gulp.dest( paths.dist.CSS ) )

			//Minify CSS
			.pipe( minifyCSS() )

			//Add .min to the filename
			.pipe( rename( { suffix: ".min" } ) )

			//Save minified CSS
			.pipe( gulp.dest( paths.dist.CSS ) )

	});



	gulp.task('fonts', function () {
		
		return gulp.src( paths.dev.FONTS )

			//Remove the directories from the paths
			.pipe( rename({ dirname: "" }) )
			
			//save to fonts directory
			.pipe( gulp.dest( paths.dist.FONTS ) )

	});



	gulp.task('styleguide', function () {

		return gulp.src( paths.dev.SASS )
			.pipe(gulpkss({ 
				overview: './styleguide/styleguide.md'
			}))
			.pipe(gulp.dest( paths.dist.KSS ));

	});

};







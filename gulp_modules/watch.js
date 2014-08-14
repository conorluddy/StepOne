'use strict';
// Watch files for changes

//Export this back to the main gulpfile
module.exports = function( gulp, paths ){

	//Run various tasks if specific files change...
	gulp.task('watch', function() {

		//CSS
		gulp.watch( [ paths.dev.SASS ], function () {
			
			gulp.start('sass');
			gulp.start('styleguide');

		});

		//Images
		gulp.watch( [ paths.dev.IMG ], function () {

			gulp.start('images');

		});

		//Templates
		gulp.watch( [ paths.dev.TPL ], function () {

			//Delete existing HTML
			gulp.start('clean-html');
			
			//Wait 500ms then build new templates
			setTimeout(function(){

				gulp.start('templates');

			}, 300);

		} );


	});

};




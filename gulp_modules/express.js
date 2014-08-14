'use strict';


var express = require('express');


//Export this back to the main gulpfile
module.exports = function( gulp ){

	//CSS || SASS
	gulp.task('express', function () {

		var app = express();

		app.use(express.static(__dirname + '/dist'));

		app.listen(4000);

	});

};

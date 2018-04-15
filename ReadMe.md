The main difference you'll want to keep in mind between Grunt and Gulp is that Grunt is controlled through configuration and Gulp is 
controlled through code. 

You tell Grunt what to do through a json file, but you create your Gulp build process by writing JavaScript and invoking Gulp's API.

1. Install gulp globally
npm install --global gulp-cli

2. Install gulp in your project devDependencies:
npm install --save-dev gulp

3. Create a gulpfile.js at the root of your project:
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});

4. Run gulp:
$ gulp

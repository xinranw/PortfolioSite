var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var livereload = require('gulp-livereload');

var server = {
  port: 3000,
  livereloadPort: 35729,
  basePath: __dirname,
  _lr: null,
  
  start: function() {
    var express = require('express');
    var app = require('./app');
    app.use(require('connect-livereload')());
    app.use(express.static(this.basePath));
    app.listen(this.port);
  },
  livereload: function() {
    this._lr = require('tiny-lr')();
    this._lr.listen(this.livereloadPort);
  },
  livestart: function() {
    this.start();
    this.livereload();
  },
  notify: function(event) {
    var fileName = require('path').relative(this.basePath, event.path);
    gulp.src(event.path, {read: false})
    .pipe(livereload(this._lr));
    // this._lr.changed({
    //   body: {
    //     files: [fileName]
    //   }
    // });
}
};

gulp.task('sass', function() {
  return gulp.src('build/scss/*.scss')
  .pipe(sass())
  .on('error', function (err) { console.log(err.message); })
  .pipe(gulp.dest('public/stylesheets/'));
  // .pipe(reload({ stream:true }));
});

gulp.task('default', function() {
  server.livestart();

  gulp.watch('build/scss/*.scss', ['sass']);

  gulp.watch('public/stylesheets/*.css', function(event){
    server.notify(event);
  });
});
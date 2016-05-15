var gulp = require('gulp'),
  compass = require('gulp-for-compass'),
  plumber = require('gulp-plumber'),
  jade = require('gulp-jade');

gulp.task('default', ['watch']);
gulp.task('sass', function() {
  gulp.src('sass/*.scss')
    .pipe(plumber())
    .pipe(compass({
      config: 'config.rb',
      sassDir: 'sass',
      cssDir: './'
    }))
});

gulp.task('jade', function(){
  var locals = {};
  gulp.src('*.jade')
  .pipe(plumber())
  .pipe(jade({
    locals: locals,
    pretty: true
  }))
  .pipe(gulp.dest('./'))
});

gulp.task('watch', function(){
  gulp.watch('sass/*.scss', ['sass']);
  gulp.watch('*.jade', ['jade']);
});


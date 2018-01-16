var gulp = require("gulp");
var sass = require("gulp-sass");
var pump = require('pump');
var cleanCSS = require('gulp-clean-css');

gulp.task('compile',function(cb){
  console.log('========> Compilando SCSS...');
  pump([
    gulp.src("./src/scss/**/*.scss"),
    sass(),
    gulp.dest('./public/css')
    ],
    cb
    );
});

gulp.task('minify-css',['compile'],function(cb){

  console.log('========> Minificando CSS...');
  pump([
     gulp.src('./public/css/*.css'),
    cleanCSS({compatibility: 'ie8'}),
    gulp.dest('./public/css')
    ],
    cb
    );

});

gulp.task('default', function(){
  gulp.watch('./src/scss/**/*.scss',['minify-css']);
});

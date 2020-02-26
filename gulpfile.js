let gulp = require ('gulp'),/* перечисление переменных через запятую */
    sass = require ('gulp-sass'),
    browserSync = require ('browser-sync'),
    uglify = require ('gulp-uglify'),
    concat = require ('gulp-concat'),
    rename = require ('gulp-rename'),
    del = require ('del'),
    autoprefixer = require ('gulp-autoprefixer');








gulp.task('scss', function(){ /* task - задание scss - имя этого задания */
    return gulp.src('app/scss/**/*.scss')/* взял scss файлы */

   .pipe(sass({outputStyle: 'compressed'}))  /*удалить пробелы и преобразовать их в css */
    /*.pipe(sass({outputStyle: 'expanded'})) делает код css удобно читаемым */

    .pipe(autoprefixer({
        overrideBrowserslist: ['last 8 versions']
    }))   
    .pipe(rename({suffix: '.min'}))/* добовляет к имени файла суфикс .min */
    
    .pipe(gulp.dest('app/css'))/* путь для сохранения того что получилось */
    .pipe(browserSync.reload({stream: true}))
    
});/* gulp scss для запуска в командой строке  */




gulp.task('css', function() {/* объеденить (конкатинировать) несколько css файлов */
    return gulp.src([
        'node_modules/normalize.css/normalize.css',/* возьмёт */
        /*'node_modules/slick-carousel/slick/slick.css', эти   */
        /*'node_modules/magnific-popup/dist/magnific-popup.css' файлы */
        'node_modules/animate.css/animate.css',
    ])
    .pipe(concat('_libs.scss'))/* сохранит под этим именем */
    .pipe(gulp.dest('app/scss'))/* в этой папке */
    .pipe(browserSync.reload({stream: true})) /* и обновляет браузер */
    
});




gulp.task('html', function(){ /* отслеживает изменения в html */
    return gulp.src('app/*.html')/* взял html файлы */
    .pipe(browserSync.reload({stream: true})) /* и обновляет браузер */
});

gulp.task('php', function(){ /* отслеживает изменения в php */
    return gulp.src('app/*.php')/* взял php файлы */
    .pipe(browserSync.reload({stream: true})) /* и обновляет браузер */
});







gulp.task('script', function(){ /* отслеживает изменения в js */
    return gulp.src('app/js/*.js')/* взял js файлы */
    .pipe(browserSync.reload({stream: true})) /* и обновляет браузер */
});







gulp.task('browser-sync', function() {
    browserSync.init({
       
        proxy: "portfolio",
        open: true,
        notify: false
        
    });
});

    




gulp.task('watch', function(){ 
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss')) /* следит за изменнниями и запускает таск scss   */
    gulp.watch('app/*.html', gulp.parallel('html')) /* следит за изменнниями и запускает таск html  */
   /* gulp.watch('app/*.php', gulp.parallel('php'))  следит за изменнниями и запускает таск html  */
    gulp.watch('app/**/*.php', gulp.parallel('php')) /* следит за изменнниями и запускает таск html  */
    gulp.watch('app/js/*.js', gulp.parallel('script')) /* следит за изменнниями и запускает таск js   */
});/* gulp watch для запуска в командой строке выход из watch контрал + с   */



/* Для запуска написать в консоли gulp */
gulp.task('default', gulp.parallel('css', 'scss', 'browser-sync', 'watch'))












gulp.task('clean', async function() {
    del.sync('dist')
});/*gulp clean  */

gulp.task('export', function() {/* экспортирует всё нужное и готовое в папку dist */
    let buildHtml = gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist'))

    let buildCss = gulp.src('app/css/**/*.css')
    .pipe(gulp.dest('dist/css'))

    let buildJs = gulp.src('app/js/**/*.js')
    .pipe(gulp.dest('dist/js'))

    let buildFonts = gulp.src('app/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'))

    let buildImg = gulp.src('app/img/**/*.*')
    .pipe(gulp.dest('dist/img'))

});/*gulp build  */

/* Удаляет папку dist и создаёт её заново копируя туда всё нужное */
/* Выполняется в самом конце работы перед заливкой на сервер */
gulp.task('build', gulp.series('clean', 'export'));/*gulp build */
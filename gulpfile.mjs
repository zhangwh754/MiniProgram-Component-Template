import gulp from 'gulp';
import { src, dest, watch } from 'gulp';
import ts from 'gulp-typescript';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import { deleteAsync as del } from 'del';
import browserSync from "browser-sync";

const tsProject = ts.createProject('tsconfig.json');
const sass = gulpSass(dartSass);

const paths = {
    styles: {
        src: 'MiniProgram/**/*.scss',
        dest: 'dist/'
    },
    scripts: {
        src: 'MiniProgram/**/*.ts',
        dest: 'dist/'
    },
    misc: {
        src: 'MiniProgram/**/*{.js,.wxml,.json}',
        dest: 'dist/'
    },
};

/*
 * For small tasks you can export arrow functions
 */
export const clean = () => del(['dist/**/*', '!dist']);

/*
 * You can also declare named functions and export them as tasks
 */
export function styles() {
    return src(paths.styles.src)
        .pipe(sass())
        .pipe(rename(function (path) {
            path.extname = ".wxss"    // Change extension from .css to .wxss
        }))
        // pass in options to the stream
        .pipe(dest(paths.styles.dest));
}

export function scripts() {
    return src(paths.scripts.src)
        .pipe(tsProject()).js
        .pipe(dest(paths.scripts.dest));
}

export function miscs() {
    return src(paths.misc.src)
        .pipe(dest(paths.misc.dest));
}


function watchFiles() {
    watch(paths.scripts.src, scripts);
    watch(paths.styles.src, styles);
    watch(paths.misc.src, miscs);
}
export { watchFiles as watch };

gulp.task("serve", () => {
    browserSync.init();
});

const build = gulp.series(
    clean,
    gulp.parallel(styles, scripts, miscs),
    gulp.parallel(watchFiles, 'serve')
);

export default build;
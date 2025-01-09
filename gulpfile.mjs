import gulp from 'gulp';
import { src, dest, watch } from 'gulp';
import ts from 'gulp-typescript';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
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
    }
};

/*
 * For small tasks you can export arrow functions
 */
export const clean = () => del(['dist']);

/*
 * You can also declare named functions and export them as tasks
 */
export function styles() {
    return src(paths.styles.src)
        .pipe(sass())
        // pass in options to the stream
        .pipe(dest(paths.styles.dest));
}

export function scripts() {
    return src(paths.scripts.src)
        .pipe(tsProject()).js
        .pipe(dest(paths.scripts.dest));
}

function watchFiles() {
    watch(paths.scripts.src, scripts);
    watch(paths.styles.src, styles);
}
export { watchFiles as watch };

gulp.task("serve", () => {
    browserSync.init();
});

const build = gulp.series(
    clean,
    gulp.parallel(styles, scripts),
    gulp.parallel(watchFiles, 'serve')
);

export default build;
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const postCSS = require("gulp-postcss");
const babel = require("gulp-babel");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");

function html(cb) {
  src("./src/*.html").pipe(dest("dist/"));
  cb();
}

function styles(cb) {
  src("./src/scss/styles.scss", { sourcemaps: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(postCSS([autoprefixer({})]))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("dist/css", { sourcemaps: "." }));
  cb();
}

function scripts(cb) {
  src("./src/js/*.js")
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(concat("main.js"))
    .pipe(dest("dist/js"));
  cb();
}

function assets(cb) {
  src("./src/assets/**/*.*").pipe(dest("dist/assets"));
  cb();
}

function browserSyncServe(cb) {
  browserSync.init({
    server: {
      baseDir: "./dist/",
    },
    notify: {
      styles: {
        top: "auto",
        bottom: "0",
      },
    },
  });
  cb();
}
function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

function watchTask() {
  watch("./dist/*.html", browserSyncReload);
  watch(
    ["src/scss/**/*.scss", "src/**/*.js", "./dist/*.html", "src/assets/**/*.*"],
    series(html, styles, scripts, assets, browserSyncReload)
  );
}

exports.default = series(
  html,
  styles,
  scripts,
  browserSyncServe,
  assets,
  watchTask
);

"use strict";

const { src, dest, watch, parallel, series } = require("gulp");

const gulp = require("gulp");
const sass = require("gulp-sass");
const sync = require("browser-sync").create();

function generateCSS(cb) {
  src("src/styles/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("src/css/"))
    .pipe(sync.stream());
  cb();
}

function updateHtml(cb) {
  sync.stream();
  cb();
}

function updateJs(cb) {
  sync.stream();
  cb();
}

function browserSync(cb) {
  sync.init({
    server: {
      baseDir: "./",
    },
    browser: "firefox",
  });

  watch("src/styles/**.scss", generateCSS);
  watch("./**.html", updateHtml);
  watch("src/scripts/**.js", updateJs);
  
}
function watchFiles(cb) {
  watch("src/styles/**.scss", generateCSS);
}

function initProject(cb) {
  browserSync();
}



exports.css = generateCSS;
exports.watch = watchFiles;
exports.init = browserSync;

exports.default = series(parallel(generateCSS));

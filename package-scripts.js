const npsUtils = require("nps-utils");
const path = require("path");
const series = npsUtils.series;
const rimraf = npsUtils.rimraf;
const concurrent = npsUtils.concurrent;

module.exports = {
  scripts: {
    build: {
      description: "clean lib directory and run babel",
      default: series(
        rimraf("lib"),
        concurrent.nps("build.babel", "build.postcss")
      ),
      babel: "babel src -d lib",
      postcss: "postcss src/**/*.css --base src --dir lib"
    },
    "build:docs": {
      default: series("jsdoc -r -c conf.json . -R README.md")
    }
  }
};

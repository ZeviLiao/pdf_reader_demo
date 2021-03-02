const rimraf = require("rimraf");
const fromFileToImages = require("./from-file-to-images");
rimraf.sync("./output");

Promise.all([
  fromFileToImages()
]);

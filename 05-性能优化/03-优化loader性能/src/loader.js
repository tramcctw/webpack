const { ModuleFilenameHelpers } = require("webpack");

function myLoader(sourceCode) {
  console.log(11111);
  return sourceCode;
}

myLoader.pitch = function (filePath) {
  console.log(22222);
};

module.exports = myLoader;

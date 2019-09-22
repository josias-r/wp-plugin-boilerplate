const path = require("path");

module.exports = {
  // verbose: true,
  port: 8081,
  publicPath: `/wp-content/plugins/${path.basename(process.cwd())}`,
  entryFiles: [`${process.cwd()}/src/blocks/blocks.js`]
};

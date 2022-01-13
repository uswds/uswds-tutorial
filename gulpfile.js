/* gulpfile.js */

const uswds = require('@uswds/compile');

uswds.paths.dist.theme = './_theme/';

exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;

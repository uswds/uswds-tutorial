// import uswds compiler
const uswds = require('@uswds/compile');

// set the uswds version to 3
uswds.settings.version = 3;

// add custom path settings for compiler
// sets the destination of theme files to ./_theme directory
uswds.paths.dist.theme = './_theme';

// add Sass source directory to path settings for watch script
uswds.paths.src.projectSass = './assets/css';

// export uswds compile functions
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;

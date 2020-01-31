const Handlebars = require('handlebars');

const hbsInstance = Handlebars.create();

const hbsFiles = [
  './src/patternfly/{components,layouts,patterns,utilities}/**/*.hbs'
];

function compileHBS0(srcFiles) {
  return srcFiles.pipe(
    through2.obj((chunk, _, cb2) => {
      let hbsPartial = chunk.contents.toString();

      hbsInstance.registerPartial(
        fields.name, // Partial name
        fields.partial // Partial template
      );
      
      cb2(null, chunk);
    })
  );
}

function compileHBS() {
  hbsInstance.registerHelper('concat', (...params) => {
    // Ignore the object appended by handlebars.
    if (typeof params[params.length - 1] === 'object') {
      params.pop();
    }
    return params.join('');
  });
  return compileHBS0(src(config.sassFiles));
}

function watchHBS(cb) {
  cb();
}

function compileMD(cb) {
  cb();
}

function watchMD(cb) {
  cb();
}

module.exports = {
  compileHBS,
  compileMD,
  watchHBS,
  watchMD
}

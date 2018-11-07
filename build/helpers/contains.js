const util = require('handlebars-utils');

module.exports = (collection, value, options) => {
  const hasIt = collection.indexOf(value) >= 0;
  return util.value(hasIt, this, options);
};

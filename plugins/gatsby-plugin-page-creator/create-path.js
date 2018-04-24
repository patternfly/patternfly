// @flow
const parsePath = require('parse-filepath');
const path = require('path');
const slash = require('slash');

module.exports = (basePath, filePath) => {
  const relativePath = path.posix.relative(slash(basePath), slash(filePath));
  const { dirname, name } = parsePath(relativePath);
  const parsedName = name === `index` ? `` : name;

  return path.posix.join(`/`, dirname, parsedName, `/`);
};

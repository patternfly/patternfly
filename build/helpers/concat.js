/**
 * Concat two or more strings.
 *
 * @example
 *    {{concat 'Hello' ' world' '!!!'}}   => 'Hello world!!!'
 *
 * @param {any} ...params
 * @return {string}
 */
module.exports = (...params) => {
  // Ignore the object appended by handlebars.
  if (typeof params[params.length - 1] === 'object') {
    params.pop();
  }
  return params.join('');
};

import { patternflyNS, patternflyVersion } from './init.mjs';

/** Ignore the object appended by handlebars. */
export const concat = (...params) => {
  if (typeof params[params.length - 1] === 'object') {
    params.pop();
  }
  return params.join('');
};

export const removeWhiteSpaceForPrettier = () => {
  return 'removeWhiteSpaceForPrettier';
};

/** Using ifEquals else if with helpers
{{#ifEquals toolbar-toggle--IsExpanded "false"}}
  false
{{else ifEquals toolbar-toggle--IsExpanded "true"}}
  true
{{else}}
  something else
{{/ifEquals}}
*/
export const ifEquals = function () {
  const args = Array.prototype.slice.call(arguments, 0, -1);
  const options = arguments[arguments.length - 1];
  const allEqual = args.every(function (expression) {
    return args[0] === expression;
  });

  return allEqual ? options.fn(this) : options.inverse(this);
};

/** Using ternary
if custom value for select--width: {{#> select select--width='160px'}}Filter by name{{/select}}
else custom value for select--width: {{#> select)}}Filter by name{{/select}}
{{#> select select--id=(concat toolbar--id '-select-name') select--width=(ternary toolbar-items-search-filter--width toolbar-items-search-filter--width '175px') select-toggle--icon="fas fa-filter"}}
{{> toolbar-item-search-filter toolbar-items-search-filter--width="300px"}}
*/
export const ternary = (testValue, trueValue, fallback) => {
  return testValue ? trueValue : fallback;
};

/** Helper which allows a booleans value to be inversed, similar to how notting a variable with ! works in regular JS */
export const inverse = (bool) => (bool ? null : 'true');

export const setVariable = (varName, varValue, options) => {
  if (!options.data.root) {
    options.data.root = {};
  }

  options.data.root[varName] = varValue;

  // return options;
  // console.log(options.data);
};

export const getVariable = (varValue, options) => {
  console.log('options', options);

  return options.data.root[varValue];
};

export const pfv = (type) => {
  const namespace = patternflyNS;
  let version = patternflyVersion;
  let prefix = 'c-';

  if (type === 'unset-prefix') {
    prefix = '';
  } else if (type === 'unset-version') {
    version = '';
  } else if (type.length) {
    prefix = type + '-';
  }

  return namespace + version + prefix;
};

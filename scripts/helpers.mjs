import { patternflyNamespace, patternflyVersion } from './init.mjs';

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

// Using ifAny else if with helpers
// {{#ifAny A B C}}
//   this if A or B or C
// {{else ifAny D E}}
//   this if D or E
// {{else}}
//   something else
// {{/ifAny}}

export const ifAny = function () {
  const args = Array.prototype.slice.call(arguments, 0, -1);
  const options = arguments[arguments.length - 1];
  const anyTruthy = args.some(arg => arg);

  return anyTruthy ? options.fn(this) : options.inverse(this);
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

// ======================================================================================
// debug: is a helper function that logs all parameters and their values, if defined to the console
// ======================================================================================
//
// Usage:
//   {{#> component}}
//     {{debug}}
//     {{debug component--id}}
//
// Options:
//     Can request a specific value to be logged. `component--id` is requested on the second line
// ======================================================================================
export const debug = function (optionalValue) {
  console.log('Current Context');
  console.log('====================');
  console.log(this);
  if (optionalValue) {
    console.log('Value');
    console.log('====================');
    console.log(optionalValue);
  }
}

// ======================================================================================
// stringToLower: is a helper function that transforms a string to lowercase
// ======================================================================================
export const stringToLower = function (string) {
  const newString = string.toLowerCase();
  return newString;
}

// ======================================================================================
// dasherize: is a helper function that removes punctuaation and spaces from a string and replaces them with dashes
// ======================================================================================
export const dasherize = (...params) => {
  let newString = '';

  params.forEach(function(element, i) {
    if (typeof element === 'string') {
      newString += element.replace(/[A-Z]/g, m => '-' + m.toLowerCase().replace(/\s/g, ''));
    }
  });

  return newString
};

// ======================================================================================
// setTag: is a helper function that sets the tag of a component
// ======================================================================================
//
// Usage:
//   {{> setTag component--IsList 'ul' 'div'}}
//   {{> setTag component--IsList 'ul'}} // can also be used a the fallback value is div
//
// ======================================================================================
export const setTag = function (partialVar, el, fallback = 'div') {
  if (partialVar !== undefined) {
    this.type = el;
  } else {
    this.type = fallback;
  }
};

// ======================================================================================
// tag: is a helper function that returns the tag of a component
// ======================================================================================
//
// Usage:
//   {{#> tag}}
//     {{debug}}
//     {{debug component--id}}
//
// Options:
//     Can request a specific value to be logged. `component--id` is requested on the second line
// ======================================================================================
export const tag = function (tag) {
  return this.type;
};

// ======================================================================================
// setModifier: is a helper function that sets a modifier class
// ======================================================================================
export const setModifier = function (param, className) {
  return param ? className : '';
};

// ======================================================================================
// setAttribute: is a helper function that sets an attribute
// ======================================================================================
export const setAttribute = function (param, attribute) {
  return param ? attribute : null;
};

// ======================================================================================
// reset: reset is a helper function unsets all passed parameters
// ======================================================================================
//
// Purpose: replaces `newcontext` helper in partials by unsetting specific parameters
// Usage:
//   {{#> component (reset component--id component--IsExpanded)}}
//
// ======================================================================================
export const reset = function (...params) {
  params.forEach(element => {
    element = undefined;
  })
};

// ======================================================================================
// setModifiers: setModifiers is a helper function that returns a string of all partials parameters that are true
// ======================================================================================
//
// Purpose: replaces repetitive {{#if component-IsState}}pf-m-state{{/if}} statements in partials
// Usage:
//   {{setModifiers
//     component-IsExpanded='pf-m-expanded' // if component-IsExpanded is assigned to instance, return pf-m-expanded
//     component-IsActive='pf-m-active' // if component-IsActive is assigned to instance, return pf-m-active
//     component-IsCurrent='pf-m-current pf-m-selected' // if component-IsCurrent is assigned to instance, return pf-m-current and pf-m-selected
//   }}
//
// ======================================================================================
export const setModifiers = function (...mods) {
  let modSet = '';

  for (const prop in mods) {
    const hash = mods[prop].hash;
    for (const [key, value] of Object.entries(hash)) {
      if (this[key]) {
        modSet += ` ${value}`;
      }
    }
  };

  return modSet
};

/** Helper which allows a booleans value to be inversed, similar to how notting a variable with ! works in regular JS */
export const inverse = (bool) => (bool ? null : 'true');

export const pfv = (type) => {
  const namespace = patternflyNamespace;
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

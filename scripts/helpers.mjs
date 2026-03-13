import { patternflyNamespace, patternflyVersion } from './init.mjs';
import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';
import { createRequire } from 'module';

// TODO: TODO: update ternary to not escape chars

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

/** Helper which allows a booleans value to be inversed, similar to how notting a variable with ! works in regular JS */
export const inverse = (bool) => (bool ? null : 'true');

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

/** Inverse of ifEquals */
export const unlessIfEquals = function () {
  const args = Array.prototype.slice.call(arguments, 0, -1);
  const options = arguments[arguments.length - 1];
  const allEqual = args.every(function (expression) {
    return args[0] === expression;
  });

  return allEqual ? options.inverse(this) : options.fn(this);
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

// Using ifAll
// {{#ifAll user.isActive user.hasPermission user.isLoggedIn}}
//   Welcome! You have full access.
// {{else}}
//   Access restricted: Please check your account status.
// {{/ifAll}}

export const ifAll = function() {
  // Convert arguments to an array, excluding the last 'options' object
  var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
  var options = arguments[arguments.length - 1];

  // Check if every argument is truthy
  var allTruthy = args.every(Boolean);

  if (allTruthy) {
      return options.fn(this);
  } else {
      return options.inverse(this);
  }
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

  params.forEach(function(element) {
    if (typeof element === 'string') {
      newString += element.toLowerCase() + '-';
    }
  });

  return newString.slice(0, -1);
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
// array: creates array from string
// ======================================================================================
export const array = function () {
  return Array.prototype.slice.call(arguments, 0, -1);
};

// ======================================================================================
// has: is a function that returns an object with three properties: any, all, none
//      these properties are boolean values that represent the state of the passed value
// ======================================================================================
export const has = function (value) {
  const result = {};

  if (Array.isArray(value)) {
    result.any = value.includes(true);
    result.all = value.every(element => element === true);
    result.none = value.every(value => !value);
  } else if (value !== undefined && value === true) {
    result.any = true;
    result.all = true;
    result.none = false;
  } else {
    result.any = false;
    result.all = false;
    result.none = true;
  }

  return result;
}

export const returnHas = function (value, keyword, fallback) {
  const compValue = has(value);
  const boolResult = compValue[keyword];

  if (boolResult === true && fallback !== undefined) {
    return fallback;
  } else {
    return boolResult;
  }
}

// ======================================================================================
// hasAny/All/None: is a helper function that returns the value of a propterty or array
// these properties are boolean values that represent the state of the passed value
// optional string value can be returned if true
// ======================================================================================
//
// Usage:
//   {{#> component}}
//     {{hasAny (array component--IsExpanded component--IsCurrent component--IsActive)}}
//     returns: result[any: true/false, all: true/false, none: true/false]
//
// Options:
//     Can request a specific value to be logged. `component--id` is requested on the second line
// ======================================================================================
export const hasAny = function (value, fallback = '') {
  return returnHas(value, 'any', fallback);
}

export const hasAll = function (value, fallback = '') {
  return returnHas(value, 'all', fallback);
}

export const hasNone = function (value, fallback = '') {
  return returnHas(value, 'none', fallback);
}

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
// setAttribute: is a helper function that sets an attribute
// ======================================================================================
export const setProp = function (context, el) {
  this[context] = el;
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

  return modSet;
};

// ======================================================================================
// setAttributes: setModifiers is a helper function that returns a string of all partials parameters that are true
// ======================================================================================
export const setAttributes = function (...mods) {
  let modSet = '';

  for (const prop in mods) {
    const hash = mods[prop].hash;
    for (const [key, value] of Object.entries(hash)) {
      if (this[key]) {
        modSet += ` ${value}`;
      }
    }
  };

  return modSet;
};

// ======================================================================================
export const entry = function (...mods) {
  const modSet = {};

  mods.forEach((element, index) => {
    // modSet[element] = element.index;
    const hash = element.hash;

    for (const [key, value] of Object.entries(hash)) {
      modSet[key] = value;
    }
  });

  return modSet;
};

export function entries(...data) {
  data.forEach((element, index) => {
    // console.log(element, data[index]);
    // const val = prependModifierPrefix(element);
    // data[index] = stripWhitespace(val);
  });
  // data.forEach((element, index) => {
  //   this.index = index;
  //   for (const [key, value] of Object.entries(element)) {
  //     // console.log(`${key}: ${value}`);
  //     this[key] = value;
  //   }
  //   console.log(element);
  //   // const val = prependModifierPrefix(element);
  //   // data[index] = stripWhitespace(val);
  //   // console.log(this);
  // });

  return data;
}

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

export const prefix = function (term) {
  return pfv('c') + term;
}

// ======================================================================================
// pfIcon: a helper function to use svg's from @patternfly/react-icons
// ======================================================================================
//
// Usage:
//   {{pfIcon 'arrow-right'}}
//
// ======================================================================================
export const pfIcon = function (iconName) {
  try {
    if (!iconName || typeof iconName !== 'string') {
      console.error(`\x1b[31mInvalid icon name: ${iconName}\x1b[0m`);
      return new Handlebars.SafeString(`<!-- Invalid icon name -->`);
    }
    const baseName = path.basename(iconName);
    const require = createRequire(import.meta.url);
    const packageJsonPath = require.resolve('@patternfly/react-icons/package.json');
    const packageDir = path.dirname(packageJsonPath);
    const iconDir = path.join(packageDir, 'dist/static');
    const iconPath = path.join(iconDir, `${baseName}.svg`);
    const svgContent = fs.readFileSync(iconPath, 'utf8');
    return new Handlebars.SafeString(svgContent);
  } catch (error) {
    const safeName = (iconName && typeof iconName === 'string') ? path.basename(iconName) : 'unknown';
    console.error(`\x1b[31mError loading icon "${safeName}": ${error.message}\x1b[0m`);
    return new Handlebars.SafeString(`<!-- Icon "${safeName}" not found -->`);
  }
}

import Handlebars from 'handlebars';
import { patternflyNamespace, patternflyVersion } from './init.mjs';
import { getParams, globalContent } from './params.mjs';
// import { getParams } from './params.mjs';

export const object = function({ hash }) {
  return hash;
}

export const array = function() {
  return Array.from(arguments).slice(0, arguments.length - 1);
}

export const kebabCase = (string) => {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase();
}

export const buildMe = (object) => {
  const myNewObj = {};
  const entryObj = Object.entries(object);
  const entryCount = Object.keys(object).length;
  console.log(entryCount);

  // object.forEach((entry) => {

  //   // myNewObj[entryObj] = Object.entries.entryObj;
  // });

  // for (let i = 1; i < entryCount; i++) {
  //   console.log(i);
  //   myNewObj[(Object.entries[entryObj][i])] = entryObj[i];
  // }

  // console.log(myNewObj);

  // for (let i = 0; i < entryCount; i++) {
  //   myNewObj[i] = Object.keys(object[i]);
  //   console.log(myNewObj);

  //   // if (Object.keys(object)) {
  //   //   console.log(Object.keys(object));
  //   // }
  //   // myNewObj[key]
  // }

  // if (Object.prototype.hasOwnProperty.call(myNewObj, 'count')) {
  //   //
  // }

  // for (let i = 1; i < object.count; i++) {
  // myObj[name[i]] = 'test';

  // request.forEach(element => {
  //   console.log(element);

  //   // console.log(request.map(object[object.name + '-' + i].request = object.request[i]));
  // });
  // }
  // if (count === request.length) {
  //   i = 0;
  // }

  // console.log(request.map(object[object.name + '-' + i].request = object.request[i]));

  // console.log(myNewObj);

  return myNewObj;
}

export const setVar = (varName, varValue, options) => {
  if (!options.data) {
    options.data = {};
  }

  options.data[varName] = varValue;
};

export const getVar = (varValue, that, options) => {
  const mappedVariableName = options.data[varValue];

  return that[mappedVariableName];
};

export const setRoot = (varName, varValue, options) => {
  if (!options.data.root) {
    options.data.root = {};
  }

  options.data.root[varName] = varValue;
};

export const getRoot = (varValue, that, options) => {
  const mappedVariableName = options.data.root[varValue];

  return that[mappedVariableName];
};

// export const init = (options, setGlobal = false, ...params) => {
//   if (setGlobal) {
//     setVar('test', 'thing', options);
//   };

//   Object.values(params).forEach(param => {
//     setVar((`${param}` + '--' + `${param}`), ('component--' + `${param}`), options);
//     console.log('here')
//   });
// }

// Create paramater list
export const loadParams = function(className, target, list, root = false, options) {
  let paramList = getParams();
  paramList = paramList[list];

  paramList.forEach((param) => {
    setVar((`${className}` + '-' + `${param}`), (`${target}` + '--' + `${param}`), options);
  })
}

export const constructPrefix = (prefix, namespace = patternflyNamespace, version = patternflyVersion, type = 'c') => {
  if (prefix.length) {
    namespace = null;
    version = null;
    type = null;
  } else {
    prefix = namespace + version + (type + '-');
  }

  return prefix;
}

// export const registerExample = function(name, context, options) {
export const debug = (optionalValue, options) => {
  console.log('Current Context');
  console.log('====================');
  console.log(this);
  if (optionalValue) {
    console.log('Value');
    console.log('====================');
    console.log(optionalValue);
  }
}

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

/** Helper which allows a booleans value to be inversed, similar to how notting a variable with ! works in regular JS */
export const inverse = (bool) => (bool ? null : 'true');

export const pfv = (type = '', namespace = '', version = '') => {
  let el = 'c-';
  let ns = patternflyNamespace;
  let vn = patternflyVersion;

  if (type.length) {
    if (type === 'unset-type') {
      el = '';
    } else {
      el = type + '-';
    }
  }

  if (namespace.length) {
    ns = namespace + '-';
  }

  if (version.length) {
    vn = version + '-';
  }

  if (namespace === 'unset-namespace') {
    ns = '';
  }

  if (version === 'unset-version') {
    vn = '';
  }

  return ns + vn + el;
};

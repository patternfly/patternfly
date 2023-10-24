// Functions

// ============================== //
// Resize observer
// ============================== //
// Objectives
//   - specify any size using keywords
//   - specify any action or modifier for keyword
//
// Keywords:
// size/Size: Set container size
//  - size-{size} / size{Size} / ex: data-size-sm, sizeSm
//    - defines a size/width for change
//
// on/On: Set action for related size
//  - on-{size} / on{Size} / ex: data-on-sm, onSm
//    - defines the change for correlating {size} param
// ============================== //

// ============================== //
// Min/Max-width observer
// ============================== //

const modPrefix = 'pf-m-';

const keywordChecker = (string, testValue) => {
  const value = '^' + testValue;
  const regex = new RegExp(value);

  return regex.test(string);
}

const prependModifierPrefix = function (val) {
  return modPrefix + val.replace(' ', '');
};

const stripWhitespace = function (val) {
  return val.replaceAll(' ', '');
}

const stringToModifier = function (val) {
  return prependModifierPrefix(val).toLowerCase();
};

const size = '^size';
const on = '^on';
const keywords = [size, on];

function removeKeyword(data, array = keywords) {
  const prefix = new RegExp('^(' + array.join('|') + ')', "g");
  data = data.replace(prefix, '').toLowerCase();

  return data;
}

function stringToArray(data) {
  data = data.split(',');

  data.forEach((element, index) => {
    const val = prependModifierPrefix(element);
    data[index] = stripWhitespace(val);
  });

  return data;
}

const buildDataObject = (...entries) => {
  const fullClassArray = [];

  for (const entry of entries) {
    const targetDataset = entry.dataset;
    const objectDataset = {};
    const sizes = [];

    for (const key in targetDataset) {
      if (keywordChecker(key, 'size')) {
        const newKey = removeKeyword(key);
        const size = targetDataset[key];
        objectDataset[newKey] = { containerSize: size };
        sizes.push(size);
      }

      if (keywordChecker(key, 'on') && removeKeyword(key) in objectDataset) {
        const newKey = removeKeyword(key);
        const classes = targetDataset[key];
        const classSetArray = stringToArray(classes);
        objectDataset[newKey].classSet = classSetArray;
        fullClassArray.push(newKey);
      }
    }

    entry.objectDataset = objectDataset;

    if (sizes.length) {
      entry.objectDataset.sizes = sizes;
    }

    if (fullClassArray.length) {
      entry.objectDataset.classSet = fullClassArray;
    }
  }

  console.log(fullClassArray);
}

function throttle(f, delay) {
  let timer = 0;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => f.apply(this, args), delay);
  }
}

const resizeObserver = new ResizeObserver(throttle((entries) => {
  for (const entry of entries) {
    const initialClasslist = entry.target.classList.value.split(' ');
    const contentBoxSize = entry.contentBoxSize[0];
    const inlineBoxSize = contentBoxSize.inlineSize;
    entry.target.dataset.currentSize = inlineBoxSize;

    for (const size in entry.target.objectDataset) {
      const currentSize = entry.target.objectDataset[size].containerSize;

      if (inlineBoxSize >= currentSize) {
        entry.target.dataset.newSize = size;
      }
    }

    const newSize = entry.target.dataset.newSize;
    const newClassList = entry.target.objectDataset[newSize].classSet;
    const joinedClasses = newClassList.concat(initialClasslist);

    /*
      get all classes applied by resize observer
      store to array before removing/adding classes, ensure class is part of resize observer array
      toggle classes that belong to RO classSet, are not static, and belong to current size
    */

    console.log(initialClasslist);
    console.log(newClassList);
    console.log(joinedClasses);
  }
}, 500));

const pfResizeObserver = (entries, ...options) => {
  if (Array.isArray(entries)) {
    entries.forEach((entry, index) => {
      buildDataObject(entry);
      resizeObserver.observe(entry);
    });
  } else {
    buildDataObject(entries);
    resizeObserver.observe(entries);
  }
}

setTimeout(() => {
  const basic1 = document.getElementById('basic-example1');
  const basic2 = document.getElementById('basic-example2');
  const basic3 = document.getElementById('basic-example3');
  const basic4 = document.getElementById('basic-example4');

  // pfResizeObserver([basic1, basic2, basic3, basic4]);
  pfResizeObserver([basic1, basic2]);
  // pfResizeObserver(basic1);
}, '500');

/*
  toolbar:
  - calculate necessary space based upon child elements
  - initialize with available width
  - set priority 1, 2, 3, 4
  - when elements run out of space, collapse based on priority
*/

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

// ============================== //

setTimeout(() => {
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
    var prefix = new RegExp('^(' + array.join('|') + ')', "g");
    data = data.replace(prefix, '').toLowerCase();

    return data;
  }

  function stringToArray(data) {
    data = data.split(',');

    data.forEach((element, index) => {
      const val  = prependModifierPrefix(element);
      data[index] = stripWhitespace(val);
    });

    return data;
  }

  const buildDataObject = (...entries) => {
    for (const entry of entries) {
      const targetDataset = entry.dataset;
      const objectDataset = {};
      const sizes = [];
      const classSet = [];

      for (const key in targetDataset) {
        if (keywordChecker(key, 'size')) {
          const newKey = removeKeyword(key);
          const size = targetDataset[key];
          objectDataset[newKey] = { containerSize: size };
          sizes.push(size);
        }

        if (keywordChecker(key, 'on')) {
          const newKey = removeKeyword(key);
          const classes = targetDataset[key];
          const classSetArray = stringToArray(classes);
          objectDataset[newKey].classSet = classSetArray;
        }
      }

      entry.objectDataset = objectDataset;
      entry.objectDataset.sizes = sizes.reverse();
    }
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
      const contentBoxSize = entry.contentBoxSize[0];
      const inlineBoxSize = contentBoxSize.inlineSize;
      const blockize = contentBoxSize.blockize;
      entry.target.dataset.currentSize = inlineBoxSize;

      for (const size in entry.target.objectDataset) {
        let currentSize = entry.target.objectDataset[size].containerSize;

        if(inlineBoxSize >= currentSize) {
          entry.target.dataset.newSize = size;
        }
      }
    }
  }, 500));

  /*
    TODO
    - add unobserveSize - unobserves at breakpoint
    - add reobserveSize - reobserves at breakpoint
    - add disconnect - disconnects observer at breakpoint
    - add resdisconnect - resdisconnects observer at breakpoint
    - add option to append attributes to DOM - ex: data-size-md, data-size-lg
    - add option to append current size to DOM - ex: data-current-size="625"
    - add onMdMax = creates a range to remove classes
  */

  const basic = document.getElementById('basic-example');
  const basic2 = document.getElementById('basic-example2');
  const basic3 = document.getElementById('basic-example3');
  const basic4 = document.getElementById('basic-example4');
  const basic5 = document.getElementById('basic-example5');
  const basic6 = document.getElementById('basic-example6');
  const basic7 = document.getElementById('basic-example7');
  const basic8 = document.getElementById('basic-example8');

  buildDataObject(basic);
  buildDataObject(basic2);
  buildDataObject(basic3);
  buildDataObject(basic4);
  buildDataObject(basic5);
  buildDataObject(basic6);
  buildDataObject(basic7);
  buildDataObject(basic8);
  resizeObserver.observe(basic);
  resizeObserver.observe(basic2);
  resizeObserver.observe(basic3);
  resizeObserver.observe(basic4);
  resizeObserver.observe(basic5);
  resizeObserver.observe(basic6);
  resizeObserver.observe(basic7);
  resizeObserver.observe(basic8);
}, '500');

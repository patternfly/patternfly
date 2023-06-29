// import { buildMe } from '../../../../../scripts/helpers.mjs';
import { globalContent } from '../../../../../scripts/params.mjs';

export const exampleObject = () => (
  {
    example1: {
      name: 'First example',
      age: 32,
      items: {
        shoes: 'Running shoes',
        bike: 'Specialized',
        url: 'http://www.specialized.com'
      },
      html: '<button>Hello</button>'
    },
    example2: {
      name: 'example-component 2',
      age: 42,
      items: {
        shoes: 'Walking shoes',
        bike: 'AMG',
        url: 'http://www.amg.com'
      },
      html: '<button>Goodbye</button>'
    }
  }
);

export const buildMe = function(object) {
  const myObj = {};
  // console.log(object.count);

  const count = object.count;

  for (let i = 1; i < count + 1; i++) {
    // myObj.key = 'tess';
    myObj[object.key + '-' + i] = globalContent.page.mainTitle;
    // myObj = myObj[i];
    // console.log(i);
    // console.log(Object.keys(object));
    // console.log('hey');
  }

  console.log(myObj);

  // for (const property in object) {
  //   console.log(`${property}: ${object[property]}`);
  // }

  return myObj;
}

export const cardContent = buildMe({
  key: 'name',
  count: 10,
  request: ['title', 'subtitle', 'content', 'link']
});

// console.log(cardContent);

// export const exampleArray = () => (
//   [
//     { username: 'alan', firstName: 'Alan', lastName: 'Johnson', email: 'alan@test.com' },
//     { username: 'allison', firstName: 'Allison', lastName: 'House', email: 'allison@test.com' },
//     { username: 'ryan', firstName: 'Ryan', lastName: 'Carson', email: 'ryan@test.com' }
//   ]
// );

export const exampleArray = () => (['Alpha', 'Beta', 'Cappa', 'Delta', 'Foxtrot']);

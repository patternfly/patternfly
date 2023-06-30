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

export const buildMe = (object) => {
  const myObj = {};
  const count = object.count;

  for (let i = 1; i < count + 1; i++) {
    while (i < object.request.length) {
      console.log(globalContent[object.request[i]]);
    }
    myObj[object.name + '-' + i] = globalContent.page.mainTitle;
  }

  console.log(myObj);

  return myObj;
}

export const cardContent = () => (
  buildMe({
    name: 'card',
    count: 10,
    request: ['title', 'subtitle', 'content', 'link']
  }
));

// console.log(cardContent);

// export const exampleArray = () => (
//   [
//     { username: 'alan', firstName: 'Alan', lastName: 'Johnson', email: 'alan@test.com' },
//     { username: 'allison', firstName: 'Allison', lastName: 'House', email: 'allison@test.com' },
//     { username: 'ryan', firstName: 'Ryan', lastName: 'Carson', email: 'ryan@test.com' }
//   ]
// );

export const exampleArray = () => (['Alpha', 'Beta', 'Cappa', 'Delta', 'Foxtrot']);

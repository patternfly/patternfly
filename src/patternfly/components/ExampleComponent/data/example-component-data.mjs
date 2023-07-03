import { buildMe } from '../../../../../scripts/helpers.mjs';
// import { globalContent } from '../../../../../scripts/params.mjs';

export const cardContent = () => (
  buildMe({
    card: {
      count: 14,
      request: ['card.title', 'card.subtitle']
    },
    page: {
      count: 12,
      request: ['page.title', 'page.subtitle']
    }
  })
);

// export const cardContent = () => (
//   buildMe({
//     name: 'cards',
//     count: 10,
//     request: ['page.title', 'page.subTitle', 'page.content', 'page.link']
//   })
// );

// export const exampleObject = () => (
//   {
//     example1: {
//       name: 'First example',
//       age: 32,
//       items: {
//         shoes: 'Running shoes',
//         bike: 'Specialized',
//         url: 'http://www.specialized.com'
//       },
//       html: '<button>Hello</button>'
//     },
//     example2: {
//       name: 'example-component 2',
//       age: 42,
//       items: {
//         shoes: 'Walking shoes',
//         bike: 'AMG',
//         url: 'http://www.amg.com'
//       },
//       html: '<button>Goodbye</button>'
//     }
//   }
// );

// console.log(cardContent);

// export const exampleArray = () => (
//   [
//     { username: 'alan', firstName: 'Alan', lastName: 'Johnson', email: 'alan@test.com' },
//     { username: 'allison', firstName: 'Allison', lastName: 'House', email: 'allison@test.com' },
//     { username: 'ryan', firstName: 'Ryan', lastName: 'Carson', email: 'ryan@test.com' }
//   ]
// );

// export const exampleArray = () => (['Alpha', 'Beta', 'Cappa', 'Delta', 'Foxtrot']);

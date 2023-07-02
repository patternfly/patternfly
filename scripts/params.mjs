export const getParams = () => {
  const params = {
    defaultPrefixes: ['prefix', 'namespace', 'version', 'type'],
    defaultAttributes: ['index', 'attribute', 'id', 'stuff', 'version', 'type'],
    formAttributes: ['name', 'for']
  }

  return params;
};

export const defaultNames = ({
  users: [
    { username: 'alan', firstName: 'Alan', lastName: 'Johnson', email: 'alan@test.com' },
    { username: 'allison', firstName: 'Allison', lastName: 'House', email: 'allison@test.com' },
    { username: 'ryan', firstName: 'Ryan', lastName: 'Carson', email: 'ryan@test.com' }
  ]
});

export const globalContent = {
  page: {
    title: ['Red Hat OpenShift Service on AWS', 'Red Hat Ansible Automation', 'Microsoft Azure Red Hat OpenShift'],
    subTitle: ['Subtitle 1', 'Subtitle 2', 'Subtitle 3'],
    content: ['Lorem', 'Ipsum', 'Dolor']
  },
  table: {
    th: [

    ],
    title: {

    },
    subtitle: {

    }
  },
  general: {
    name: 'patternfly',
    content: 'Working repo for PatternFly 4 <a href="https://pf4.patternfly.org/">patternfly</a>',
    count1: '3',
    count2: '6',
    count3: '2',
    more: {
      option1: 'this 1',
      option2: 'this 2',
      option3: 'this 3'
    }
  }
};

import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ModalExampleRaw from '!raw!./modal-example.hbs';
import ModalScrollExampleRaw from '!raw!./modal-scroll-example.hbs';
import ModalLgExampleRaw from '!raw!./modal-lg-example.hbs';
import docs from '../docs/code.md';
import ModalExample from './modal-example.hbs';
import ModalScrollExample from './modal-scroll-example.hbs';
import ModalLgExample from './modal-lg-example.hbs';

export const Docs = docs;

export default (props) => {
  const modalExample = ModalExample();
  const modalScrollExample = ModalScrollExample();
  const modalLgExample = ModalLgExample();
  const headingText = 'Modal Demo';

  return (
    <Documentation data={props} docs={Docs} heading={headingText}>
      <Example heading="Modal Demo" fullPageOnly="true" handlebars={ModalExampleRaw}>
        {modalExample}
      </Example>
      <Example
        heading="Modal Demo - Content long enough to scroll"
        fullPageOnly="true"
        handlebars={ModalScrollExampleRaw}
      >
        {modalScrollExample}
      </Example>
      <Example heading="Modal Demo - Large" fullPageOnly="true" handlebars={ModalLgExampleRaw}>
        {modalLgExample}
      </Example>
    </Documentation>
  );
};

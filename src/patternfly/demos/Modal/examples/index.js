import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ModalExampleRaw from '!raw!./modal-example.hbs';
import ModalScrollExampleRaw from '!raw!./modal-scroll-example.hbs';
import ModalLgExampleRaw from '!raw!./modal-right-aligned-footer-example.hbs';
import ModalRightAlignedFooterExampleRaw from '!raw!./modal-lg-example.hbs';
import docs from '../docs/code.md';
import ModalExample from './modal-example.hbs';
import ModalScrollExample from './modal-scroll-example.hbs';
import ModalLgExample from './modal-lg-example.hbs';
import ModalRightAlignedFooterExample from './modal-right-aligned-footer-example.hbs';

export const Docs = docs;

export default props => {
  const modalExample = ModalExample();
  const modalScrollExample = ModalScrollExample();
  const modalLgExample = ModalLgExample();
  const modalRightAlignedFooterExample = ModalRightAlignedFooterExample();
  const headingText = 'Modal demo';

  return (
    <Documentation data={props} docs={Docs} heading={headingText}>
      <Example heading="Modal demo" fullPageOnly="true" handlebars={ModalExampleRaw}>
        {modalExample}
      </Example>
      <Example
        heading="Modal demo - content long enough to scroll"
        fullPageOnly="true"
        handlebars={ModalScrollExampleRaw}
      >
        {modalScrollExample}
      </Example>
      <Example heading="Modal demo - large" fullPageOnly="true" handlebars={ModalLgExampleRaw}>
        {modalLgExample}
      </Example>
      <Example
        heading="Modal demo - legacy footer button alignment (right aligned)"
        fullPageOnly="true"
        handlebars={ModalRightAlignedFooterExampleRaw}
      >
        {modalRightAlignedFooterExample}
      </Example>
    </Documentation>
  );
};

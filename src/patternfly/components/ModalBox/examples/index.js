import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ModalBoxBasicExampleRaw from '!raw!./modal-box-basic-example.hbs';
import ModalBoxSmExampleRaw from '!raw!./modal-box-sm-example.hbs';
import ModalBoxLgExampleRaw from '!raw!./modal-box-lg-example.hbs';
import ModalBoxNoHeaderExampleRaw from '!raw!./modal-box-no-header-example.hbs';
import ModalBoxBasicExample from './modal-box-basic-example.hbs';
import ModalBoxSmExample from './modal-box-sm-example.hbs';
import ModalBoxLgExample from './modal-box-lg-example.hbs';
import ModalBoxNoHeaderExample from './modal-box-no-header-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const modalBoxBasicExample = ModalBoxBasicExample();
  const modalBoxSmExample = ModalBoxSmExample();
  const modalBoxLgExample = ModalBoxLgExample();
  const modalBoxNoHeaderExample = ModalBoxNoHeaderExample();
  const headingText = 'Modal box';
  const variablesRoot = 'pf-c-modal-box';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Modalbox basic example" handlebars={ModalBoxBasicExampleRaw}>
        {modalBoxBasicExample}
      </Example>
      <Example heading="Modalbox small example" handlebars={ModalBoxSmExampleRaw}>
        {modalBoxSmExample}
      </Example>
      <Example heading="Modalbox large example" handlebars={ModalBoxLgExampleRaw}>
        {modalBoxLgExample}
      </Example>
      <Example heading="Modalbox no header example" handlebars={ModalBoxNoHeaderExampleRaw}>
        {modalBoxNoHeaderExample}
      </Example>
    </Documentation>
  );
};

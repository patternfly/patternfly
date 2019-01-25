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
import '../modal-box.scss';

export const Docs = docs;

export default () => {
  const modalBoxBasicExample = ModalBoxBasicExample();
  const modalBoxSmExample = ModalBoxSmExample();
  const modalBoxLgExample = ModalBoxLgExample();
  const modalBoxNoHeaderExample = ModalBoxNoHeaderExample();
  const headingText = 'Modal Box';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="ModalBox Basic Example" handlebars={ModalBoxBasicExampleRaw}>
        {modalBoxBasicExample}
      </Example>
      <Example heading="ModalBox Small Example" handlebars={ModalBoxSmExampleRaw}>
        {modalBoxSmExample}
      </Example>
      <Example heading="ModalBox Large Example" handlebars={ModalBoxLgExampleRaw}>
        {modalBoxLgExample}
      </Example>
      <Example heading="ModalBox No Header Example" handlebars={ModalBoxNoHeaderExampleRaw}>
        {modalBoxNoHeaderExample}
      </Example>
    </Documentation>
  );
};

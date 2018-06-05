import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import ModalBoxBasicExample from './modal-box-basic-example.hbs';
import ModalBoxLgExample from './modal-box-lg-example.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const modalBoxBasicExample = ModalBoxBasicExample();
  const modalBoxLgExample = ModalBoxLgExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="ModalBox Basic Example">{modalBoxBasicExample}</Example>
      <Example heading="ModalBox Large Example">{modalBoxLgExample}</Example>
    </Documentation>
  );
};

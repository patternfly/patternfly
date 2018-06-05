import React from "react";
import Documentation from "@siteComponents/Documentation";
import Example from "@siteComponents/Example";
import docs from "../docs/code.md";
import ModalExample from "./modal-example.hbs";
import ModalLgExample from "./modal-lg-example.hbs";
// import '../styles.scss';

export const Docs = docs;

export default () => {
  const modalExample = ModalExample();
  const modalLgExample = ModalLgExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Modal Demo" fullPageOnly="true">{modalExample}</Example>
      <Example heading="Modal Demo - Large" fullPageOnly="true">{modalLgExample}</Example>
    </Documentation>
  );
};

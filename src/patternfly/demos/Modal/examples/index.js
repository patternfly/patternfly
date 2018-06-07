import React from "react";
import Documentation from "@siteComponents/Documentation";
import Example from "@siteComponents/Example";
import docs from "../docs/code.md";
import ModalExample from "./modal-example.hbs";
import ModalScrollExample from "./modal-scroll-example.hbs";
import ModalLgExample from "./modal-lg-example.hbs";
// import '../styles.scss';

export const Docs = docs;

export default () => {
  const modalExample = ModalExample();
  const modalScrollExample = ModalScrollExample();
  const modalLgExample = ModalLgExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Modal Demo" fullPageOnly="true">{modalExample}</Example>
      <Example heading="Modal Demo - Content long enough to scroll" fullPageOnly="true">{modalScrollExample}</Example>
      <Example heading="Modal Demo - Large" fullPageOnly="true">{modalLgExample}</Example>
    </Documentation>
  );
};

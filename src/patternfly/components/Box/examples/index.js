import React from "react";
import Documentation from "@siteComponents/Documentation";
import Example from "@siteComponents/Example";
import docs from "../docs/code.md";
import BoxBasicExample from "./box-basic-example.hbs";
import BoxNoFooterExample from "./box-no-footer-example.hbs";
import BoxNoHeaderExample from "./box-no-header-example.hbs";
import BoxContentOnlyExample from "./box-content-only-example.hbs";
import "../styles.scss";

export const Docs = docs;

export default () => {
  const boxBasicExample = BoxBasicExample();
  const boxNoFooterExample = BoxNoFooterExample();
  const boxNoHeaderExample = BoxNoHeaderExample();
  const boxContentOnlyExample = BoxContentOnlyExample();

  return (
    <Documentation docs={Docs}>
  <Example heading="Box">{boxBasicExample}</Example>
  <Example heading="Box with no footer">{boxNoHeaderExample}</Example>
  <Example heading="Box with no header">{boxNoFooterExample}</Example>
  <Example heading="Box with only a content section">{boxContentOnlyExample}</Example>
    </Documentation>
  );
};

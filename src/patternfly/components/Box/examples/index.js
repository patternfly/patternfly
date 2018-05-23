import React from "react";
import Documentation from "@siteComponents/Documentation";
import Example from "@siteComponents/Example";
import docs from "../docs/code.md";
import BoxBasicExample from "./box-basic-example.hbs";
import BoxFullBleedExample from "./box-fullbleed-example.hbs";
import "../styles.scss";

export const Docs = docs;

export default () => {
  const boxBasicExample = BoxBasicExample();
  const boxFullBleedExample = BoxFullBleedExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Box">{boxBasicExample}</Example>
      <Example heading="Box - Full bleed">{boxFullBleedExample}</Example>
    </Documentation>
  );
};

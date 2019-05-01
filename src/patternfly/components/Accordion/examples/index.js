import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import accordionFluidExampleRaw from '!raw!./accordion-fluid-example.hbs';
import accordionFixedExampleRaw from '!raw!./accordion-fixed-example.hbs';
import AccordionFluidExample from './accordion-fluid-example.hbs';
import AccordionFixedExample from './accordion-fixed-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const accordionFluidExample = AccordionFluidExample();
  const accordionFixedExample = AccordionFixedExample();
  const headingText = 'Accordion';
  const variablesRoot = 'pf-c-accordion';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Accordion fluid example" handlebars={accordionFluidExampleRaw}>
        {accordionFluidExample}
      </Example>
      <Example heading="Accordion fixed example" handlebars={accordionFixedExampleRaw}>
        {accordionFixedExample}
      </Example>
    </Documentation>
  );
};

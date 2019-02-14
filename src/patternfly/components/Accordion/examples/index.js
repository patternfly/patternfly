import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import accordionFluidExampleRaw from '!raw!./accordion-fluid-example.hbs';
import accordionFixedExampleRaw from '!raw!./accordion-fixed-example.hbs';
import AccordionFluidExample from './accordion-fluid-example.hbs';
import AccordionFixedExample from './accordion-fixed-example.hbs';
import docs from '../docs/code.md';
import '../accordion.scss';

export const Docs = docs;

export default () => {
  const accordionFluidExample = AccordionFluidExample();
  const accordionFixedExample = AccordionFixedExample();
  const headingText = 'Accordion';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Accordion Fluid Example" handlebars={accordionFluidExampleRaw}>
        {accordionFluidExample}
      </Example>
      <Example heading="Accordion Fixed Example" handlebars={accordionFixedExampleRaw}>
        {accordionFixedExample}
      </Example>
    </Documentation>
  );
};

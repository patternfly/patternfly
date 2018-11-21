import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import breadcrumbExampleRaw from '!raw!./breadcrumb-example.hbs';
import breadcrumbWithTitleExampleRaw from '!raw!./breadcrumb-with-title-example.hbs';
import breadcrumbWithoutHomeLinkRaw from '!raw!./breadcrumb-without-home-link-example.hbs';
import BreadcrumbExample from './breadcrumb-example.hbs';
import BreadcrumbWithTitleExample from './breadcrumb-with-title-example.hbs';
import BreadcrumbWithoutHomeLink from './breadcrumb-without-home-link-example.hbs';
import breadcrumbWithTitleExampleDoc from '../docs/breadcrumb-with-title.md';
import docs from '../docs/code.md';
import '../breadcrumb.scss';

export const Docs = docs;

export default () => {
  const breadcrumbExample = BreadcrumbExample();
  const breadcrumbWithTitleExample = BreadcrumbWithTitleExample();
  const breadcrumbWithoutHomeLink = BreadcrumbWithoutHomeLink();

  return (
    <Documentation docs={Docs}>
      <Example heading="Breadcrumb" handlebars={breadcrumbExampleRaw}>
        {breadcrumbExample}
      </Example>
      <Example heading="Breadcrumb without Home Link" handlebars={breadcrumbWithoutHomeLinkRaw}>
        {breadcrumbWithoutHomeLink}
      </Example>
      <Example
        heading="Breadcrumb with Heading"
        handlebars={breadcrumbWithTitleExampleRaw}
        docs={breadcrumbWithTitleExampleDoc}
      >
        {breadcrumbWithTitleExample}
      </Example>
    </Documentation>
  );
};

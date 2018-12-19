import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import listUnorderedNoStyleExampleRaw from '!raw!./list-unordered-no-style-example.hbs';
import listUnorderedAvatarExampleRaw from '!raw!./list-unordered-avatar-example.hbs';
import listUnorderedAvatarStarboxExampleRaw from '!raw!./list-unordered-avatar-starbox-example.hbs';
import listUnorderedDoubleNoStyleExampleRaw from '!raw!./list-unordered-double-no-style-example.hbs';
import listUnorderedDoubleAvatarExampleRaw from '!raw!./list-unordered-double-avatar-example.hbs';
import listUnorderedDoubleAvatarStarboxExampleRaw from '!raw!./list-unordered-double-avatar-starbox-example.hbs';
import listUnorderedExampleRaw from '!raw!./list-unordered-example.hbs';
import listOrderedExampleRaw from '!raw!./list-ordered-example.hbs';
import listInlineExampleRaw from '!raw!./list-inline-example.hbs';
import ListUnorderedNoStyleExample from './list-unordered-no-style-example.hbs';
import ListUnorderedAvatarExample from './list-unordered-avatar-example.hbs';
import ListUnorderedAvatarStarboxExample from './list-unordered-avatar-starbox-example.hbs';
import ListUnorderedDoubleNoStyleExample from './list-unordered-double-no-style-example.hbs';
import ListUnorderedDoubleAvatarExample from './list-unordered-double-avatar-example.hbs';
import ListUnorderedDoubleAvatarStarboxExample from './list-unordered-double-avatar-starbox-example.hbs';
import ListUnorderedExample from './list-unordered-example.hbs';
import ListOrderedExample from './list-ordered-example.hbs';
import ListInlineExample from './list-inline-example.hbs';
import docs from '../docs/code.md';
import '../list.scss';

export const Docs = docs;

export default () => {
  const listUnorderedNoStyleExample = ListUnorderedNoStyleExample();
  const listUnorderedAvatarExample = ListUnorderedAvatarExample();
  const listUnorderedAvatarStarboxExample = ListUnorderedAvatarStarboxExample();
  const listUnorderedDoubleNoStyleExample = ListUnorderedDoubleNoStyleExample();
  const listUnorderedDoubleAvatarExample = ListUnorderedDoubleAvatarExample();
  const listUnorderedDoubleAvatarStarboxExample = ListUnorderedDoubleAvatarStarboxExample();
  const listUnorderedExample = ListUnorderedExample();
  const listOrderedExample = ListOrderedExample();
  const listInlineExample = ListInlineExample();
  const headingText = 'List';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Unordered List No Style" handlebars={listUnorderedNoStyleExampleRaw}>
        {listUnorderedNoStyleExample}
      </Example>
      <Example heading="Unordered List Avatar" handlebars={listUnorderedAvatarExampleRaw}>
        {listUnorderedAvatarExample}
      </Example>
      <Example heading="Unordered List Avatar with Star Checkbox" handlebars={listUnorderedAvatarStarboxExampleRaw}>
        {listUnorderedAvatarStarboxExample}
      </Example>
      <Example heading="Unordered List Double No Style" handlebars={listUnorderedDoubleNoStyleExampleRaw}>
        {listUnorderedDoubleNoStyleExample}
      </Example>
      <Example heading="Unordered List Double Avatar Style" handlebars={listUnorderedDoubleAvatarExampleRaw}>
        {listUnorderedDoubleAvatarExample}
      </Example>
      <Example
        heading="Unordered List Double Avatar with Star Checkbox"
        handlebars={listUnorderedDoubleAvatarStarboxExampleRaw}
      >
        {listUnorderedDoubleAvatarStarboxExample}
      </Example>
      <Example heading="Unordered List" handlebars={listUnorderedExampleRaw}>
        {listUnorderedExample}
      </Example>
      <Example heading="Ordered List" handlebars={listOrderedExampleRaw}>
        {listOrderedExample}
      </Example>
      <Example heading="List Inline" handlebars={listInlineExampleRaw}>
        {listInlineExample}
      </Example>
    </Documentation>
  );
};

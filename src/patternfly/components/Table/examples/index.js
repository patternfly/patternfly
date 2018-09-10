import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import tableSimpleExampleRaw from '!raw!./table-simple-example.hbs';
import tableSortableExampleRaw from '!raw!./table-sortable-example.hbs';
import tableSimpleWithCheckboxesExampleRaw from '!raw!./table-simple-with-checkboxes-example.hbs';
import tableExpandableExampleRaw from '!raw!./table-expandable-example.hbs';
import tableCompactExampleRaw from '!raw!./table-compact-example.hbs';
import tableWidthExampleRaw from '!raw!./table-width-example.hbs';

import TableSimpleExample from './table-simple-example.hbs';
import tableSimpleDoc from '../docs/table-simple.md';

import TableSortableExample from './table-sortable-example.hbs';
import tableSortableDoc from '../docs/table-sortable.md';

import TableSimpleWithCheckboxesExample from './table-simple-with-checkboxes-example.hbs';
import tableCheckboxesActionsDoc from '../docs/table-checkboxes-actions.md';

import TableExpandableExample from './table-expandable-example.hbs';
import tableExpandableDoc from '../docs/table-expandable.md';

import TableCompactExample from './table-compact-example.hbs';
import tableCompactDoc from '../docs/table-compact.md';

import TableWidthExample from './table-width-example.hbs';
import tableWidthDoc from '../docs/table-width.md';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

// document.addEventListener('DOMContentLoaded', () => {
//   function getInitialWidth(el) {
//     const parent = el.parentNode;

//     // save parent width
//     const parentInitialWidth = parent.style.width;

//     // set parent width to zero to get minimum width of table
//     parent.style.width = '0';

//     // get mimimum rendered with of table
//     const tableInitialWidth = table.scrollWidth;

//     // reset parent width to initial value
//     parent.style.width = parentInitialWidth;
//     return tableInitialWidth;
//   }

//   function setResponsiveClass(el, initialWidth) {
//     const parentWidth = el.parentNode.offsetWidth;

//     if (initialWidth > parentWidth && !el.classList.contains('pf-m-grid')) {
//       el.classList.add('pf-m-grid');
//     } else if (initialWidth < parentWidth && el.classList.contains('pf-m-grid')) {
//       el.classList.remove('pf-m-grid');
//     }
//   }

//   const table = document.getElementById('responsive-table');

//   if (table) {
//     const tableInitialWidth = getInitialWidth(table.parentNode);
//     setResponsiveClass(table, tableInitialWidth);

//     window.addEventListener('resize', () => {
//       setResponsiveClass(table, tableInitialWidth);
//     });
//   }
// });

export default () => {
  const tableSimpleExample = TableSimpleExample();
  const tableSortableExample = TableSortableExample();
  const tableExpandableExample = TableExpandableExample();
  const tableCompactExample = TableCompactExample();
  const tableSimpleWithCheckboxesExample = TableSimpleWithCheckboxesExample();
  const tableWidthExample = TableWidthExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Simple Table" handlebars={tableSimpleExampleRaw} docs={tableSimpleDoc} minHeight="2em">
        {tableSimpleExample}
      </Example>
      <Example heading="Sortable Table" handlebars={tableSortableExampleRaw} docs={tableSortableDoc}>
        {tableSortableExample}
      </Example>
      <Example
        heading="Table with checkboxes/actions"
        handlebars={tableSimpleWithCheckboxesExampleRaw}
        docs={tableCheckboxesActionsDoc}
      >
        {tableSimpleWithCheckboxesExample}
      </Example>
      <Example heading="Expandable Table" handlebars={tableExpandableExampleRaw} docs={tableExpandableDoc}>
        {tableExpandableExample}
      </Example>
      <Example heading="Compact Table" handlebars={tableCompactExampleRaw} docs={tableCompactDoc}>
        {tableCompactExample}
      </Example>
      <Example heading="Table with Width Modifiers" handlebars={tableWidthExampleRaw} docs={tableWidthDoc}>
        {tableWidthExample}
      </Example>
    </Documentation>
  );
};

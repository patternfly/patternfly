import React from 'react';
import PrismCode from 'react-prism';
import Link from 'gatsby-link';

import 'prismjs/themes/prism-coy.css';
import './styles.scss';

export default ({ children, components }) => {
  const output = children;
  let navigationItems;
  const processedComponents = [];
  if (components) {
    navigationItems = components.map(navItem => {
      let path = '';
      if (processedComponents.indexOf(navItem) === -1) {
        processedComponents.push(navItem);
        const componentName = navItem.slice(5, navItem.length).trim();

        if (navItem.startsWith('pf-l')) {
          path = `/layouts/${componentName}/examples`;
        } else if (navItem.startsWith('pf-c')) {
          path = `/components/${componentName}/examples`;
        }
        return (
          <li key={`handlebars-nav-${path}`}>
            <code>
              <Link to={path} target="_blank">
                {componentName}
              </Link>
            </code>
          </li>
        );
      }
      return null;
    });
  }

  const codeSection = output ? (
    <PrismCode className="language-html">{output}</PrismCode>
  ) : (
    <span>No Handlebars Content Loaded</span>
  );

  return (
    <div className="Handlebars">
      <div className="Handlebars__header" />
      <div className="Handlebars__body">
        <pre className="Handlebars__pre">{codeSection}</pre>
      </div>
      <div className="Handlebars__componentLink">
        Components used: <ul>{navigationItems}</ul>
      </div>
    </div>
  );
};

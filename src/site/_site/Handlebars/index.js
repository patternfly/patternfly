import React from 'react';
import PrismCode from 'react-prism';

import 'prismjs/themes/prism-coy.css';
import './styles.scss';

export default ({ children }) => {
  const output = children;

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
    </div>
  );
};

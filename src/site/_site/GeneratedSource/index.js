import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PrismCode from 'react-prism';
import pretty from 'pretty';
import CodepenButton from '@siteComponents/CodepenButton';

import 'prismjs/themes/prism-coy.css';
import './styles.scss';

export default ({ children }) => {
  const output =
    typeof children === 'string'
      ? children
      : ReactDOMServer.renderToStaticMarkup(children).replace(/ "/g, '"');
  const indentedOutput = pretty(output, { ocd: true });

  return (
    <div className="GeneratedSource">
      <div className="GeneratedSource__header">
        <h4 className="GeneratedSource_title">HTML</h4>
        <CodepenButton html={indentedOutput} />
      </div>
      <div className="GeneratedSource__body">
        <pre className="GeneratedSource__pre">
          <PrismCode className="language-html">{indentedOutput}</PrismCode>
        </pre>
      </div>
    </div>
  );
};

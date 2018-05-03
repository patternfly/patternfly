import React from 'react';
import Preview from '@siteComponents/Preview';
import GeneratedSource from '@siteComponents/GeneratedSource';

import 'prismjs/themes/prism-coy.css';
import './styles.scss';

export default ({ heading, description, children, className = '', isViewport = false }) => (
  <div className={`Example ${className}`}>
    <div className="Example__header">
      <h3 className="Example_heading">{heading}</h3>
      {description && <p className="Example_description">{description}</p>}
    </div>
    <div className="Example__section">
      <Preview isViewport={isViewport}>{children}</Preview>
    </div>
    <div className="Example__section">
      <GeneratedSource>{children}</GeneratedSource>
    </div>
  </div>
);

import React from 'react';
import Preview from '@siteComponents/Preview';
import GeneratedSource from '@siteComponents/GeneratedSource';

import 'prismjs/themes/prism-coy.css';
import './styles.scss';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFull: false };
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      isFull: window.location.pathname.endsWith('-full/')
    });
  }

  render() {
    const {
      heading,
      description,
      children,
      className = '',
      isViewport = false
    } = this.props;
    const output = { __html: this.props.children };
    return !this.state.isFull ? (
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
    ) : (
      <div className={className} dangerouslySetInnerHTML={output} />
    );
  }
}

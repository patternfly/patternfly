import React from 'react';
import Preview from '@siteComponents/Preview';
import GeneratedSource from '@siteComponents/GeneratedSource';

import 'prismjs/themes/prism-coy.css';
import './styles.scss';

export default class Example extends React.Component {
  static parseQueryString(queryString) {
    const params = {};
    let temp;
    let i;
    let l;
    // Split into key/value pairs
    const queries = queryString.split('&');
    // Convert the array of strings into an object
    for (i = 0, l = queries.length; i < l; i++) {
      temp = queries[i].split('=');
      params[temp[0]] = temp[1];
    }
    return params;
  }

  constructor(props) {
    super(props);
    this.state = { isFull: false };
  }

  componentDidMount() {
    let showComponent = true;
    if (window.location.search !== '') {
      // specific component was requested - make sure it matches
      const queryObject = Example.parseQueryString(
        window.location.search.substr(1)
      );
      if (queryObject.component !== encodeURI(this.props.heading)) {
        showComponent = false;
      }
    }

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      isFull: window.location.pathname.indexOf('-full') > 0,
      showComponent
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
    if (!this.state.isFull) {
      return (
        <div className={`Example ${className}`}>
          <div className="Example__header">
            <h3 className="Example_heading">{heading}</h3>
            {description && (
              <p className="Example_description">{description}</p>
            )}
          </div>
          <div className="Example__section">
            <Preview isViewport={isViewport} heading={heading}>
              {children}
            </Preview>
          </div>
          <div className="Example__section">
            <GeneratedSource>{children}</GeneratedSource>
          </div>
        </div>
      );
    } else if (this.state.showComponent) {
      return <div dangerouslySetInnerHTML={output} />;
    }
    return null;
  }
}

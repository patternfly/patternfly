import React from 'react';
import Preview from '@siteComponents/Preview';
import GeneratedSource from '@siteComponents/GeneratedSource';
import Handlebars from '@siteComponents/Handlebars';
import Link from 'gatsby-link';

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
    this.state = { isFull: false, codeView: 'source' };
  }

  componentDidMount() {
    let showComponent = true;
    if (window.location.search !== '') {
      // specific component was requested - make sure it matches
      const queryObject = Example.parseQueryString(window.location.search.substr(1));
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

  showView(codeView) {
    this.setState(prevState => ({
      codeView
    }));
  }

  render() {
    const {
      heading,
      description,
      children,
      className = '',
      isViewport = false,
      handlebars = '',
      fullPageOnly,
      docs
    } = this.props;
    const output = { __html: this.props.children };
    const htmlDocs = { __html: docs };
    const regex = /pf-[c|l]-[a-zA-Z-]* /gi;
    const matches = this.props.children.match(regex);
    let navigationItems;
    const processedComponents = [];
    if (matches) {
      navigationItems = matches.map(navItem => {
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
                <Link to={path}>{componentName}</Link>
              </code>
            </li>
          );
        }
        return null;
      });
    }

    const sourceTab =
      this.state.codeView === 'source' ? (
        <GeneratedSource>{children}</GeneratedSource>
      ) : (
        <Handlebars>{handlebars}</Handlebars>
      );
    if (!this.state.isFull) {
      return (
        <div className={`Example ${className}`}>
          <div className="Example__header">
            <h3 className="Example_heading">{heading}</h3>
            {description && <p className="Example_description">{description}</p>}
          </div>
          {htmlDocs && (
            <div className="Example__documentation">
              <p className="Example__documentation--text" dangerouslySetInnerHTML={htmlDocs} />
            </div>
          )}
          <div className="Example__section">
            <Preview isViewport={isViewport} heading={heading} fullPageOnly={fullPageOnly}>
              {children}
            </Preview>
          </div>
          <div className="Example__section">
            <ul className="pf-p-secondary-nav" role="tablist">
              <li className="pf-p-secondary-nav__item">
                <button
                  role="tab"
                  className={`pf-p-secondary-nav__link ${this.state.codeView === 'source' ? 'pf-m-active' : ''} `}
                  aria-selected={this.state.codeView === 'source'}
                  onClick={() => this.showView('source')}
                >
                  HTML
                </button>
              </li>
              <li className="pf-p-secondary-nav__item">
                <button
                  role="tab"
                  className={`pf-p-secondary-nav__link ${this.state.codeView === 'handlebars' ? 'pf-m-active' : ''} `}
                  aria-selected={this.state.codeView === 'handlebars'}
                  onClick={() => this.showView('handlebars')}
                >
                  Handlebars
                </button>
              </li>
            </ul>
            {sourceTab}
            <div className="Example__componentLink">
              Components used: <ul>{navigationItems}</ul>
            </div>
          </div>
        </div>
      );
    } else if (this.state.showComponent) {
      return <div dangerouslySetInnerHTML={output} />;
    }
    return null;
  }
}

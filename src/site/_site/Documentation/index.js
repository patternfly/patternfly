import React from 'react';
import './styles.scss';

export default class Documentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFull: false };
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      isFull: window.location.pathname.indexOf('-full') > 0
    });
  }

  render() {
    const { children, className = '', docs = '', heading = '' } = this.props;
    const HTML_DOCS = { __html: docs };
    return !this.state.isFull ? (
      <div className={`Documentation ${className}`}>
        <h3 className="Component_heading">{heading}</h3>
        <div className="Documentation__section">{children}</div>
        <h3 className="Documentation_heading">Documentation</h3>
        <div className="Documentation__docsection" dangerouslySetInnerHTML={HTML_DOCS} />
      </div>
    ) : (
      <div className={className}>
        <h1 className="pf-screen-reader">{this.props.heading} full example</h1>
        {children}
      </div>
    );
  }
}

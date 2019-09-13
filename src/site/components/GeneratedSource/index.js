import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PrismCode from 'react-prism';
import pretty from 'pretty';
import CodepenButton from '@siteComponents/CodepenButton';

import 'prismjs/themes/prism-coy.css';
import './styles.scss';

export default class GeneratedSource extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hideSource: true };
  }

  showView() {
    this.setState(prevState => ({
      hideSource: !prevState.hideSource
    }));
  }

  render() {
    const { children } = this.props;
    const output =
      typeof children === 'string' ? children : ReactDOMServer.renderToStaticMarkup(children).replace(/ "/g, '"');
    const indentedOutput = pretty(output, { ocd: true });

    return (
      <div className="GeneratedSource">
        <div className="GeneratedSource__header">
          <div className="GeneratedSource_title" />
          <span className="GeneratedSource__collapse">
            <button className="GeneratedSource__link" onClick={() => this.showView('source')}>
              {this.state.hideSource ? 'Expand code' : 'Collapse code'}
            </button>
          </span>
          <CodepenButton html={indentedOutput} />
        </div>
        <div className={`GeneratedSource__body ${this.state.hideSource ? 'body-collapse' : ''} `}>
          <pre className="GeneratedSource__pre">
            <PrismCode className="language-html">{indentedOutput}</PrismCode>
          </pre>
        </div>
      </div>
    );
  }
}

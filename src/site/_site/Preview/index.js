import React from 'react';
import Link from 'gatsby-link';
import './styles.scss';

export default class Preview extends React.Component {
  constructor(props) {
    super(props);
    const { viewport = '', heading } = props;
    this.state = { viewport, path: '', heading };
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      path: window.location.pathname
    });
  }

  activateViewport(viewportType) {
    this.setState(prevState => ({
      viewport:
        prevState.viewport === `is-${viewportType}` ? '' : `is-${viewportType}`
    }));
  }

  renderFullPageLink() {
    const fullPath = `${this.state.path.substr(
      0,
      this.state.path.length - 1
    )}-full?component=${this.state.heading}`;
    return (
      <Link
        to={fullPath}
        target="_blank"
        title="Open in new window"
        className="Preview__viewport-link"
      >
        <i className="fas fa-external-link-alt" />
      </Link>
    );
  }

  render() {
    const output = { __html: this.props.children };
    return (
      <div className={`Preview ${this.state.viewport}`}>
        <div className="Preview__header">
          <h4 className="Preview_title">
            Preview{this.props.isViewport ? ' (Represents Viewport)' : ''}
          </h4>
          <div>
            <button
              className="Preview__viewport-toggle is-xs-toggle"
              onClick={() => this.activateViewport('xs')}
            >
              <i className="fas fa-mobile-alt" />
            </button>
            <button
              className="Preview__viewport-toggle is-sm-toggle"
              onClick={() => this.activateViewport('sm')}
            >
              <i className="fas fa-mobile-alt" />
            </button>
            <button
              className="Preview__viewport-toggle is-md-toggle"
              onClick={() => this.activateViewport('md')}
            >
              <i className="fas fa-tablet-alt" />
            </button>
            <button
              className="Preview__viewport-toggle is-lg-toggle"
              onClick={() => this.activateViewport('lg')}
            >
              <i className="fas fa-desktop" />
            </button>
            <button
              className="Preview__viewport-toggle is-xl-toggle"
              onClick={() => this.activateViewport('xl')}
            >
              <i className="fas fa-desktop" />
            </button>
            {this.renderFullPageLink()}
          </div>
        </div>
        <div
          className={`Preview__body ${
            this.props.isViewport ? 'is-viewport' : ''
          }`}
          dangerouslySetInnerHTML={output}
        />
      </div>
    );
  }
}

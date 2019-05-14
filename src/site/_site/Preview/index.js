import React from 'react';
import { withPrefix } from 'gatsby';
import './styles.scss';

export default class Preview extends React.Component {
  constructor(props) {
    super(props);
    const { viewport = '', heading, minHeight } = props;
    this.state = { viewport, fullPath: '', heading, lights: true, minHeight };
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      fullPath: `${window.location.pathname.substr(0, window.location.pathname.length - 1)}-full?component=${
        this.state.heading
      }`
    });
  }

  activateViewport(viewportType) {
    this.setState(prevState => ({
      viewport: prevState.viewport === `is-${viewportType}` ? '' : `is-${viewportType}`
    }));
  }

  toggleLights() {
    this.setState(prevState => ({
      lights: !prevState.lights
    }));
  }

  renderFullPageLink() {
    return (
      <a
        href={withPrefix(this.state.fullPath)}
        target="_blank"
        title="Open in new window"
        className="Preview__viewport-link"
      >
        <i className="fas fa-external-link-alt" />
      </a>
    );
  }

  render() {
    const output = { __html: this.props.children };
    const background = this.state.lights ? '' : 'pf-t-dark pf-m-opaque-200';
    const preview = this.props.fullPageOnly ? (
      <div className="Preview__body ">
        This preview can only be accessed in&nbsp;
        <a href={withPrefix(this.state.fullPath)} target="_blank">
          full page mode
        </a>
        .
      </div>
    ) : (
      <div
        className={`Preview__body ${background} ${this.props.isViewport ? 'is-viewport' : ''}`}
        style={{ minHeight: this.state.minHeight }}
        dangerouslySetInnerHTML={output}
      />
    );
    return (
      <div className={`Preview ${this.state.viewport}`}>
        <div className="Preview__header">
          <h4 className="Preview_title">Preview{this.props.isViewport ? ' (Represents Viewport)' : ''}</h4>
          <div>
            <button className="Preview__viewport-toggle is-xs-toggle" onClick={() => this.activateViewport('xs')}>
              <i className="fas fa-mobile-alt" />
            </button>
            <button className="Preview__viewport-toggle is-sm-toggle" onClick={() => this.activateViewport('sm')}>
              <i className="fas fa-mobile-alt" />
            </button>
            <button className="Preview__viewport-toggle is-md-toggle" onClick={() => this.activateViewport('md')}>
              <i className="fas fa-tablet-alt" />
            </button>
            <button className="Preview__viewport-toggle is-lg-toggle" onClick={() => this.activateViewport('lg')}>
              <i className="fas fa-desktop" />
            </button>
            <button className="Preview__viewport-toggle is-xl-toggle" onClick={() => this.activateViewport('xl')}>
              <i className="fas fa-desktop" />
            </button>
            <button
              className="Preview__viewport-background-toggle"
              onClick={() => this.toggleLights()}
              title="Toggle dark theme"
            >
              <i className="fas fa-adjust" />
            </button>
            {this.renderFullPageLink()}
          </div>
        </div>
        {preview}
      </div>
    );
  }
}

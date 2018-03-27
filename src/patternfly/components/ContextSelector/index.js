import React from 'react';
import docs from './docs.md';
import './styles.scss';

export const Docs = docs;

function ContextSelectorItem({ children, href, isActive, onClick }) {
  const isActiveClass = isActive ? 'pf-is-active' : '';

  return (
    <li className="pf-c-context-selector__item">
      <a href="#" className={`pf-c-context-selector_link ${isActiveClass}`}>
        {children}
      </a>
    </li>
  );
}

class ContextSelector extends React.Component {
  state = {
    isExpanded: false
  };

  handleToggleClick = () => {
    if (this.state.isExpanded) {
      this.close();
    } else {
      this.open();
    }
  };

  open() {
    this.setState(() => ({
      isExpanded: true
    }));
  }

  close() {
    this.setState(() => ({
      isExpanded: false
    }));
  }

  render() {
    const { isExpanded } = this.state;
    const { toggleText } = this.props;

    const isExpandedClass = isExpanded ? 'pf-is-expanded' : '';

    return (
      <div className={`pf-c-context-selector ${isExpandedClass}`}>
        <button
          id="contextSelectorButton"
          className="pf-c-context-selector__toggle"
          type="button"
          aria-expanded={isExpanded}
          aria-haspopup="true"
          onClick={this.handleToggleClick}
        >
          {toggleText}
          <span className="fas fa-angle-down pf-c-context-selector_icon" />
        </button>
        <ul
          className="pf-c-context-selector__items"
          aria-hidden={!isExpanded}
          aria-labelledby="contextSelectorButton"
        >
          <ContextSelectorItem href="#">List Item 1</ContextSelectorItem>
          <ContextSelectorItem href="#">List Item 2</ContextSelectorItem>
          <ContextSelectorItem href="#" isActive>
            List Item 3
          </ContextSelectorItem>
          <ContextSelectorItem href="#">List Item 4</ContextSelectorItem>
        </ul>
      </div>
    );
  }
}

export default () => {
  return (
    <div style={{ background: '#000' }}>
      <ContextSelector toggleText="app-project" />
    </div>
  );
};

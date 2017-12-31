import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Tabs.css';
import TabsPane from './TabsPane';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabActive: this.props.tabActive
    }
  }

  setActiveTab(index) {
    this.setState({tabActive: index});
  }

  getTabMenuItems() {
    const menuItems = React.Children.map(this.props.children, (pane, index) => {
      const title = pane.props.title;
      const classes = classNames('tabs-menu-item', {'active': this.state.tabActive == index});
      return(
        <li key={index} className={classes}>
          <a onClick={() => {
            this.setActiveTab(index);
          }}>
            {title}
          </a>
        </li>
      )
    });

    return (
      <div className="tabs-navigation">
        <ul className="tabs-menu">
          {menuItems}
        </ul>
      </div>
    )
  }

  getSelectedPane() {
    const index = this.state.tabActive;
    // React.Children.map will return array even if there is only one child.
    const panes = React.Children.map(this.props.children, child => child);
    const paneContent = panes[Math.min(index, panes.length - 1)];

    return (
      <article className="tab-pane">
        <TabsPane>
          {paneContent}
        </TabsPane>
      </article>
    );
  }

  render() {
    return (
      <div className={classNames('tabs', this.props.className)}>
        {this.getTabMenuItems()}
        {this.getSelectedPane()}
      </div>
    )
  }
}

Tabs.propTypes = {
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  tabActive: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired
}

Tabs.defaultProps = {
  tabActive: 0,
  className: ''
}

export default Tabs

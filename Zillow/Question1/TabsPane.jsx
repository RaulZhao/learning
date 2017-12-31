import React from 'react';
import PropTypes from 'prop-types';

const TabsPane = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

TabsPane.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired
}

export default TabsPane

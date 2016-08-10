/* eslint-disable */

import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
// import { Actions } from "react-native-router-flux";

class TabOne extends Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  render() {
    return (
      <Text>
        The current scene is titled {this.props.title}
      </Text>
    );
  }
}

export default connect(({routes}) => ({
  routes
}))(TabOne);

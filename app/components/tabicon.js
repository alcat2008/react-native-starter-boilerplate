/* eslint-disable react/prefer-stateless-function */

import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabIcon: {

  },
  tabText: {
    fontSize: 12
  }
});

export default class TabIcon extends Component {

  static propTypes = {
    iconName: PropTypes.string,
    titleTab: PropTypes.string,
    selected: PropTypes.bool,
  }

  render() {
    return (
      <View style={[styles.tab]}>
        <Icon
          style={styles.tabIcon}
          name={this.props.iconName}
          size={26}
          color={this.props.selected ? '#4b4f54' : '#808080'}
        />
        <Text
          style={[styles.tabText, {
            color: this.props.selected ? '#4b4f54' : '#808080'
          }]}
        >
          {this.props.titleTab}
        </Text>
      </View>

      );
  }
}

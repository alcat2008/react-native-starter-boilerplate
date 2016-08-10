import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Login extends Component {

  render() {
    return (
      <View>
        <Text>登录</Text>
        <TextInput
          style={{
            fontSize: 18,
            color: '#000000',
            marginLeft: 9,
            // width: Device.width * (375 - 80) / 375,
          }}
        >

        </TextInput>
      </View>
    );
  }

}

// eslint-disable-next-line no-unused-vars, arrow-body-style
const mapStateToProps = state => ({
  device: state.device,
});

// eslint-disable-next-line no-unused-vars, arrow-body-style
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...rootActions, // eslint-disable-line no-undef
  }, dispatch),
  dispatch,
});

// export default connect(mapStateToProps, mapDispatchToProps)(Application);
export default connect(mapStateToProps)(Login);

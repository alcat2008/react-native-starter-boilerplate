import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button } from 'mx-artifacts';
import loginStyle from '../styles/login';

class Login extends Component {

  render() {
    const { device } = this.props;

    return (
      <View>
        <Text style={loginStyle.text}>登录页面</Text>
        <View style={loginStyle.inputContainer}>
          <Icon name="ios-call" size={30} color="#4F8EF7" style={loginStyle.inputIcon} />
          <TextInput
            style={loginStyle.input}
            autoCapitalize="none"
            keyboardType="numeric"
            placeholder="手机号"
            returnKeyType="go"
          />
        </View>
        <Button
          { ...loginStyle.btnProps }
          containerStyle={loginStyle.buttonContainer}
          // disabled={this.state.disabled}
          // onPress={() => this.sendSmsCodeToLoginMobile()}
        >登录</Button>
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

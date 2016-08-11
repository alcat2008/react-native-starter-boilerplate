import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Alert, Button } from 'mx-artifacts';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { isMobile } from '../utils/validator';

import loginStyle from '../styles/login';

import { fetchAuthentication } from '../actions/auth';

class Login extends Component {

  constructor(props) {
    super(props);
    // initial state
    this.state = {
      phone: '',
      disabled: true,
    };
  }

  _onChangeText = (text) => {
    this.setState({
      phone: text,
      disabled: text.length === 0,
    });
  };

  _onBtnPressed = () => {
    if (!isMobile(this.state.phone)) {
      Alert('请输入11位数字的手机号码');
    } else {
      const { dispatch } = this.props;
      dispatch(fetchAuthentication());
    }
  };

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
            autoCorrect={false}
            maxLength={11}
            keyboardType="numeric"
            placeholder="手机号"
            onChangeText={this._onChangeText}
          />
        </View>
        <Button
          { ...loginStyle.btnProps }
          containerStyle={loginStyle.buttonContainer}
          disabled={this.state.disabled}
          onPress={this._onBtnPressed}
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
  }),
  dispatch,
});

// export default connect(mapStateToProps, mapDispatchToProps)(Application);
export default connect(mapStateToProps)(Login);

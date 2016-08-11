
import { StyleSheet } from 'react-native';
import CommonStyle from './common';

const loginStyle = StyleSheet.create({
  text: {
    ...CommonStyle.center,
    fontSize: 30,
    alignSelf: 'center',
  },

  inputContainer: {
    height: 47,
    borderColor: '#b7c7dc',
    borderWidth: 1,
    marginTop: 12,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
  },

  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 9,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // ...CommonStyle.debugBorder,
  },

  input: {
    fontSize: 18,
    color: '#000000',
    marginLeft: 9,
    width: CommonStyle.device.width * (375 - 80) / 375,
  },

  buttonContainer: {
    marginTop: 18,
  },
});

export default Object.assign({
  btnProps: CommonStyle.btnProps,
}, loginStyle);


import { Device } from 'mx-artifacts';

const PlainStyle = {
  device: {
    width: Device.width,
    height: Device.height,
    statusBarHeight: Device.statusBarHeight,
    innerStatusBarSize: Device.innerStatusBarSize,
    navBarHeight: Device.navBarHeight,
  },

  colorSet: {
    btnEnable: '#b3c7f5',
    btnDisable: '#4b76df',
  },
};

const CommonStyle = {
  ...PlainStyle,

  debugBorder: {
    borderWidth: 2,
    borderColor: 'yellow',
  },

  fullScreen: {
    height: PlainStyle.device.height,
    width: PlainStyle.device.width,
  },

  block: {
    flex: 1,
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundColor: {
    backgroundColor: '#F5F5F5',
  },

  borderColor: {
    borderColor: '#D3D3D3',
  },

  fontColor: {
    color: '#000000',
  },

  fontSize: {
    fontSize: 16,
  },

  row: {
    flexDirection: 'row',
  },

  column: {
    flexDirection: 'column',
  },

  navBar: {
    flexDirection: 'row',
    borderColor: '#A47441',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: PlainStyle.device.navBarHeight,
    paddingTop: PlainStyle.device.innerStatusBarSize,
  },

  btnProps: {
    style: {
      fontSize: 20,
      color: '#ffffff',
    },
    disabledBackgroundColor: PlainStyle.colorSet.btnDisable,
    enabledBackgroundColor: PlainStyle.colorSet.btnDisable,
  }
};

export default CommonStyle;

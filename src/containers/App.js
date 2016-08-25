/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Alert, Loading } from 'mx-artifacts';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Scene,
  Reducer,
  Router,
  Switch,
  Modal,
  // Actions,
  // ActionConst
} from 'react-native-router-flux';

// Actions
// import rootActions from '../actions';
import * as authActions from '../actions/auth';

// Containers
import Login from './Login';
// import Start from './Start';
import TabOne from './TabOne';

// Components
import TabIcon from '../components/TabIcon';

import CommonStyle from '../styles/common';
const styles = {
  sceneStyle: {
    backgroundColor: '#ffffff',
    // marginTop: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    borderTopWidth: 1,
    borderTopColor: '#edeeee',
    backgroundColor: '#ffffff'
  },
  sceneDefault: {
    flex: 1,
    marginTop: 65
  }
};

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => { // eslint-disable-line arrow-body-style
    // console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

// define this based on the styles/dimensions you use
const getSceneStyle = (props, computedProps) => { // NavigationSceneRendererProps
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

class Application extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.global.token !== this.props.global.token) {
      console.log('===> token changed: ' + nextProps.global.token);
    }
  }

  render() {
    return (
      <View style={CommonStyle.fullScreen}>
        <Router
          createReducer={reducerCreate}
          getSceneStyle={getSceneStyle}
        >
          <Scene key="modal" component={Modal} >
            <Scene
              key="root"
              // eslint-disable-next-line arrow-body-style
              component={connect(state => ({ auth: state.auth }))(Switch)}
              tabs={true}
              // eslint-disable-next-line no-confusing-arrow
              selector={props => props.auth.authenticated ? 'TabBar' : 'Login'}
            >
              <Scene
                key="Login"
                title="Login"
                component={Login}
                hideNavBar={true}
                sceneStyle={styles.sceneStyle}
              />
              <Scene
                key="TabBar"
                tabs={true}
                tabBarStyle={styles.tabBarStyle}
              >
                <Scene
                  key="tabone"
                  title="Tab 1"
                  titleTab="Tab 1"
                  iconName="ios-book"
                  icon={TabIcon}
                  rightTitle="Logout"
                  onRight={() => this.props.actions.logout()}
                  component={TabOne}
                  sceneStyle={styles.sceneDefault}
                />
                <Scene
                  initial={true}
                  key="tabtwo"
                  title="Tab 2"
                  titleTab="Tab 2"
                  iconName="ios-contacts"
                  icon={TabIcon}
                  hideNavBar={true}
                  component={TabOne}
                  sceneStyle={styles.sceneDefault}
                />
              </Scene>
            </Scene>
          </Scene>
        </Router>

        <Loading
          isVisible={this.props.global.isFetching}
        />
      </View>
    );
  }
}


// eslint-disable-next-line no-unused-vars, arrow-body-style
const mapStateToProps = state => ({
  global: state.global,
});

// eslint-disable-next-line no-unused-vars, arrow-body-style
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    // ...rootActions, // eslint-disable-line no-undef
    ...authActions,
  }, dispatch),
});

// export default connect(mapStateToProps, mapDispatchToProps)(Application);
export default connect(mapStateToProps, mapDispatchToProps)(Application);

/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
// import { Text, View } from 'react-native';

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
import rootActions from '../actions';

// Containers
import Start from './Start';
import TabOne from './TabOne';

// Components
import TabIcon from '../components/TabIcon';

const styles = {
  sceneStyle: {
    backgroundColor: '#ffffff',
    marginTop: 25,
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
  render() {
    return (
      <Router
        createReducer={reducerCreate}
        getSceneStyle={getSceneStyle}
      >
        <Scene key="modal" component={Modal} >
          <Scene
            key="root"
            component={connect(state => ({ // eslint-disable-line arrow-body-style
              authentication: state.authentication
            }))(Switch)}
            tabs={true}
            // eslint-disable-next-line no-confusing-arrow
            selector={props => props.authentication.authenticated ? 'tabbar' : 'start'}
          >
            <Scene key="start" title="starter" component={Start} hideNavBar={true} sceneStyle={styles.sceneStyle} />
            <Scene
              key="tabbar"
              tabs={true}
              tabBarStyle={styles.tabBarStyle}
            >
              <Scene
                // initial={true}
                key="tabone"
                title="Tab 1"
                titleTab="Tab 1"
                iconName="ios-book"
                icon={TabIcon}
                component={TabOne}
                sceneStyle={styles.sceneDefault}
              >
                <Scene
                  key="tab2_1"
                  component={TabOne}
                  title="Tab #2_1"
                />
                <Scene
                  key="tab2_2"
                  component={TabOne}
                  title="Tab #2_2"
                  hideBackImage={true}
                  onBack={() => alert('Left button!')}
                  backTitle="Left"
                  duration={1}
                  panHandlers={null}
                />
              </Scene>
              <Scene
                key="tabtwo"
                title="Tab 2"
                titleTab="Tab 2"
                iconName="ios-contacts"
                icon={TabIcon}
                component={TabOne}
                sceneStyle={styles.sceneDefault}
              />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}


// eslint-disable-next-line no-unused-vars, arrow-body-style
const mapStateToProps = state => ({
  router: state.router,
});

// eslint-disable-next-line no-unused-vars, arrow-body-style
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...rootActions, // eslint-disable-line no-undef
  }, dispatch),
  dispatch,
});

// export default connect(mapStateToProps, mapDispatchToProps)(Application);
export default connect()(Application);

import React from 'react';
import { AppLoading, Permissions, Notifications } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './src/reducers/rootReducer';
import rootSaga from './src/Saga/rootSaga';

import * as Icon from '@expo/vector-icons';

import AppContainer from './src/router/AppRouter';

//Database import

const sagaMidlleware = createSagaMiddleware()

const initialState = {};

const middleWare = compose(
  applyMiddleware(sagaMidlleware)
)

const store = createStore(rootReducer, initialState, middleWare);
sagaMidlleware.run(rootSaga);


export default class App extends React.Component {

  state = {
    assetsLoaded: false,
  };

  constructor() {
    super();
    console.disableYellowBox = true;
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        // require('./assets/images/background.png'),
        // require('./assets/images/logo.png'),
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font
        // 'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        // 'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        // 'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
        // 'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
      }),
    ]);
  };


  render() {
    return (
      this.state.assetsLoaded ?
        <Provider store={store}>
          <AppContainer />
        </Provider>
        :
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onFinish={() => this.setState({ assetsLoaded: true })}
          onError={console.warn}
          autoHideSplash={true}
        />
    );
  }
}
import React, {Component} from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {OneScreen, TwoScreen} from './src/screens';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import createReducer from './src/store/reducers';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
import {StyleProvider} from 'native-base';

const StackNavigator = createStackNavigator(
  {
    HomeScreen : { screen : HomeScreen, navigationOptions : { headerMode : "none", } },
    OneScreen,
    TwoScreen
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

const store = createStore(createReducer(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {
  render() {
    return( 
      <Provider store={store}>
          <StyleProvider style={getTheme(platform)}>
            <AppContainer />
          </StyleProvider>
      </Provider>
      )
  }
}
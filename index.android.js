/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Navigator,
  Alert,
  View
} from 'react-native';

import Button from 'react-native-flat-button'

import Main from './Main';
import Accueil from './Accueil';

export default class WifiToulouse extends Component {
  render() {
    return (
      <Navigator
            initialRoute={{
                id: 'Accueil',
            }}
            renderScene={this.renderScene.bind(this)}
            configureScene={(route) => {
                if (route.sceneConfig) {
                    return route.sceneConfig;
                }
              return Navigator.SceneConfigs.FadeAndroid;
            }}
        />
    );
  }

  renderScene(route, navigator)
  {
     var routeId = route.id;
      if (routeId === 'Accueil')
      {
         return ( <Accueil
                        navigator={navigator} />
          );
      }
      
      if (routeId === 'Main')
      {
          return (<Main
                        navigator={navigator}/>
          );
      }
  }
}

AppRegistry.registerComponent('WifiToulouse', () => WifiToulouse);

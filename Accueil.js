import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Alert,
  View
} from 'react-native';

import Button from 'react-native-flat-button'

export default class Accueil extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Bienvenue sur Wifi Toulouse !
                </Text>
                <Text style={styles.instructions}>
                    Wifi Toulouse vous permet de localiser les zones ou vous avez un accés internet gratuit à disposition, dans la métropole Toulousaine.
                </Text>
                <Text style={styles.instructions}>
                    Cette application mobile, si simple soit elle, est là pour montrer les possibilités de développement de React-Native,
                    framework avec lesquel cette application à était faite. 
                </Text>
                <Button
                    type="custom"
                    onPress={() => this.loadMainView()}
                    backgroundColor={"#1abc9c"}
                    borderRadius={10}
                    shadowHeight={55}
                    containerStyle={styles.buttonContainer}
                    contentStyle={styles.content}        >
                    Commencer
                </Button>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('./Images/toulouse-metropole.jpg')}
                        style={{paddingTop: 200, width: 150, height: 25, resizeMode: 'contain'}} />
                    <Image source={require('./Images/mairie-de-toulouse.png')}
                        style={{paddingTop: 200, marginLeft: 30,  width: 150, height: 25, resizeMode: 'contain'}} />
                </View>
            </View>
        );
    }

    loadMainView()
    {
        this.props.navigator.push({id : "Main"});
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    fontStyle : "italic",
    textAlign: 'center',
    margin: 10,
  },
  infos:{
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
  ,
  instructions: {
    textAlign: 'center',
    paddingTop: 40,
    fontStyle : "italic",
    color: '#333333',
    marginBottom: 5,
  },
  buttonContainer: {
    width: 200,
    height: 50,
    marginTop: 50,
    marginVertical: 5
  }
});

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Alert,
  View
} from 'react-native';

import MapView from 'react-native-maps';

export default class Main extends Component {

    constructor(props){
      super(props);

//      const markerInfo = [];
      fetch('https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=bornes-wi-fi')
            .then((response) => response.json())
            .then((responseJson) => this.handlerResponse(responseJson))
         
         this.state = {
            markerInfo : [], loaded : false
        };
    }

   /*   componentDidMount(){
          this.setState({loaded: true});
}*/

     render() {
        const markers = this.state.markerInfo.map((markerInfo) =>
          <MapView.Marker
             coordinate={markerInfo}
             key={markerInfo.id}
          />);     
          return(
               <MapView
                   style={styles.map}
                   initialRegion={{
                     latitude: 43.600000,
                     longitude: 1.443333,
                     latitudeDelta: 0.0322,
                     longitudeDelta: 0.0321,
                }}>
                  {markers}
              </MapView>
           );
     }

     handlerResponse(responseJson)
     {
             const markerInfo = [];

         for (let i = 0; i < 9; i++) {
            markerInfo.push({
              longitude: responseJson.records[i].fields.geo_shape.coordinates[0],
              latitude: responseJson.records[i].fields.geo_shape.coordinates[1],
              id: i,
            });
        }
         this.setState ( {
            markerInfo : markerInfo, loaded : true
          });
     }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Platform,
  AsyncStorage
} from 'react-native';
//import Client from '../API/Client';

// import { Permissions } from 'expo-permissions'

// import axios from 'axios';

export class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      tokenExist:false,
      mobileExist:false
    }
    this.checkValidToken();
  }

  // Fetch the token from storage then navigate to our appropriate place
  checkValidToken = () => {
  };


  registerForPushNotificationsAsync = async (user) => {
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.IndicatorStyle}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

//Screen Styling
const styles = StyleSheet.create({
  IndicatorStyle: {
    flex: 1,
    justifyContent: "center"
  }
})
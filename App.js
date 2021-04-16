import React, { useEffect } from 'react';
import Providers from './navigation';
import MainTabScreen from './screens/MainTabScreen';
import { NavigationContainer } from '@react-navigation/native';

import { AppRegistry } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  useEffect(() => {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
    
    AppRegistry.registerComponent('app', () => App);
  }, [])

  return (
    <Providers />
  );
}

export default App;
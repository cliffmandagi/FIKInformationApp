import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging'

import { AuthContext } from './AuthProvider';

import MainTabScreen from '../screens/MainTabScreen';
import RootStackScreen from '../screens/RootStackScreen';

const Routes = () => {

  const setupCloudMessaging = async() => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if(initializing) setInitializing(false);
  }

  useEffect(() => {
    setupCloudMessaging();

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if(initializing) return null;

  return (
    <NavigationContainer>
      { user ? <MainTabScreen/> : <RootStackScreen/>}
      {/* <MainTabScreen /> */}
    </NavigationContainer>
  )
}

export default Routes;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabScreen from './screens/MainTabScreen';

import RootStackScreen from './screens/RootStackScreen';

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <MainTabScreen /> */}
    </NavigationContainer>
  )
}

export default App;
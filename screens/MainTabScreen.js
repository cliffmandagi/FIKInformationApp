import React from 'react';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

import { View, Text, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f4cf08"
      barStyle={{ backgroundColor: '#0c5aa8' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Detail"
        component={DetailStackScreen}
        options={{
          tabBarLabel: 'Detail',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-compass" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#0c5aa8",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
      }
    }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerTitle: "FIK Information App",
        headerLeft: ({ color }) => (
          <Icon name="ios-menu" color={color} size={35}/>
        )
      }}/>
    </HomeStack.Navigator>
  );
  
  const DetailStackScreen = ({navigation}) => (
    <DetailStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#0c5aa8",
      },
      headerTintColor: "#fff",
      headerLeft: ({ color }) => (
        <Icon name="ios-menu" color={color} size={35}/>
      )
    }}
    >
      <DetailStack.Screen name="Detail" component={DetailScreen}/>
    </DetailStack.Navigator>
  );
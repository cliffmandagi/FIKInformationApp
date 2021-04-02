import React, { useContext } from 'react';

import HomeScreen from './HomeScreen';
import CategoryScreen from './CategoryScreen';
import BookmarkScreen from './BookmarkScreen';

import { View, Text, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const HomeStack = createStackNavigator();
const CategoryStack = createStackNavigator();
const BookmarkStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

import { AuthContext } from '../navigation/AuthProvider';

const MainTabScreen = () => {
  return (
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
        name="Category"
        component={CategoryStackScreen}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-compass" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkStackScreen}
        options={{
          tabBarLabel: 'Bookmark',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-book" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  return (
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
        headerRight: ({ color }) => (
          <Icon name="ios-search-outline" color={color} size={35} onPress={() => {}}/>
        ),
        headerLeft: ({ color }) => (
          <Icon name="ios-log-out-outline" color={color} size={35} onPress={() => logout()}/>
        )
      }}/>
    </HomeStack.Navigator>
  )};
  
  const CategoryStackScreen = ({navigation}) => (
    <CategoryStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#0c5aa8",
      },
      headerTintColor: "#fff",
    }}
    >
      <CategoryStack.Screen name="Category" component={CategoryScreen}/>
    </CategoryStack.Navigator>
  )

  const BookmarkStackScreen = ({navigation}) => (
    <BookmarkStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#0c5aa8",
      },
      headerTintColor: "#fff",
    }}
    >
      <BookmarkStack.Screen name="Bookmark" component={BookmarkScreen}/>
    </BookmarkStack.Navigator>
  );
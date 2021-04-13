import React, { useContext } from 'react';

import HomeScreen from './HomeScreen';
import CategoryScreen from './CategoryScreen';
import AnnouncementScreen from './AnnouncementScreen';
import SearchScreen from './SearchScreen';
import NewsScreen from './NewsScreen';
import CategoryDetailScreen from './CategoryDetailScreen';

import { View, Text, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const HomeStack = createStackNavigator();
const CategoryStack = createStackNavigator();
const SearchStack = createStackNavigator();
const AnnouncementStack = createStackNavigator();
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
        name="Announcement"
        component={AnnouncementStackScreen}
        options={{
          tabBarLabel: 'Announcement',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-alert-circle" color={color} size={26} />
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
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-search" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
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
      }}/>
      <SearchStack.Screen name="News" component={NewsScreen}/>
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
      <SearchStack.Screen name="CategoryDetail" component={CategoryDetailScreen} options={{
        headerTitle: "Category"
      }}/>
    </CategoryStack.Navigator>
  )

  const SearchStackScreen = ({navigation}) => (
    <SearchStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#0c5aa8",
      },
      headerTintColor: "#fff",
    }}
    >
      <SearchStack.Screen name="Search" component={SearchScreen}/>
    </SearchStack.Navigator>
  );

  const AnnouncementStackScreen = ({navigation}) => (
    <AnnouncementStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#0c5aa8",
      },
      headerTintColor: "#fff",
    }}
    >
      <AnnouncementStack.Screen name="Announcement" component={AnnouncementScreen}/>
    </AnnouncementStack.Navigator>
  );
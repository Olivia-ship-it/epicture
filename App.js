import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Upload from './src/screens/UploadScreen'
import Home from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import Favorites from './src/screens/FavoritesScreen';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {

    useEffect(() => {
      if(!localStorage.getItem('favorites')){
          localStorage.setItem('favorites', JSON.stringify([]))
          console.log('creating favs')
      }else{
          console.log('favs already exist')
      }
  },[])

  useEffect(() => {
      if(!localStorage.getItem('uploadedImages')){
          localStorage.setItem('uploadedImages', JSON.stringify([]))
          console.log('creating uploadedImages')
      }else{
          console.log('uploadedImages already exist')
      }
  },[])

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#F2F2F2"
      inactiveColor="#A6371E"
      barStyle={{ backgroundColor: '#F26444', paddingBottom: 8}}
      tabBarOptions={{ showLabel: false }}
      labeled={false}
    >
      <Tab.Screen 
        name="Upload" 
        component={Upload}
        tabBarOptions={{ showLabel: false }}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="camera" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="apps" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Favorites" 
        component={Favorites}
        tabBarOptions={{ showLabel: false }} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      /> 
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

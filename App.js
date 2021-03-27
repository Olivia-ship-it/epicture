import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Upload from './src/screens/UploadScreen'
import Home from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import Favorites from './src/screens/FavoritesScreen';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#F2F2F2"
      inactiveColor="#A6371E"
      barStyle={{ backgroundColor: '#F26444', paddingBottom: 15}}
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

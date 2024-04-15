import { View, Text } from 'react-native'
import React from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Messages from '../Messages';
import Setting from '../Setting';


const Tab = createMaterialBottomTabNavigator();

const ButtonTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="tabs_home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="tabs_home"
        component={Home}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
          tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="Paramètres"
        component={Setting}
        options={{
          tabBarLabel: 'Paramètres',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ButtonTabs
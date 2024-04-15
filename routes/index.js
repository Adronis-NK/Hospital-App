import {View, Text} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../ecrans/Home';
import ButtonTabs from '../ecrans/tabs';
import MessageDetail from '../ecrans/MessageDetail';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={ButtonTabs} />
            <Stack.Screen name="MessageDetail" component={MessageDetail} options={ {headerShown : true}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

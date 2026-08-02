import React from 'react';

import {
  NavigationContainer
} from '@react-navigation/native';

import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';


import Splash from '../screens/Splash';
import Login from '../screens/Login';
import ChatList from '../screens/ChatList';
import ChatRoom from '../screens/ChatRoom';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';



const Stack = createNativeStackNavigator();



export default function AppNavigator(){

  return (

    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown:false
        }}
      >


        <Stack.Screen
          name="Splash"
          component={Splash}
        />


        <Stack.Screen
          name="Login"
          component={Login}
        />


        <Stack.Screen
          name="ChatList"
          component={ChatList}
        />


        <Stack.Screen
          name="ChatRoom"
          component={ChatRoom}
        />


        <Stack.Screen
          name="Profile"
          component={Profile}
        />


        <Stack.Screen
          name="Settings"
          component={Settings}
        />


      </Stack.Navigator>

    </NavigationContainer>

  );

}


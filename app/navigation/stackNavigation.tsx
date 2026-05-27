import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/profile';
import BottomNavigation from './BottomNavigation';
import Details from '../screens/details';
import SearchScreen from '../screens/search/SearchScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName ='BottomNavigation'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

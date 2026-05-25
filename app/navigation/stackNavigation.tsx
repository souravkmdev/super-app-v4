import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/profile';
import BottomNavigation from './BottomNavigation';
import Details from '../screens/details';
import Wishlist from '../screens/wishlist';
import NewCarsScreen from '../screens/newcar';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Wishlist"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="NewCarsScreen" component={NewCarsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

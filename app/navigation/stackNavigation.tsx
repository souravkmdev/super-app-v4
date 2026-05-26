import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import Details from '../screens/details';
import Wishlist from '../screens/wishlist';
import NewCarsScreen from '../screens/newcar';
import Notification from '../screens/notification';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomNavigation"
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />

      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="NewCarsScreen" component={NewCarsScreen} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="NewCars" component={NewCarsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomNavigation from './BottomNavigation';

import Details from '../screens/details';
import SearchScreen from '../screens/search/SearchScreen';

import InsuranceScreen from '../screens/insurance/InsuranceScreen';
import VehicleDetailsScreen from '../screens/insurance/VehicleDetailsScreen';
import OutletScreen from '../screens/insurance/OutletScreen';

import EBookingSecondScreen from '../screens/booking/EBookingSecondScreen';
import EBookingThirdScreen from '../screens/booking/EBookingThirdScreen';

import { RootStackParamList } from './RootStackParamList';
import PersonalDetails from '../screens/booking/PersonalDetails';
import BookingType from '../screens/booking';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="PersonalDetails"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Insurance" component={InsuranceScreen} />
      <Stack.Screen name="VehicleDetailsScreen" component={VehicleDetailsScreen} />
      <Stack.Screen name="OutletScreen" component={OutletScreen} />
      <Stack.Screen name="BookingType" component={BookingType} />
      <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
      <Stack.Screen name="EBookingSecondScreen" component={EBookingSecondScreen} />
      <Stack.Screen name="EBookingThirdScreen" component={EBookingThirdScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
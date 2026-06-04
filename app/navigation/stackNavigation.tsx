import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/profile';
import BottomNavigation from './BottomNavigation';
import Details from '../screens/details';
import SearchScreen from '../screens/search/SearchScreen';
import InsuranceScreen from '../screens/insurance/InsuranceScreen';
import VehicleDetailsScreen from '../screens/insurance/VehicleDetailsScreen';
import BookingForScreen from '../screens/booking/BookForScreen';
import EBookingScreen from '../screens/booking/EBookingScreen';
import OutletScreen from '../screens/insurance/OutletScreen';
import EBookingSecondScreen from '../screens/booking/EBookingSecondScreen';
import EBookingThirdScreen from '../screens/booking/EBookingThirdScreen';
import ProfileVerification from '../screens/profile/ProfileVerification';
import RewardsScreen from '../screens/profile/RewardsScreen';
import YourOrdersScreen from '../screens/profile/YourOrdersScreen';
import NewCarsScreen from '../screens/newcar/NewCarScreen';
import MyAddressScreen from '../screens/profile/MyAddressScreen';
import ContactUs from '../screens/profile/ContactUs';
import WebViewScreen from '../screens/profile/WebViewScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='BottomNavigation'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileVerification" component={ProfileVerification} />
      <Stack.Screen name="RewardsScreen" component={RewardsScreen} />
      <Stack.Screen name="YourOrdersScreen" component={YourOrdersScreen}/>
      <Stack.Screen name="MyAddressScreen" component={MyAddressScreen}/>
      <Stack.Screen name="ContactUs" component={ContactUs}/>

      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Insurance" component={InsuranceScreen} />
      <Stack.Screen name="VehicleDetailsScreen" component={VehicleDetailsScreen} />
      <Stack.Screen name="OutletScreen" component={OutletScreen} />

      <Stack.Screen name="BookingForScreen" component={BookingForScreen} />
      <Stack.Screen name="EBookingScreen" component={EBookingScreen} />
      <Stack.Screen name="EBookingSecondScreen" component={EBookingSecondScreen} />
      <Stack.Screen name="EBookingThirdScreen" component={EBookingThirdScreen} />

      <Stack.Screen name="NewCarsScreen" component={NewCarsScreen} />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
      
    </Stack.Navigator>
  );
};

export default StackNavigation;

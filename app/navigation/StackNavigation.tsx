import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import Details from '../screens/details';
import SearchScreen from '../screens/search';
import InsuranceScreen from '../screens/insurance/InsuranceScreen';
import VehicleDetailsScreen from '../screens/insurance/VehicleDetailsScreen';
import OutletScreen from '../screens/insurance/OutletScreen';
import EBookingSecondScreen from '../screens/booking/EBookingSecondScreen';
import EBookingThirdScreen from '../screens/booking/EBookingThirdScreen';
import { RootStackParamList } from './RootStackParamList';
import ServiceDetailScreen from '../screens/service/ServiceDetailScreen';
import NewCarsScreen from '../screens/newcar/NewCarScreen';
import ServiceScreen from '../screens/service/index';
import UsedCarsScreen from '../screens/usedCars';
import DrivingSchool from '../screens/drivingSchool';
import Notification from '../screens/notification';
import BookingType from '../screens/booking';
import Wishlist from '../screens/wishlist';
import BookingPersonalDetails from '../screens/booking/BookingPersonalDetails';
import ProfileVerification from '../screens/profile/ProfileVerification';
import RewardsScreen from '../screens/profile/RewardsScreen';
import YourOrdersScreen from '../screens/profile/YourOrdersScreen';
import MyAddressScreen from '../screens/profile/MyAddressScreen';
import ContactUs from '../screens/profile/ContactUs';
import WebViewScreen from '../screens/profile/WebViewScreen';
import AccessoriesScreen from '../screens/accessories';
import AccessoriesLists from '../screens/accessories/AccessoriesLists';
import DrivingCourseDetail from '../screens/drivingSchool/DrivingCourseDetail';
import VehicleDetails from '../screens/usedCars/sell';


const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Details"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen
        name="ProfileVerification"
        component={ProfileVerification}
      />
      <Stack.Screen name="RewardsScreen" component={RewardsScreen} />
      <Stack.Screen name="YourOrdersScreen" component={YourOrdersScreen} />
      <Stack.Screen name="MyAddressScreen" component={MyAddressScreen} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="InsuranceScreen" component={InsuranceScreen} />
      <Stack.Screen
        name="VehicleDetailsScreen"
        component={VehicleDetailsScreen}
      />
      <Stack.Screen name="OutletScreen" component={OutletScreen} />
      <Stack.Screen name="BookingType" component={BookingType} />
      <Stack.Screen
        name="BookingPersonalDetails"
        component={BookingPersonalDetails}
      />
      <Stack.Screen
        name="EBookingSecondScreen"
        component={EBookingSecondScreen}
      />
      <Stack.Screen
        name="EBookingThirdScreen"
        component={EBookingThirdScreen}
      />
      <Stack.Screen name="NewCarScreen" component={NewCarsScreen} />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
      <Stack.Screen name="UsedCarsScreen" component={UsedCarsScreen} />
      <Stack.Screen name="DrivingSchool" component={DrivingSchool} />
      <Stack.Screen name="AccessoriesScreen" component={AccessoriesScreen} />
      <Stack.Screen name="AccessoriesLists" component={AccessoriesLists} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="WishList" component={Wishlist} />
      <Stack.Screen name="ServiceScreen" component={ServiceScreen} />
      <Stack.Screen
        name="ServiceDetailScreen"
        component={ServiceDetailScreen}
      />
      <Stack.Screen name="DrivingCourseDetail" component={DrivingCourseDetail} />
      <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
    </Stack.Navigator>
  );

};

export default StackNavigation;

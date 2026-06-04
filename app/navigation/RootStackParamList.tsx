import { NavigatorScreenParams } from '@react-navigation/native';

export type BottomTabParamList = {
  Home: undefined;
  ResQ: undefined;
  Explore: undefined;
  Payment: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  BottomNavigation: NavigatorScreenParams<BottomTabParamList>;

  Details: undefined;
  Search: undefined;

  Insurance: undefined;
  VehicleDetailsScreen: undefined;
  OutletScreen: undefined;

  BookingType: undefined;
  PersonalDetails: undefined;
  EBookingSecondScreen: undefined;
  EBookingThirdScreen: undefined;
  NewCars: undefined;
};

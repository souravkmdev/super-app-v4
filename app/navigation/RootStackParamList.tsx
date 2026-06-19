import { NavigatorScreenParams } from '@react-navigation/native';
import { ServiceItem } from '../screens/service/components/ServiceCard';

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
    InsuranceScreen: undefined;
    VehicleDetailsScreen: undefined;
    OutletScreen: undefined;
    BookingType: undefined;
    BookingPersonalDetails: undefined;
    EBookingSecondScreen: undefined;
    EBookingThirdScreen: undefined;
    ServiceScreen: undefined;
    ServiceDetailScreen: { item: ServiceItem };
    NewCarScreen: undefined;
    Profile: undefined;
    ProfileVerification: undefined;
    RewardsScreen: undefined;
    YourOrdersScreen: undefined;
    MyAddressScreen: undefined;
    ContactUs: undefined;
    WebViewScreen: undefined;
    UsedCarsScreen: undefined;
    DrivingSchool: undefined;
    DrivingCourseDetail: { item: any };
    AccessoriesScreen: undefined;
    Notification: undefined;
    WishList: undefined;
    AccessoriesLists: undefined;
    LoginScreen: undefined;
    PasswordScreen: undefined;
    OTPScreen: undefined;
    SplashScreen: undefined;
};
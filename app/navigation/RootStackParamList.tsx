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
    Insurance: undefined;
    VehicleDetailsScreen: undefined;
    OutletScreen: undefined;
    BookingForScreen: undefined;
    EBookingScreen: undefined;
    EBookingSecondScreen: undefined;
    EBookingThirdScreen: undefined;
    ServiceScreen: undefined;
    ServiceDetailScreen: { item: ServiceItem };
    NewCarScreen: undefined;
};
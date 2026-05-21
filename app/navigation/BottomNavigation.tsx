import React, { memo, useMemo } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Profile from '../screens/profile';
import { Text } from '../globalComponents/CustomText';
import { useSizeConfig } from '../utils/context/SizeConfig';
import { fonts } from '../utils/constants/Theme';
import ResqScreen from '../screens/resq/ResqScreen';

type RouteName = 'Home' | 'ResQ' | 'Explore' | 'Payment' | 'Profile';

interface TabIconConfig {
  active: ImageSourcePropType;
  inactive: ImageSourcePropType;
}

interface TabItemProps {
  route: { key: string; name: string };
  isFocused: boolean;
  onPress: () => void;
  size: ReturnType<typeof useSizeConfig>;
}

const TAB_ICON_MAP: Record<RouteName, TabIconConfig> = {
  Home: {
    active: require('../assets/images/bottomNavigation/checked_home.png'),
    inactive: require('../assets/images/bottomNavigation/home.png'),
  },
  ResQ: {
    active: require('../assets/images/bottomNavigation/checked_resq.png'),
    inactive: require('../assets/images/bottomNavigation/resq.png'),
  },
  Explore: {
    active: require('../assets/images/bottomNavigation/checked_explore.png'),
    inactive: require('../assets/images/bottomNavigation/explore.png'),
  },
  Payment: {
    active: require('../assets/images/bottomNavigation/checked_payment.png'),
    inactive: require('../assets/images/bottomNavigation/payment.png'),
  },
  Profile: {
    active: require('../assets/images/bottomNavigation/checked_profile.png'),
    inactive: require('../assets/images/bottomNavigation/profile.png'),
  },
};

const TabLabel = memo(
  ({
    size,
    title,
    focused,
  }: {
    size: any;
    title: string;
    focused: boolean;
  }) => (
    <Text
      style={{
        marginTop: size.height * 0.5,
        fontSize: size.fontSize * 3,
        color: '#424242',
        fontFamily: focused ? fonts.bold : fonts.medium,
      }}
    >
      {title}
    </Text>
  ),
);

const TabItem = memo(({ route, isFocused, onPress, size }: TabItemProps) => {
  const iconConfig = TAB_ICON_MAP[route.name as RouteName];
  const iconSize = size.width * 6;

  return (
    <TouchableOpacity
      key={route.key}
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.tabItem,
        {
          paddingVertical: size.height,
          paddingHorizontal: size.width * 2,
          borderRadius: size.width * 10,
        },
      ]}
    >
      {iconConfig && (
        <Image
          source={isFocused ? iconConfig.active : iconConfig.inactive}
          style={{ width: iconSize, height: iconSize, resizeMode: 'contain', }}
        />
      )}
      <TabLabel size={size} title={route.name} focused={isFocused} />
    </TouchableOpacity>
  );
});

function MyTabBar({ state, navigation }: any) {
  const size = useSizeConfig();

  const wrapperStyle = useMemo(
    () => ({
      paddingHorizontal: size.width * 3,
      paddingVertical: size.height * 3,

    }),
    [size],
  );

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <View style={styles.tabContainer}>
        {state.routes.map((route: any, index: number) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TabItem
              key={route.key}
              route={route}
              isFocused={isFocused}
              onPress={onPress}
              size={size}
            />
          );
        })}
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const BottomNavigation = () => (
  <Tab.Navigator
    screenOptions={{ headerShown: false }}
    tabBar={props => <MyTabBar {...props} />}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="ResQ" component={ResqScreen} />
    <Tab.Screen name="Explore" component={Home} />
    <Tab.Screen name="Payment" component={Home} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default BottomNavigation;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffffff07',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 35,
    paddingVertical: 12,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#7980bf',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 4.65,
    elevation: 6,
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

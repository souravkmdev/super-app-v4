import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BookingHeader from '../booking/components/BookingHeader';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, fonts } from '../../utils/constants/Theme';
import Icon from 'react-native-vector-icons/Ionicons';
import ServiceCard, { ServiceItem } from './components/ServiceCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderLinearGradient from '../../globalComponents/HeaderLinearGradient';
import Header from '../../globalComponents/Header';

type RoutePropType = RouteProp<RootStackParamList, 'ServiceDetailScreen'>;

const relatedServiceData: ServiceItem[] = [
  {
    id: 'ac1',
    title: 'A/C Gas\nLeakage Check',
    description: 'Detects leaks & keeps\nyour AC efficient',
    image: require('../../assets/images/service/ac_gas_leak.png'),
  },
  {
    id: 'ac2',
    title: 'A/C Gas\nChanging Full',
    description: 'Complete gas refill\nfor maximum cooling',
    image: require('../../assets/images/service/ac_gas_full.png'),
  },
  {
    id: 'ac3',
    title: 'Blower Motor\nCleaning',
    description: 'Better airflow.\nFresher Cabin.',
    image: require('../../assets/images/service/blower_motor.png'),
  },
  {
    id: 'ac4',
    title: 'A/C Gas\nLeakage Check',
    description: 'Detects leaks & keeps\nyour AC efficient',
    image: require('../../assets/images/service/ac_fan.png'),
  },
];

const ServiceDetailScreen = ({ route }: { route: RoutePropType }) => {
  const { item } = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const size = useSizeConfig();
  const styles = getStyles(size);
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F7F7Fe',
      }}
    >
      <StatusBar barStyle="dark-content" />
      <HeaderLinearGradient />
      <Header title={item.title} onPress={() => {}} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.screenContainer}
      >
        <View style={styles.bannerContainer}>
          <Image
            source={require('../../assets/images/service/maintenance_banner.png')}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>

        <LinearGradient
          colors={['#BDADFFA3', '#e3dcffd2', '#3200FF1A']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={{
            width: '100%',
            borderRadius: size.width * 3,
          }}
        >
          <View style={styles.mainSection}>
            <Image
              source={require('../../assets/images/service/ac_gas_leak.png')}
              style={{ width: size.width * 24, height: size.height * 24 }}
            />
            <View style={styles.mainItemSec}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
          <View style={styles.btnSec}>
            <TouchableOpacity activeOpacity={0.5} style={styles.wishlistButton}>
              <Icon
                name="heart-outline"
                size={24}
                color="#6C5CE7"
                style={styles.icon}
              />

              <Text style={styles.wishlistText}>Wishlist</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate('BookingType')}
            >
              <LinearGradient
                colors={['#6C63FF', '#9B97FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.bookButton}
              >
                <Text style={styles.bookText}>Book Now</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <View style={styles.aboutSection}>
          <Text style={styles.aboutTitle}>About</Text>
          <Text style={styles.aboutDescription}>
            The Grand Vitra is a versatile SUV that combines style and
            functionality. With its spacious interior, advanced safety features
          </Text>
        </View>
        {/* Related Service */}
        <View style={styles.relatedServiceSec}>
          <Text style={styles.aboutTitle}>Related Service</Text>
          <FlatList
            data={relatedServiceData}
            renderItem={({ item }) => <ServiceCard item={item} />}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.relatedServiceContainer}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ServiceDetailScreen;

const getStyles = (size: any) =>
  StyleSheet.create({
    barStyle: {
      width: '100%',
      height: size.height * 21,
      position: 'absolute',
    },
    bannerContainer: {
      borderRadius: size.width * 3,
      overflow: 'hidden',
      marginBottom: size.width * 9.2,
      marginTop: size.width * 5.5,
    },
    bannerImage: {
      width: '100%',
      height: size.width * 30,
      borderRadius: size.width * 3,
    },
    screenContainer: {
      marginHorizontal: size.width * 4,
    },
    mainSection: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: size.width * 8,
      padding: size.width * 5,
    },
    mainItemSec: {
      width: '70%',
      gap: size.width * 2,
    },
    title: {
      fontSize: size.fontSize * 4.8,
      fontFamily: fonts.bold,
      color: colors.text_Primary,
    },
    description: {
      fontSize: size.fontSize * 3.5,
      fontFamily: fonts.regular,
      color: colors.text_Secondary,
      lineHeight: size.width * 5,
    },
    btnSec: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: size.width * 2.5,
      paddingBottom: size.width * 3,
      gap: size.width * 2,
    },
    wishlistButton: {
      width: size.width * 41,
      borderRadius: size.width * 4.1,
      backgroundColor: '#ECEAF4',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: size.width * 4.3,
    },

    bookButton: {
      width: size.width * 41,
      borderRadius: size.width * 4.1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: size.width * 4.3,
    },

    icon: {
      marginRight: size.width * 1.5,
    },

    wishlistText: {
      fontSize: size.fontSize * 4.4,
      fontFamily: fonts.medium,
      color: '#6C5CE7',
    },

    bookText: {
      fontSize: size.fontSize * 4.2,
      fontFamily: fonts.medium,
      color: '#FFFFFF',
    },
    aboutSection: {
      backgroundColor: '#F0ECFF',
      marginTop: size.width * 3.4,
      borderRadius: size.width * 2.4,
      padding: size.width * 5,
    },
    aboutTitle: {
      fontSize: size.fontSize * 4.5,
      fontFamily: fonts.medium,
      color: colors.text_Primary,
      marginBottom: size.width * 1.6,
    },
    aboutDescription: {
      fontSize: size.fontSize * 3.5,
      fontFamily: fonts.regular,
      lineHeight: size.width * 5,
      color: colors.text_Secondary,
    },
    relatedServiceSec: {
      marginTop: size.width * 3.4,
    },
    relatedServiceContainer: {
      gap: size.width * 2,
      marginTop: size.width * 2,
    },
  });

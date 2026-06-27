import React, { useMemo } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from '../../globalComponents/Header';
import HeaderLinearGradient from '../../globalComponents/HeaderLinearGradient';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import QuickContactCard from './components/QuickContactCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VersionCard from './components/VersionCard';
import SocialMediaRow from './components/SocialMediaRow';
import { Text } from '../../globalComponents/CustomText';
import { colors, fonts } from '../../utils/constants/Theme';

const AboutUs = ({ navigation }: any) => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const styles = useMemo(
    () => getStyles(size, insets),
    [size, insets],
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <HeaderLinearGradient />

      <Header
        title="About Us"
        onPress={() => navigation.goBack()}
      />

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Image
          source={require('../../assets/images/profile/aboutus.png')}
          style={styles.bannerImage}
          resizeMode="contain"
        />

        <View style={styles.quickContactRow}>
          <QuickContactCard
            iconComponent={
              <Ionicons
                name="call"
                size={size.width * 7}
                color="#846AF4"
              />
            }
            title="Trusted Service"
            subTitle="Reliable care for your vehicle"
          />

          <QuickContactCard
            iconComponent={
              <Ionicons
                name="mail"
                size={size.width * 7}
                color="#846AF4"
              />
            }
            title="Quality First"
            subTitle="Premium products & genuine parts"
          />

          <QuickContactCard
            icon={require('../../assets/images/contactus/whatsapp.png')}
            title="Customer Delight"
            subTitle="Your satisfaction is our priority"
          />
        </View>

        <VersionCard
          version="4.02"
          companyName="Kalyani Motors Pvt. Ltd."
          copyright="2026 All Rights Reserved"
        />

        <Text style={styles.followUsTitle}>
          Follow Us
        </Text>

        <SocialMediaRow />
      </KeyboardAwareScrollView>
    </View>
  );
};

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7FE',
    },

    scrollContent: {
      paddingHorizontal: size.width * 4,
      paddingBottom: size.height * 5,
    },

    bannerImage: {
      width: '100%',
      height: size.height * 60,
      marginTop: size.height * 6,
      alignSelf: 'center',
    },
    quickContactRow: {
      flexDirection: 'row',
      gap: size.width * 3,
      marginTop: size.height * 5,
    },
    followUsTitle: {
      marginTop: size.height * 8,
      marginBottom: size.height * 2,
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 4,
      color: colors.text_Primary,
    },
  });

export default AboutUs;
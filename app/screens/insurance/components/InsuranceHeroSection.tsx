import React, { useMemo } from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';

import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import FeatureCard from './FeatureCard';
import RegistrationCard from './RegistrationCard';

const FEATURES = [
  {
    title: 'Best Prices',
    subtitle: 'Compare & Save more',
  },
  {
    title: 'Quick & Easy',
    subtitle: 'Insure in just minutes',
  },
  {
    title: '100% Secure',
    subtitle: 'Your data is safe',
  },
];

const InsuranceHeroSection = ({
  navigation,
  registrationNumber,
  setRegistrationNumber,
  isValidRegistration,
}: any) => {

  const size = useSizeConfig();

  const styles = useMemo(
    () => getStyles(size),
    [size],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Smart Insurance,
      </Text>

      <Text style={styles.highlightText}>
        Total Protection
      </Text>

      <Text style={styles.subtitle}>
        Get instant car insurance{'\n'}
        quotes from trusted partners.
      </Text>

      <View style={styles.heroSection}>

        <Image
          source={require('../../../assets/images/insurance/insurance.png')}
          style={styles.bannerImage}
          resizeMode="contain"
        />

        <View style={styles.featureContainer}>

          {FEATURES.map((item, index) => (
            <FeatureCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}

        </View>

      </View>

      <RegistrationCard
        navigation={navigation}
        registrationNumber={registrationNumber}
        setRegistrationNumber={setRegistrationNumber}
        isValidRegistration={isValidRegistration}
      />

    </View>
  );
};

export default InsuranceHeroSection;

const getStyles = (size: any) =>
  StyleSheet.create({

    container: {
      paddingHorizontal: size.width * 5,
      paddingBottom: size.height * 11,
    },

    title: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 7.5,
      color: colors.text_Primary,
    },

    highlightText: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 5.6,
      color: '#5B4DFF',
    },

    subtitle: {
      marginTop: size.height * 1.8,
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 3,
      color: colors.text_Secondary,
    },

    heroSection: {
      marginTop: size.height * 8,
      minHeight: size.height * 29,
    },

    featureContainer: {
      zIndex: 10,
    },

    bannerImage: {
      position: 'absolute',
      right: -size.width * 10,
      top: -size.height * 21,
      width: size.width * 65,
      height: size.width * 85,
    },

  });
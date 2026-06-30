import { Image, ScrollView, StyleSheet, View } from 'react-native';
import React, { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../../globalComponents/Header';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { Text } from '../../globalComponents/CustomText';
import CustomButton from '../../globalComponents/CustomButton';
import { colors, fonts } from '../../utils/constants/Theme';
import FeatureGrid from '../../globalComponents/FeatureGrid';
import { accessoriesData } from './data';
import HeaderLinearGradient from '../../globalComponents/HeaderLinearGradient';

const AccessoriesScreen = ({ navigation } : any) => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  return (
    <View style={styles.container}>
      <HeaderLinearGradient />

      <Header title="Accessories" onPress={() => {}} />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <Image
          source={require('../../assets/images/accessories/hero_banner.png')}
          style={styles.heroBanner}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>About This Kalyani accessories</Text>
          <Text style={styles.infoDescription}>
            Designed for new drivers with no prior experience. This course
            builds a strong foundation and helps you become a safe, confident
            and responsible driver.
          </Text>
        </View>

        <View style={styles.featureSection}>
          <Text style={styles.featureTitle}>
            Why Choose Kalyani Accessories?
          </Text>
          <FeatureGrid featureData={accessoriesData} />
        </View>

        <Image
          source={require('../../assets/images/accessories/fotter_banner.png')}
          style={styles.footerBanner}
        />

        <CustomButton
          GradientColors={['#807AF4', '#A383FF', '#ADA9F6']}
          TextValue="Explore Products"
          mainstyle={styles.button}
          OnPress={() => {
            navigation.navigate('AccessoriesLists');
          }}
        />
      </ScrollView>
    </View>
  );
};

export default AccessoriesScreen;

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7Fe',
    },
    gradient: {
      width: '100%',
      height: size.height * 25,
      position: 'absolute',
      zIndex: 0,
    },
    scrollView: {
      marginTop: size.height * 4,
    },
    scrollContent: {
      gap: size.height * 3,
      paddingHorizontal: size.width * 5,
    },
    heroBanner: {
      width: '100%',
      height: size.height * 45,
      resizeMode: 'stretch',
      alignSelf: 'center',
    },
    infoContainer: {
      backgroundColor: '#f0ecff',
      padding: size.width * 4,
      borderRadius: size.width * 4,
      gap: size.width * 2,
    },
    infoTitle: {
      fontSize: size.width * 3.5,
      fontFamily: fonts.semiBold,
      color: colors.text_Primary,
    },
    infoDescription: {
      fontSize: size.width * 2.8,
      fontFamily: fonts.medium,
      color: colors.text_Secondary,
    },
    featureSection: {
      gap: size.height * 3,
    },
    featureTitle: {
      fontSize: size.width * 3.5,
      fontFamily: fonts.semiBold,
      color: colors.text_Primary,
    },
    footerBanner: {
      width: '100%',
      height: size.height * 40,
      resizeMode: 'stretch',
      alignSelf: 'center',
    },
    button: {
      paddingVertical: size.height * 1.5,
    },
  });

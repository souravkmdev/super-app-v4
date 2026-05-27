import React, { useMemo } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import { LinearGradient } from 'react-native-linear-gradient';
import CustomButton from '../../../globalComponents/CustomButton';

const TestDriveCard = () => {
  const size = useSizeConfig();
  const styles = useMemo(() => getStyles(size), [size]);

  return (
    <LinearGradient
      colors={['#F3ECFF', '#E6D9FF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >

      <View style={styles.tagContainer}>
        <Text style={styles.tagText}>
          New Feature
        </Text>
      </View>

      <Text style={styles.title}>
        Book A Test Drive
      </Text>

      <Text style={styles.subtitle}>
        Book a car in nearest showroom
      </Text>

      <CustomButton
        TextValue="Book Now"
        mainstyle={styles.button}
        PressableStyle={styles.buttonPressable}
        TextStyle={styles.buttonText}
        GradientColors={['#8F7BFF', '#6B4EFF']}
      />

      <Image
        source={require('../../../assets/images/explore/testdrive.png')}
        resizeMode="contain"
        style={styles.carImage}
      />
    </LinearGradient>
  );
};

export default TestDriveCard;

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      marginHorizontal: size.width * 4,
      marginTop: size.height * 2,
      backgroundColor: '#EEE7FF',
      borderRadius: size.width * 5,
      paddingTop: size.height * 5,
      paddingHorizontal: size.width * 4,
      paddingBottom: size.height * 3,
      overflow: 'hidden',
    },

    tagContainer: {
      alignSelf: 'flex-start',
      backgroundColor: '#FFFFFF',
      borderRadius: size.width * 1,
      paddingHorizontal: size.width * 2.5,
      borderWidth: 0.1,
      borderColor: colors.borderColor,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: size.height * 1,

    },

    tagText: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 2.3,
      color: colors.text_Primary,
    },

    title: {
      marginTop: size.height * 1,
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 4.5,
      color: colors.text_Primary,
    },

    subtitle: {
      marginTop: size.height * 1.5,
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 3,
      color: colors.text_Secondary,
    },

    button: {
      marginTop: size.height * 3,
      width: size.width * 30,
      borderRadius: size.width * 2.5,
    },

    buttonPressable: {
      height: size.height * 8,
      borderRadius: size.width * 2.5,
    },

    buttonText: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3,
      color: colors.white,
      textAlign: 'center',
    },

    carImage: {
      position: 'absolute',
      right: size.width * 0,
      top: size.height * 9,
      width: size.width * 50,
      height: size.width * 38,
    },
  });
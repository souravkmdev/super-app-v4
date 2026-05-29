import React, { useMemo } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import CustomButton from '../../../globalComponents/CustomButton';

const CompareCarsCard = () => {
  const size = useSizeConfig();
  const styles = useMemo(() => getStyles(size), [size]);

  return (
    <LinearGradient
      colors={['#F8F6FF', '#EEE7FF', '#E2D5FF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >

      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Compare Cars
        </Text>

        <Text style={styles.subtitle}>
          Ex-showroom price
        </Text>

        <CustomButton
          TextValue="Compare Now"
          mainstyle={styles.button}
          PressableStyle={styles.buttonPressable}
          TextStyle={styles.buttonText}
          GradientColors={['#9278FF', '#6A4DFF']}
        />
      </View>

      <View style={styles.rightContainer}>
        <Image
          source={require('../../../assets/images/explore/car1.png')}
          resizeMode="contain"
          style={styles.leftCar}
        />

        <View style={styles.vsWrapper}>
          <Image
            source={require('../../../assets/images/explore/vs.png')}
            resizeMode="contain"
            style={styles.lightning}
          />

          <LinearGradient
            colors={['#A58CFF', '#7B63FF', '#4F2DFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.vsCircle}
          >
            <Text style={styles.vsText}>
              VS
            </Text>
          </LinearGradient>
        </View>

        <Image
          source={require('../../../assets/images/explore/car2.png')}
          resizeMode="contain"
          style={styles.rightCar}
        />
      </View>
    </LinearGradient>
  );
};

export default CompareCarsCard;

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      marginTop: size.height * 4,
      marginHorizontal: size.width * 4,
      height: size.height * 28,
      borderRadius: size.width * 4.5,
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: size.width * 4,
    },

    contentContainer: {
      width: '43%',
      justifyContent: 'center',
      zIndex: 10,
    },

    title: {
      color: colors.text_Primary,
      fontSize: size.fontSize * 4,
      fontFamily: fonts.bold,
    },
    subtitle: {
      marginTop: size.height * 0.4,
      color: '#7A7688',
      fontSize: size.fontSize * 3,
      fontFamily: fonts.medium,
    },
    rightContainer: {
      flex: 1,
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: size.width * 0,
    },

    leftCar: {
      width: size.width * 16,
      height: size.width * 16,
      marginTop: size.height * 1.2,
    },

    rightCar: {
      width: size.width * 22,
      height: size.width * 24,
      marginTop: size.height * 1.5,
    },

    vsWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: size.width * 1.5,
    },

    lightning: {
      position: 'absolute',
      width: size.width * 14,
      height: size.width * 25,
      tintColor: '#FFFFFF',
    },

    vsCircle: {
      width: size.width * 8.5,
      height: size.width * 8.5,
      borderRadius: size.width * 10,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 6,
      shadowColor: '#6B4EFF',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 6,
    },

    vsText: {
      color: colors.white,
      fontSize: size.fontSize * 3,
      fontFamily: fonts.bold,
    },
    button: {
      marginTop: size.height * 1.8,
      borderRadius: size.width * 5,
      alignSelf: 'flex-start',
    },

    buttonPressable: {
      height: size.height * 8,
      paddingHorizontal: size.width * 2,
      // borderRadius: size.width * 8,
    },

    buttonText: {
      color: colors.white,
      fontSize: size.fontSize * 2.8,
      fontFamily: fonts.semiBold,
    },
  });
import React from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { Text } from '../../../globalComponents/CustomText';
import theme, { colors, fonts } from '../../../utils/constants/Theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const GarageCard = () => {
  const size = useSizeConfig();
  const styles = getStyles(size);

  return (
    <LinearGradient
      colors={['#6B63F6', "#9B94FF", '#7C74FF',]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.mainContainer}
    >

      <Image
        source={require('../../../assets/images/../images/home/car.png')}
        style={styles.carImage}
        resizeMode="contain"
      />


      <View style={styles.topRow}>
        <View style={styles.garageTitleRow}>

          <View style={styles.dot} />

          <Text style={styles.garageText}>
            My Garage
          </Text>
        </View>

         <MaterialIcons
         name="chevron-right"
         size={size.width * 3.5}
         color={colors.white}
         style={styles.arrowIcon}
       />
      </View>


      <Text style={styles.carName}>
        BMW X5 xDrive 40i
      </Text>


      <Text style={styles.numberText}>
        MH 12 AB 1234
      </Text>


      <View style={styles.statusRow}>
        <Text style={styles.statusLabel}>
          Status
        </Text>

        <View style={styles.activeBadge}>
          <Text style={styles.activeText}>
            Active
          </Text>
        </View>
      </View>


      <View style={styles.kmRow}>
        <Text style={styles.kmValue}>
          128
        </Text>

        <Text style={styles.kmText}>
          Km
        </Text>
      </View>

      <Text style={styles.rangeText}>
        Total Range
      </Text>


      <View style={styles.bottomRow}>
        <View style={styles.percentContainer}>
          <Image
            source={require('../../../assets/images/home/petrol.png')}
            style={styles.petrolIcon}
            resizeMode="contain"
          />

          <Text style={styles.percentText}>
            75%
          </Text>
        </View>

        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
      </View>
    </LinearGradient>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    mainContainer: {
      marginHorizontal: size.width * 3.5,
      marginTop: size.height * 2.5,
      borderRadius: size.width * 7,
      padding: size.width * 4,
      overflow: 'hidden',
      height: size.height * 56,
    },
    topRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: size.height * 0.5,
    },

    garageArrow: {
      color: '#ECE9FF',
      fontSize: size.fontSize * 4,
      marginLeft: size.width * 2,
    },
    statusRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: size.height * 2,
    },
    activeBadge: {
      backgroundColor: '#4591C0',
      height: size.height * 5.5,
      paddingHorizontal: size.width * 2,
      borderRadius: size.width * 1,
      marginLeft: size.width * 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    activeText: {
      color: colors.white,
      fontSize: size.fontSize * 2.5,
      fontFamily: fonts.regular,
      paddingBottom: size.height * 1,
    },


    garageText: {
      color:  colors.white,
      fontSize: size.fontSize * 2.8,
      fontFamily: fonts.medium,
    },

    carName: {
      color: colors.white,
      fontSize: size.fontSize * 4.5,
      fontFamily: theme.fonts.medium,
    },

    numberText: {
      color: colors.white,
      fontSize: size.fontSize * 3.2,
      fontFamily: fonts.medium,
      marginTop: size.height * 0.2,
    },


    statusLabel: {
      color: colors.white,
      fontSize: size.fontSize * 3.5,
      fontFamily: fonts.medium,
    },

    kmRow: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },

    kmValue: {
      color: colors.white,
      fontSize: size.fontSize * 7,
      fontFamily: fonts.extraBold,
    },

    kmText: {
      color: colors.white,
      fontSize: size.fontSize * 3.5,
      fontFamily: fonts.medium,
      marginBottom: size.height * 0.9,
      marginLeft: size.width * 1,
    },

    rangeText: {
      color: colors.white,
      fontSize: size.fontSize * 3,
      fontFamily: fonts.medium,
      marginTop: size.height * -0.4,
    },

    bottomRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: size.height * 2.6,
    },

    percentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: size.width * 1,
    },

    petrolIcon: {
      width: size.width * 4,
      height: size.width * 4,
      tintColor: '#63F1D3',
    },

    percentText: {
      color: colors.white,
      fontSize: size.fontSize * 2.8,
      fontFamily: fonts.medium,
      marginLeft: size.width * 1.5,
    },

    progressBar: {
      width: '35%',
      height: size.height * 2,
      backgroundColor: 'rgba(255,255,255,0.25)',
      borderRadius: size.width * 10,
      overflow: 'hidden',
    },
    progressFill: {
      width: '75%',
      height: '100%',
      backgroundColor: '#4AC7B3',
      borderRadius: size.width * 10,
    },
    carImage: {
      position: 'absolute',
      right: -size.width * 0,
      bottom: size.height * 1,
      width: size.width * 50,
      height: size.width * 50,
    },
    arrowIcon: {
     marginTop: size.height * 1,
    },
    garageTitleRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    dot: {
      width: size.width * 1.2,
      height: size.width * 1.2,
      borderRadius: size.width,
      backgroundColor: '#D9D6FF',
      marginRight: size.width * 1.5,
    },
  });

export default GarageCard;
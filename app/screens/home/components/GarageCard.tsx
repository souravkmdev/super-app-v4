import React from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { Text } from '../../../globalComponents/CustomText';
import theme, { colors } from '../../../utils/constants/Theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const GarageCard = () => {
  const SizeConfig = useSizeConfig();
  const styles = getStyles(SizeConfig);

  return (
    <LinearGradient
      colors={['#6B63F6', "#9B94FF", '#7C74FF',]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.MainContainer}
    >

      <Image
        source={require('../../../assets/images/../images/home/car.png')}
        style={styles.CarImage}
        resizeMode="contain"
      />


      <View style={styles.TopRow}>
        <View style={styles.GarageTitleRow}>

  <View style={styles.Dot} />

  <Text style={styles.GarageText}>
    My Garage
  </Text>

</View>

         <MaterialIcons
         name="chevron-right"
         size={SizeConfig.width * 3.5}
         color={colors.white}
         style={styles.ArrowIcon}
       />
      </View>


      <Text style={styles.CarName}>
        BMW X5 xDrive 40i
      </Text>


      <Text style={styles.NumberText}>
        MH 12 AB 1234
      </Text>


      <View style={styles.StatusRow}>
        <Text style={styles.StatusLabel}>
          Status
        </Text>

        <View style={styles.ActiveBadge}>
          <Text style={styles.ActiveText}>
            Active
          </Text>
        </View>
      </View>


      <View style={styles.KmRow}>
        <Text style={styles.KmValue}>
          128
        </Text>

        <Text style={styles.KmText}>
          Km
        </Text>
      </View>

      <Text style={styles.RangeText}>
        Total Range
      </Text>


      <View style={styles.BottomRow}>
        <View style={styles.PercentContainer}>
          <Image
            source={require('../../../assets/images/home/petrol.png')}
            style={styles.PetrolIcon}
            resizeMode="contain"
          />

          <Text style={styles.PercentText}>
            75%
          </Text>
        </View>

        <View style={styles.ProgressBar}>
          <View style={styles.ProgressFill} />
        </View>
      </View>
    </LinearGradient>
  );
};

const getStyles = (SizeConfig: any) =>
  StyleSheet.create({
    MainContainer: {
      marginHorizontal: SizeConfig.width * 3.5,
      marginTop: SizeConfig.height * 2.5,
      borderRadius: SizeConfig.width * 7,
      padding: SizeConfig.width * 4,
      overflow: 'hidden',
      //   minHeight: SizeConfig.height * 17,
      height: SizeConfig.height * 56,
    },
    TopRow: {
      flexDirection: 'row',
      alignItems: 'center',

      marginBottom: SizeConfig.height * 0.5,
    },

    GarageArrow: {
      color: '#ECE9FF',
      fontSize: SizeConfig.fontSize * 4,
      marginLeft: SizeConfig.width * 2,
      // marginTop: -SizeConfig.height * 0.2,
    },
    StatusRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: SizeConfig.height * 2,
    },
    ActiveBadge: {
      backgroundColor: '#4591C0',
      height: SizeConfig.height * 5.5,
      paddingHorizontal: SizeConfig.width * 2,
      borderRadius: SizeConfig.width * 1,
      marginLeft: SizeConfig.width * 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    ActiveText: {
      color: theme.colors.white,
      fontSize: SizeConfig.fontSize * 2.5,
      fontFamily: theme.fonts.regular,
    },


    GarageText: {
      color:  theme.colors.white,
      fontSize: SizeConfig.fontSize * 2.8,
      fontFamily: theme.fonts.medium,
    },

    CarName: {
      color: theme.colors.white,
      fontSize: SizeConfig.fontSize * 4.5,
      fontFamily: theme.fonts.medium,
    },

    NumberText: {
      color: theme.colors.white,
      fontSize: SizeConfig.fontSize * 3.2,
      fontFamily: theme.fonts.medium,
      marginTop: SizeConfig.height * 0.2,
    },


    StatusLabel: {
      color: theme.colors.white,
      fontSize: SizeConfig.fontSize * 3.5,
      fontFamily: theme.fonts.medium,
    },

    KmRow: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      // marginTop: SizeConfig.height * 0.4,
    },

    KmValue: {
      color: theme.colors.white,
      fontSize: SizeConfig.fontSize * 7,
      fontFamily: theme.fonts.extraBold,
      //   lineHeight: SizeConfig.height * 5,
    },

    KmText: {
      color: theme.colors.white,
      fontSize: SizeConfig.fontSize * 3.5,
      fontFamily: theme.fonts.medium,
      marginBottom: SizeConfig.height * 0.9,
      marginLeft: SizeConfig.width * 1,
    },

    RangeText: {
      color: theme.colors.white,
      fontSize: SizeConfig.fontSize * 3,
      fontFamily: theme.fonts.medium,
      marginTop: SizeConfig.height * -0.4,
    },

    BottomRow: {
      flexDirection: 'row',
      alignItems: 'center',
      // marginTop: SizeConfig.height * 0.8,
      marginTop: SizeConfig.height * 2.6,
    },

    PercentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: SizeConfig.width * 2,
      // marginTop: SizeConfig.height * 2.5,
    },

    PetrolIcon: {
      width: SizeConfig.width * 4,
      height: SizeConfig.width * 4,
      tintColor: '#63F1D3',
    },

    PercentText: {
      color: theme.colors.white,
      fontSize: SizeConfig.fontSize * 2.8,
      fontFamily: theme.fonts.medium,
      marginLeft: SizeConfig.width * 1.5,
    },

    ProgressBar: {
      width: '38%',
      height: SizeConfig.height * 2,
      backgroundColor: 'rgba(255,255,255,0.25)',
      borderRadius: SizeConfig.width * 10,
      overflow: 'hidden',
    },
    ProgressFill: {
      width: '75%',
      height: '100%',
      backgroundColor: '#4AC7B3',
      borderRadius: SizeConfig.width * 10,
    },
    CarImage: {
      position: 'absolute',
      right: -SizeConfig.width * 0,
      bottom: SizeConfig.height * 1,
      width: SizeConfig.width * 50,
      height: SizeConfig.width * 50,
    },
    ArrowIcon: {
     marginTop: SizeConfig.height * 1,
    },
    GarageTitleRow: {
  flexDirection: 'row',
  alignItems: 'center',
},

Dot: {
  width: SizeConfig.width * 1.2,
  height: SizeConfig.width * 1.2,
  borderRadius: SizeConfig.width,
  backgroundColor: '#D9D6FF',
  marginRight: SizeConfig.width * 1.5,
},
  });

export default GarageCard;
import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors } from '../../../utils/constants/Theme';

const Header = () => {
  const SizeConfig = useSizeConfig();
  const styles = getStyles(SizeConfig);

  return (
    <View style={styles.MainContainer}>
      <Image
        source={require('../../../assets/images/home/logo.png')}
        style={styles.LogoStyle}
        resizeMode="contain"
      />

   
      <View style={styles.RightContainer}>
        <TouchableOpacity style={styles.IconButton}>
          {/* <Ionicons
            name="search-outline"
            size={SizeConfig.width * 5}
            color="#1A1A1A"
          /> */}
         <Image
            source={require('../../../assets/images/home/search.png')}
            style={styles.IconStyle}
            resizeMode="contain"  />

        </TouchableOpacity>

        <TouchableOpacity style={styles.IconButton}>
          <Image
            source={require('../../../assets/images/home/bell.png')}
            style={styles.IconStyle}
            resizeMode="contain"  />

        </TouchableOpacity>
      </View>
    </View>
  );
};

const getStyles = (SizeConfig: any) =>
  StyleSheet.create({
    MainContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',

      paddingHorizontal: SizeConfig.width * 5,
      paddingTop: SizeConfig.height * 3,
      paddingBottom: SizeConfig.height * 1,
    },

    LogoStyle: {
      width: SizeConfig.width * 30,
      height: SizeConfig.width * 13,
    },

    RightContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: SizeConfig.width * 2.5,
    },

    IconButton: {
      width: SizeConfig.width * 10,
      height: SizeConfig.width * 10,
      borderRadius: SizeConfig.width * 10,
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
      IconStyle: {
          width: SizeConfig.width * 5.5,
          height: SizeConfig.width * 5.5,
      },
  });

export default Header;
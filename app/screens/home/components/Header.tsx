import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors } from '../../../utils/constants/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationTypes } from '../../../navigation/NavigationTypes';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<NavigationTypes>;

const Header = () => {
  const navigation = useNavigation<NavigationProp>();

  const size = useSizeConfig();
  const styles = getStyles(size);

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../../assets/images/home/logo.png')}
        style={styles.logoStyle}
        resizeMode="contain"
      />

      <View style={styles.rightContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('Notification')}
        >
          <Ionicons
            name="search-outline"
            size={size.width * 5}
            color="#1A1A1A"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Notification')}
          style={styles.iconButton}
        >
          <Ionicons
            name="notifications-outline"
            size={size.width * 5}
            color="#1A1A1A"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    mainContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',

      paddingHorizontal: size.width * 5,
      paddingTop: size.height * 3,
      paddingBottom: size.height * 1,
    },

    logoStyle: {
      width: size.width * 30,
      height: size.width * 13,
    },

    rightContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: size.width * 2.5,
    },

    iconButton: {
      width: size.width * 10,
      height: size.width * 10,
      borderRadius: size.width * 10,
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconStyle: {
      width: size.width * 5.5,
      height: size.width * 5.5,
    },
  });

export default Header;

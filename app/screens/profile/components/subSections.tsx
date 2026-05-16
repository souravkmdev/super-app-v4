import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

const SubSections = ({ title }: { title: string }) => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  const renderIcon = () => {
    switch (title) {
      case 'Profile':
        return (
          <Feather name="user" size={size.width * 6} color={colors.primary} />
        );

      case 'Your Orders':
        return (
          <MaterialCommunityIcons
            name="cart-outline"
            size={size.width * 7}
            color={colors.primary}
          />
        );

      case 'My address':
        return (
          <Ionicons
            name="location-outline"
            size={size.width * 7}
            color={colors.primary}
          />
        );

      case 'Teams and conditions':
        return (
          <Ionicons
            name="document-text-outline"
            size={size.width * 7}
            color={colors.primary}
          />
        );

      case 'Contact Us':
        return (
          <Feather
            name="message-circle"
            size={size.width * 6.7}
            color={colors.primary}
          />
        );

      case 'Privacy Policy':
        return (
          <Entypo name="text" size={size.width * 7} color={colors.primary} />
        );

      case 'Cancellation & Refund Policy':
        return (
          <MaterialCommunityIcons
            name="credit-card-edit-outline"
            size={size.width * 6.7}
            color={colors.primary}
          />
        );

      case 'About Us':
        return (
          <Feather name="info" size={size.width * 6} color={colors.primary} />
        );

      case 'Log Out':
        return (
          <Ionicons
            name="exit-outline"
            size={size.width * 7}
            color={colors.primary}
          />
        );

      default:
        return (
          <Ionicons
            name="settings-outline"
            size={size.width * 7}
            color={colors.primary}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {renderIcon()}

        <Text style={styles.title}>{title}</Text>
      </View>

      <MaterialIcons
        name="chevron-right"
        size={size.width * 7}
        color="#13131380"
      />
    </View>
  );
};

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      padding: size.width * 2,
      paddingHorizontal: size.width * 4,
      borderBottomWidth: 1,
      borderBottomColor: '#EEEEF2',
      marginHorizontal: size.width * 5,
      paddingVertical : size.height * 3,
    },

    leftContainer: {
      flexDirection: 'row',
      alignItems: 'center',

      gap: size.width * 2,
    },

    title: {
      includeFontPadding: false,

      fontSize: size.fontSize * 3.7,
      fontFamily: fonts.medium,

      color: colors.text_Primary,
    },
  });

export default React.memo(SubSections);

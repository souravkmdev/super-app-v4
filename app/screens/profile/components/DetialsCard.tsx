import React, { useMemo } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

interface Props {
  title: string;
  subTitle?: string;
  description?: string;
  footerText?: string;
  iconName?: string;
  status?: string;
  statusColor?: string;
  buttonText?: string;
  contactButtonText?: string;
  onContactPress?: () => void;
  onButtonPress?: () => void;
  name?: string;
  phoneNumber?: string;
  showEditIcon?: boolean;
  onEditPress?: () => void;
  titleStyle?: any;
  subTitleStyle?: any;
}

const ProfileDetailCard = ({
  title,
  subTitle,
  description,
  footerText,
  iconName = 'car',
  status,
  statusColor = '#45B649',
  buttonText,
  onButtonPress,
  contactButtonText,
  onContactPress,
  name,
  phoneNumber,
  showEditIcon,
  onEditPress,
  titleStyle,
  subTitleStyle,
}: Props) => {
  const size = useSizeConfig();

  const styles = useMemo(
    () => getStyles(size),
    [size],
  );

  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons
          name={iconName as any}
          size={size.width * 6}
          color={colors.Color_5346EE}
        />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <Text style={[styles.title, titleStyle]}>
            {title}
          </Text>

          {showEditIcon && (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onEditPress}
            >
              <Image
                source={require('../../../assets/images/profile/edit.png')}
                style={styles.editIcon}
              />
            </TouchableOpacity>
          )}
        </View>

        {!!name && (
          <Text style={styles.name}>
            {name}
          </Text>
        )}

        {!!subTitle && (
          <Text style={[styles.subTitle, subTitleStyle]}>
            {subTitle}
          </Text>
        )}

        {!!phoneNumber && (
          <Text style={styles.phoneNumber}>
            {phoneNumber}
          </Text>
        )}

        {(description || status || footerText) && (
          <View style={styles.divider} />
        )}

        {!!description && (
          <Text style={styles.description}>
            {description}
          </Text>
        )}

        {!!status && (
          <View style={styles.statusRow}>
            <Text style={styles.statusLabel}>
              Booking Status :
            </Text>

            <Text
              style={[
                styles.status,
                { color: statusColor },
              ]}
            >
              {status}
            </Text>
          </View>
        )}

        {!!footerText && (
          <Text style={styles.footerText}>
            {footerText}
          </Text>
        )}

        {!!buttonText && (
          <TouchableOpacity
            style={styles.button}
            onPress={onButtonPress}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>
              {buttonText}
            </Text>
          </TouchableOpacity>
        )}

        {!!contactButtonText && (
          <TouchableOpacity
            style={styles.contactButton}
            onPress={onContactPress}
            activeOpacity={0.8}
          >
            <Text style={styles.contactButtonText}>
              {contactButtonText}
            </Text>

            <View style={styles.arrowContainer}>
              <Ionicons
                name="arrow-forward"
                size={size.width * 3}
                color={colors.Color_5346EE}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    card: {
      backgroundColor: colors.white,
      borderRadius: size.width * 4,
      padding: size.width * 4,
      marginTop: size.height * 2,
      flexDirection: 'row',
      borderWidth: 0.5,
      borderColor: colors.border,
    },

    iconContainer: {
      width: size.width * 14,
      height: size.width * 14,
      borderRadius: size.width * 3,
      backgroundColor: '#EFEEFF',
      justifyContent: 'center',
      alignItems: 'center',
    },

    contentContainer: {
      flex: 1,
      marginLeft: size.width * 3,
    },

    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },

    title: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 3.8,
      color: colors.text_Primary,
    },

    name: {
      marginTop: size.height * 0.4,
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3,
      color: colors.text_Primary,
      fontStyle: 'italic',
    },

    subTitle: {
      marginTop: size.height * 1,
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 3.3,
      color: colors.text_Primary,
    },

    phoneNumber: {
      marginTop: size.height * 0.6,
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 2.9,
      color: colors.text_Primary,
    },

    divider: {
      height: 1,
      backgroundColor: '#EEEEF2',
      marginVertical: size.height,
    },

    description: {
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.8,
      color: colors.text_Secondary,
    },

    status: {
      marginTop: size.height * 0.5,
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.8,
    },

    footerText: {
      marginTop: size.height * 0.8,
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.7,
      color: colors.text_Secondary,
    },

    button: {
      alignSelf: 'flex-end',
      marginTop: size.height,
      backgroundColor: colors.primary,
      paddingHorizontal: size.width * 4,
      paddingVertical: size.height,
      borderRadius: size.width * 2,
    },

    buttonText: {
      color: colors.white,
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.8,
    },
    statusRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: size.height * 0.5,
    },

    statusLabel: {
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.8,
      color: colors.text_Secondary,
    },

    editIcon: {
      width: size.width * 5,
      height: size.width * 5,
      resizeMode: 'contain',
    },
    contactButton: {
      alignSelf: 'flex-end',
      marginTop: size.height * 1.5,
      backgroundColor: '#EFEEFF',
      borderRadius: size.width * 2,
      paddingHorizontal: size.width * 2.3,
      paddingVertical: size.height * 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: size.width * 2,
    },

    contactButtonText: {
      color: colors.Color_5346EE,
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 2.5,
    },
    arrowContainer: {
      width: size.width * 5,
      height: size.width * 5,
      borderRadius: size.width * 3.5,
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: size.width * 2,
    },

  });

export default ProfileDetailCard;
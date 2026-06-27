import React, { useMemo } from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { Text } from './CustomText';
import { useSizeConfig } from '../utils/context/SizeConfig';
import { colors, fonts } from '../utils/constants/Theme';
import LinearGradient from 'react-native-linear-gradient';

interface LogoutModalProps {
  visible: boolean;
  onCancel: () => void;
  onLogout: () => void;
  image?: any;
}

const LogoutModal = ({
  visible,
  onCancel,
  onLogout,
  image,
}: LogoutModalProps) => {
  const size = useSizeConfig();

  const styles = useMemo(
    () => getStyles(size),
    [size],
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>

          <Image
            source={image}
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={styles.title}>
            Log Out?
          </Text>

          <Text style={styles.description}>
            You'll need to sign in again{'\n'}
            to access your bookings and rewards.
          </Text>

          <View style={styles.buttonRow}>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.cancelButton}
              onPress={onCancel}
            >
              <Ionicons
                name="shield-checkmark-outline"
                size={size.width * 4}
                color={colors.primary}
              />

              <Text style={styles.cancelText}>
                Stay Logged In
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.logoutButtonWrapper}
              onPress={onLogout}
            >
              <LinearGradient
                colors={['#807AF4', '#7478FF', '#ADA9F6']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.logoutButton}
              >
                <Ionicons
                  name="log-out-outline"
                  size={size.width * 4.5}
                  color={colors.white}
                />

                <Text style={styles.logoutText}>
                  Log Out
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;

const getStyles = (size: any) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.45)',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: size.width * 4,
    },

    container: {
      width: '90%',
      backgroundColor: colors.white,
      borderRadius: size.width * 4,
      paddingHorizontal: size.width * 6,
      paddingTop: size.height * 10,
      paddingBottom: size.height * 6,
      alignItems: 'center',
    },

    image: {
      width: size.width * 24,
      height: size.width * 24,
      marginBottom: size.height * 2,
    },

    title: {
      marginTop: size.height * 4,
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 5,
      color: colors.text_Primary,
    },

    description: {
      marginTop: size.height * 1.5,
      textAlign: 'center',
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.8,
      color: colors.text_Secondary,
    },

    buttonRow: {
      flexDirection: 'row',
      width: '100%',
      marginTop: size.height * 8,
      gap: size.width * 3,
    },

    cancelButton: {
      flex: 1,
      height: size.height * 11,
      borderWidth: 1.5,
      borderColor: colors.primary,
      borderRadius: size.width * 3,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: size.width * 1.5,
      backgroundColor: colors.white,
    },

    cancelText: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3,
      color: colors.primary,
    },

    logoutText: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3,
      color: colors.white,
    },

    logoutButtonWrapper: {
      flex: 1,
    },

    logoutButton: {
      height: size.height * 11,
      borderRadius: size.width * 3,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: size.width * 1.5,
    },
  });
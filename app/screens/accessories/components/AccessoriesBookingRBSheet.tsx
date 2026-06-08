import React, { useRef, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, fonts } from '../../../utils/constants/Theme';
import CustomInputComp from '../../../globalComponents/CustomInputComp';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const AccessoriesBookingRBSheet: React.FC = () => {
  const refRBSheet = useRef<any>(null);

  const [name, setName] = useState<string>('Hari Basker Parasuraman');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('9876534567');

  const size = useSizeConfig();
  const insets = useSafeAreaInsets();
  const styles = getStyles(size);

  const checkIcon = (
    <Feather
      name="check-circle"
      size={size.width * 4.5}
      color={colors.success}
    />
  );

  const emptyCircleIcon = (
    <Feather name="circle" size={size.width * 4.5} color={colors.border} />
  );

  return (
    <View style={styles.container}>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current?.open()}
      />

      <RBSheet
        ref={refRBSheet}
        height={400}
        openDuration={250}
        closeOnPressMask
        useNativeDriver
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.4)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}
      >
        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitle}>Personal Details</Text>

          <CustomInputComp
            LHSIcon={
              <FontAwesome
                name="user"
                size={size.width * 4.5}
                color={colors.buttonBgColor}
              />
            }
            RHSIcon={checkIcon}
            PlaceholderName="Full Name"
            InputText={name}
            InputOnTextChange={setName}
            placeholderTextColor={colors.lightBorder}
            compStyle={styles.inputContainer}
          />

          <CustomInputComp
            LHSIcon={
              <Icon
                name="email"
                size={size.width * 4.5}
                color={colors.buttonBgColor}
              />
            }
            RHSIcon={emptyCircleIcon}
            PlaceholderName="Enter Your E-mail"
            InputText={email}
            InputOnTextChange={setEmail}
            placeholderTextColor={colors.lightBorder}
            compStyle={styles.inputContainer}
          />

          <CustomInputComp
            LHSIcon={
              <Icon
                name="phone"
                size={size.width * 4.5}
                color={colors.buttonBgColor}
              />
            }
            RHSIcon={checkIcon}
            PlaceholderName="Enter Your Phone Number"
            InputText={phone}
            InputOnTextChange={setPhone}
            keyboardType="phone-pad"
            placeholderTextColor={colors.lightBorder}
            compStyle={styles.inputContainer}
          />

          <View style={styles.privacyRow}>
            <Ionicons
              name="shield-checkmark"
              size={size.width * 3.5}
              color={colors.primary2}
            />
            <Text style={styles.privacyText}>
              Your details are safe with us. We never share your information.
            </Text>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

export default AccessoriesBookingRBSheet;

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    sectionBlock: {
      marginHorizontal: size.width * 3.7,
      marginBottom: size.width * 4.1,
      gap: size.height * 3,
    },

    sectionTitle: {
      fontSize: size.fontSize * 3.5,
      fontFamily: fonts.semiBold,
    },

    privacyRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: size.width * 1.6,
      paddingHorizontal: size.width * 6,
      gap: size.width * 2,
    },

    privacyText: {
      fontSize: size.fontSize * 2.5,
      fontFamily: fonts.medium,
      color: colors.primary2,
      includeFontPadding: false,
    },
    inputContainer: {
      backgroundColor: colors.white,
      gap: size.width * 3,
      paddingHorizontal: size.width * 5,
      borderColor: '#dbd3fe',
    },

    buttonStyle: {
      paddingVertical: size.height * 3,
    },

    bottomContainer: {
      paddingHorizontal: size.width * 3.7,
      paddingVertical: size.height * 4,
      gap: size.height * 2,
    },

    scrollContainer: {
      gap: size.height * 3,
    },

    keyboardContainer: {
      flex: 1,
    },
  });
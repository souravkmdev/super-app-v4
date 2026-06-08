import React, { useCallback, useEffect, useRef } from 'react';
import {
  Animated,
  Image,
  ImageSourcePropType,
  Modal,
  PanResponder,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, fonts } from '../../../utils/constants/Theme';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from '../../../globalComponents/CustomText';

interface SavedUPI {
  id: string;
  name: string;
  upiId: string;
  addedAt: string;
}

interface UPIApp {
  id: string;
  label: string;
  icon: ImageSourcePropType;
}

interface PaymentMethodBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  onSelectUPI?: (upi: SavedUPI) => void;
  onAddNewUPI?: () => void;
  onSelectApp?: (app: UPIApp) => void;
  onOtherUPI?: () => void;
  onCreditDebit?: () => void;
}

const SAVED_UPI_ACCOUNTS: SavedUPI[] = [
  {
    id: '1',
    name: 'Hari basker p',
    upiId: 'haribaskar@okcbi',
    addedAt: '9 Jan 2026, 11:48 am',
  },
];

const UPI_APPS: UPIApp[] = [
  {
    id: 'gpay',
    label: 'Google Pay',
    icon: require('../../../assets/images/carBooking/gpay.png'),
  },
  {
    id: 'paytm',
    label: 'Paytm',
    icon: require('../../../assets/images/carBooking/paytm.png'),
  },
  {
    id: 'phonepe',
    label: 'Phone Pay',
    icon: require('../../../assets/images/carBooking/phonepe.png'),
  },
];

const PaymentMethodBottomSheet: React.FC<PaymentMethodBottomSheetProps> = ({
  visible,
  onClose,
  onSelectUPI,
  onAddNewUPI,
  onSelectApp,
  onOtherUPI,
  onCreditDebit,
}) => {
  const size = useSizeConfig();
  const styles = getStyles(size);
  const insets = useSafeAreaInsets();

  const SHEET_HEIGHT = size.deviceHeight * 0.85;
  const DISMISS_THRESHOLD = SHEET_HEIGHT * 0.25;
  const translateY = useRef(new Animated.Value(SHEET_HEIGHT)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  const openSheet = useCallback(() => {
    Animated.parallel([
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        damping: 20,
        stiffness: 120,
      }),
      Animated.timing(overlayOpacity, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start();
  }, [translateY, overlayOpacity]);

  const closeSheet = useCallback(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: SHEET_HEIGHT,
        duration: 280,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => onClose());
  }, [translateY, overlayOpacity, onClose]);

  useEffect(() => {
    if (visible) {
      translateY.setValue(SHEET_HEIGHT);
      overlayOpacity.setValue(0);
      openSheet();
    }
  }, [visible, openSheet, translateY, overlayOpacity]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, g) => g.dy > 6,
      onPanResponderMove: (_, g) => {
        if (g.dy > 0) translateY.setValue(g.dy);
      },
      onPanResponderRelease: (_, g) => {
        if (g.dy > DISMISS_THRESHOLD || g.vy > 1.2) {
          closeSheet();
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
            damping: 20,
            stiffness: 120,
          }).start();
        }
      },
    }),
  ).current;

  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={closeSheet}
    >
      <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]}>
        <TouchableOpacity
          style={StyleSheet.absoluteFill}
          activeOpacity={1}
          onPress={closeSheet}
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.sheet,
          {
            height: SHEET_HEIGHT,
            paddingBottom: insets.bottom > 0 ? insets.bottom : size.width * 4,
            transform: [{ translateY }],
          },
        ]}
      >
        <View style={styles.dragHandleArea} {...panResponder.panHandlers}>
          <View style={styles.dragHandle} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.sectionLabel}>Add New UPI ID</Text>
          <LinearGradient
            colors={['#807AF4', '#7478FF', '#ADA9F6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              width: '100%',
              paddingVertical: size.width * 2,
              borderRadius: size.width * 3,
            }}
          >
            <TouchableOpacity
              style={styles.addUPIInner}
              activeOpacity={0.85}
              onPress={onAddNewUPI}
            >
              <View style={styles.addUPIAvatar}>
                <Image
                  source={require('../../../assets/images/carBooking/add_user.png')}
                  style={{ width: size.width * 8, height: size.width * 8 }}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.addUPITextBlock}>
                <Text style={styles.addUPITitle}>Add New UPI ID</Text>
                <Text style={styles.addUPISub}>
                  Add your UPI ID to pay faster next time
                </Text>
              </View>
              <Image
                source={require('../../../assets/images/carBooking/star.png')}
                style={styles.addUPIStarImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </LinearGradient>

          {/* ── Saved UPI Accounts ── */}
          <Text style={[styles.sectionLabel, { marginTop: size.width * 6 }]}>
            Select payment Method
          </Text>

          {SAVED_UPI_ACCOUNTS.map(upi => (
            <TouchableOpacity
              key={upi.id}
              style={styles.savedUPICard}
              activeOpacity={0.8}
              onPress={() => onSelectUPI?.(upi)}
            >
              <View style={styles.upiLogoWrap}>
                <Image
                  source={require('../../../assets/images/carBooking/upi_image.png')}
                  style={styles.upiImage}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.savedUPITextBlock}>
                <Text style={styles.savedUPIName}>{upi.name}</Text>
                <Text style={styles.savedUPIId}>UPI ID: {upi.upiId}</Text>
                <Text style={styles.savedUPIDate}>{upi.addedAt}</Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={colors.Color_5346EE}
              />
            </TouchableOpacity>
          ))}

          {/* ── Preferred UPI Apps ── */}
          <Text style={[styles.sectionLabel, { marginTop: size.width * 6 }]}>
            Preferred UPI Apps
          </Text>

          <View style={styles.upiAppsRow}>
            {UPI_APPS.map(app => (
              <TouchableOpacity
                key={app.id}
                style={styles.upiAppCard}
                activeOpacity={0.8}
                onPress={() => onSelectApp?.(app)}
              >
                <Image
                  source={app.icon}
                  style={styles.upiAppImage}
                  resizeMode="contain"
                />
                <Text style={styles.upiAppLabel}>{app.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={styles.otherUPICard}
            activeOpacity={0.8}
            onPress={onOtherUPI}
          >
            <View style={styles.upiLogoWrap}>
              <Image
                source={require('../../../assets/images/carBooking/upi_image_gray.png')}
                style={styles.upiImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.otherUPITextBlock}>
              <Text style={styles.otherUPITitle}>Other UPI Apps</Text>
              <Text style={styles.otherUPISub}>Use any other UPI app</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.Color_5346EE}
            />
          </TouchableOpacity>

          {/* ── Others ── */}
          <Text style={[styles.sectionLabel, { marginTop: size.width * 6 }]}>
            Others
          </Text>

          <TouchableOpacity
            style={styles.creditCard}
            activeOpacity={0.8}
            onPress={onCreditDebit}
          >
            <View style={styles.creditIconWrap}>
              <Image
                source={require('../../../assets/images/carBooking/card.png')}
                resizeMode="contain"
                style={styles.otherPaymentImage}
              />
            </View>
            <View style={styles.creditTextBlock}>
              <Text style={styles.creditTitle}>Credit / Debit Card</Text>
              <Text style={styles.creditSub}>Pay securely using cards</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.Color_5346EE}
            />
          </TouchableOpacity>

          <View style={{ height: size.width * 3.5 }} />

          <TouchableOpacity
            style={styles.creditCard}
            activeOpacity={0.8}
            onPress={onCreditDebit}
          >
            <View style={styles.creditIconWrap}>
              <Image
                source={require('../../../assets/images/carBooking/bank.png')}
                resizeMode="contain"
                style={styles.otherPaymentImage}
              />
            </View>
            <View style={styles.creditTextBlock}>
              <Text style={styles.creditTitle}>Credit / Debit Card</Text>
              <Text style={styles.creditSub}>Pay securely using cards</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.Color_5346EE}
            />
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>
    </Modal>
  );
};

export default PaymentMethodBottomSheet;

const getStyles = (size: any) =>
  StyleSheet.create({
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.45)',
    },
    sheet: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.white,
      borderTopLeftRadius: size.width * 6,
      borderTopRightRadius: size.width * 6,
      overflow: 'hidden',
    },
    dragHandleArea: {
      width: '100%',
      alignItems: 'center',
      paddingTop: size.width * 3,
      paddingBottom: size.width * 1,
    },
    dragHandle: {
      width: size.width * 12,
      height: size.width * 1.2,
      borderRadius: size.width * 0.6,
      backgroundColor: '#D4D0EE',
    },
    scrollContent: {
      paddingHorizontal: size.width * 4.5,
      paddingBottom: size.width * 4,
    },
    sectionLabel: {
      fontSize: size.fontSize * 3.6,
      fontFamily: fonts.medium,
      color: colors.text_Primary,
      marginBottom: size.width * 3,
      marginTop: size.width * 5,
    },
    addUPIInner: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: size.width * 4.5,
      paddingHorizontal: size.width * 4,
    },
    addUPIAvatar: {
      width: size.width * 10,
      height: size.width * 10,
      borderRadius: size.width * 6,
      backgroundColor: 'rgba(255,255,255,0.9)',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: size.width * 3.5,
    },
    addUPITextBlock: {
      flex: 1,
    },
    addUPITitle: {
      fontSize: size.fontSize * 3.2,
      fontFamily: fonts.bold,
      color: '#fff',
      marginBottom: 4,
    },
    addUPISub: {
      fontSize: size.fontSize * 2.3,
      fontFamily: fonts.medium,
      color: 'rgba(255,255,255,0.85)',
    },
    addUPIStarImage: {
      width: size.width * 14,
      height: size.width * 12,
    },
    savedUPICard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.white,
      borderRadius: size.width * 4,
      borderWidth: 1,
      borderColor: '#B6A5FF70',
      paddingVertical: size.width * 4,
      paddingHorizontal: size.width * 4,
    },
    upiLogoWrap: {
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: size.width * 4.5,
    },
    upiImage: {
      width: size.width * 10,
      height: size.width * 10,
    },
    savedUPITextBlock: {
      flex: 1,
    },
    savedUPIName: {
      fontSize: size.fontSize * 3,
      fontFamily: fonts.semiBold,
      color: colors.text_Primary,
      marginBottom: 3,
    },
    savedUPIId: {
      fontSize: size.fontSize * 2.3,
      fontFamily: fonts.medium,
      color: colors.text_Secondary,
      marginBottom: 2,
    },
    savedUPIDate: {
      fontSize: size.fontSize * 2,
      fontFamily: fonts.regular,
      color: colors.text_Secondary,
    },
    upiAppsRow: {
      flexDirection: 'row',
      gap: size.width * 3,
      marginBottom: size.width * 3,
    },
    upiAppCard: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: size.width * 2,
      paddingVertical: size.width * 3.5,
      paddingHorizontal: size.width * 2,
      backgroundColor: colors.white,
      borderRadius: size.width * 3.5,
      borderWidth: 1,
      borderColor: '#E8E4F8',
    },
    upiAppLabel: {
      fontSize: size.fontSize * 2.2,
      fontFamily: fonts.semiBold,
      color: colors.text_Primary,
    },
    upiAppImage: {
      width: size.width * 10,
      height: size.width * 6,
    },
    otherUPICard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.white,
      borderRadius: size.width * 4,
      borderWidth: 1,
      borderColor: '#B6A5FF70',
      paddingVertical: size.width * 4,
      paddingHorizontal: size.width * 4,
    },
    otherUPITextBlock: {
      flex: 1,
    },
    otherUPITitle: {
      fontSize: size.fontSize * 3,
      fontFamily: fonts.bold,
      color: colors.text_Primary,
      marginBottom: 3,
    },
    otherUPISub: {
      fontSize: size.fontSize * 2.3,
      fontFamily: fonts.medium,
      color: colors.text_Secondary,
    },
    creditCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.white,
      borderRadius: size.width * 4,
      borderWidth: 1,
      borderColor: '#E8E4F8',
      paddingVertical: size.width * 4,
      paddingHorizontal: size.width * 4,
    },
    creditIconWrap: {
      width: size.width * 7,
      height: size.width * 7,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: size.width * 3.5,
    },
    otherPaymentImage: {
      width: '100%',
      height: '100%',
    },
    creditTextBlock: {
      flex: 1,
    },
    creditTitle: {
      fontSize: size.fontSize * 3,
      fontFamily: fonts.semiBold,
      color: colors.text_Primary,
      marginBottom: 3,
    },
    creditSub: {
      fontSize: size.fontSize * 2.3,
      fontFamily: fonts.medium,
      color: colors.text_Secondary,
    },
  });

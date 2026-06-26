import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TextInput } from '../../globalComponents/CustomTextInput';

import { Text } from '../../globalComponents/CustomText';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { colors, fonts } from '../../utils/constants/Theme';

import BookingHeader from './components/BookingHeader';
import StepperBar from '../../globalComponents/StepperBar';
import Dropdown from './components/Dropdown';
import InputField from './components/InputField';
import BookingBottomBar from './components/BookingBottomBar';
import { DropdownItem } from './types/ebooking.types';
import HeaderLinearGradient from '../../globalComponents/HeaderLinearGradient';
import Header from '../../globalComponents/Header';

const CITIES: DropdownItem[] = [
  { label: 'Bengaluru', value: 'bengaluru' },
  { label: 'Mumbai', value: 'mumbai' },
  { label: 'Delhi', value: 'delhi' },
  { label: 'Chennai', value: 'chennai' },
];

const OUTLETS: Record<string, DropdownItem[]> = {
  bengaluru: [
    { label: 'Nexa Indiranagar', value: 'indiranagar' },
    { label: 'Nexa Whitefield', value: 'whitefield' },
    { label: 'Nexa Hebbal', value: 'hebbal' },
  ],
  mumbai: [
    { label: 'Nexa Andheri', value: 'andheri' },
    { label: 'Nexa Bandra', value: 'bandra' },
  ],
  delhi: [
    { label: 'Nexa Dwarka', value: 'dwarka' },
    { label: 'Nexa Rohini', value: 'rohini' },
  ],
  chennai: [
    { label: 'Nexa T Nagar', value: 'tnagar' },
    { label: 'Nexa Anna Nagar', value: 'annanagar' },
  ],
};

const ADVANCE_PAYMENT_OPTIONS = [2000, 5000, 10000, 15000, 20000];
const MIN_BOOKING_AMOUNT = 2000;

const ACTIVE_STEP = 2;

const EBookingSecondScreen: React.FC = () => {
  const size = useSizeConfig();
  const styles = getStyles(size);
  const insets = useSafeAreaInsets();

  const [selectedCity, setSelectedCity] = useState<string>('bengaluru');
  const [selectedOutlet, setSelectedOutlet] = useState<string>('indiranagar');
  const [deliveryAddress] = useState<string>(
    'Gnana Bharathi, Bengaluru, Karnataka',
  );
  const [employeeName, setEmployeeName] = useState<string>('');
  const [employeeId, setEmployeeId] = useState<string>('');
  const [paymentInput, setPaymentInput] = useState<string>('10000');
  const [selectedPayment, setSelectedPayment] = useState<number>(10000);

  const availableOutlets = OUTLETS[selectedCity] || [];

  const handlePaymentInput = (text: string) => {
    const digits = text.replace(/[^0-9]/g, '');
    setPaymentInput(digits);
    const numeric = parseInt(digits, 10);
    setSelectedPayment(isNaN(numeric) ? 0 : numeric);
  };

  const handleChipSelect = (amount: number) => {
    setSelectedPayment(amount);
    setPaymentInput(String(amount));
  };

  const formatCurrency = (amount: number) =>
    amount >= 1000 ? `₹${(amount / 1000).toFixed(0)},000` : `₹${amount}`;

  const handleContinue = () => {
    console.log('Proceeding to Payments step');
  };

  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <HeaderLinearGradient />
      <Header title="E-Booking" onPress={() => {}} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : size.height * 2}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: size.width * 6 }}
        >
          <StepperBar currentStep={ACTIVE_STEP} />

          <View style={[styles.sectionBlock, { paddingTop: size.height * 5 }]}>
            <Text style={styles.sectionTitle}>Choose Outlet</Text>

            <View style={{ marginTop: size.width * 3 }}>
              <Dropdown
                label="City"
                value={selectedCity}
                items={CITIES}
                onSelect={(item: any) => {
                  setSelectedCity(item.value);
                  const firstOutlet = OUTLETS[item.value]?.[0];
                  setSelectedOutlet(firstOutlet?.value || '');
                }}
                icon={
                  <View style={styles.dropdownIconContainer}>
                    <Ionicons
                      name="people"
                      size={24}
                      color={colors.Color_5346EE}
                    />
                  </View>
                }
              />
            </View>

            <View style={{ marginTop: size.width * 4 }}>
              <Dropdown
                label="Outlet"
                value={selectedOutlet}
                items={availableOutlets}
                onSelect={(item: any) => setSelectedOutlet(item.value)}
                icon={
                  <View style={styles.dropdownIconContainer}>
                    <Ionicons
                      name="business"
                      size={22}
                      color={colors.Color_5346EE}
                    />
                  </View>
                }
              />
            </View>
          </View>

          <View style={styles.sectionBlock}>
            <Text style={styles.sectionTitle}>Delivery Address</Text>

            <View style={{ marginTop: size.width * 3 }}>
              <TouchableOpacity
                style={styles.addressContainer}
                activeOpacity={0.8}
              >
                <Text style={styles.addressText}>{deliveryAddress}</Text>
                <View style={styles.changeBtn}>
                  <Text style={styles.changeBtnText}>Change</Text>
                  <Ionicons
                    name="chevron-down"
                    size={16}
                    color={colors.Color_5346EE}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.sectionBlock}>
            <View style={styles.referredByHeader}>
              <Text style={styles.sectionTitle}>Referred By</Text>
              <Text style={styles.optionalLabel}> (Optional)</Text>
            </View>

            <View style={{ marginTop: size.width * 3 }}>
              <InputField
                label="Employee Name"
                value={employeeName}
                onChangeText={setEmployeeName}
                placeholder="Enter employee name"
                icon={
                  <View style={styles.dropdownIconContainer}>
                    <Ionicons
                      name="person"
                      size={22}
                      color={colors.Color_5346EE}
                    />
                  </View>
                }
              />
            </View>

            <View style={{ marginTop: size.width * 4 }}>
              <InputField
                label="Employee ID"
                value={employeeId}
                onChangeText={setEmployeeId}
                placeholder="Enter employee ID"
                icon={
                  <View style={styles.dropdownIconContainer}>
                    <Ionicons
                      name="card"
                      size={22}
                      color={colors.Color_5346EE}
                    />
                  </View>
                }
              />
            </View>
          </View>

          <View style={styles.sectionBlock}>
            <Text style={[styles.sectionTitle, styles.advancePaymentTitle]}>
              Advance Payment
            </Text>

            <View style={{ marginTop: size.width * 3 }}>
              <View style={styles.paymentInputContainer}>
                <View style={styles.paymentInputTextBlock}>
                  <Text style={styles.dropdownLabel}>
                    Enter Advance Payment
                  </Text>
                  <View style={styles.paymentInputRow}>
                    <Text style={styles.paymentRupeeSymbol}>₹</Text>
                    <TextInput
                      style={styles.paymentTextInput}
                      value={paymentInput}
                      onChangeText={handlePaymentInput}
                      placeholder="0"
                      placeholderTextColor="#B0ADCA"
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                <Ionicons name="chevron-down" size={22} color="#000" />
              </View>
            </View>

            <Text style={styles.minAmountNote}>
              Minimum booking amount is ₹
              {MIN_BOOKING_AMOUNT.toLocaleString('en-IN')}
            </Text>

            <View style={styles.paymentOptionsGrid}>
              {ADVANCE_PAYMENT_OPTIONS.map((amount: any) => {
                const isSelected = selectedPayment === amount;
                return (
                  <TouchableOpacity
                    key={amount}
                    style={[
                      styles.paymentOptionBtn,
                      isSelected && styles.paymentOptionBtnSelected,
                    ]}
                    activeOpacity={0.8}
                    onPress={() => handleChipSelect(amount)}
                  >
                    <Text
                      style={[
                        styles.paymentOptionText,
                        isSelected && styles.paymentOptionTextSelected,
                      ]}
                    >
                      {formatCurrency(amount)}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <BookingBottomBar variant="continue" onPress={handleContinue} />
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#F7F7Fe',
    },

    barStyle: {
      width: '100%',
      height: size.height * 21,
      position: 'absolute',
    },

    sectionBlock: {
      marginHorizontal: size.width * 3.7,
      marginTop: size.width * 5,
    },

    sectionTitle: {
      fontSize: size.fontSize * 3.5,
      fontFamily: fonts.medium,
      color: colors.text_Primary,
    },

    dropdownIconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    addressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.white,
      borderRadius: size.width * 4,
      paddingVertical: size.width * 4.5,
      paddingHorizontal: size.width * 4,
      borderWidth: 1,
      borderColor: '#D9D0FF',
    },

    addressText: {
      fontSize: size.fontSize * 2.8,
      color: colors.text_Primary,
      fontFamily: fonts.medium,
      flex: 1,
      marginRight: size.width * 3,
    },

    changeBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 2,
    },

    changeBtnText: {
      fontSize: size.fontSize * 2.6,
      color: colors.Color_5346EE,
      fontFamily: fonts.semiBold,
    },

    referredByHeader: {
      flexDirection: 'row',
      alignItems: 'baseline',
    },

    optionalLabel: {
      fontSize: size.fontSize * 2.8,
      color: colors.text_Secondary,
      fontFamily: fonts.medium,
    },

    advancePaymentTitle: {
      color: colors.Color_5346EE,
    },

    dropdownLabel: {
      fontSize: size.fontSize * 2,
      color: '#7A7692',
      fontFamily: fonts.medium,
      marginBottom: 2,
    },

    paymentInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.white,
      borderRadius: size.width * 4,
      paddingVertical: size.width * 4,
      paddingHorizontal: size.width * 4,
      borderWidth: 1,
      borderColor: '#D9D0FF',
    },

    paymentInputTextBlock: {
      flex: 1,
      marginRight: size.width * 2,
    },

    paymentInputRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    paymentRupeeSymbol: {
      fontSize: size.fontSize * 3,
      color: colors.text_Primary,
      fontFamily: fonts.bold,
      marginRight: 2,
    },

    paymentTextInput: {
      fontSize: size.fontSize * 3,
      color: colors.text_Primary,
      fontFamily: fonts.bold,
      padding: 0,
      margin: 0,
      flex: 1,
    },

    minAmountNote: {
      fontSize: size.fontSize * 2,
      color: colors.Color_5346EE,
      fontFamily: fonts.medium,
      marginTop: size.width * 2,
      marginLeft: size.width * 1,
    },

    paymentOptionsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: size.width * 3,
      marginTop: size.width * 4,
    },

    paymentOptionBtn: {
      width: '30%',
      flexGrow: 1,
      paddingVertical: size.width * 3.5,
      borderRadius: size.width * 3,
      borderWidth: 1.5,
      borderColor: '#D9D0FF',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.white,
    },

    paymentOptionBtnSelected: {
      backgroundColor: colors.Color_5346EE,
      borderColor: colors.Color_5346EE,
    },

    paymentOptionText: {
      fontSize: size.fontSize * 2.6,
      fontFamily: fonts.semiBold,
      color: colors.text_Primary,
    },

    paymentOptionTextSelected: {
      color: colors.white,
      fontFamily: fonts.bold,
    },
  });

export default EBookingSecondScreen;

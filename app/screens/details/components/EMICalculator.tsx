import React, { useCallback, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { Text } from '../../../globalComponents/CustomText';
import CustomInputComp from '../../../globalComponents/CustomInputComp';
import RbSheetComp from '../../../globalComponents/RbSheetComp';
import CustomButton from '../../../globalComponents/CustomButton';

import { colors, fonts } from '../../../utils/constants/Theme';
import { calculateEMI } from '../HelperFunctions';
import { formatNumberWithCommas } from '../../../utils/constants/HelperFunctions';

type LoanAmountType = {
  emi: number;
  totalPayment: number;
  totalInterest: number;
};

const EMICalculator = ({
  sheetRef,
  onRoadPrice,
  setOnRoadPrice,
  downPayment,
  setDownPayment,
  interestRate,
  setInterestRate,
  tenure,
  setTenure,
  duration,
  setDuration,
}: any) => {
  const size = useSizeConfig();
  const styles = getStyles(size);

  const [loanAmountDeStruct, setLoanAmountDeStruct] =
    useState<LoanAmountType>();

  const InitialDownPayment = downPayment
    ? onRoadPrice - downPayment
    : onRoadPrice - (40 / 100) * onRoadPrice;

  const fields = [
    {
      label: 'On Road Price',
      value: formatNumberWithCommas(onRoadPrice),
      onChangeText: setOnRoadPrice,
      icon: (
        <Ionicons name="car-sport" size={size.width * 4.5} color="#846AF4" />
      ),
      inputProps: {
        LHSIcon: (
          <View style={styles.LHSIconComp}>
            <MaterialIcons
              name="currency-rupee"
              size={size.width * 3}
              color={colors.white}
            />
          </View>
        ),
        RHSIcon: <Text style={styles.suffixText}>/-</Text>,
      },
      editable: false,
    },
    {
      label: 'Down Payment',
      value: formatNumberWithCommas(InitialDownPayment),
      onChangeText: setDownPayment,
      icon: <Ionicons name="cash" size={size.width * 4.5} color="#846AF4" />,
      placeHolder: 'Down Payment',
      inputProps: {
        LHSIcon: (
          <View style={styles.LHSIconComp}>
            <MaterialIcons
              name="currency-rupee"
              size={size.width * 3}
              color={colors.white}
            />
          </View>
        ),
        RHSIcon: <Text style={styles.suffixText}>/-</Text>,
      },
    },
    {
      label: 'Interest Rate',
      value: interestRate,
      onChangeText: setInterestRate,
      icon: (
        <MaterialIcons name="percent" size={size.width * 4.5} color="#846AF4" />
      ),
      placeHolder: 'Enter Value',
      inputProps: {
        RHSIcon: (
          <Fontisto
            name="shopping-sale"
            size={size.width * 4}
            color="#846AF4"
          />
        ),
      },
    },
  ];

  const emiResultComp = useCallback(
    ({ lable, value }: { lable: string; value: string }) => {
      return (
        <View style={styles.resultItemContainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.resultItemLabel}
          >
            {lable}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.resultItemValue}
          >
            {value}
          </Text>
        </View>
      );
    },
    [styles],
  );

  const handleNumberInput = (text: string, setter: (value: string) => void) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    setter(numericValue);
  };

  return (
    <RbSheetComp ref={sheetRef}>
      <View style={{ gap: size.height * 3 }}>
        <Text style={styles.title}>EMI Calculator</Text>

        <View style={styles.fieldsContainer}>
          <View
            style={{
              gap: size.height * 3,
            }}
          >
            {fields.map((item, index) => (
              <View key={index} style={styles.row}>
                <View style={styles.labelContainer}>
                  {item.icon}

                  <Text style={styles.labelText}>{item.label}</Text>
                </View>

                <CustomInputComp
                  InputText={item.value}
                  InputOnTextChange={(text: string) =>
                    handleNumberInput(text, item.onChangeText)
                  }
                  PlaceholderName={item.placeHolder}
                  editable={item?.editable ?? true}
                  MainCompStyle={styles.inputContainer}
                  compStyle={styles.inputBorder}
                  keyboardType="number-pad"
                  {...item.inputProps}
                />
              </View>
            ))}

            <View style={styles.row}>
              <View style={styles.labelContainer}>
                <Ionicons
                  name="calendar"
                  size={size.width * 4.5}
                  color="#846AF4"
                />

                <Text style={styles.labelText}>Tenure</Text>
              </View>

              <View style={styles.tenureInputRow}>
                <CustomInputComp
                  InputText={duration}
                  InputOnTextChange={(text: string) => {
                    if (text.length <= 3) {
                      return handleNumberInput(text, setDuration);
                    }
                  }}
                  MainCompStyle={styles.tenureInput}
                  compStyle={[
                    styles.tenureInputBorder,
                    { paddingHorizontal: size.width },
                  ]}
                  PlaceholderName="Ex:20"
                />

                <View style={styles.tenureSwitchContainer}>
                  <CustomButton
                    TextValue="M"
                    OnPress={() => setTenure('M')}
                    GradientColors={
                      tenure === 'M'
                        ? ['#ADA9F6', '#A383FF', '#807AF4']
                        : ['#eaecfc', '#eaecfc']
                    }
                    mainstyle={styles.tenureButton}
                    TextStyle={{
                      color:
                        tenure === 'M' ? colors.white : colors.text_Primary,
                      fontFamily: fonts.bold,
                    }}
                  />

                  <CustomButton
                    TextValue="Y"
                    OnPress={() => setTenure('Y')}
                    GradientColors={
                      tenure === 'Y'
                        ? ['#ADA9F6', '#A383FF', '#807AF4']
                        : ['#eaecfc', '#eaecfc']
                    }
                    mainstyle={styles.tenureButton}
                    TextStyle={{
                      color:
                        tenure === 'Y' ? colors.white : colors.text_Primary,
                      fontFamily: fonts.bold,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.buttonRow}>
            <CustomButton
              TextValue="Calculate"
              OnPress={() => {
                console.log(
                  calculateEMI(
                    Number(onRoadPrice) - Number(downPayment ?? InitialDownPayment),
                    Number(interestRate),
                    Number(duration),
                    tenure,
                  ),
                );

                setLoanAmountDeStruct(
                  calculateEMI(
                    Number(onRoadPrice) - Number(InitialDownPayment ),
                    Number(interestRate),
                    Number(duration),
                    tenure,
                  ),
                );
              }}
              mainstyle={styles.actionButton}
            />
            <CustomButton
              TextValue="Reset"
              GradientColors={['#eaecfc', '#eaecfc']}
              TextStyle={styles.resetButtonText}
              mainstyle={styles.actionButton}
            />
          </View>

          <View style={styles.resultContainer}>
            <View style={styles.resultHeader}>
              <View>
                <View style={styles.emiTitleRow}>
                  <Text style={styles.emiTitle}>EMI</Text>

                  <Text style={styles.emiSubtitle}>(per/Month)</Text>
                </View>

                <Text style={styles.emiAmount}>
                  ₹{formatNumberWithCommas(loanAmountDeStruct?.emi || 0)}
                </Text>
              </View>
              <Image
                source={require('../../../assets/images/detail/emi_calculater.png')}
                style={styles.emiImage}
              />
            </View>

            <View style={styles.divider} />

            <View style={styles.resultRow}>
              {emiResultComp({
                lable: 'Loan Amount',
                value: formatNumberWithCommas(onRoadPrice - downPayment),
              })}
              <Text style={styles.emiResultIcon}>+</Text>
              {emiResultComp({
                lable: 'Interest Payable',
                value: formatNumberWithCommas(
                  loanAmountDeStruct?.totalInterest || 0,
                ),
              })}
              <Text style={styles.emiResultIcon}>=</Text>
              {emiResultComp({
                lable: 'Total Amount',
                value: formatNumberWithCommas(
                  loanAmountDeStruct?.totalPayment || 0,
                ),
              })}
            </View>
          </View>
        </View>
      </View>
    </RbSheetComp>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    title: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 3.5,
      color: colors.text_Primary,
    },

    fieldsContainer: {
      gap: size.height * 4,
      marginTop: size.height * 2,
    },

    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: size.width * 3,
    },

    labelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: size.width * 2,
      width: '40%',
    },

    labelText: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3.3,
      color: colors.text_Primary,
      includeFontPadding: false,
    },

    inputContainer: {
      flex: 1,
    },

    tenureInputRow: {
      flexDirection: 'row',
      flex: 1,
      gap: size.width * 2,
    },

    tenureInput: {
      width: size.width * 15,
    },

    tenureSwitchContainer: {
      flexDirection: 'row',
      flex: 1,
      backgroundColor: '#eaecfc',
      borderColor: '#d5d9fc',
      borderWidth: 1,
      borderRadius: size.width * 3,
      overflow: 'hidden',
    },

    tenureButton: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    emiResultIcon: {
      fontFamily: fonts.bold,
      color: colors.text_Primary,
      fontSize: size.fontSize * 4,
    },
    inputBorder: {
      borderColor: '#d5d9fc',
    },

    tenureInputBorder: {
      borderColor: '#d5d9fc',
    },

    actionButton: {
      flex: 1,
      paddingVertical: size.height * 1.5,
    },

    resetButtonText: {
      color: colors.primary,
    },

    buttonRow: {
      flexDirection: 'row',
      gap: size.width * 3,
    },

    resultContainer: {
      backgroundColor: '#eaecfc',
      paddingHorizontal: size.width * 3,
      paddingVertical: size.height * 3,
      gap: size.height * 3,
      borderRadius: size.width * 3,
    },

    resultHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    emiTitleRow: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      gap: size.width,
    },

    emiTitle: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 4.5,
      color: colors.text_Primary,
    },

    emiSubtitle: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3.3,
      color: colors.text_Primary,
    },

    emiAmount: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 4.5,
      color: colors.text_Primary,
    },

    emiImage: {
      width: size.width * 20,
      height: size.width * 17,
      resizeMode: 'contain',
      transform: [{ rotate: '30deg' }],
    },

    divider: {
      borderWidth: 1,
      borderStyle: 'dashed',
      borderColor: colors.ligh_borderColor,
    },

    resultRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    resultItemContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: size.height,
    },

    resultItemLabel: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3,
      color: '#584f76',
    },

    resultItemValue: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 3.7,
      color: colors.primary,
    },

    suffixText: {
      fontFamily: fonts.semiBold,
      color: colors.text_Primary,
      fontSize: size.fontSize * 3.5,
    },
    LHSIconComp: {
      width: size.width * 5,
      height: size.width * 5,
      borderRadius: size.width * 5,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default EMICalculator;

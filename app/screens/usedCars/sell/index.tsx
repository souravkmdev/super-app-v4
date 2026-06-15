import React, { useMemo, useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from '../../../globalComponents/Header';
import HeaderLinearGradient from '../../../globalComponents/HeaderLinearGradient';
import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import StepperBar from '../../booking/components/StepperBar';
import CustomInputComp from '../../../globalComponents/CustomInputComp';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownComp from '../../../globalComponents/DropDownComp';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomButton from '../../../globalComponents/CustomButton';

const SellCarVehicleDetails = ({ navigation }: any) => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const styles = useMemo(() => getStyles(size, insets), [size, insets],);

  const [registrationNumber, setRegistrationNumber] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [year, setYear] = useState('');
  const [showYearPicker, setShowYearPicker] = useState(false);


  const sellCarSteps = [
    {
      id: 1,
      label: 'Vehicle Details',
    },
    {
      id: 2,
      label: 'Personal Details',
    },
    {
      id: 3,
      label: 'Confirm',
    },
  ];

  const brandData = [
    { label: 'BMW', value: 'BMW' },
    { label: 'Honda', value: 'Honda' },
    { label: 'Toyota', value: 'Toyota' },
  ];

  const modelData = [
    { label: 'i5 Sportback', value: 'i5 Sportback' },
    { label: 'A4', value: 'A4' },
  ];

  const fuelTypeData = [
    { label: 'Petrol', value: 'Petrol' },
    { label: 'Diesel', value: 'Diesel' },
    { label: 'Electric', value: 'Electric' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <HeaderLinearGradient />

      <Header
        title="Vehicle Details"
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <StepperBar
          currentStep={1}
          steps={sellCarSteps}
        />

        {/* Banner */}
        <Image
          source={require('../../../assets/images/usedcar/sellcarbanner.png')}
          resizeMode="contain"
          style={styles.bannerImage}
        />

        <View style={styles.formCard}>
          <Text style={styles.sectionTitle}>
            Vehicle Details
          </Text>

          <CustomInputComp
            PlaceholderName="Enter Registration Number"
            InputText={registrationNumber}
            InputOnTextChange={setRegistrationNumber}
            compStyle={styles.inputContainer}
            inputStyle={{
              fontFamily: fonts.semiBold,
              colors: colors.text_Secondary,
            }}
            LHSIcon={
              <Image
                source={require('../../../assets/images/insurance/regicon.png')}
                resizeMode="contain"
                style={{
                  width: size.width * 6,
                  height: size.width * 6,
                  tintColor: '#9580F5',
                }}
              />
            }
            RHSIcon={
              registrationNumber ? (
                <MaterialCommunityIcons
                  name="close"
                  size={size.width * 5}
                  color={colors.text_Primary}
                />
              ) : null
            }
            RHSIconOnPress={() => setRegistrationNumber('')}
          />

          <DropDownComp
            placeholder="Select Brand"
            data={brandData}
            value={brand}
            onChange={item => setBrand(item.value)}
            containerStyle={styles.dropdownSpacing}
            leftIcon={() => (
              <Image
                source={require('../../../assets/images/usedcar/brand.png')}
                resizeMode="contain"
                style={styles.dropdownIcon}
              />
            )}
          />

          <DropDownComp
            placeholder="Select Model"
            data={modelData}
            value={model}
            onChange={item => setModel(item.value)}
            containerStyle={styles.dropdownSpacing}
            leftIcon={() => (
              <Image
                source={require('../../../assets/images/usedcar/model.png')}
                resizeMode="contain"
                style={styles.dropdownIcon}
              />
            )}
          />

          <DropDownComp
            placeholder="Variant"
            data={fuelTypeData}
            value={fuelType}
            onChange={item => setFuelType(item.value)}
            containerStyle={styles.dropdownSpacing}
            leftIcon={() => (
              <MaterialCommunityIcons
                name="tune-variant"
                size={size.width * 5}
                color='#9580F5'
              />
            )}
          />

          <TouchableOpacity
            style={[
              styles.inputContainer,
              styles.dropdownSpacing,
              styles.yearContainer,
            ]}
            onPress={() => setShowYearPicker(true)}
          >
            <Text
              style={[
                styles.yearText,
                !year && styles.placeholderText,
              ]}
            >
              {year || 'Enter Year'}
            </Text>

            <Image
              source={require('../../../assets/images/usedcar/year.png')}
              resizeMode="contain"
              style={styles.dropdownIcon}
            />
          </TouchableOpacity>

          {showYearPicker && (
            <DateTimePicker
              value={new Date()}
              mode="date"
              display="default"
              maximumDate={new Date()}
              onChange={(event, selectedDate) => {
                setShowYearPicker(false);

                if (selectedDate) {
                  setYear(
                    selectedDate.getFullYear().toString(),
                  );
                }
              }}
            />
          )}

        </View>
      </ScrollView>
      <CustomButton
        TextValue="Continue"
        OnPress={() => navigation.navigate('SellCarPersonalDetails')}
        mainstyle={styles.buttonContainer}
        GradientColors={['#807AF4', '#7478FF', '#ADA9F6']}
      />
    </View>
  );
};

export default SellCarVehicleDetails;

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7FE',
    },

    scrollContent: {
      paddingHorizontal: size.width * 4,
      paddingBottom: size.height * 5,
    },

    bannerImage: {
      width: '100%',
      height: size.height * 40,
      marginTop: size.height * 10,
      alignSelf: 'center',
    },
    formCard: {
      backgroundColor: colors.white,
      borderRadius: size.width * 4,
      padding: size.width * 4,
      marginTop: size.height * 3,
    },

    inputContainer: {
      borderColor: '#E6E6F0',
      backgroundColor: colors.white,
    },

    inputLabel: {
      color: colors.text_Primary,
      fontFamily: fonts.semiBold,
    },
    sectionTitle: {
      color: colors.text_Primary,
      fontSize: size.fontSize * 4,
      fontFamily: fonts.semiBold,
      marginBottom: size.height * 3,
    },
    dropdownSpacing: {
      marginTop: size.height * 5,
    },
    dropdownIcon: {
      width: size.width * 6,
      height: size.width * 6,
      tintColor: '#9580F5'
    },
    yearContainer: {
      height: size.height * 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: size.width * 4,
      borderWidth: 1,
      borderColor: '#E6E6F0',
      borderRadius: size.width * 3,
    },

    yearText: {
      color: colors.text_Primary,
      fontSize: size.fontSize * 3.5,
      fontFamily: fonts.semiBold,
    },

    placeholderText: {
      color: colors.text_Secondary,
      fontFamily: fonts.semiBold,
    },
    yearLeftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: size.width * 3,
    },
    buttonContainer: {
      marginHorizontal: size.width * 4,
      marginBottom: size.height * 3,
      height: size.height * 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
import React, { useMemo, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';

import Header from '../../globalComponents/Header';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import StepperBar from '../booking/components/StepperBar';
import ClaimBannerCard from './components/ClaimBannerCard';
import OutletForm from './components/OutletForm';
import DateTimePicker from '@react-native-community/datetimepicker';
import SelectionModal from './components/SelectionModal';
import ContactDetailsBottomSheet from './components/ContactDetailsBottomSheet';
import ThankYouModal from '../../globalComponents/ThankYouModal';
import HeaderLinearGradient from '../../globalComponents/HeaderLinearGradient';

const OutletScreen = ({ navigation }: any) => {
  const size = useSizeConfig();
  const styles = useMemo(() => getStyles(size), [size]);
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showExpiryPicker, setShowExpiryPicker] = useState(false);

  const [showContactSheet, setShowContactSheet] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showCityModal, setShowCityModal] = useState(false);

  const cityItems = [
    { label: 'Bangalore', value: 'bangalore' },
    { label: 'Mysore', value: 'mysore' },
    { label: 'Hubli', value: 'hubli' },
    { label: 'Mangalore', value: 'mangalore' },
  ];

  const [showRegionModal, setShowRegionModal] = useState(false);

  const regionItems = [
    { label: 'North', value: 'north' },
    { label: 'South', value: 'south' },
    { label: 'East', value: 'east' },
    { label: 'West', value: 'west' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <HeaderLinearGradient />

      <Header title="Insurance" onPress={() => navigation.goBack()} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <StepperBar
          currentStep={2}
          steps={[
            {
              id: 1,
              label: 'Details',
            },
            {
              id: 2,
              label: 'Outlet',
            },
            {
              id: 3,
              label: 'Contact details',
            },
          ]}
        />

        <View style={styles.bannerContainer}>
          <ClaimBannerCard />
        </View>

        <View style={styles.formContainer}>
          <OutletForm
            year={year}
            month={month}
            city={city}
            region={region}
            expiryDate={expiryDate}
            setYear={setYear}
            setMonth={setMonth}
            setCity={setCity}
            setRegion={setRegion}
            setExpiryDate={setExpiryDate}
            onYearPress={() => setShowYearPicker(true)}
            onMonthPress={() => setShowMonthPicker(true)}
            onExpiryPress={() => setShowExpiryPicker(true)}
            onCityPress={() => setShowCityModal(true)}
            onRegionPress={() => setShowRegionModal(true)}
            onSavePress={() => setShowContactSheet(true)}
          />
        </View>
      </ScrollView>

      {showYearPicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="spinner"
          onChange={(event, selectedDate) => {
            setShowYearPicker(false);

            if (selectedDate) {
              setYear(selectedDate.getFullYear().toString());
            }
          }}
        />
      )}

      {showMonthPicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="spinner"
          onChange={(event, selectedDate) => {
            setShowMonthPicker(false);

            if (selectedDate) {
              const monthName = selectedDate.toLocaleString('default', {
                month: 'long',
              });

              setMonth(monthName);
            }
          }}
        />
      )}

      {showExpiryPicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          minimumDate={new Date()}
          onChange={(event, selectedDate) => {
            setShowExpiryPicker(false);

            if (selectedDate) {
              const day = selectedDate.getDate().toString().padStart(2, '0');
              const month = (selectedDate.getMonth() + 1)
                .toString()
                .padStart(2, '0');
              const year = selectedDate.getFullYear();

              setExpiryDate(`${day}/${month}/${year}`);
            }
          }}
        />
      )}

      <SelectionModal
        visible={showCityModal}
        title="Select City"
        data={cityItems}
        onClose={() => setShowCityModal(false)}
        onSelect={(item: { label: string; value: string }) =>
          setCity(item.label)
        }
      />

      <SelectionModal
        visible={showRegionModal}
        title="Select Region"
        data={regionItems}
        onClose={() => setShowRegionModal(false)}
        onSelect={(item: { label: string; value: string }) =>
          setRegion(item.label)
        }
      />

      <ContactDetailsBottomSheet
        visible={showContactSheet}
        onClose={() => setShowContactSheet(false)}
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        employeeName={employeeName}
        setEmployeeName={setEmployeeName}
        employeeId={employeeId}
        setEmployeeId={setEmployeeId}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        onSubmit={() => {
          setShowContactSheet(false);
          setShowThankYouModal(true);
        }}
      />

      <ThankYouModal
        visible={showThankYouModal}
        image={require('../../assets/images/thankyou.png')}
        title="Thank you!"
        description="Thanks! We've received your insurance enquiry. Our team will get back to you shortly."
        buttonText="Back to Home"
        onButtonPress={() => {
          setShowThankYouModal(false);
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default OutletScreen;

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7Fe',
    },

    gradientContainer: {
      height: size.height * 26,
    },

    scrollContent: {
      paddingHorizontal: size.width * 5,
      paddingBottom: size.height * 15,
    },

    bannerContainer: {
      marginTop: size.height * 9,
    },

    formContainer: {
      marginTop: size.height * 3,
    },
  });

import React, { useMemo, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import Header from '../../globalComponents/Header';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { colors } from '../../utils/constants/Theme';
import InsuranceHeroSection from './components/InsuranceHeroSection';
import HeaderLinearGradient from '../../globalComponents/HeaderLinearGradient';

const InsuranceScreen = ({ navigation }: any) => {
  const size = useSizeConfig();
  const styles = useMemo(() => getStyles(size), [size]);
  const [registrationNumber, setRegistrationNumber] = useState('');

  const registrationRegex = /^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/;

  const isValidRegistration = registrationRegex.test(
    registrationNumber.replace(/\s/g, ''),
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <HeaderLinearGradient />
      <Header title="Insurance" onPress={() => navigation.goBack()} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
      >
        <InsuranceHeroSection
          navigation={navigation}
          registrationNumber={registrationNumber}
          setRegistrationNumber={setRegistrationNumber}
          isValidRegistration={isValidRegistration}
        />
      </ScrollView>
    </View>
  );
};

export default InsuranceScreen;

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7Fe',
    },

    gradientContainer: {
      width: '100%',
      height: size.height * 26,
    },

    scrollContent: {
      paddingBottom: size.height * 10,
    },
  });

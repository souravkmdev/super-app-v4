import React, { useMemo, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Header from '../../globalComponents/Header';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { colors } from '../../utils/constants/Theme';
import InsuranceHeroSection from './components/InsuranceHeroSection';

const InsuranceScreen = ({ navigation }: any) => {
  const size = useSizeConfig();
  const styles = useMemo(() => getStyles(size),[size],);
  const [registrationNumber, setRegistrationNumber] = useState("")
   
   const registrationRegex =
          /^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/;
  
      const isValidRegistration =
          registrationRegex.test(
              registrationNumber.replace(/\s/g, ''),
          );

  return (
    <LinearGradient
      colors={['#F3F3FF', '#F3F3FD', '#F3F3FF']}
      style={styles.container}
    >
      <StatusBar
        barStyle="dark-content"
      />

      <LinearGradient
        colors={['#d3cafb', '#e3dcffd2', '#F3F3FF']}
        style={styles.gradientContainer}>

        <Header
          title="Insurance"
          onPress={() => navigation.goBack()}
        />
      </LinearGradient>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={
          Platform.OS === 'ios'
            ? 'padding'
            : 'height'
        }>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}>

          <InsuranceHeroSection
            navigation={navigation}
            registrationNumber={registrationNumber}
            setRegistrationNumber={setRegistrationNumber}
            isValidRegistration={isValidRegistration} />
            
            
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>

  );
};

export default InsuranceScreen;

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },

    gradientContainer: {
      width: '100%',
      height: size.height * 26,
    },

    scrollContent: {
      paddingBottom: size.height * 10,
    },

  });
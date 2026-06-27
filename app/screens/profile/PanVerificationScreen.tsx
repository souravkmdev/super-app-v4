import React, { useMemo, useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from '../../globalComponents/Header';
import HeaderLinearGradient from '../../globalComponents/HeaderLinearGradient';
import CustomButton from '../../globalComponents/CustomButton';
import CustomInputComp from '../../globalComponents/CustomInputComp';
import { Text } from '../../globalComponents/CustomText';

import { useSizeConfig } from '../../utils/context/SizeConfig';
import { colors, fonts } from '../../utils/constants/Theme';

import Verificationsub from './components/Verificationsub';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const PanVerificationScreen = ({ navigation }: any) => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  const [name, setName] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [dob, setDob] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const onChangeDate = (_: any, selected?: Date) => {
    setShowDatePicker(false);

    if (selected) {
      setSelectedDate(selected);
      setDob(formatDate(selected));
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <HeaderLinearGradient />

      <Header
        title="Profile Verification"
        onPress={() => navigation.goBack()}
      />

      <KeyboardAwareScrollView
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>

        <View style={styles.verifysub}>
          <Verificationsub
            image={require('../../assets/images/profile/panverify.png')}
            imageWidth={size.width * 80}
            imageHeight={size.height * 70}
          />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>
            Verify PAN Details
          </Text>

          <CustomInputComp
            InputText={name}
            InputOnTextChange={setName}
            PlaceholderName="Enter name as per PAN"
            MainCompStyle={{
              marginTop: size.height * 5,
            }}
            LHSIcon={
              <MaterialIcons
                name="person"
                size={size.width * 5}
                color={colors.Color_5346EE}
              />
            }
            RHSIcon={
              name.length > 0 ? (
                <TouchableOpacity onPress={() => setName('')}>
                  <MaterialIcons
                    name="close"
                    size={size.width * 5}
                    color= {colors.text_Primary}
                  />
                </TouchableOpacity>
              ) : null
            }
          />

          <CustomInputComp
            InputText={panNumber}
            InputOnTextChange={setPanNumber}
            PlaceholderName="Enter PAN Number"
            MainCompStyle={{
              marginTop: size.height * 5,
            }}
            LHSIcon={
              <Image
                source={require('../../assets/images/insurance/regicon.png')}
                style={styles.inputIcon}
                resizeMode="contain"
              />
            }
          />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setShowDatePicker(true)}
          >
            <View pointerEvents="none">
              <CustomInputComp
                InputText={dob}
                PlaceholderName="Enter Date of Birth"
                MainCompStyle={{
                  marginTop: size.height * 5,
                }}
                LHSIcon={
                  <MaterialCommunityIcons
                    name="cake-variant"
                    size={size.width * 5}
                    color={colors.Color_5346EE}
                  />
                }
              />
            </View>
          </TouchableOpacity>

        </View>

      </KeyboardAwareScrollView>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          maximumDate={new Date()}
          onChange={onChangeDate}
        />
      )}

      <View style={styles.buttonContainer}>
        <CustomButton
          TextValue="Continue"
          PressableStyle={styles.button}
          OnPress={() => navigation.navigate('ProfileVerification')}
        />
      </View>
    </View>
  );
};

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7FE',
    },

    scrollContent: {
      paddingHorizontal: size.width * 3,
      paddingBottom: size.height * 5,
    },

    formContainer: {
      backgroundColor: '#FFFFFF6E',
      borderRadius: size.width * 4,
      padding: size.width * 4,
      marginTop: size.height * 6,
    },

    formTitle: {
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 4,
      color: colors.text_Primary,
    },

    buttonContainer: {
      paddingHorizontal: size.width * 3,
      paddingBottom: size.height * 3,
    },

    button: {
      paddingVertical: size.height * 4,
    },
    inputIcon: {
      width: size.width * 5,
      height: size.width * 5,
    },
    verifysub: {
      marginTop: size.height * 5
    }
  });

export default PanVerificationScreen;
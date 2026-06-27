import React, { useMemo, useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../../globalComponents/Header';
import HeaderLinearGradient from '../../../globalComponents/HeaderLinearGradient';
import CustomButton from '../../../globalComponents/CustomButton';
import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import SellCarEvaluationCard from './components/EvaluationCard';
import DateTimePicker from '@react-native-community/datetimepicker';
import EvaluationTimeCard from './components/EvaluationTimeCard';
import ThankYouModal from '../../../globalComponents/ThankYouModal';
import StepperBar from '../../../globalComponents/StepperBar';

const SellCarEvaluate = ({ navigation }: any) => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  const [evaluationType, setEvaluationType] = useState('doorstep');

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [evaluationDate, setEvaluationDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showThankYouModal, setShowThankYouModal] = useState(false);
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
      label: 'Evaluate',
    },
  ];

  const timeSlots = [
    { start: '09:00 AM', end: '10:00 AM' },
    { start: '10:00 AM', end: '11:00 AM' },
    { start: '11:00 AM', end: '12:00 PM' },
    { start: '12:00 PM', end: '01:00 PM' },
    { start: '02:00 PM', end: '03:00 PM' },
    { start: '03:00 PM', end: '04:00 PM' },
    { start: '04:00 PM', end: '05:00 PM' },
    { start: '05:00 PM', end: '06:00 PM' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <HeaderLinearGradient />

      <Header title="Evaluate" onPress={() => navigation.goBack()} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <StepperBar currentStep={3} steps={sellCarSteps} />

        <Text style={styles.sectionTitle}>
          How do you want your car evaluated?
        </Text>

        <View style={styles.formCard}>
          <SellCarEvaluationCard
            title="Doorstep Evaluation"
            subtitle="We come to your location"
            icon={
              <MaterialCommunityIcons
                name="home"
                size={size.width * 6}
                color={evaluationType === 'doorstep' ? '#FFFFFF' : '#9580F5'}
              />
            }
            selected={evaluationType === 'doorstep'}
            onPress={() => setEvaluationType('doorstep')}
          />

          <View style={{ height: size.height * 2 }} />

          <SellCarEvaluationCard
            title="Showroom Evaluation"
            subtitle="Visit our nearest branch"
            icon={
              <Image
                source={require('../../../assets/images/insurance/region.png')}
                resizeMode="contain"
                style={{
                  width: size.width * 5,
                  height: size.width * 5,
                  tintColor:
                    evaluationType === 'showroom' ? '#FFFFFF' : '#9580F5',
                }}
              />
            }
            selected={evaluationType === 'showroom'}
            onPress={() => setEvaluationType('showroom')}
          />
        </View>

        <Text style={styles.chooseTitle}>Choose Evaluation Date</Text>

        <TouchableOpacity
          style={styles.dateContainer}
          onPress={() => setShowDatePicker(true)}
        >
          <View style={styles.dateLeft}>
            <Text style={styles.dateText}>
              {evaluationDate || 'Select Date'}
            </Text>
          </View>

          <Image
            source={require('../../../assets/images/usedcar/year.png')}
            resizeMode="contain"
            style={{
              width: size.width * 6,
              height: size.width * 6,
            }}
          />
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display="default"
            minimumDate={new Date()}
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);

              if (selectedDate) {
                setEvaluationDate(selectedDate.toLocaleDateString('en-GB'));
              }
            }}
          />
        )}

        <Text style={styles.chooseTitle}>Choose Evaluation Time</Text>

        <View style={styles.timeContainer}>
          {timeSlots.map(item => (
            <EvaluationTimeCard
              key={item.start}
              startTime={item.start}
              endTime={item.end}
              selected={selectedTime === item.start}
              onPress={() => setSelectedTime(item.start)}
            />
          ))}
        </View>
      </ScrollView>

      <CustomButton
        TextValue="Submit"
        mainstyle={styles.buttonContainer}
        OnPress={() => setShowThankYouModal(true)}
      />

      <ThankYouModal
        visible={showThankYouModal}
        image={require('../../../assets/images/thankyou.png')}
        title="Thank You!"
        description="Your car evaluation request has been submitted successfully. Our team will contact you shortly."
        buttonText="Back to home"
        onButtonPress={() => {
          setShowThankYouModal(false);
          navigation.navigate('BottomNavigation');
        }}
      />
    </View>
  );
};

export default SellCarEvaluate;

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

    formCard: {
      backgroundColor: colors.white,
      borderRadius: size.width * 4,
      padding: size.width * 4,
      // marginTop: size.height * 5,
    },

    sectionTitle: {
      color: colors.text_Primary,
      fontSize: size.fontSize * 4,
      fontFamily: fonts.semiBold,
      marginBottom: size.height * 3,
      marginTop: size.height * 10,
    },

    chooseTitle: {
      marginTop: size.height * 4,
      marginBottom: size.height * 2,
      fontFamily: fonts.semiBold,
      color: colors.text_Primary,
      fontSize: size.fontSize * 3.5,
    },

    dateContainer: {
      height: size.height * 12,
      borderWidth: 1,
      borderColor: '#E6E6F0',
      borderRadius: size.width * 3,
      backgroundColor: colors.white,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: size.width * 4,
    },

    dateLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    dateText: {
      marginLeft: size.width * 2,
      fontFamily: fonts.medium,
      color: colors.text_Primary,
    },

    timeContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
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

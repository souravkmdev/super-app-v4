import React, { useMemo } from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';

import { Text } from '../../../globalComponents/CustomText';
import CustomButton from '../../../globalComponents/CustomButton';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import OutletInputBox from './OutletInputBox';

const OutletForm = ({
  year,
  month,
  city,
  region,
  expiryDate,
  onYearPress,
  onMonthPress,
  onExpiryPress,
  onCityPress,
  onRegionPress,
  onSavePress,
}: any) => {
  const size = useSizeConfig();
  const styles = useMemo(() => getStyles(size), [size],);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Outlets
      </Text>

      <View style={styles.rowContainer}>

        <OutletInputBox
          icon="calendar"
          label={year || 'Year'}
          style={styles.halfBox}
          onPress={onYearPress}
        />

        <OutletInputBox
          icon="calendar"
          label={month || 'Month'}
          style={styles.halfBox}
          onPress={onMonthPress}
        />

      </View>

      <OutletInputBox
        icon="business"
        label={city || 'Registered City'}
        style={styles.fullBox}
        onPress={onCityPress}
      />

      <OutletInputBox
        imageIcon={require('../../../assets/images/insurance/region.png')}
        label={region || 'Region'}
        style={styles.fullBox}
        onPress={onRegionPress}
      />

      <OutletInputBox
        icon="time"
        label={expiryDate || 'Select Policy Expire Date'}
        style={styles.fullBox}
        onPress={onExpiryPress}
      />

      <CustomButton
        TextValue="Save & Submit"
        mainstyle={styles.buttonMain}
        PressableStyle={styles.buttonPressable}
        GradientColors={['#6F63F6', '#A79AF8',]}
        OnPress={onSavePress}
      />

    </View>
  );
};

export default OutletForm;

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      borderRadius: size.width * 5,
      paddingHorizontal: size.width * 4,
      paddingTop: size.height * 3,
      paddingBottom: size.height * 3.5,
      borderWidth: 1,
      borderColor: '#EEE8FF',
    },

    title: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 4,
      color: colors.text_Primary,
      marginBottom: size.height * 3,
    },

    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    halfBox: {
      width: '48%',
    },

    fullBox: {
      marginTop: size.height * 4,
    },

    buttonMain: {
      marginTop: size.height * 5,
      borderRadius: size.width * 3,
    },

    buttonPressable: {
      height: size.height * 11,
      borderRadius: size.width * 3,
      justifyContent: 'center',
      alignItems: 'center',
    },

  });
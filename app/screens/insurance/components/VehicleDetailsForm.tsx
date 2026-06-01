import React, { useMemo, useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from '../../../globalComponents/CustomText';
import CustomButton from '../../../globalComponents/CustomButton';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

const VehicleDetailsForm = ({navigation,
  selectedModel,
  selectedFuel,
  setSelectedFuel,
  selectedVariant,
  onModelPress,
  onVariantPress,
}:any) => {
  const size = useSizeConfig();
  const styles = useMemo(() => getStyles(size),[size],);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Car Details
      </Text>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.selectBox}
          onPress={onModelPress}

      >

        <View style={styles.leftContainer}>
          <Ionicons
            name="people"
            size={size.width * 5}
            color="#8B6FFF"
          />

          <View style={styles.textContainer}>
            <Text style={styles.label}>

                {selectedModel || 'Select Model'}

            </Text>
          </View>
        </View>

        <Ionicons
          name="chevron-down"
          size={size.width * 4.5}
          color="#17133C"
        />

      </TouchableOpacity>

      <View style={styles.fuelContainer}>
        {['Petrol', 'Diesel', 'CNG'].map((item) => {
          const isSelected = selectedFuel === item;
          return (
            <TouchableOpacity
              key={item}
              activeOpacity={0.8}
              onPress={() => setSelectedFuel(item)}
              style={[
                styles.fuelButton,
                isSelected &&
                  styles.selectedFuelButton,
              ]}>

              <Text
                style={[
                  styles.fuelText,
                  isSelected &&
                    styles.selectedFuelText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}

      </View>


      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.selectBox,
          styles.variantBox,
        ]}
        onPress={onVariantPress}
      >

        <View style={styles.leftContainer}>
          <Ionicons
            name="people"
            size={size.width * 5}
            color="#8B6FFF"
          />

          <View style={styles.textContainer}>
            <Text style={styles.label}>
              {/* Select Variant */}
              {selectedVariant || 'Select Variant'}
            </Text>
          </View>
        </View>

        <Ionicons
          name="chevron-down"
          size={size.width * 4.5}
          color="#17133C"
        />

      </TouchableOpacity>

      <CustomButton
        TextValue="Continue"
        mainstyle={styles.buttonMain}
        PressableStyle={styles.buttonPressable}
        GradientColors={[
          '#6F63F6',
          '#A79AF8',
        ]}
        OnPress={() => navigation.navigate('OutletScreen')}/>
    </View>
  );
};

export default VehicleDetailsForm;

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      marginTop: size.height * 3,
      backgroundColor: colors.white,
      borderRadius: size.width * 5,
      paddingHorizontal: size.width * 4,
      paddingTop: size.height * 3,
      paddingBottom: size.height * 4,
      borderWidth: 1,
      borderColor: '#EEE8FF',
    },

    title: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 4,
      color: colors.text_Primary,
      marginBottom: size.height * 3,
    },

    selectBox: {
      height: size.height * 13,
      borderRadius: size.width * 3,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: '#FFFFFF',
      paddingHorizontal: size.width * 4,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    leftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },

    textContainer: {
      marginLeft: size.width * 3,
    },

    label: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3,
      color: colors.text_Primary,
    },

    fuelContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: size.height * 5,
    },

    fuelButton: {
      width: size.width * 26,
      height: size.height * 11,
      borderRadius: size.width * 3,
      borderWidth: 1,
      borderColor: '#DDD5FF',
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
    },

    selectedFuelButton: {
      backgroundColor: '#F4F1FF',
      borderColor: '#6B5BFF',
    },

    fuelText: {
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.8,
      color: colors.text_Primary,
    },

    selectedFuelText: {
      color: '#6B5BFF',
      fontFamily: fonts.semiBold,
    },

    variantBox: {
      marginTop: size.height * 5,
    },

    buttonMain: {
      marginTop: size.height * 5,
      borderRadius: size.width * 3,
    },

    buttonPressable: {
      height: size.height * 12,
      borderRadius: size.width * 3,
      justifyContent: 'center',
      alignItems: 'center',
    },

  });
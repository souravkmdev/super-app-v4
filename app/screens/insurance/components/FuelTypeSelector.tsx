import React, { useMemo } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { Text } from '../../../globalComponents/CustomText';

import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

interface Props {
  selectedFuel: string;
  onSelectFuel: (fuel: string) => void;
}

const fuelOptions = [
  'Petrol',
  'Diesel',
  'CNG',
];

const FuelTypeSelector = ({
  selectedFuel,
  onSelectFuel,
}: Props) => {

  const size = useSizeConfig();
  const styles = useMemo(() => getStyles(size),[size],);

  return (
    <View style={styles.container}>
      {fuelOptions.map((item) => {
        const isSelected =
          selectedFuel === item;

        return (
          <TouchableOpacity
            key={item}
            activeOpacity={0.8}
            style={[
              styles.button,
              isSelected &&
                styles.selectedButton,
            ]}
            onPress={() =>
              onSelectFuel(item)
            }
          >

            <Text
              style={[
                styles.buttonText,
                isSelected &&
                  styles.selectedButtonText,
              ]}
            >
              {item}
            </Text>

          </TouchableOpacity>
        );
      })}

    </View>
  );
};

export default FuelTypeSelector;

const getStyles = (size: any) =>
  StyleSheet.create({

    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: size.height * 2,
    },

    button: {
      width: size.width * 27,
      height: size.height * 6.8,
      borderRadius: size.width * 2,
      borderWidth: 1,
      borderColor: '#DDD5FF',
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
    },

    selectedButton: {
      backgroundColor: '#F4F1FF',
      borderColor: '#6B5BFF',
    },

    buttonText: {
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.5,
      color: colors.text_Primary,
    },

    selectedButtonText: {
      color: '#6B5BFF',
      fontFamily: fonts.semiBold,
    },

  });
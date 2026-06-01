import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { TextInput } from '../../../globalComponents/CustomTextInput';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

interface Props {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

const FormField = ({
  icon,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
}: Props) => {
  const size = useSizeConfig();
  const styles = getStyles(size);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {icon}
      </View>

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor= {colors.text_Secondary}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default FormField;

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.white,
      borderRadius: size.width * 3,
      borderWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: size.width * 4,
      marginBottom: size.height * 1.8,
      height: size.height * 12,
    },

    iconContainer: {
      marginRight: size.width * 3,
    },

    input: {
      flex: 1,
      fontSize: size.fontSize * 3,
      color: colors.text_Primary,
      fontFamily: fonts.medium,
    },
  });
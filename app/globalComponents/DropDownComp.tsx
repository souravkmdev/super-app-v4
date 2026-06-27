import React, { memo, useMemo } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import { Dropdown } from 'react-native-element-dropdown';
import Feather from 'react-native-vector-icons/Feather';

import { Text } from './CustomText';
import { useSizeConfig } from '../utils/context/SizeConfig';
import { colors, fonts } from '../utils/constants/Theme';

interface DropdownItem {
  label: string;
  value: string;
}

interface AppDropdownProps {
  title?: string;
  placeholder?: string;
  data: DropdownItem[];
  value?: string;
  onChange: (item: DropdownItem) => void;
  search?: boolean;
  disabled?: boolean;

  dropdownStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  placeholderTextStyle?: StyleProp<TextStyle>;
  selectedValueStyle?: StyleProp<TextStyle>;
  leftIcon?: (
    visible?: boolean,
  ) => React.ReactElement | null;
}

const DropDowncomp = ({
  title,
  placeholder = 'Select',
  data,
  value,
  onChange,
  search = false,
  disabled = false,

  dropdownStyle,
  containerStyle,
  placeholderTextStyle,
  selectedValueStyle,
  leftIcon,
}: AppDropdownProps) => {
  const size = useSizeConfig();

  const styles = useMemo(
    () => getStyles(size),
    [size],
  );

  return (
    <View style={containerStyle}>
      {title && (
        <Text style={styles.label}>
          {title}
        </Text>
      )}

      <Dropdown
        data={data}
        labelField="label"
        valueField="value"
        value={value}
        search={search}
        disable={disabled}
        maxHeight={size.height * 35}
        placeholder={placeholder}
        searchPlaceholder="Search..."
        onChange={onChange}
        activeColor="#F3F3FF"
        renderLeftIcon={leftIcon}
        style={[
          styles.dropdown,
          dropdownStyle,
        ]}
        containerStyle={styles.dropdownContainer}
        placeholderStyle={[
          styles.placeholder,
          placeholderTextStyle,
        ]}
        selectedTextStyle={[
          styles.selectedText,
          selectedValueStyle,
        ]}
        itemTextStyle={styles.itemText}
        itemContainerStyle={{
          paddingVertical: 0,
        }}
        renderRightIcon={() => (
          <Feather
            name="chevron-down"
            size={size.width * 5}
            color={colors.text_Primary}
          />
        )}
      />
    </View>
  );
};

export default memo(DropDowncomp);

const getStyles = (size: any) =>
  StyleSheet.create({
    label: {
      fontFamily: fonts.medium,
      fontSize: size.width * 3.5,
      color: colors.text_Primary,
      marginBottom: size.height * 1,
    },

    dropdown: {
      height: size.height * 12,
      borderWidth: 1,
      borderColor: '#E6E6F0',
      borderRadius: size.width * 3,
      paddingHorizontal: size.width * 4,
      backgroundColor: colors.white,
    },

    dropdownContainer: {
      borderRadius: size.width * 3,
      overflow: 'hidden',
      marginTop: size.height * 0.5,
      borderWidth: 1,
      borderColor: '#E6E6F0',
      maxHeight: size.height * 35,
    },

    placeholder: {
      fontSize: size.width * 3.6,
      color: colors.text_Secondary,
      marginLeft: size.width * 2,
      fontFamily: fonts.semiBold, 
    },

    selectedText: {
      fontFamily: fonts.semiBold,
      fontSize: size.width * 3.6,
      color: colors.text_Primary,
      marginLeft: size.width * 2,
    },

    itemText: {
      fontFamily: fonts.medium,
      fontSize: size.width * 3.4,
      color: colors.text_Primary,
    },
  });
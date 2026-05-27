import React, { useMemo } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

interface Props {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  onVoicePress?: () => void;
}

const SearchInput = ({
  value,
  onChangeText,
  placeholder = 'Search for cars, services and more',
  onVoicePress,
}: Props) => {
  const size = useSizeConfig();

  const styles = useMemo(
    () => getStyles(size),
    [size],
  );

  return (
    <View style={styles.container}>
 
      <Ionicons
        name="search"
        size={size.width * 5}
        color={'#846AF4'}
      />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#B2B0C0"
        style={styles.input}
        cursorColor={colors.primary}
      />

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onVoicePress}
        style={styles.voiceButton}
      >
        <MaterialCommunityIcons
          name="microphone"
          size={size.width * 5}
          color={'#6F5BBA'}
        />
      </TouchableOpacity>
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      height: size.height * 12,
      backgroundColor: colors.white,
      borderRadius: size.width * 3,
      paddingLeft: size.width * 3.5,
      paddingRight: size.width * 2,
      borderWidth: 1,
      borderColor: '#EFEAFE',
      marginTop: size.height*2.5,
    },

    input: {
      flex: 1,
      marginLeft: size.width * 2,
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 3.5,
      color: colors.text_Primary,
    },

    voiceButton: {
      width: size.width * 8,
      height: size.width * 8,
      borderRadius: size.width * 2,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#DCD4FF70',
      
    },
  });

export default SearchInput;
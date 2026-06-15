import React, { useMemo } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Text } from '../../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../../utils/constants/Theme';

interface Props {
  startTime: string;
  endTime: string;
  selected?: boolean;
  onPress?: () => void;
}

const EvaluationTimeCard = ({
  startTime,
  endTime,
  selected = false,
  onPress,
}: Props) => {
  const size = useSizeConfig();

  const styles = useMemo(
    () => getStyles(size),
    [size],
  );

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.container,
        selected && styles.selectedContainer,
      ]}
    >
      <MaterialCommunityIcons
        name="white-balance-sunny"
        size={size.width * 6}
        color="#FDB813"
      />

      <View style={styles.timeWrapper}>
        <Text
          style={[
            styles.timeText,
            selected && styles.selectedText,
          ]}
        >
          {startTime}
        </Text>

        <Text
          style={[
            styles.timeText,
            selected && styles.selectedText,
          ]}
        >
          {endTime}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EvaluationTimeCard;

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      width: size.width * 20,
      height: size.height * 24,
      borderRadius: size.width * 4,
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#F2F2F2',
    },

    selectedContainer: {
      borderWidth: 1.5,
      borderColor: '#B19CFF',
      backgroundColor: colors.white,
    },

    timeWrapper: {
      marginTop: size.height * 1,
      alignItems: 'center',
    },

    timeText: {
      fontSize: size.fontSize * 2.6,
      fontFamily: fonts.semiBold,
      color: colors.text_Primary,
    },

    selectedText: {
      color: colors.text_Primary,
    },
  });
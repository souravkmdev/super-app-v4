import React, { useMemo } from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSizeConfig } from '../../../../utils/context/SizeConfig';
import { Text } from '../../../../globalComponents/CustomText';
import { colors, fonts } from '../../../../utils/constants/Theme';


interface SellCarEvaluationCardProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  selected?: boolean;
  onPress?: () => void;
}

const SellCarEvaluationCard = ({
  title,
  subtitle,
  icon,
  selected = false,
  onPress,
}: SellCarEvaluationCardProps) => {
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
      <View style={styles.leftContainer}>
        <View style={styles.icon}>
          {icon}
        </View>

        <View>
          <Text
            style={[
              styles.title,
              selected && styles.selectedText,
            ]}
          >
            {title}
          </Text>

          <Text
            style={[
              styles.subtitle,
              selected && styles.selectedSubText,
            ]}
          >
            {subtitle}
          </Text>
        </View>
      </View>

      <MaterialCommunityIcons
        name={
          selected
            ? 'radiobox-marked'
            : 'radiobox-blank'
        }
        size={size.width * 6}
        color={
          selected
            ? colors.white
            : '#9580F5'
        }
      />
    </TouchableOpacity>
  );
};

export default SellCarEvaluationCard;

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      borderRadius: size.width * 3,
      paddingHorizontal: size.width * 4,
      paddingVertical: size.width * 4,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: '#E6E6F0',
    },

    selectedContainer: {
      backgroundColor: '#9580F5',
      borderColor: '#9580F5',
    },

    leftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    icon: {
      width: size.width * 8,
      height: size.width * 8,
      // marginRight: size.width * 3,
    },

    title: {
      fontSize: size.fontSize * 3.8,
      fontFamily: fonts.semiBold,
      color: colors.text_Primary,
    },

    subtitle: {
      fontSize: size.fontSize * 2.6,
      fontFamily: fonts.medium,
      color: colors.text_Secondary,
      marginTop: size.height * 0.3,
    },

    selectedText: {
      color: colors.white,
    },

    selectedSubText: {
      color: colors.white,
    },
  });
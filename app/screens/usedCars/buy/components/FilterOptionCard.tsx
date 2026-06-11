import React, { useMemo } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { Text } from '../../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../../utils/constants/Theme';

interface Props {
  title: string;
  subtitle?: string;
  value?: string;
  logo?: any;

  variant?: 'default' | 'budget' | 'year';

  isSelected?: boolean;
  onPress?: () => void;
}

const FilterOptionCard = ({
  title,
  subtitle,
  value,
  logo,
  variant = 'default',
  isSelected = false,
  onPress,
}: Props) => {
  const size = useSizeConfig();

  const styles = useMemo(
    () => getStyles(size),
    [size],
  );

  const isBudget = variant === 'budget';
  const isYear = variant === 'year';

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.card,
        isBudget && styles.budgetCard,
        isYear && styles.yearCard,
        isSelected && styles.selectedCard,
      ]}
    >
      <Image
        source={require('../../../../assets/images/usedcar/card-corner.png')}
        resizeMode="contain"
        style={styles.cornerImage}
      />

      {logo && !isBudget && (
        <View style={styles.logoContainer}>
          <Image
            source={logo}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
      )}

      {isBudget ? (
        <View style={styles.budgetContent}>
          <Text style={styles.title}>
            {title}
          </Text>

          {!!subtitle && (
            <Text style={styles.subtitle}>
              {subtitle}
            </Text>
          )}

          {!!value && (
            <Text style={styles.value} numberOfLines={1} >
              {value}
            </Text>
          )}
        </View>
      ) : (
        <View
          style={[
            styles.titleContainer,
            logo && styles.titleContainerWithLogo,
          ]}
        >
          <Text style={styles.title}
           >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default FilterOptionCard;

const getStyles = (size: any) =>
  StyleSheet.create({
    card: {
      height: size.height * 14,
      backgroundColor: colors.white,
      borderRadius: size.width * 2,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: size.height * 2.5,
      position: 'relative',
    },

    budgetCard: {
      minHeight: size.height * 24,
      justifyContent: 'center',
      paddingVertical: size.height * 2,
    },

    yearCard: {
      width: '48%',
      height: size.height * 12,
      justifyContent: 'center',
      paddingHorizontal: 0,
    },

    selectedCard: {
      borderWidth: 1.5,
      borderColor: '#807AF4',
      backgroundColor: '#FCFBFF',
    },

    cornerImage: {
      position: 'absolute',
      right: -size.width * 0.8,
      bottom: 0,
      width: size.width * 12,
      height: size.width * 8,
    },

    logoContainer: {
      width: size.width * 10,
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginLeft: size.width * 1.5,
    },

    logo: {
      width: size.width * 11,
      height: size.width * 6,
    },

    titleContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    titleContainerWithLogo: {
      paddingRight: size.width * 8,
    },

    budgetContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: size.width * 4,
    },

    title: {
      color: colors.text_Primary,
      fontSize: size.fontSize * 3.2,
      fontFamily: fonts.bold,
      textAlign: 'center',
    },

    subtitle: {
      marginTop: size.height * 0.6,
      color: colors.text_Secondary,
      fontSize: size.fontSize * 2.6,
      fontFamily: fonts.medium,
      textAlign: 'center',
    },

    value: {
      marginTop: size.height * 1,
      color: colors.text_Secondary,
      fontSize: size.fontSize * 2.8,
      fontFamily: fonts.semiBold,
      textAlign: 'center',
    },
  });
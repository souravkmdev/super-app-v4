import React, { memo, useMemo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import CustomButton from '../../../globalComponents/CustomButton';

type VariantItem = {
  name: string;
  price: string;
  image: any;
  isPopular: boolean;
};

const Variants = ({ item }: { item: VariantItem }) => {
  const SizeConfig = useSizeConfig();

  const styles = useMemo(() => getStyles(SizeConfig), [SizeConfig]);

  return (
    <LinearGradient
      colors={
        item.isPopular
          ? ['#756af1', '#A383FF', '#756af1']
          : ['#EDEBFE', '#EDEBFE', '#EDEBFE']
      }
      start={{ x: 0.1, y: 0.2 }}
      end={{ x: 0.9, y: 0.7 }}
      style={styles.variantCard}
    >
      <View style={styles.variantTopContent}>
        <Text
          style={[
            styles.variantName,
            item.isPopular ? styles.popularText : styles.normalText,
          ]}
        >
          {item.name}
        </Text>

        <Text
          style={[
            styles.variantPrice,
            item.isPopular ? styles.popularText : styles.normalText,
          ]}
        >
          {item.price}
        </Text>
      </View>

      <Image
        source={item.image}
        style={
          item.isPopular
            ? styles.popularVariantImage
            : styles.normalVariantImage
        }
      />

      <View
        style={[
          styles.variantButtonContainer,
          { display: item.isPopular ? 'flex' : 'none' },
        ]}
      >
        <CustomButton
          GradientColors={[colors.white, colors.white]}
          TextValue="Most Popular"
          TextStyle={styles.variantButtonText}
          PressableStyle={styles.variantButtonPressable}
          mainstyle={styles.variantButtonMain}
        />
      </View>
    </LinearGradient>
  );
};

export default memo(Variants);
const getStyles = (size: any) =>
  StyleSheet.create({
    variantCard: {
      width: size.width * 33,
      height: size.height * 45,
      borderRadius: size.width * 5,
      justifyContent: 'space-between',
      borderWidth: size.width * 0.3,
      borderColor: '#E0D8FE',
      overflow: 'hidden',
    },

    variantTopContent: {
      padding: size.width * 3,
    },

    variantName: {
      fontFamily: fonts.bold,
      fontSize: size.width * 4,
    },

    variantPrice: {
      fontFamily: fonts.bold,
      fontSize: size.width * 2.8,
    },

    popularText: {
      color: colors.white,
    },

    normalText: {
      color: colors.text_Primary,
    },

    popularVariantImage: {
      width: '90%',
      height: size.width * 20,
      position: 'absolute',
      top: size.height * 17,
      right: 0,
    },

    normalVariantImage: {
      width: '90%',
      height: size.width * 27,
      bottom: size.height * 1.5,
      resizeMode: 'stretch',
      alignSelf: 'flex-end',
    },

    variantButtonContainer: {
      padding: size.width * 2,
    },

    // hiddenButton: (isPopular: boolean) => ({
    //   display: isPopular ? 'flex' : 'none',
    // }),

    variantButtonText: {
      fontSize: size.width * 2.8,
      fontFamily: fonts.bold,
      color: colors.text_Primary,
      includeFontPadding: false,
    },

    variantButtonPressable: {
      paddingVertical: size.width,
      borderWidth: size.width * 0.3,
      borderColor: '#E0D8FE',
    },

    variantButtonMain: {
      borderRadius: size.width * 4,
    },
  });

import React, { memo, useMemo } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors } from '../../../utils/constants/Theme';

const colorImage = require('../../../assets/images/detail/color_img_1.png');

const SelectColor = ({ color, image }: { color: string; image: any }) => {
  const size = useSizeConfig();

  const styles = useMemo(() => getStyles(size), [size]);

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.outerCircle}>
      <View
        style={[styles.innerCircle, { backgroundColor: color ?? '#2f00ff8a' }]}
      >
        <Image source={colorImage} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    outerCircle: {
      width: size.width * 9,
      height: size.width * 9,
      borderRadius: size.width * 5,
      backgroundColor: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },

    innerCircle: {
      width: size.width * 8,
      height: size.width * 8,
      borderRadius: size.width * 4,
      backgroundColor: '#2f00ff8a',
      alignItems: 'center',
      justifyContent: 'center',
    },

    image: {
      width: size.width * 6.5,
      height: size.width * 6.5,
      resizeMode: 'contain',
    },

    icon: {
      width: size.width * 7,
      height: size.width * 7,
      resizeMode: 'contain',
    },
  });

export default memo(SelectColor);

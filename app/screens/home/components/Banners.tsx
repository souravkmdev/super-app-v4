import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';
import { useSizeConfig } from '../../../utils/context/SizeConfig';

const Banner = () => {
  const size = useSizeConfig();
  const styles = getStyles(size);

  return (
    <Image
      source={require('../../../assets/images/home/banner.png')}
      style={styles.bannerImage}
      resizeMode="cover"
    />
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    bannerImage: {
      marginTop: size.height * 3.5,
      marginHorizontal: size.width * 4.3,
      height: size.height * 25,
      width: '92%',
      borderRadius: size.width * 3,
      overflow: 'hidden',
    },

  });

export default Banner;
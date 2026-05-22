import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';

import { useSizeConfig } from '../../../utils/context/SizeConfig';

const RoadSideBanner = () => {

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
      marginHorizontal: size.width * 5.5,
      height: size.height * 24,
      width: '90%',
      borderRadius: size.width * 3,
    },

  });

export default RoadSideBanner;
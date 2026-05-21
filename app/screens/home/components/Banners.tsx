import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';

import { useSizeConfig } from '../../../utils/context/SizeConfig';

const RoadSideBanner = () => {

  const SizeConfig = useSizeConfig();
  const styles = getStyles(SizeConfig);

  return (
    <Image
      source={require('../../../assets/images/home/banner.png')}
      style={styles.BannerImage}
      resizeMode="cover"
    />
  );
};

const getStyles = (SizeConfig: any) =>
  StyleSheet.create({

    BannerImage: {
      marginTop: SizeConfig.height * 3.5,
      marginHorizontal: SizeConfig.width * 4,
      height: SizeConfig.height * 24,
      width: '90%',
      borderRadius: SizeConfig.width * 5,
    },

  });

export default RoadSideBanner;
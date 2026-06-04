import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { useSizeConfig } from '../../../utils/context/SizeConfig';

const RoadSideBanner = () => {
  const size = useSizeConfig();
  const styles = getStyles(size);

  return (
    <View
      style={{
        paddingHorizontal: size.width * 4,
      }}
    >
      <Image
        source={require('../../../assets/images/home/banner.png')}
        style={styles.bannerImage}
        resizeMode="cover"
      />
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    bannerImage: {
      height: size.height * 24,
      width: '100%',
      borderRadius: size.width * 3,
    },
  });

export default RoadSideBanner;
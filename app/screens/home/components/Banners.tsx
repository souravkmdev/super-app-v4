import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { useSizeConfig } from '../../../utils/context/SizeConfig';
import theme from '../../../utils/constants/Theme';

const RoadSideBanner = () => {
  const SizeConfig = useSizeConfig();
  const styles = getStyles(SizeConfig);

  return (
    <ImageBackground
      source={require('../../../assets/images/home/banner.png')}
      style={styles.MainContainer}
      imageStyle={styles.ImageStyle}
      resizeMode='stretch'
    >
    </ImageBackground>
  );
};

const getStyles = (SizeConfig: any) =>
  StyleSheet.create({
    MainContainer: {
        marginTop: SizeConfig.height * 3.5,
        marginHorizontal: SizeConfig.width * 4,
        height: SizeConfig.height * 24,
        borderRadius: SizeConfig.width * 5,
        overflow: 'hidden',
        justifyContent: 'center',
    },

    ImageStyle: {
      borderRadius: SizeConfig.width * 5,
    },

  });

export default RoadSideBanner;
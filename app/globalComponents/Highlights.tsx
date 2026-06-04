import React, { memo, useMemo } from 'react';
import {
  Image,
  ImageBackground,
  ImageStyle,
  StyleSheet,
  TextStyle,
} from 'react-native';

import { useSizeConfig } from '../utils/context/SizeConfig';
import { colors, fonts } from '../utils/constants/Theme';
import { Text } from './CustomText';

const backgroundImage = require('../assets/images/global/highlights_card.png');

const Highlights = ({
  title,
  textStyle,
  imageStyle,
}: {
  title: { key: string; title: string };
  textStyle?: TextStyle;
  imageStyle?: ImageStyle;
}) => {
  const size = useSizeConfig();

  const styles = useMemo(() => getStyles(size), [size]);

  const renderIcon = () => {
    switch (title.key) {
      case 'Hybrid':
        return (
          <Image
            source={require('../assets/images/global/hybrid.png')}
            style={[styles.icon, imageStyle]}
          />
        );
      case 'Km':
        return (
          <Image
            source={require('../assets/images/global/km.png')}
            style={[styles.icon, imageStyle]}
          />
        );
      case 'Ac':
        return (
          <Image
            source={require('../assets/images/global/ac.png')}
            style={[styles.icon, imageStyle]}
          />
        );
      default:
        return (
          <Image
            source={require('../assets/images/global/highlight.png')}
            style={[styles.icon, imageStyle]}
          />
        );
    }
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      {renderIcon()}

      <Text style={[styles.title, textStyle]}>{title.title}</Text>
    </ImageBackground>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: size.width * 3,
      gap: size.width * 2,
      overflow: 'hidden',
    },

    backgroundImage: {
      borderRadius: size.width * 5,
    },

    icon: {
      width: size.width * 6,
      height: size.width * 6,
      resizeMode: 'contain',
    },

    title: {
      fontFamily: fonts.bold,
      fontSize: size.width * 3,
      color: colors.text_Primary,
      includeFontPadding: false,
    },
  });

export default memo(Highlights);
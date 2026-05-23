import React, { memo, useMemo } from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';

import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import { Text } from '../../../globalComponents/CustomText';

const backgroundImage = require('../../../assets/images/detail/highlights_card.png');

const Highlights = ({ title }: { title: { key: string; title: string } }) => {
  const size = useSizeConfig();

  const styles = useMemo(() => getStyles(size), [size]);

  const renderIcon = () => {
    switch (title.key) {
      case 'Hybrid':
        return (
          <Image
            source={require('../../../assets/images/detail/hybrid.png')}
            style={styles.icon}
          />
        );
      case 'Km':
        return (
          <Image
            source={require('../../../assets/images/detail/km.png')}
            style={styles.icon}
          />
        );
      case 'Ac':
        return (
          <Image
            source={require('../../../assets/images/detail/ac.png')}
            style={styles.icon}
          />
        );
      default:
        return (
          <Image
            source={require('../../../assets/images/detail/highlight.png')}
            style={styles.icon}
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

      <Text style={styles.title}>{title.title}</Text>
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

import React, { useMemo } from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';

import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { Text } from '../../../globalComponents/CustomText';
import { colors, fonts } from '../../../utils/constants/Theme';

interface Props {
  image: any;
  title?: string;
  subTitle?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const Verificationsub = ({
  image,
  title,
  subTitle,
  imageWidth,
  imageHeight,
}: Props) => {
  const size = useSizeConfig();

  const styles = useMemo(
    () => getStyles(size),
    [size],
  );

  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={[
          styles.image,
          {
            width: imageWidth ?? size.width * 80,
            height: imageHeight ?? size.height * 70,
          },
        ]}
        resizeMode="contain"
      />

      {(title || subTitle) && (
        <View style={styles.textContainer}>
          {title && (
            <Text style={styles.title}>
              {title}
            </Text>
          )}

          {subTitle && (
            <Text style={styles.subTitle}>
              {subTitle}
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: size.height * 6,
    },

    image: {},

    textContainer: {
      alignItems: 'center',
      marginTop: size.height * 2,
    },

    title: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 4.5,
      color: colors.text_Primary,
      textAlign: 'center',
    },

    subTitle: {
      marginTop: size.height * 0.8,
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 3.2,
      color: colors.text_Secondary,
      textAlign: 'center',
      paddingHorizontal: size.width * 8,
    },
  });

export default Verificationsub;
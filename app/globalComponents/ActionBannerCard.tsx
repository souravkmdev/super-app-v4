import React, { useMemo } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { Text } from './CustomText';
import { useSizeConfig } from '../utils/context/SizeConfig';
import { fonts } from '../utils/constants/Theme';

interface ActionBannerCardProps {
  title: string;
  subtitle: string;
  leftIcon: any;
  rightImage?: any;
  onPress?: () => void;
}

const ActionBannerCard: React.FC<ActionBannerCardProps> = ({
  title,
  subtitle,
  leftIcon,
  rightImage,
  onPress,
}) => {
  const size = useSizeConfig();

  const styles = useMemo(
    () => getStyles(size),
    [size],
  );

  return (
    <LinearGradient
      colors={['#807AF4', '#7478FF', '#ADA9F6']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.content}
        onPress={onPress}
      >
        <View style={styles.iconContainer}>
          <Image
            source={leftIcon}
            style={styles.leftIcon}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {title}
          </Text>

          <Text style={styles.subtitle}>
            {subtitle}
          </Text>
        </View>

        {rightImage && (
          <Image
            source={rightImage}
            style={styles.rightImage}
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ActionBannerCard;

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      width: '100%',
      borderRadius: size.width * 3.5,
      overflow: 'hidden',
      marginTop: size.height * 1.5,
    },

    content: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: size.width * 4,
      paddingVertical: size.width * 4.5,
    },

    iconContainer: {
      width: size.width * 10,
      height: size.width * 10,
      borderRadius: size.width * 5,
      backgroundColor: 'rgba(255,255,255,0.95)',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: size.width * 3.5,
    },

    leftIcon: {
      width: size.width * 5.5,
      height: size.width * 5.5,
    },

    textContainer: {
      flex: 1,
    },

    title: {
      color: '#FFFFFF',
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 3.8,
      marginBottom: size.height * 0.3,
    },

    subtitle: {
      color: 'rgba(255,255,255,0.9)',
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.7,
    },

    rightImage: {
      width: size.width * 14,
      height: size.width * 12,
    },
  });
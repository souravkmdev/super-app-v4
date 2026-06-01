import React, { useMemo } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

type Props = {
  title: string;
  subtitle: string;
};

const FeatureCard = ({
  title,
  subtitle,
}: Props) => {

  const size = useSizeConfig();
  const styles = useMemo(() => getStyles(size),[size],);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather
          name="copy"
          size={size.width * 4.5}
          color="#6B4EFF"
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
    </View>
  );
};

export default FeatureCard;

const getStyles = (size: any) =>
  StyleSheet.create({

    container: {
      width: size.width * 47,
      backgroundColor: '#FFFFFF',
      borderRadius: size.width * 3,
      paddingVertical: size.height * 2,
      paddingHorizontal: size.width * 3.5,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: size.height * 3,
    },

    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: size.width * 3,
    },

    textContainer: {
      flex: 1,
      justifyContent: 'center',
    },

    title: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 3.5,
      color: colors.text_Primary,
    },

    subtitle: {
      marginTop: size.height * 0.3,
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.7,
      color: colors.text_Secondary,
    },

  });
import React, { memo, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

type SpecCardProps = {
  title: string;
  value: string;
  icon: string;
};

const Specifications = ({ item }: { item: SpecCardProps }) => {
  const SizeConfig = useSizeConfig();

  const styles = useMemo(() => getStyles(SizeConfig), [SizeConfig]);

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={item.icon}
        size={SizeConfig.width * 6}
        color="#6C4CF1"
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.value}>{item.value}</Text>
      </View>
    </View>
  );
};

export default memo(Specifications);

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
     
      backgroundColor: '#EDEBFE',
      borderRadius: size.width * 3,
      paddingHorizontal: size.width * 4,
      paddingVertical: size.height * 3,
      justifyContent: 'space-between',
      width : '48%'
    },

    textContainer: {
      gap: size.height * 1,
    },

    title: {
      fontFamily: fonts.regular,
      fontSize: size.fontSize * 3.5,
      color: colors.primary,
    },

    value: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 3.8,
      color: colors.text_Primary,
    },
  });

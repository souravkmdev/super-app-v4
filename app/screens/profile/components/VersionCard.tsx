import React, { useMemo } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

interface Props {
  version: string;
  companyName: string;
  copyright: string;
}

const VersionCard = ({
  version,
  companyName,
  copyright,
}: Props) => {
  const size = useSizeConfig();

  const styles = useMemo(
    () => getStyles(size),
    [size],
  );

  return (
    <View style={styles.container}>
      <View style={styles.versionBadge}>
        <Text style={styles.versionBadgeText}>
          App Version
        </Text>
      </View>

      <Text style={styles.versionText}>
        {version}
      </Text>

      <Text style={styles.companyName}>
        {companyName}
      </Text>

      <Text style={styles.copyright}>
        {copyright}
      </Text>
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#F2EEFF',
      borderRadius: size.width * 5,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: size.height * 4,
      marginTop: size.height * 5,
    },

    versionBadge: {
      borderWidth: 1.5,
      borderColor: colors.primary,
      borderRadius: size.width * 2,
      paddingHorizontal: size.width * 3,
      paddingVertical: size.height * 0.5,
    },

    versionBadgeText: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 2.3,
      color: colors.text_Primary,
    },

    versionText: {
      marginTop: size.height * 1.5,
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 6,
      color: colors.text_Primary,
    },

    companyName: {
      marginTop: size.height,
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3.5,
      color: colors.text_Primary,
    },

    copyright: {
      marginTop: size.height * 0.8,
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.8,
      color: colors.text_Secondary,
    },
  });

export default VersionCard;
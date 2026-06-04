import React, { useMemo } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { Text } from './CustomText';
import { useSizeConfig } from '../utils/context/SizeConfig';
import { colors, fonts } from '../utils/constants/Theme';

interface Props {
  leftTab: string;
  rightTab: string;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const CustomTabSwitcher = ({
  leftTab,
  rightTab,
  activeTab,
  onTabChange,
}: Props) => {
  const size = useSizeConfig();

  const styles = useMemo(
    () => getStyles(size),
    [size],
  );

  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabWrapper}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.tab,
            activeTab === leftTab && styles.tabActive,
          ]}
          onPress={() => onTabChange(leftTab)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === leftTab && styles.tabTextActive,
            ]}
          >
            {leftTab}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.tab,
            activeTab === rightTab && styles.tabActive,
          ]}
          onPress={() => onTabChange(rightTab)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === rightTab && styles.tabTextActive,
            ]}
          >
            {rightTab}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    tabContainer: {
      marginTop: size.height * 2,
    },

    tabWrapper: {
      flexDirection: 'row',
      backgroundColor: '#EAECFC',
      borderRadius: size.width * 6,
      padding: size.width * 0.8,
    },

    tab: {
      flex: 1,
      height: size.width * 10,
      borderRadius: size.width * 5,
      alignItems: 'center',
      justifyContent: 'center',
    },

    tabActive: {
      backgroundColor: colors.primary,
    },

    tabText: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 3.4,
      color: colors.text_Primary,
    },

    tabTextActive: {
      color: colors.white,
    },
  });

export default React.memo(CustomTabSwitcher);
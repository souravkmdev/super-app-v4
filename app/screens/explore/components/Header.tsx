import React, { useMemo } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import { Text } from '../../../globalComponents/CustomText';

type Props = {
  title?: string;
  onPress?: () => void;
  showBackButton?: boolean;
};

const Header = ({
  title,
  onPress,
  showBackButton = true,
}: Props) => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const styles = useMemo(
    () => getStyles(size, insets),
    [size, insets],
  );

  return (
    <View style={styles.container}>
      {showBackButton ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPress}
          style={styles.backButton}
        >
          <Ionicons
            name="chevron-back"
            size={size.width * 6}
            color={colors.text_Primary}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyView} />
      )}

      <Text style={styles.title}>
        {title}
      </Text>

      <View style={styles.emptyView} />
    </View>
  );
};

export default Header;

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    container: {
      paddingTop: insets.top + size.height * 1,
      paddingHorizontal: size.width * 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    backButton: {
      width: size.width * 10,
      height: size.width * 10,
      borderRadius: size.width * 5,
      alignItems: 'center',
      justifyContent: 'center',
    },

    title: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 4,
      color: colors.text_Primary,
    },

    emptyView: {
      width: size.width * 10,
    },
  });
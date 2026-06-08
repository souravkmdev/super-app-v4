import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Text } from './CustomText';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { memo, useMemo } from 'react';
import { useSizeConfig } from '../utils/context/SizeConfig';
import Feather from 'react-native-vector-icons/Feather';
import { colors, fonts } from '../utils/constants/Theme';

const Header = ({
  onPress,
  title,
  textStyle,
  iconComp,
  iconColor,
}: {
  onPress: () => void;
  title: string;
  textStyle?: TextStyle;
  iconComp?: ViewStyle;
  iconColor?: string;
}) => {
  const insets = useSafeAreaInsets();
  const size = useSizeConfig();

  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress} style={[styles.backButton, iconComp]}>
        <Feather
          name="chevron-left"
          size={size.width * 5}
          color={iconColor ?? colors.primary}
        />
      </TouchableOpacity>

      <Text style={[styles.title, textStyle]}>{title}</Text>

      <View style={styles.emptyView} />
    </View>
  );
};

export default memo(Header);

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      top: insets.top + size.height * 4,
      left: 0,
      right: 0,
      paddingHorizontal: size.width * 4,
    },
    backButton: {
      backgroundColor: colors.white,
      width: size.width * 8,
      height: size.width * 8,
      borderRadius: size.width * 2.5,
      alignItems: 'center',
      justifyContent: 'center',
    },

    title: {
      fontFamily: fonts.bold,
      fontSize: size.width * 4,
      color: colors.text_Primary,
    },

    emptyView: {
      width: size.width * 10,
      height: size.width * 10,
    },
  });

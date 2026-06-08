import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSizeConfig } from '../utils/context/SizeConfig';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMemo } from 'react';

const HeaderLinearGradient = ({
  linearGradientProps,
}: {
  linearGradientProps?: string[];
}) => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const styles = useMemo(() => getStyles(size, insets), [size, insets]);
  return (
    <LinearGradient
      colors={linearGradientProps ?? ['#b7b7fe', '#d7d7fb', '#F7F7Fe']}
      style={styles.gradient}
    />
  );
};

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    gradient: {
      width: '100%',
      height: size.height * 25,
      position: 'absolute',
      zIndex: 0,
      top: 0,
    },
  });

export default HeaderLinearGradient;
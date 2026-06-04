import LinearGradient from 'react-native-linear-gradient';
import { colors, fonts } from '../../../utils/constants/Theme';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../globalComponents/CustomText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { memo, useMemo } from 'react';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BookingCard = ({ selected, title, subtitle, icon, onPress }: any) => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  return (
    <LinearGradient
      colors={
        selected
          ? ['#807AF4', '#7478FF', '#ADA9F6']
          : [colors.white, colors.white]
      }
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0, 0.4, 1]}
      style={styles.gradientCard}
    >
      <TouchableOpacity
        style={styles.optionCard}
        onPress={onPress}
        activeOpacity={0.85}
      >
        <View style={styles.optionLeft}>
          <FontAwesome
            name={icon}
            size={size.width * 4.5}
            color={selected ? '#DFDCFF' : '#846AF4'}
          />

          <View style={styles.optionTextContainer}>
            <Text
              style={[
                styles.optionTitle,
                selected && styles.optionTitleSelected,
              ]}
            >
              {title}
            </Text>

            <Text
              style={[
                styles.optionSubtitle,
                selected && styles.optionSubtitleSelected,
              ]}
            >
              {subtitle}
            </Text>
          </View>
        </View>

        <View
          style={[styles.radioOuter, selected && styles.radioOuterSelected]}
        >
          {selected && <View style={styles.radioInner} />}
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    gradientCard: {
      borderRadius: size.width * 3,
      borderWidth: size.width * 0.3,
      borderColor: '#CDC4FD',
    },
    optionCard: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: size.width * 2.5,
      paddingVertical: size.width * 3.3,
      paddingHorizontal: size.width * 3.7,
    },

    optionLeft: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: size.width * 2.8,
    },

    optionTextContainer: {
      flex: 1,
    },

    optionTitle: {
      fontSize: size.fontSize * 3.7,
      fontFamily: fonts.semiBold,
      color: colors.text_Primary,
    },

    optionTitleSelected: {
      color: colors.white,
    },

    optionSubtitle: {
      fontSize: size.width * 2.5,
      color: colors.text_Primary,
      marginTop: size.width * 0.4,
    },

    optionSubtitleSelected: {
      color: 'rgba(255,255,255,0.75)',
    },

    radioOuter: {
      width: size.width * 5,
      height: size.width * 5,
      borderRadius: size.width * 2.5,
      borderWidth: size.width * 0.4,
      borderColor: '#DDD',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
    },

    radioOuterSelected: {
      borderColor: colors.white,
      backgroundColor: 'rgba(255,255,255,0.15)',
    },

    radioInner: {
      width: size.width * 2.5,
      height: size.width * 2.5,
      borderRadius: size.width * 1.25,
      backgroundColor: colors.white,
    },
  });

export default memo(BookingCard);
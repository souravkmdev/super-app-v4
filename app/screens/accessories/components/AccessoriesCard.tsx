import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../globalComponents/CustomText';
import { colors, fonts } from '../../../utils/constants/Theme';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMemo } from 'react';
import Feather from 'react-native-vector-icons/Feather';

const AccessoriesCard = () => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.cardContainer}>
      <Image
        source={require('../../../assets/images/accessories/accessories_img1.png')}
        style={styles.cardImage}
      />

      <View style={styles.cardFooter}>
        <View>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.cardTitle}>
            Mirrors
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.cardSubtitle}
          >
            See better, Drive Safer.
          </Text>
        </View>

        <TouchableOpacity style={styles.arrowButton}>
          <Feather
            name="arrow-right"
            size={size.width * 4.5}
            color={colors.text_Primary}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    cardContainer: {
      flex: 1,
      backgroundColor: colors.white,
      alignItems: 'center',
      borderRadius: size.width * 5,
      borderWidth: size.width * 0.2,
      borderColor: colors.white,
      overflow: 'hidden',
    },
    cardImage: {
      width: size.width * 30,
      height: size.width * 30,
      resizeMode: 'contain',
      paddingVertical: size.height * 4,
    },
    cardFooter: {
      backgroundColor: '#f3f0ff',
      flexDirection: 'row',
      alignItems: 'center',
      gap: size.width * 3,
      padding: size.width * 1.7,
      paddingVertical: size.height * 2.5,
      width: '100%',
      justifyContent: 'space-between',
    },

    cardTitle: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3.3,
      color: colors.text_Primary,
    },

    cardSubtitle: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 2.5,
      color: '#766e8e',
    },

    arrowButton: {
      width: size.width * 6,
      height: size.width * 6,
      backgroundColor: '#ccbfff',
      borderRadius: size.width * 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default AccessoriesCard;
import React, { memo } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { colors, fonts } from '../utils/constants/Theme';
import { useSizeConfig } from '../utils/context/SizeConfig';
import { Text } from './CustomText';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface CarItem {
  id: string;
  name: string;
  price: string;
  rating: number;
  variants: number;
  availability: string;
  image: string;
  isFavorite: boolean;
}
interface CarCardProps {
  item: CarItem;
  onFavoriteToggle: (id: string) => void;
  onDetailsPress: (id: string) => void;
  isDark?: boolean;
}

const StarRating = ({
  rating,
  isDark = false,
}: {
  rating: number;
  isDark: boolean;
}) => {
  const size = useSizeConfig();
  const styles = getStyles(size);
  return (
    <View style={styles.starContainer}>
      <AntDesign name="star" size={size.width * 2.8} color={colors.warning} />
      <Text style={[styles.ratingText, isDark && styles.ratingTextDark]}>
        {rating.toFixed(2)}
      </Text>
    </View>
  );
};

const CarCard = ({
  item,
  onFavoriteToggle,
  onDetailsPress,
  isDark = false,
}: CarCardProps) => {
  const size = useSizeConfig();
  const styles = getStyles(size);

  return (
    <View style={[styles.card, isDark && styles.cardDark]}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.carImage}
          resizeMode="cover"
        />

        <TouchableOpacity
          style={styles.heartButton}
          onPress={() => onFavoriteToggle(item.id)}
          activeOpacity={0.7}
        >
          {item.isFavorite ? (
            <FontAwesome
              name="heart"
              size={size.width * 4.5}
              color={colors.error}
            />
          ) : (
            <FontAwesome
              name="heart-o"
              size={size.width * 4.5}
              color={colors.white}
            />
          )}
        </TouchableOpacity>
      </View>

      <View style={[styles.cardContent, isDark && styles.cardContentDark]}>
        <View style={styles.cardRow}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[styles.carName, isDark && styles.textLight]}
          >
            {item.name}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[styles.carPrice, isDark && styles.textLight]}
          >
            {item.price}
          </Text>
        </View>

        <View style={styles.cardBottomRow}>
          <View>
            <View style={styles.ratingVariantRow}>
              <StarRating rating={item.rating} isDark={isDark} />
              <View style={[styles.dot, isDark && styles.dotDark]} />
              <Text
                style={[styles.variantsText, isDark && styles.variantsTextDark]}
              >
                {item.variants} Variants
              </Text>
            </View>

            <Text
              style={[
                styles.availabilityText,
                isDark && styles.availabilityTextDark,
              ]}
            >
              {item.availability}
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.detailsButton, isDark && styles.detailsButtonDark]}
            onPress={() => onDetailsPress(item.id)}
            activeOpacity={0.8}
          >
            <Text style={styles.detailsButtonText}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default memo(CarCard);

const getStyles = (size: any) =>
  StyleSheet.create({
    card: {
      backgroundColor: colors.white,
      borderRadius: size.width * 4.5,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: colors.ligh_borderColor,
    },

    cardDark: {
      backgroundColor: '#1C1C1E',
      borderColor: '#2C2C2E',
    },

    imageContainer: {
      width: '100%',
      height: size.height * 40,
      position: 'relative',
    },

    carImage: {
      width: '100%',
      height: '100%',
      borderBottomLeftRadius: size.width * 10,
    },

    heartButton: {
      position: 'absolute',
      top: size.width * 2.5,
      right: size.width * 2.5,
      width: size.width * 8.4,
      height: size.width * 8.4,
      borderRadius: size.width * 5,
      backgroundColor: 'rgba(255,255,255,0.25)',
      justifyContent: 'center',
      alignItems: 'center',
    },

    cardContent: {
      paddingHorizontal: size.width * 2.9,
      paddingTop: size.width * 2,
      paddingBottom: size.width * 3,
      backgroundColor: colors.white,
    },

    cardContentDark: {
      backgroundColor: '#1C1C1E',
    },

    cardRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: size.width * 1.6,
    },

    carName: {
      flex: 1,
      fontSize: size.fontSize * 4.6,
      color: colors.text_Primary,
      fontFamily: fonts.bold,
    },

    carPrice: {
      flex: 1,
      fontSize: size.fontSize * 4.6,
      color: colors.text_Primary,
      fontFamily: fonts.bold,
      textAlign: 'right',
    },

    textLight: {
      color: colors.white,
    },

    cardBottomRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },

    ratingVariantRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: size.width * 1.5,
      marginBottom: size.width * 2.4,
    },

    starContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: size.width,
    },

    ratingText: {
      fontSize: size.fontSize * 3.2,
      color: colors.text_Secondary,
      paddingLeft: size.width * 0.82,
      fontFamily: fonts.regular,
    },

    ratingTextDark: {
      color: '#AAAAAA',
    },

    dot: {
      width: size.width * 1.2,
      height: size.width * 1.2,
      borderRadius: size.width * 2,
      backgroundColor: colors.lightGray,
    },

    dotDark: {
      backgroundColor: '#555555',
    },

    variantsText: {
      fontSize: size.fontSize * 3.2,
      color: colors.text_Primary,
      fontFamily: fonts.medium,
    },

    variantsTextDark: {
      color: '#CCCCCC',
    },

    availabilityText: {
      fontSize: size.fontSize * 3.27,
      color: colors.lightGray,
      fontFamily: fonts.regular,
    },

    availabilityTextDark: {
      color: '#666666',
    },

    detailsButton: {
      backgroundColor: colors.primary,
      paddingHorizontal: size.width * 5.2,
      paddingVertical: size.width * 2.3,
      borderRadius: size.width * 2,
    },

    detailsButtonDark: {
      backgroundColor: '#633BDB',
    },

    detailsButtonText: {
      color: colors.white,
      fontSize: size.width * 3.3,
      fontFamily: fonts.medium,
      includeFontPadding: false,
    },
  });

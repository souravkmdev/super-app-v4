import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

interface Props {
  title: string;
  data: any[];
}
const CarListingCard = ({
  title,
  data,
}: Props) => {
  const size = useSizeConfig();
  const styles = getStyles(size);

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.card}
      >

        <View style={styles.imageContainer}>
          <Image
            source={item.image}
            style={styles.carImage}
            resizeMode="cover"
          />


          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.heartButton}
          >
            <Ionicons
              name="heart-outline"
              size={size.width * 4.5}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>

          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.carName}>
                {item.name}
              </Text>

              <Text style={styles.subtitle}>
                {item.subtitle}
              </Text>
            </View>

            <View style={styles.ratingContainer}>
              <Ionicons
                name="star"
                size={size.width * 3.8}
                color="#F6C90E"
              />

              <Text style={styles.ratingText}>
                {item.rating}
              </Text>
            </View>
          </View>

          <View style={styles.bottomRow}>
            <View style={styles.variantRow}>
              <Ionicons
                name="car-sport-outline"
                size={size.width * 4.5}
                color="#8B7BFF"
                style={{ marginTop: size.height * 1 }}
              />

              <Text style={styles.variantText}>
                {item.variants}
              </Text>
            </View>

            <Text style={styles.priceText}>
              {item.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  //
  return (
    <View style={styles.mainContainer}>

      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>
          {title}
        </Text>

        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.viewAllText}>
            View All
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    mainContainer: {
      marginTop: size.height * 2.3,
    },

    headerRow: {
      paddingHorizontal: size.width * 4,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    sectionTitle: {
      color: colors.text_Primary,
      fontSize: size.fontSize * 4,
      fontFamily: fonts.semiBold,
    },

    viewAllText: {
      color: '#8B7BFF',
      fontSize: size.fontSize * 3.1,
      fontFamily: fonts.medium,
    },

    listContent: {
      paddingLeft: size.width * 4,
      paddingRight: size.width * 2,
      marginTop: size.height * 2,
    },

    card: {
      width: size.width * 80,
      backgroundColor: colors.white,
      borderRadius: size.width * 5,
      marginRight: size.width * 4,
      overflow: 'hidden',
      borderColor: colors.border,
      borderWidth: size.width * 0.1,
    },

    imageContainer: {
      width: '100%',
      height: size.height * 35,
      overflow: 'hidden',
      borderBottomLeftRadius: size.width * 6,
      borderBottomRightRadius: size.width * 6,
      position: 'relative',
    },

    carImage: {
      width: '100%',
      height: '100%',
    },

    heartButton: {
      position: 'absolute',
      top: size.height * 1.2,
      right: size.width * 3,
      width: size.width * 8,
      height: size.width * 8,
      borderRadius: size.width * 4,
      backgroundColor: 'rgba(255,255,255,0.25)',
      alignItems: 'center',
      justifyContent: 'center',
    },

    contentContainer: {
      paddingHorizontal: size.width * 4,
      paddingVertical: size.height * 1.8,
      paddingBottom: size.height * 2.2,
    },

    rowBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },

    carName: {
      color: colors.text_Primary,
      fontSize: size.fontSize * 4,
      fontFamily: fonts.semiBold,
    },

    subtitle: {
      // marginTop: size.height * 1,
      color: '#42C05C',
      fontSize: size.fontSize * 3.1,
      fontFamily: fonts.medium,
    },

    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      // gap: size.width * 1,
      marginTop: size.height * 0.5,
    },

    ratingText: {
      marginLeft: size.width * 1,
      color: '#7A7A7A',
      fontSize: size.fontSize * 3,
      fontFamily: fonts.medium,
    },

    bottomRow: {
      marginTop: size.height * 2.2,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    variantRow: {
      flexDirection: 'row',
      alignItems: 'center',

    },

    variantText: {
      marginLeft: size.width * 1.2,
      color: colors.text_Primary,
      fontSize: size.fontSize * 3.3,
      fontFamily: fonts.semiBold,
    },

    priceText: {
      color: colors.text_Primary,
      fontSize: size.fontSize * 4.5,
      fontFamily: fonts.bold,
    },
  });

export default CarListingCard;
import React from 'react';

import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { Text } from '../../../globalComponents/CustomText';
import theme, { colors } from '../../../utils/constants/Theme';

const carsData = [
  {
    id: 1,
    name: 'BMW X5',
    fuel: 'Petrol',
    price: '₹98 Lakh',
    rating: '4.8',
    image: require('../../../assets/images/home/car1.png'),
  },
  {
    id: 2,
    name: 'Audi Q7',
    fuel: 'Diesel',
    price: '₹92 Lakh',
    rating: '4.7',
    image: require('../../../assets/images/home/car1.png'),
  },
  {
    id: 3,
    name: 'Mercedes GLC',
    fuel: 'Petrol',
    price: '₹88 Lakh',
    rating: '4.9',
    image: require('../../../assets/images/home/car1.png'),
  },
];

const TopRatedCars = () => {
  const SizeConfig = useSizeConfig();

  const styles = getStyles(SizeConfig);

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.85}
        style={styles.Card}
      >
        {/* Heart */}
        <TouchableOpacity style={styles.HeartContainer}>
          <MaterialCommunityIcons
            name="heart-outline"
            size={SizeConfig.width * 4.5}
            color="#2B1E48"
          />
        </TouchableOpacity>

        {/* Car Image */}
        <Image
          source={item.image}
          style={styles.CarImage}
          // resizeMode="contain"
        />

        {/* Info */}
        <View style={styles.BottomContainer}>
          <View style={styles.RowBetween}>
            <Text style={styles.CarName}>
              {item.name}
            </Text>

            <View style={styles.RatingContainer}>
              <MaterialCommunityIcons
                name="star"
                size={SizeConfig.width * 3.5}
                color="#FFB800"
              />

              <Text style={styles.RatingText}>
                {item.rating}
              </Text>
            </View>
          </View>

          <Text style={styles.FuelText}>
            {item.fuel}
          </Text>

          <Text style={styles.PriceText}>
            {item.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.MainContainer}>
      {/* Header */}
      <View style={styles.HeaderRow}>
        <Text style={styles.SectionTitle}>
          Top Rated Cars
        </Text>

        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.ViewAll}>
            View All
          </Text>
        </TouchableOpacity>
      </View>

      {/* List */}
      <FlatList
        data={carsData}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        contentContainerStyle={styles.ListContainer}
      />
    </View>
  );
};

const getStyles = (SizeConfig: any) =>
  StyleSheet.create({
    MainContainer: {
      marginTop: SizeConfig.height * 3.5,
    },

    HeaderRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: SizeConfig.width * 4,
      marginBottom: SizeConfig.height * 1.5,
    },

    SectionTitle: {
      color: '#21153F',
      fontSize: SizeConfig.fontSize * 3.8,
      fontFamily: theme.fonts.bold,
    },

    ViewAll: {
      color: '#9C8CFF',
      fontSize: SizeConfig.fontSize * 2.8,
      fontFamily: theme.fonts.medium,
    },

    ListContainer: {
      paddingLeft: SizeConfig.width * 4,
      paddingRight: SizeConfig.width * 2,
    },

    Card: {
      width: SizeConfig.width * 55,
      // height: SizeConfig.height * ,
      backgroundColor: '#FFFFFF',
      borderRadius: SizeConfig.width * 5,
      marginRight: SizeConfig.width * 3,
      overflow: 'hidden',
      borderColor: colors.borderColor,
      borderWidth: SizeConfig.width *0.1,
    },

    HeartContainer: {
      position: 'absolute',
      top: SizeConfig.height * 1.2,
      right: SizeConfig.width * 3,
      zIndex: 20,
      width: SizeConfig.width * 8,
      height: SizeConfig.width * 8,
      borderRadius: SizeConfig.width * 8,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },

    CarImage: {
      width: '100%',
      height: SizeConfig.height * 16,
      marginTop: SizeConfig.height * 1,
    },

    BottomContainer: {
      paddingHorizontal: SizeConfig.width * 3.5,
      paddingBottom: SizeConfig.height * 2,
    },

    RowBetween: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    CarName: {
      color: '#1F1733',
      fontSize: SizeConfig.fontSize * 3,
      fontFamily: theme.fonts.bold,
    },

    RatingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    RatingText: {
      marginLeft: SizeConfig.width * 1,
      color: '#1F1733',
      fontSize: SizeConfig.fontSize * 2.3,
      fontFamily: theme.fonts.medium,
    },

    FuelText: {
      marginTop: SizeConfig.height * 0.6,
      color: '#7A738B',
      fontSize: SizeConfig.fontSize * 2.3,
      fontFamily: theme.fonts.medium,
    },

    PriceText: {
      marginTop: SizeConfig.height * 1,
      color: '#7C74FF',
      fontSize: SizeConfig.fontSize * 3,
      fontFamily: theme.fonts.bold,
    },
  });

export default TopRatedCars;
import React, { useMemo, useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { Text } from '../../globalComponents/CustomText';
import { colors, fonts } from '../../utils/constants/Theme';

import SearchInput from './components/SearchInput';
import RecentSearches from './components/RecentSearches';
import BudgetSection from './components/BudgetSection';
import BodyTypeSection from './components/BodyTypeSection';
import CarListingCard from '../../components/CarListingCard';

const SearchScreen = () => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const styles = useMemo(
    () => getStyles(size, insets),
    [size, insets],
  );

  const [recentSearches, setRecentSearches] = useState([
  {
    id: '1',
    title: 'Swift',
    image: require('../../assets/images/home/car1.png'),
  },
  {
    id: '2',
    title: 'Creta',
    image: require('../../assets/images/home/car1.png'),
  },
   {
    id: '3',
    title: 'Swift',
    image: require('../../assets/images/home/car1.png'),
  },
  {
    id: '4',
    title: 'Creta',
    image: require('../../assets/images/home/car1.png'),
  },
]);

  const recommendedCarsData = [
  {
    id: '1',
    name: 'Hyundai Creta',
    subtitle: 'Ex-showroom',
    image: require('../../assets/images/recommendcar.png'),
    rating: '4.8',
    variants: '6 Variants',
    price: '₹14,50,000',
  },
  {
    id: '2',
    name: 'Kia Seltos',
    subtitle: 'Ex-showroom',
    image: require('../../assets/images/recommendcar.png'),
    rating: '4.9',
    variants: '5 Variants',
    price: '₹15,20,000',
  },
];

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle="dark-content"
      />

      <LinearGradient
        colors={['#F4EEFF', '#FFFFFF']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.headerContainer}
      >
        <View style={styles.headerRow}>
  
          <TouchableOpacity style={styles.backButton}>
            <Ionicons
              name="chevron-back"
              size={size.width * 5}
              color={colors.text_Primary}
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Search
          </Text>

          <View style={styles.rightSpace} />
        </View>


        <View style={styles.searchContainer}>
          <SearchInput />
        </View>
      </LinearGradient>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <RecentSearches
          recentSearches={recentSearches}
          setRecentSearches={setRecentSearches}
        />

        <BudgetSection />

        <BodyTypeSection />
         
        <CarListingCard
          title="Recommended For You"
          data={recommendedCarsData}
        />
     
      </ScrollView>
    </View>
  );  
};

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },

    headerContainer: {
      paddingTop: insets.top + size.height * 2.5,
      paddingBottom: size.height * 3,
      paddingHorizontal: size.width * 5,
      borderBottomLeftRadius: size.width * 6,
      borderBottomRightRadius: size.width * 6,
    },

    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    backButton: {
      width: size.width * 8,
      height: size.width * 8,
      borderRadius: size.width * 3,

      backgroundColor: '#FFFFFF',

      alignItems: 'center',
      justifyContent: 'center',
    },

    headerTitle: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 4,
      color: colors.text_Primary,
    },

    rightSpace: {
      width: size.width * 9,
    },

    searchContainer: {
      marginTop: size.height * 2.5,
    },

    scrollContent: {
      paddingBottom: size.height * 6,
    },
  });

export default SearchScreen;
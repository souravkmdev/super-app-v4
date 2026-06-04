import React, { useMemo, useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { colors, fonts } from '../../utils/constants/Theme';

import SearchInput from './components/SearchInput';
import RecentSearches from './components/RecentSearches';
import BudgetSection from './components/BudgetSection';
import BodyTypeSection from './components/BodyTypeSection';
import Header from '../../globalComponents/Header';
import CarListingCard from '../home/components/CarListingCard';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SearchScreen = () => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp>();

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
      image: require('../../assets/images/home/recommendcar.png'),
      rating: '4.8',
      variants: '6 Variants',
      price: 1450000,
    },
    {
      id: '2',
      name: 'Kia Seltos',
      subtitle: 'Ex-showroom',
      image: require('../../assets/images/home/recommendcar.png'),
      rating: '4.9',
      variants: '5 Variants',
      price: 1520000,
    },
  ];

  const [selectedBudget, setSelectedBudget] = useState<any>(null);
  const [searchText, setSearchText] = useState('');

  const filteredCars = selectedBudget
    ? recommendedCarsData.filter(
      (item) =>
        item.price >= selectedBudget.min &&
        item.price <= selectedBudget.max
    )
    : recommendedCarsData;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
      />

      <LinearGradient
        colors={['#F4EEFF', '#FFFFFF']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.headerContainer}
      >
        <Header
          title="Search"
          onPress={() => navigation.goBack()}
        />

        <View style={styles.searchContainer}>
          <SearchInput
            value={searchText}
            onChangeText={setSearchText} />
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
        <BudgetSection
          selectedBudget={selectedBudget}
          onSelectBudget={setSelectedBudget}
        />

        <BodyTypeSection />

        <CarListingCard
          title="Recommended For You"
          data={filteredCars}
        />

      </ScrollView>
    </View>
  );
}

const getStyles = (
  size: any,
  insets: any,
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },

    headerContainer: {
      paddingTop: insets.top + size.height * 8,
      paddingBottom: size.height * 3,
      borderBottomLeftRadius: size.width * 6,
      borderBottomRightRadius: size.width * 6,
    },
    searchContainer: {
      marginTop: size.height * 6,
      paddingHorizontal: size.width * 5,
    },
    scrollContent: {
      paddingBottom: size.height * 6,
    },
  });

export default SearchScreen;
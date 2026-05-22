import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Header from './components/Header';
import GarageCard from './components/GarageCard';
import FeatureGrid from './components/FeatureGrid';
import ExploreServices from './components/ExploreServices';
import RoadSideBanner from './components/Banners';
import SmartSuggestions from './components/SmartSuggestions';
import TopRatedCars from '../../components/CarListingCard';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { colors } from '../../utils/constants/Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TrackYourCar from './components/TrackYourCar';
import CarListingCard from '../../components/CarListingCard';

const HomeScreen = () => {

  const size = useSizeConfig();
  const insets = useSafeAreaInsets();
  const styles = getStyles(size, insets);

  const recommendedCarsData = [
  {
    id: '1',
    name: 'Grand Vitara',
    subtitle: 'Ex-showroom',
    image: require('../../assets/images/recommendcar.png'),
    rating: '5.00',
    variants: '4 Variants',
    price: '₹12,80,000',
  },
  {
    id: '2',
    name: 'Grand Vitara',
    subtitle: 'Ex-showroom',
    image: require('../../assets/images/recommendcar.png'),
    rating: '5.00',
    variants: '4 Variants',
    price: '₹11,40,000',
  },
];
  return (
     <View style={styles.container}>

      <StatusBar barStyle={'dark-content'} />
      <View style={styles.headerContainer}>
      <Header />
      </View>
       
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>

        <GarageCard />
        <FeatureGrid />
        <ExploreServices />
        <TrackYourCar />
        <RoadSideBanner />
        <SmartSuggestions/>
        <CarListingCard
          title="Top Rated Cars"
          data={recommendedCarsData}
        />
      </ScrollView>
     </View>
  );
};

export default HomeScreen;

const getStyles = (size : any, insets:any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backGround,
    },

    scrollContainer: {
      paddingBottom: size.height * 30,
    },
    headerContainer: {
      paddingTop: insets.top,
    },
  });
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
import SmartSuggestions from './components/SuggestionSection';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { colors } from '../../utils/constants/Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TrackYourCar from './components/TrackYourCar';
import CarListingCard from './components/CarListingCard';
import SuggestionSection from './components/SuggestionSection';
import { suggestionsData } from './components/types/suggestionsData'
import Banner from './components/Banners';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { useNavigation } from '@react-navigation/native';

type NavigationProp =
  NativeStackNavigationProp<RootStackParamList>;


const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp>();

  const size = useSizeConfig();
  const insets = useSafeAreaInsets();
  const styles = getStyles(size, insets);

  const recommendedCarsData = [
    {
      id: '1',
      name: 'Grand Vitara',
      subtitle: 'Ex-showroom',
      image: require('../../assets/images/home/recommendcar.png'),
      rating: '5.00',
      variants: '4 Variants',
      price: 1280000,
    },
    {
      id: '2',
      name: 'Grand Vitara',
      subtitle: 'Ex-showroom',
      image: require('../../assets/images/home/recommendcar.png'),
      rating: '5.00',
      variants: '4 Variants',
      price: 1140000,
    },
  ];
  return (
    <View style={styles.container}>

      <StatusBar barStyle={'dark-content'} />
      <View style={styles.headerContainer}>
        <Header
          navigation={navigation} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>

        <GarageCard />
        <FeatureGrid navigation={navigation} />
        <ExploreServices />
        <TrackYourCar />
        <Banner />
        <SuggestionSection
          title="Smart Suggestions"
          data={suggestionsData}
        />
        <CarListingCard
          title="Top Rated Cars"
          data={recommendedCarsData}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const getStyles = (size: any, insets: any) =>
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
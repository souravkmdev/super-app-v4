import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import GarageCard from './components/GarageCard';
import FeatureGrid from './components/FeatureCard';
import ExploreServices from './components/ExploreServices';
import TrackYourCar from './components/TrackYourCar';
import RoadSideBanner from './components/Banners';
import SmartSuggestions from './components/SmartSuggestions';
import TopRatedCars from './components/TopRatedCars';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { colors } from '../../utils/constants/Theme';

const HomeScreen = () => {

  const SizeConfig = useSizeConfig();
  const styles = getStyles(SizeConfig);

  return (
    <SafeAreaView
      style={styles.container}
      edges={['top']}>

      <StatusBar backgroundColor='#fafafa' barStyle={'dark-content'} />
       <Header />
       
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>

        <GarageCard />
        <FeatureGrid />
        <ExploreServices />
        <TrackYourCar />
        <RoadSideBanner />
        <SmartSuggestions/>
        {/* <TopRatedCars/> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const getStyles = (SizeConfig: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backGround,
    },

    scrollContainer: {
      paddingBottom: SizeConfig.height * 30,
    },
  });
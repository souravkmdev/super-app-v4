import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { colors } from '../../utils/constants/Theme';
import ExploreBanner from './components/ExploreBanner';
import Header from './components/Header';
import TestDriveCard from './components/TestDriveCard';
import CarListingCard from '../home/components/CarListingCard';
import Banner from '../home/components/Banners';
import CompareCarsCard from './components/CompareCarsCard';
import SuggestionSection from '../home/components/SuggestionSection';

export default function Explorescree({ navigation }: any) {
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

  const size = useSizeConfig();
  const styles = getStyles(size);

  return (
  <View style={styles.container}>
  <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
    <LinearGradient
      colors={['#F4EEFF', '#FFFFFF']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={[
        styles.headerContainer,
        {
          borderBottomLeftRadius: size.width * 6,
          borderBottomRightRadius: size.width * 6,
        },
      ]}
    >
      <Header
        title="Explore"
        showBackButton={false}
      />
    </LinearGradient>

  
      <ExploreBanner />

      <TestDriveCard />

      <CarListingCard
        title="Picked For You"
        data={recommendedCarsData}
      />
      <CompareCarsCard/>
     
       <Banner/>

        <SuggestionSection
          title="Trending This Week"
          data={[
            {
              id: 1,
              title: 'Most Viewed',
              subtitle: 'Recommended in \n12 days',
            },

            {
              id: 2,
              title: 'Fast Selling',
              subtitle: 'Expires on',
              extra: '23 Oct 2026',
            },

            {
              id: 3,
              title: 'Low EMI',
              subtitle: 'Based on your\nPreference',
            },
          ]}
        />
    
    </ScrollView>

  </View>
);
}

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },

    headerContainer: {
      minHeight: size.height * 22,
    },

    scrollContainer: {
      paddingBottom: size.height * 30,
    },
  });

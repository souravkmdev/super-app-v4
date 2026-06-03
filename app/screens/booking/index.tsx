import React, { useMemo, useState } from 'react';
import { View, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../../globalComponents/Header';
import BookingCard from './components/BookingCard';

import { useSizeConfig } from '../../utils/context/SizeConfig';
import { colors, fonts } from '../../utils/constants/Theme';
import { Text } from '../../globalComponents/CustomText';
import { bookingOptions } from './data';

type BookingOption = 'myself' | 'others';

const BookingType = () => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  const [selected, setSelected] = useState<BookingOption>('myself');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <LinearGradient
        colors={['#bfbffa', '#d7d7fb', '#f3f3fd']}
        style={styles.gradient}
      />

      <Header onPress={() => {}} title="" />

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.subContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>
              Who are you{'\n'}making this booking for?
            </Text>

            <Text style={styles.subtitle}>
              This helps us personalise your experience.
            </Text>
          </View>

          <Image
            source={require('../../assets/images/carBooking/book_now.png')}
            style={styles.illustrationContainer}
            resizeMode="contain"
          />

          <Image
            source={require('../../assets/images/carBooking/ellipse.png')}
            style={styles.ellipseImage}
          />

          <View style={styles.cardsContainer}>
            {bookingOptions.map(item => (
              <BookingCard
                key={item.key}
                selected={selected === item.key}
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon}
                onPress={() => setSelected(item.key as BookingOption)}
              />
            ))}
          </View>

          <View style={styles.noteContainer}>
            <Ionicons
              name="information-circle-outline"
              size={size.width * 4.3}
              color={colors.primary}
            />

            <Text style={styles.noteText}>
              <Text style={styles.noteBold}>Note: </Text>
              This information is crucial for booking and will be used for
              vehicle registration. Please provide accurate details to ensure a
              smooth process.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2fd',
    },

    gradient: {
      width: '100%',
      height: size.height * 25,
      position: 'absolute',
      top: 0,
    },

    subContainer: {
      paddingHorizontal: size.width * 3.7,
      paddingTop: insets.top + size.height * 20,
      alignItems: 'center',
    },
    headerContainer: {
      gap: size.height * 2,
    },
    title: {
      fontSize: size.width * 5.4,
      fontFamily: fonts.extraBold,
      color: colors.text_Primary,
      textAlign: 'center',
      includeFontPadding: false,
    },

    subtitle: {
      fontSize: size.fontSize * 3,
      color: colors.text_Secondary,
      textAlign: 'center',
    },

    illustrationContainer: {
      width: '100%',
      height: '40%',
      marginTop: size.height * 10,
      paddingHorizontal: size.width * 4.9,
    },
    ellipseImage: {
      width: size.width * 110,
      height: size.width * 110,
      resizeMode: 'contain',
      position: 'absolute',
      top: '60%',
    },

    cardsContainer: {
      width: '100%',
      marginTop: size.width * 0.8,
      gap: size.width * 2.5,
      backgroundColor: 'rgba(107, 78, 255, 0.07)',
      borderRadius: size.width * 3,
      padding: size.width * 3,
      borderWidth: size.width * 0.2,
      borderColor: 'rgba(107, 78, 255, 0.12)',
      marginBottom: size.height * 4,
    },
    noteContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      backgroundColor: 'rgba(107, 78, 255, 0.07)',
      borderRadius: size.width * 2.8,
      padding: size.width * 2.8,
      width: '100%',
      borderWidth: size.width * 0.2,
      borderColor: 'rgba(107, 78, 255, 0.12)',
      gap: size.width,
    },

    noteText: {
      flex: 1,
      fontSize: size.width * 2.9,
      color: colors.text_Primary,
      fontFamily: fonts.semiBold,
      includeFontPadding: false,
    },

    noteBold: {
      fontFamily: fonts.semiBold,
      color: colors.primary,
      fontSize: size.width * 2.9,
    },
  });

export default BookingType;

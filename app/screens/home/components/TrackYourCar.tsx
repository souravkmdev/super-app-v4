import React from 'react';

import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { Text } from '../../../globalComponents/CustomText';
import { colors, fonts } from '../../../utils/constants/Theme';

const trackingData = [
  {
    id: 1,
    title: 'Booked',
    date: '12 May',
    image: require('../../../assets/images/home/booked.png'),
  },
  {
    id: 2,
    title: 'In Production',
    date: '18 May',
    image: require('../../../assets/images/home/production.png'),
  },
  {
    id: 3,
    title: 'In Transit',
    date: '22 May',
    image: require('../../../assets/images/home/transit.png'),
  },
  {
    id: 4,
    title: 'Delivered',
    date: '28 May',
    image: require('../../../assets/images/home/delivered.png'),
  },
];

const TrackYourCar = () => {
  const size = useSizeConfig();

  const styles = getStyles(size);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Track Your Car</Text>

        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.viewTracking}>View Tracking</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        {trackingData.map(item => {
          return (
            <View key={item.id} style={styles.stepContainer}>
              {item.id !== 4 && (
                <View
                  style={[
                    styles.lineContainer,

                    item.id === 3 ? styles.dottedLine : styles.solidLine,
                  ]}
                />
              )}

              {item.id === 4 ? (
                <View style={styles.deliveredOuterCircle}>
                  <View style={styles.deliveredInnerCircle}>
                    <Image
                      source={item.image}
                      style={styles.deliveredIcon}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              ) : (
                <View style={styles.outerCircle}>
                  <View style={styles.innerCircle}>
                    <Image
                      source={item.image}
                      style={styles.icon}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              )}

              <Text style={styles.stepTitle}>{item.title}</Text>

              <Text style={styles.stepDate}>{item.date}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    mainContainer: {
      paddingHorizontal: size.width * 4,
      gap: size.height * 3,
    },

    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    title: {
      color: colors.text_Primary,
      fontSize: size.fontSize * 3.5,
      fontFamily: fonts.bold,
    },

    viewTracking: {
      color: '#9C8CFF',
      fontSize: size.fontSize * 3,
      fontFamily: fonts.medium,
    },

    cardContainer: {
      backgroundColor: '#ebe7fc',
      borderRadius: size.width * 5,
      paddingTop: size.height * 2.2,
      paddingBottom: size.height * 2.4,
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden',
    },

    stepContainer: {
      flex: 1,
      alignItems: 'center',
      zIndex: 10,
    },
    outerCircle: {
      width: size.width * 13,
      height: size.width * 13,
      borderRadius: size.width * 7,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#A48BFF',
      backgroundColor: '#F6F3FF',
    },

    innerCircle: {
      width: size.width * 10.5,
      height: size.width * 10.5,
      borderRadius: size.width * 10,
      backgroundColor: '#8E7DFF',
      borderWidth: 1.5,
      borderColor: '#B9A8FF',
      alignItems: 'center',
      justifyContent: 'center',
    },

    icon: {
      width: size.width * 8.5,
      height: size.width * 8.5,
    },

    trackingLine: {
      position: 'absolute',
      top: size.width * 8,
      left: size.width * 12,
      width: '67%',
      height: size.width * 0.6,
      backgroundColor: '#8E7DFF',
      zIndex: 0,
    },
    stepTitle: {
      marginTop: size.height * 1,
      color: colors.text_Primary,
      fontSize: size.fontSize * 2.7,
      fontFamily: fonts.bold,
      textAlign: 'center',
    },

    stepDate: {
      marginTop: size.height * 1,
      color: colors.text_Primary,
      fontSize: size.fontSize * 2.5,
      fontFamily: fonts.medium,
    },

    lineContainer: {
      position: 'absolute',
      top: size.width * 6.5,
      left: '70%',
      width: size.width * 14,
      height: 1.8,
    },

    solidLine: {
      backgroundColor: '#8E7DFF',
    },

    dottedLine: {
      borderWidth: 1,
      borderStyle: 'dashed',
      borderColor: '#C8BCFF',
    },
    deliveredCircle: {
      width: size.width * 13,
      height: size.width * 13,
      borderRadius: size.width * 7,
      backgroundColor: '#F6F3FF',
      borderWidth: 2,
      borderColor: '#9B84FF5E',
      alignItems: 'center',
      justifyContent: 'center',
    },

    deliveredOuterCircle: {
      width: size.width * 13,
      height: size.width * 13,
      borderRadius: size.width * 7,
      backgroundColor: '#DCD3FF',
      alignItems: 'center',
      justifyContent: 'center',
    },

    deliveredInnerCircle: {
      width: size.width * 11,
      height: size.width * 11,
      borderRadius: size.width * 6,
      backgroundColor: '#F5F2FF',
      borderWidth: 2.5,
      borderColor: '#8E7DFF',
      alignItems: 'center',
      justifyContent: 'center',
    },

    deliveredIcon: {
      width: size.width * 8.7,
      height: size.width * 8.7,
    },
  });

export default TrackYourCar;

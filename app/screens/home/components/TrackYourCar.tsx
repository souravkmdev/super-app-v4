import React from 'react';

import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { Text } from '../../../globalComponents/CustomText';
import theme, { colors } from '../../../utils/constants/Theme';

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
  const SizeConfig = useSizeConfig();

  const styles = getStyles(SizeConfig);

  return (
    <View style={styles.MainContainer}>
      {/* Top Row */}
      <View style={styles.HeaderRow}>
        <Text style={styles.Title}>
          Track Your Car
        </Text>

        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.ViewTracking}>
            View Tracking
          </Text>
        </TouchableOpacity>
      </View>

      {/* Card */}
      <View style={styles.CardContainer}>
        {/* Main Line */}
        {/* <View style={styles.TrackingLine} /> */}
 
        {/* Steps */}
        {trackingData.map(item => {
          return (
            <View
              key={item.id}
              style={styles.StepContainer}
            >

              {item.id !== 4 && (
                <View
                  style={[
                    styles.LineContainer,

                    item.id === 3
                      ? styles.DottedLine
                      : styles.SolidLine,
                  ]}
                />
              )}
              {/* Outer Circle */}
              <View style={styles.OuterCircle}>
                {/* Inner Circle */}

                
                <View style={styles.InnerCircle}>
                  <Image
                    source={item.image}
                    style={styles.Icon}
                    resizeMode="contain"
                  />
                </View>
              </View>

              {/* Title */}
              <Text style={styles.StepTitle}>
                {item.title}
              </Text>

              {/* Date */}
              <Text style={styles.StepDate}>
                {item.date}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const getStyles = (SizeConfig: any) =>
  StyleSheet.create({
    MainContainer: {
      marginTop: SizeConfig.height * 4,
      paddingHorizontal: SizeConfig.width * 4,
    },

    HeaderRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: SizeConfig.height * 1.5,
    },

    Title: {
      color: '#1F1733',
      fontSize: SizeConfig.fontSize * 3.8,
      fontFamily: theme.fonts.bold,
    },

    ViewTracking: {
      color: '#9C8CFF',
      fontSize: SizeConfig.fontSize * 3,
      fontFamily: theme.fonts.medium,
    },

    CardContainer: {
      backgroundColor: '#F3F0FE',
      borderRadius: SizeConfig.width * 5,
      // paddingVertical: SizeConfig.height * 2.2,
      paddingTop: SizeConfig.height * 1.8,
      paddingBottom: SizeConfig.height * 2.5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden',
    },
    
    StepContainer: {
      flex: 1,
      alignItems: 'center',
      zIndex: 10,
      // paddingHorizontal: SizeConfig.width * 1,
    },
    OuterCircle: {
      width: SizeConfig.width * 13,
      height: SizeConfig.width * 13,
      borderRadius: SizeConfig.width * 13,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#A48BFF',
      backgroundColor: '#F4F1FF',
    },

    InnerCircle: {
      width: SizeConfig.width * 10.3,
      height: SizeConfig.width * 10.3,
      borderRadius: SizeConfig.width * 10,
      backgroundColor: '#8E7DFF',
      borderWidth: 2,
      borderColor: '#9275fa',
      alignItems: 'center',
      justifyContent: 'center',
    },

    Icon: {
      width: SizeConfig.width * 9,
      height: SizeConfig.width * 10,
    },

    TrackingLine: {
      position: 'absolute',
      top: SizeConfig.width * 8,
      left: SizeConfig.width * 12,
      width: '67%',
      height: SizeConfig.width * 0.6,
      backgroundColor: '#8E7DFF',
      zIndex: 0,
    },
    StepTitle: {
      marginTop: SizeConfig.height * 1.2,
      // color: '#241942',
      color: colors.text_Primary,
      fontSize: SizeConfig.fontSize * 2.7,
      fontFamily: theme.fonts.bold,
      textAlign: 'center',
    },

    StepDate: {
      marginTop: SizeConfig.height * 1,
      // color: '#241942',
      color: colors.text_Primary,
      fontSize: SizeConfig.fontSize * 2.5,
      fontFamily: theme.fonts.medium,
      // fontWeight: 500,
    },

    LineContainer: {
      position: 'absolute',
      top: SizeConfig.width * 6,
      left: '70%',
      width: SizeConfig.width * 14,
      height: 2,
    },

    SolidLine: {
      backgroundColor: '#8E7DFF',
    },

    DottedLine: {
      borderWidth: 1,
      borderStyle: 'dashed',
      borderColor: '#C8BCFF',
    },
  })

export default TrackYourCar;
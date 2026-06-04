import React, { useMemo } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import { Text } from '../../../globalComponents/CustomText';


interface Props {
  title: string;
  description: string;
  date: string;
  time: string;
  earnedPoints: string;
  spentPoints: string;
}

const PointsHistoryCard = ({
  title,
  description,
  date,
  time,
  earnedPoints,
  spentPoints,
}: Props) => {
  const size = useSizeConfig();

  const styles = useMemo(
    () => getStyles(size),
    [size],
  );

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="car"
            size={size.width * 7}
            color={colors.Color_5346EE}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>
            {title}
          </Text>

          <Text style={styles.description}>
            {description}
          </Text>

          <View style={styles.dateRow}>
            <MaterialCommunityIcons
              name="calendar-clock"
              size={size.width * 3.6}
              color="#8F8AA8"
            />

            <Text style={styles.dateText}>
              {date} • {time}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.rightSection}>
        <Text style={styles.earnedPoints}>
          {earnedPoints}
        </Text>

        <Text style={styles.spentPoints}>
          {spentPoints}
        </Text>
      </View>
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      borderRadius: size.width * 4,
      padding: size.width * 4,
      marginTop: size.height * 1.5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    leftSection: {
      flexDirection: 'row',
      flex: 1,
    },

    iconContainer: {
      width: size.width * 12,
      height: size.width * 12,
      borderRadius: size.width * 2,
      backgroundColor: '#F4F1FF',
      alignItems: 'center',
      justifyContent: 'center',
    },

    contentContainer: {
      flex: 1,
      marginLeft: size.width * 3,
    },

    title: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3.7,
      color: colors.text_Primary,
    },

    description: {
      marginTop: size.height * 1,
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 3,
      color: colors.text_Primary,
    },

    dateRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: size.height * 1.5,
    },

    dateText: {
      marginLeft: size.width * 1,
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.8,
      color: '#8F8AA8',
    },

    rightSection: {
      alignItems: 'flex-end',
      justifyContent: 'center',
      gap: size.height * 2.5,
    },

    earnedPoints: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 3.5,
      color: '#45B649',
    },

    spentPoints: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 3.5,
      color: '#FF6B6B',
    },
  });

export default PointsHistoryCard;
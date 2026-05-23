import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { Text } from '../../../globalComponents/CustomText';
import { colors, fonts } from '../../../utils/constants/Theme';

const suggestionsData = [
  {
    id: 1,
    title: 'Services',
    subtitle: 'Recommended\nin 12 days',
    image: require('../../../assets/images/home/serv.png'),
    backgroundColor: '#F3EEFF',
  },
  {
    id: 2,
    title: 'Insurance Expire',
    subtitle: 'Expires on',
    extra: '23 Oct 2026',
    image: require('../../../assets/images/home/sheild.png'),
    backgroundColor: '#FFF1F3',
  },
  {
    id: 3,
    title: 'Recommend',
    subtitle: 'Based on your\nPreference',
    image: require('../../../assets/images/home/recommend.png'),
    backgroundColor: '#F7EEFF',
  },
];


const SmartSuggestions = () => {
  const size = useSizeConfig();
  const styles = getStyles(size);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.sectionTitle}>
        Smart Suggestions
      </Text>

      <View style={styles.row}>
        {suggestionsData.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.8}
              style={[
                styles.card,
                {
                  backgroundColor: item.backgroundColor,
                },
              ]}
            >
              <Text style={styles.cardTitle}>
                {item.title}
              </Text>

              <Text style={styles.cardSubTitle}>
                {item.subtitle}
              </Text>

              {item.extra && (
                <Text style={styles.extraText}>
                  {item.extra}
                </Text>
              )}

              <View style={styles.iconContainer}>
                <Image
                  source={item.image}
                  style={styles.iconImage}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    mainContainer: {
      marginTop: size.height * 3.5,
      paddingHorizontal: size.width * 4,
    },

    sectionTitle: {
      color: colors.text_Primary,
      fontSize: size.fontSize * 3.8,
      fontFamily: fonts.semibold,
      marginBottom: size.height * 3.5,
    },

    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    card: {
      width: size.width * 30,
      borderRadius: size.width * 3,
      paddingHorizontal: size.width * 2.5,
      paddingTop: size.height * 1.5,
      paddingBottom: size.height * 1.8,
      minHeight: size.height * 23,
      position: 'relative',
    },

    cardTitle: {
      color: '#2A1F47',
      fontSize: size.fontSize * 3,
      fontFamily: fonts.bold,
    },

    cardSubTitle: {
      marginTop: size.height * 0.8,
      color: '#3E345B',
      fontSize: size.fontSize * 2.6,
      fontFamily: fonts.medium,
    },

    extraText: {
      marginTop: size.height * 5,
      color: '#FF5A4E',
      fontSize: size.fontSize * 2.5,
      fontFamily: fonts.medium,
    },

    iconContainer: {
      position: 'absolute',
      right: size.width * 2.5,
      bottom: size.height * 1.2,
      width: size.width * 7,
      height: size.width * 7,
      borderRadius: size.width * 6,
      backgroundColor: 'rgba(255,255,255,0.55)',
      alignItems: 'center',
      justifyContent: 'center',
    },

    iconImage: {
      width: size.width * 4.4,
      height: size.width * 4.5,
    },
  });

export default SmartSuggestions;
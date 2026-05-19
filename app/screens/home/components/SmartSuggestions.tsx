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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
  const SizeConfig = useSizeConfig();
  const styles = getStyles(SizeConfig);

  return (
    <View style={styles.MainContainer}>
      <Text style={styles.SectionTitle}>
        Smart Suggestions
      </Text>

      <View style={styles.Row}>
        {suggestionsData.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.8}
              style={[
                styles.Card,
                {
                  backgroundColor: item.backgroundColor,
                },
              ]}
            >
              <Text style={styles.CardTitle}>
                {item.title}
              </Text>

              <Text style={styles.CardSubTitle}>
                {item.subtitle}
              </Text>

              {item.extra && (
                <Text style={styles.ExtraText}>
                  {item.extra}
                </Text>
              )}

              {/* <View style={styles.IconContainer}>
               <MaterialCommunityIcons
                 name={item.icon}
                 size={SizeConfig.width * 5}
                 color={item.iconColor}
                />
                </View> */}

              <View style={styles.IconContainer}>
                <Image
                  source={item.image}
                  style={styles.IconImage}
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

const getStyles = (SizeConfig: any) =>
  StyleSheet.create({
    MainContainer: {
      marginTop: SizeConfig.height * 3.5,
      paddingHorizontal: SizeConfig.width * 4,
    },

    SectionTitle: {
      color: colors.text_Primary,
      fontSize: SizeConfig.fontSize * 3.8,
      fontFamily: theme.fonts.bold,
      marginBottom: SizeConfig.height * 1.5,
    },

    Row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    Card: {
      width: SizeConfig.width * 30,
      borderRadius: SizeConfig.width * 3,
      paddingHorizontal: SizeConfig.width * 2.5,
      paddingTop: SizeConfig.height * 1.5,
      paddingBottom: SizeConfig.height * 1.8,
      minHeight: SizeConfig.height * 23,
      position: 'relative',
    },

    CardTitle: {
      color: '#2A1F47',
      fontSize: SizeConfig.fontSize * 3,
      fontFamily: theme.fonts.bold,
    },

    CardSubTitle: {
      marginTop: SizeConfig.height * 0.8,
      color: '#3E345B',
      fontSize: SizeConfig.fontSize * 2.6,
      fontFamily: theme.fonts.medium,
      // lineHeight: SizeConfig.height * 2.4,
    },

    ExtraText: {
      marginTop: SizeConfig.height * 5,
      color: '#FF5A4E',
      fontSize: SizeConfig.fontSize * 2.5,
      fontFamily: theme.fonts.medium,
    },

    IconContainer: {
      position: 'absolute',
      right: SizeConfig.width * 2.5,
      bottom: SizeConfig.height * 1.2,
      width: SizeConfig.width * 6,
      height: SizeConfig.width * 6,
      borderRadius: SizeConfig.width * 6,
      backgroundColor: 'rgba(255,255,255,0.55)',
      alignItems: 'center',
      justifyContent: 'center',
    },

    IconImage: {
      width: SizeConfig.width * 4.8,
      height: SizeConfig.width * 4.8,
    },
  });

export default SmartSuggestions;
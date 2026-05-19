import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { Text } from '../../../globalComponents/CustomText';
import theme from '../../../utils/constants/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';


const servicesData = [
  {
    id: 1,
    title: 'New Cars',
    subtitle: 'Latest Models',
    image: require('../../../assets/images/home/car.png'),
    backgroundColor: '#7D73FF',
  },
  {
    id: 2,
    title: 'Service',
    subtitle: 'Expert Care',
    image: require('../../../assets/images/home/service.png'),
    backgroundColor: '#8FB39A',
  },
];

const ExploreServices = () => {
  const SizeConfig = useSizeConfig();
  const styles = getStyles(SizeConfig);

  return (
    <View style={styles.MainContainer}>
     
      <Text style={styles.SectionTitle}>
        Explore Our Services
      </Text>

      <View style={styles.Row}>
        {servicesData.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.9}
              style={[
                styles.Card,
                {
                  backgroundColor: item.backgroundColor,
                },
              ]}
            >
             
              <View style={styles.TextContainer}>
                <Text style={styles.CardTitle}>
                  {item.title}
                </Text>

                <Text style={styles.CardSubtitle}>
                  {item.subtitle}
                </Text>
              </View>

            
              <Image
                source={item.image}
                style={styles.CardImage}
                resizeMode="contain"
              />

             
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.ArrowButton}
              >
                <Ionicons
                  name="arrow-forward"
                  size={SizeConfig.width * 3.8}
                  color={theme.colors.white}
                />
              </TouchableOpacity>
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
    },
      TextContainer: {
       zIndex: 10,
       marginTop: SizeConfig.height * -2,
      },
    SectionTitle: {
      paddingHorizontal: SizeConfig.width * 4,
      color: theme.colors.text_Primary,
      fontSize: SizeConfig.fontSize * 3.5,
      fontFamily: theme.fonts.bold,
      marginBottom: SizeConfig.height * 1.8,
    },

    Row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: SizeConfig.width * 4,
    },

    Card: {
      width: SizeConfig.width * 44,
      height: SizeConfig.height * 30,
      borderRadius: SizeConfig.width * 5,
      overflow: 'hidden',
      padding: SizeConfig.width * 4,
      justifyContent:'flex-start',
    },

    CardTitle: {
      color: theme.colors.white,
      fontSize: SizeConfig.fontSize * 4.5,
      fontFamily: theme.fonts.bold,
    },

    CardSubtitle: {
      color: 'rgba(255,255,255,0.85)',
      fontSize: SizeConfig.fontSize * 2.6,
      fontFamily: theme.fonts.medium,
    },

    CardImage: {
      position: 'absolute',
      right: -SizeConfig.width * 3,
      bottom: 0,
      width: SizeConfig.width * 34,
      height: SizeConfig.width * 28,
    },

    ArrowButton: {
      position: 'absolute',
      right: SizeConfig.width * 3,
      bottom: SizeConfig.height * 1.2,
      width: SizeConfig.width * 7.5,
      height: SizeConfig.width * 7.5,
      borderRadius: SizeConfig.width * 7.5,
      backgroundColor: 'rgba(245, 230, 230, 0.25)',
      alignItems: 'center',
      justifyContent: 'center',
    },

    ArrowText: {
      color: theme.colors.white,
      fontSize: SizeConfig.fontSize * 5,
      marginTop: -SizeConfig.height * 0.3,
    },
  });

export default ExploreServices;
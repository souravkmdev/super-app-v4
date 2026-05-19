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


const featureData = [
  {
    id: 1,
    title: 'Used Cars',
    icon: require('../../../assets/images/home/usedcars.png'),},
  {
    id: 2,
    title: 'Insurance',
    icon: require('../../../assets/images/home/insurance.png'),},
  {
    id: 3,
    title: 'Driving school',
    icon: require('../../../assets/images/home/school.png'),  },
  {
    id: 4,
    title: 'Accessories',
    icon: require('../../../assets/images/home/tools.png'),},
];

const FeatureGrid = () => {
  const SizeConfig = useSizeConfig();
  const styles = getStyles(SizeConfig);

  return (
    <View style={styles.MainContainer}>
      {featureData.map(item => {
        return (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            style={styles.Card}
          >
            <Image
              source={item.icon}
              style={styles.IconStyle}
              resizeMode="contain"
            />

            <Text style={styles.Title}>
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const getStyles = (SizeConfig: any) =>
  StyleSheet.create({
    MainContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: SizeConfig.width * 4,
      marginTop: SizeConfig.height * 3.5,
    },

    Card: {
      width: SizeConfig.width * 20.5,
      height: SizeConfig.width * 20.5,
      backgroundColor: '#FCFCFE',
      borderRadius: SizeConfig.width * 4,
      borderColor:colors.borderColor,
      borderWidth: 0.3,
      alignItems: 'center',
      justifyContent: 'center',
    },

    IconStyle: {
      width: SizeConfig.width * 8,
      height: SizeConfig.width * 8,
    },

    Title: {
      marginTop: SizeConfig.height * 1,
      textAlign: 'center',
      color: theme.colors.text_Primary,
      fontSize: SizeConfig.fontSize * 2.5,
      fontFamily: theme.fonts.medium,
    },
  });

export default FeatureGrid;
import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { Text } from '../../../globalComponents/CustomText';
import  { colors, fonts } from '../../../utils/constants/Theme';

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

const FeatureGrid = ({ navigation }: any) => {
  const size = useSizeConfig();
  const styles = getStyles(size);

  return (
    <View style={styles.mainContainer}>
      {featureData.map(item => {
        return (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            style={styles.card}
            onPress={() => {
              if (item.title === 'Insurance') {
                navigation.navigate('Insurance');
              }
            }}
          >
            <Image
              source={item.icon}
              style={styles.iconStyle}
              resizeMode="contain"
            />

            <Text style={styles.title}>
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const getStyles = (size:any) =>
  StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: size.width * 4,
      marginTop: size.height * 3.5,
    },

    card: {
      width: size.width * 20.5,
      height: size.width * 20.5,
      backgroundColor: '#FCFCFE',
      borderRadius: size.width * 4,
      borderColor:colors.border,
      borderWidth: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
    },

    iconStyle: {
      width: size.width * 9,
      height: size.width * 9,
    },

    title: {
      marginTop: size.height * 1,
      textAlign: 'center',
      color: colors.text_Primary,
      fontSize: size.fontSize * 2.5,
      fontFamily: fonts.medium,
    },
  });

export default FeatureGrid;
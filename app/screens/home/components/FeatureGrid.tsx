import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { Text } from '../../../globalComponents/CustomText';
import { colors, fonts } from '../../../utils/constants/Theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/RootStackParamList';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const featureData = [
  {
    id: 1,
    title: 'Used Cars',
    icon: require('../../../assets/images/home/usedcars.png'),
    iconWidth: 8.5,
    iconHeight: 8.5,
    screenName: 'UsedCarsScreen',

  },
  {
    id: 2,
    title: 'Insurance',
    icon: require('../../../assets/images/home/insurance.png'),
    iconWidth: 7,
    iconHeight: 7,
    screenName: 'InsuranceScreen',
  },
  {
    id: 3,
    title: 'Driving school',
    icon: require('../../../assets/images/home/school.png'),
    iconWidth: 7.5,
    iconHeight: 7.5,
    screenName: 'DrivingSchool',
  },
  {
    id: 4,
    title: 'Accessories',
    icon: require('../../../assets/images/home/tools.png'),
    iconWidth: 6.5,
    iconHeight: 6.5,
    screenName: 'AccessoriesScreen',
  },
];

const FeatureGrid = () => {
  const navigation = useNavigation<NavigationProp>();
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
              navigation.navigate(item.screenName as never);
            }}
          >
            <Image
              source={item.icon}
              style={[
                styles.iconStyle,
                {
                  width: size.width * item.iconWidth,
                  height: size.width * item.iconHeight,
                },
              ]}
              resizeMode="contain"
            />

            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: size.width * 4,
      // marginTop: size.height * 3.5,
    },

    card: {
      width: size.width * 20.5,
      height: size.width * 20.5,
      backgroundColor: '#FCFCFE',
      borderRadius: size.width * 4,
      alignItems: 'center',
      justifyContent: 'center',
    },

    iconStyle: {
      width: size.width * 8,
      height: size.width * 8,
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
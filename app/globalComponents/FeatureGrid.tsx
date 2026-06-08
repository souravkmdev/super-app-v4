import React from 'react';
import {
  Image,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSizeConfig } from '../utils/context/SizeConfig';
import { Text } from './CustomText';
import { colors, fonts } from '../utils/constants/Theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamList';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const FeatureGrid = ({
  featureData,
  textStyle,
}: {
  featureData: any[];
  textStyle?: TextStyle;
}) => {
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
              if (item.screenName)
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

            <Text style={[styles.title, textStyle]}>{item.title}</Text>
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
      fontFamily: fonts.bold,
    },
  });

export default FeatureGrid;
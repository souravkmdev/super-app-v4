import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { fonts } from '../../../utils/constants/Theme';

const SearchHeader = ({ navigation,}:any) => {
  const size = useSizeConfig();
  const styles = getStyles(size);

  return (
    <LinearGradient
      colors={['#F5F0FF', '#FAF7FF', '#FFFFFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.mainContainer}
    >

      <TouchableOpacity style={styles.iconButton} 
      onPress={() => navigation.goBack()} >

        <Ionicons
          name="chevron-back"
          size={size.width * 4.5}
          color="#1E1338"
        />

      </TouchableOpacity>

      <Text style={styles.title}>
        Search
      </Text>

      <View style={styles.emptyView} />
    </LinearGradient>
  );
};

export default SearchHeader;

const getStyles = (size: any) =>
  StyleSheet.create({
    mainContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: size.width * 5,
      paddingTop: size.height * 3,
      paddingBottom: size.height * 2.2,
      borderBottomLeftRadius: size.width * 6,
      borderBottomRightRadius: size.width * 6,
    },

    iconButton: {
      width: size.width * 8.5,
      height: size.width * 8.5,
      borderRadius: size.width * 2.5,
      backgroundColor: 'rgba(255,255,255,0.9)',
      alignItems: 'center',
      justifyContent: 'center',
    },

    title: {
      color: '#1E1338',
      fontSize: size.fontSize * 4,
      fontFamily: fonts.bold,
    },

    emptyView: {
      width: size.width * 8.5,
    },

  });
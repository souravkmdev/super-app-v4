import React, { useMemo } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

interface Props {
  recentSearches: any[];
  setRecentSearches: any;
}

const RecentSearches = ({
  recentSearches,
  setRecentSearches,
}: Props) => {
  const size = useSizeConfig();

  const styles = useMemo(
    () => getStyles(size),
    [size],
  );

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.chip}
      >

        <View style={styles.imageContainer}>
          <Image
            source={item.image}
            style={styles.carImage}
          />
        </View>

        <Text style={styles.chipText}>
          {item.title}
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            const filteredData = recentSearches.filter(
              data => data.id !== item.id,
            );

            setRecentSearches(filteredData);
          }}
        >
          <Ionicons
            name="close"
            size={size.width * 3.5}
            color={colors.lightGray}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

      <View style={styles.headerRow}>
        <View style={styles.leftRow}>
          <Ionicons
            name="time-outline"
            size={size.width * 4.5}
            color={colors.lightGray}
          />

          <Text style={styles.title}>
            Recent Searches
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.8}
        onPress={() => setRecentSearches([])}>
          <Text style={styles.clearText}>
            Clear All
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={recentSearches}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={renderItem}
      />
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      marginTop: size.height * 2.5,
      paddingHorizontal: size.width * 5,

    },

    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    leftRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    title: {
      marginLeft: size.width * 1.5,

      fontFamily: fonts.semibold,
      fontSize: size.fontSize * 3,
      color: colors.text_Primary,
      lineHeight: size.fontSize * 3.2,
    },

    clearText: {
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.8,
      color: '#9B6DFF',
    },

    listContent: {
      marginTop: size.height * 3.5,
      paddingRight: size.width * 5,
    },

    chip: {
      height: size.height * 8,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F5F1FF',
      borderRadius: size.width * 10,
      paddingLeft: size.width * 1,
      paddingRight: size.width * 2.5,
      marginRight: size.width * 2,
    },

    imageContainer: {
      width: size.width * 7,
      height: size.width * 7,
      borderRadius: size.width * 3.5,
      backgroundColor: '#846AF470',
      alignItems: 'center',
      justifyContent: 'center',
    },

    carImage: {
      width: size.width * 6,
      height: size.width * 6,
    },

    chipText: {
      marginLeft: size.width * 2,
      marginRight: size.width * 2,
      fontFamily: fonts.semibold,
      fontSize: size.fontSize * 2.8,
      color: colors.text_Primary,
      // includeFontPadding: false,
      lineHeight: size.fontSize * 3,
    },
  });

export default RecentSearches;
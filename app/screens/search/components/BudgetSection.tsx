import React, { useMemo } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

const budgetData = [
  {
    id: '1',
    title: 'Under\n5 Lakhs',
  },
  {
    id: '2',
    title: '5L - 10\nLakhs',
  },
  {
    id: '3',
    title: '10L - 15\nLakhs',
  },
  {
    id: '4',
    title: 'Above\n15 Lakhs',
  },
];

const BudgetSection = () => {
  const size = useSizeConfig();

  const styles = useMemo(
    () => getStyles(size),
    [size],
  );

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.card}
      >
        <Image
          source={require('../../../assets/images/wallet.png')}
          style={styles.icon}
          resizeMode="contain"
        />

        <Text style={styles.cardTitle}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Budget To Suit You
      </Text>

      <FlatList
        horizontal
        data={budgetData}
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
      marginTop: size.height * 6,
      paddingHorizontal: size.width * 5,

    },

    title: {
      fontFamily: fonts.semibold,
      fontSize: size.fontSize * 3.6,
      color: colors.text_Primary,
    },

    listContent: {
      marginTop: size.height * 1.8,
      paddingRight: size.width * 4,
    },

    card: {
      width: size.width * 20,
      height: size.height * 25,
      backgroundColor: '#FCFCFE',
      borderRadius: size.width * 4,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: size.width * 3,
      borderColor: colors.border,
      borderWidth: 0.3,
    },

    icon: {
      width: size.width * 10,
      height: size.width * 10,
    },

    cardTitle: {
      marginTop: size.height * 1.5,
      textAlign: 'center',
      fontFamily: fonts.semibold,
      fontSize: size.fontSize * 2.6,
      color: colors.text_Primary,
      lineHeight: size.fontSize * 3.4,
    },
  });

export default BudgetSection;
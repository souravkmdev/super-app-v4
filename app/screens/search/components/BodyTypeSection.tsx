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

const bodyTypes = [
  {
    id: '1',
    title: 'Hatchback',
    image: require('../../../assets/images/car.png'),
  },
  {
    id: '2',
    title: 'Sedan',
    image: require('../../../assets/images/icon2.png'),
  },
  {
    id: '3',
    title: 'SUV',
    image: require('../../../assets/images/icon3.png'),
  },
  {
    id: '4',
    title: 'MUV',
    image: require('../../../assets/images/icon4.png'),
  },
  {
    id: '5',
    title: 'Coupe',
    image: require('../../../assets/images/icon5.png'),
  },
  {
    id: '6',
    title: 'Convertible',
    image: require('../../../assets/images/icon6.png'),
  },
];

const BodyTypeSection = () => {
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
          source={item.image}
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
        Browse by Body Type
      </Text>

      <FlatList
        data={bodyTypes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        scrollEnabled={false}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        renderItem={renderItem}
      />
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      marginTop: size.height * 4,
      paddingHorizontal: size.width * 5,

    },

    title: {
      fontFamily: fonts.semibold,
      fontSize: size.fontSize * 3.6,
      color: colors.text_Primary,
    },

    listContent: {
      marginTop: size.height * 2,
    },

    row: {
      justifyContent: 'space-between',
      marginBottom: size.height * 4,
    },

    card: {
      width: '48%',
      height: size.height * 18,
      backgroundColor: colors.backGround,
      borderRadius: size.width * 3,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: size.width * 4,
      borderColor: colors.borderColor,
      borderWidth:0.3,
    },

    icon: {
      width: size.width * 10,
      height: size.width * 10,
    },

    cardTitle: {
      marginLeft: size.width * 3,
      fontFamily: fonts.semibold,
      fontSize: size.fontSize * 3,
      color: colors.text_Primary,
    },
  });

export default BodyTypeSection;
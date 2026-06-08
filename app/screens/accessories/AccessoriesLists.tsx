import { FlatList, Image, StyleSheet, View } from 'react-native';
import React, { useMemo } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../../globalComponents/Header';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { Text } from '../../globalComponents/CustomText';
import { colors, fonts } from '../../utils/constants/Theme';
import AccessoriesCard from './components/AccessoriesCard';
import { cardItemLists } from './data';

const AccessoriesLists = () => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#b7b7fe', '#d7d7fb', '#f3f3fd']}
        style={styles.gradient}
      />

      <Header title="Accessories" onPress={() => {}} />

      <FlatList
        data={cardItemLists}
        ListHeaderComponent={() => (
          <View>
            <Image
              source={require('../../assets/images/accessories/fotter_banner.png')}
              style={styles.footerBanner}
            />
            <Text style={styles.headerTitle}> Accessories </Text>
          </View>
        )}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.variantsList}
        numColumns={2}
        scrollEnabled={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <AccessoriesCard />}
      />
    </View>
  );
};

export default AccessoriesLists;

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F3F3FE',
    },
    variantsList: {
      gap: size.height * 3,
      marginTop: size.height * 20 + insets.top,
      paddingHorizontal: size.width * 5,
    },
    columnWrapper: {
      justifyContent: 'space-between',
      gap: size.width * 5,
    },
    gradient: {
      width: '100%',
      height: size.height * 25,
      position: 'absolute',
      zIndex: 0,
    },
    footerBanner: {
      width: '100%',
      height: size.height * 40,
      resizeMode: 'stretch',
      alignSelf: 'center',
    },
    headerTitle: {
      fontFamily: fonts.bold,
      fontSize: size.width * 3.7,
      color: colors.text_Primary,
      marginTop: size.height * 4,
    },
  });

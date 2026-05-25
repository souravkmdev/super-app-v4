import { FlatList, StyleSheet, View } from 'react-native';
import Header from '../../globalComponents/Header';
import LinearGradient from 'react-native-linear-gradient';
import { useCallback, useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { wishListCarsData } from './data';
import CarCard from '../../globalComponents/CarCard';

const Wishlist = () => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  const handleFavoriteToggle = (id: string) => {
    console.log('Wishlised Cars ', id);
  };

  const renderItem = useCallback(
    ({ item }: any) => (
      <CarCard
        item={item}
        onFavoriteToggle={handleFavoriteToggle}
        onDetailsPress={() => {}}
        isDark={false}
      />
    ),
    [],
  );

  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#b7b7fe', '#d7d7fb', '#f3f3fd']}
        style={styles.gradient}
      />

      <Header onPress={() => {}} title="Wishlist" />

      <View style={styles.contentContainer}>
        <FlatList
          data={wishListCarsData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          removeClippedSubviews
          maxToRenderPerBatch={5}
          initialNumToRender={5}
          windowSize={5}
          updateCellsBatchingPeriod={50}
        />
      </View>
    </View>
  );
};

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2fd',
    },

    gradient: {
      width: '100%',
      height: size.height * 25,
      position: 'absolute',
      top: 0,
    },
    contentContainer: {
      paddingTop: insets.top + size.height * 20,
      paddingHorizontal: size.width * 4,
      gap: size.height * 5,
    },
    listContent: {
      paddingBottom: size.width * 5,
      gap: size.width * 3.3,
    },
  });

export default Wishlist;

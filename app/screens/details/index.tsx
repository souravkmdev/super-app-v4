import {
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { memo, useCallback, useMemo, useRef, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors, fonts } from '../../utils/constants/Theme';
import { Text } from '../../globalComponents/CustomText';
import LinearGradient from 'react-native-linear-gradient';
import Highlights from './components/Highlights';
import SelectColor from './components/SelectColor';
import CustomButton from '../../globalComponents/CustomButton';
import Variants from './components/Variants';
import Specifications from './components/Specifications';

const Details = () => {
  const size = useSizeConfig();
  const flatListRef = useRef<FlatList>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWishlisted, setWishlisted] = useState(false);

  const insets = useSafeAreaInsets();

  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  const BannerItem = memo(({ item, styles }: { item: any; styles: any }) => {
    return (
      <Pressable style={styles.imageContainer}>
        <View style={styles.productImages}>
          <Image style={styles.images} source={item} resizeMode="cover" />
        </View>
      </Pressable>
    );
  });

  const renderItem: ListRenderItem<any> = useCallback(
    ({ item }) => {
      return <BannerItem item={item} styles={styles} />;
    },
    [styles],
  );

  const itemWidth = useMemo(() => size.width * 100, [size.width]);
  const handleMomentumScrollEnd = useCallback(
    (event: any) => {
      const index = Math.round(event.nativeEvent.contentOffset.x / itemWidth);
      setCurrentIndex(index);
    },
    [itemWidth],
  );

  const bannerImages = [
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
    require('../../assets/images/detail/detailsBanner.png'),
  ];

  const highlightsData = [
    { key: 'Hybrid', title: 'Hybrid' },
    { key: 'Km', title: '23.Km/l' },
    { key: 'Ac', title: 'A/C' },
  ];

  const colorsData = [
    {
      key: 'Red',
      color: '#A48FFF',
      image: require('../../assets/images/detail/color_img_1.png'),
    },
    {
      key: 'Blue',
      color: '#E6FABE',
      image: require('../../assets/images/detail/color_img_1.png'),
    },
    {
      key: 'Black',
      color: '#FACBBE',
      image: require('../../assets/images/detail/color_img_1.png'),
    },
    {
      key: 'Royal Blue',
      color: '#24038D',
      image: require('../../assets/images/detail/color_img_1.png'),
    },
  ];

  const variantsData = [
    {
      key: 1,
      name: 'Sigma',
      price: '₹12,80,000',
      image: require('../../assets/images/detail/variants_img.png'),
      isPopular: true,
    },
    {
      key: 2,
      name: 'Delta',
      price: '₹12,80,000',
      image: require('../../assets/images/detail/variants_img.png'),
      isPopular: false,
    },
    {
      key: 3,
      name: 'Zeta',
      price: '₹12,80,000',
      image: require('../../assets/images/detail/variants_img.png'),
      isPopular: false,
    },
    {
      key: 4,
      name: 'Alpha',
      price: '₹12,80,000',
      image: require('../../assets/images/detail/variants_img.png'),
      isPopular: false,
    },
  ];
  const SpecificationsData = [
    {
      key: 'engine',
      title: 'Engine',
      value: '1462CC',
      icon: 'engine',
    },
    {
      key: 'power',
      title: 'Power',
      value: '103 BHP',
      icon: 'speedometer',
    },
    {
      key: 'alloy',
      title: 'Alloy',
      value: '17 Inch',
      icon: 'car-tire-alert',
    },
    {
      key: 'seats',
      title: 'Seats',
      value: '5 Seater',
      icon: 'car-seat',
    },
    {
      key: 'mileage',
      title: 'Mileage',
      value: '21 KM/L',
      icon: 'fuel',
    },
    {
      key: 'brakes',
      title: 'Brakes',
      value: 'ABS',
      icon: 'disc',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <FlatList
              ref={flatListRef}
              data={bannerImages}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
              decelerationRate="normal"
              scrollEventThrottle={16}
              initialScrollIndex={0}
              onMomentumScrollEnd={handleMomentumScrollEnd}
              removeClippedSubviews
              windowSize={3}
              maxToRenderPerBatch={3}
              initialNumToRender={1}
              renderItem={renderItem}
            />

            <View style={styles.swipeContainer}>
              <MaterialIcons
                name="swipe"
                size={size.width * 3.5}
                color={colors.white}
              />

              <Text style={styles.swipeText}>Swipe to see</Text>
            </View>

            <View style={styles.paginationContainer}>
              {bannerImages.map((_, index) => (
                <View
                  key={index}
                  style={
                    index === currentIndex
                      ? styles.activeDot
                      : styles.inactiveDot
                  }
                />
              ))}
            </View>

            <LinearGradient
              colors={['#99a3b902', '#F5F5FE']}
              style={styles.gradient}
            />
          </View>

          <View style={styles.headerContainer}>
            <View style={styles.backButton}>
              <Feather
                name="chevron-left"
                size={size.width * 5}
                color={colors.primary}
              />
            </View>

            <Text style={styles.title}>Grand Vitara</Text>

            <View style={styles.emptyView} />
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.sectionComponentMargin}>
            <View style={styles.highlightsRow}>
              {highlightsData.map((highlight, index) => (
                <Highlights key={index} title={highlight} />
              ))}
            </View>
            <View style={styles.priceCard}>
              <View style={styles.detailsRow}>
                <View style={styles.titleContainer}>
                  <Text style={styles.carTitle}>Grand Vitara</Text>

                  <Text style={styles.priceText}>Ex-showroom price</Text>
                </View>

                <View style={styles.colorContainer}>
                  <Text style={styles.selectColorText}>Select Color</Text>

                  <View style={styles.colorsRow}>
                    <FlatList
                      data={colorsData}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={styles.colorsListContainer}
                      renderItem={({ item }) => (
                        <SelectColor color={item.color} image={item.image} />
                      )}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.priceInfoContainer}>
                <View style={styles.onRoadPriceBadge}>
                  <Text style={styles.onRoadPriceText}>
                    On Road Price ₹12,80,000
                  </Text>
                </View>

                <Text style={styles.mainPriceText}>₹12,80,000</Text>
              </View>
            </View>

            <View style={styles.buttonRow}>
              <CustomButton
                GradientColors={['#7c63ce', '#987BF6', '#987BF6']}
                PressableStyle={styles.primaryButtonPressable}
                mainstyle={styles.primaryButtonContainer}
                TextStyle={{
                  fontSize: size.width * 3.3,
                  fontFamily: fonts.semiBold,
                }}
                TextValue="EMI Calculate"
              />

              <CustomButton
                GradientColors={[colors.white, colors.white]}
                mainstyle={styles.secondaryButtonContainer}
                PressableStyle={styles.secondaryButtonPressable}
                TextStyle={styles.secondaryButtonText}
                TextValue="Chat with Dealer"
              />
            </View>
          </View>

          <View
            style={[
              styles.sectionContainer,
              { paddingVertical: size.height * 5 },
            ]}
          >
            <Text style={styles.headerTitle}> Variants </Text>
            <FlatList
              data={variantsData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <Variants item={item} />}
              contentContainerStyle={styles.variantsList}
            />
          </View>

          <View style={styles.sectionComponentMargin}>
            <View style={styles.aboutContainer}>
              <Text style={styles.aboutTitle}>About</Text>

              <Text style={styles.aboutDescription}>
                The Grand Vitra is a versatile SUV that combines style and
                functionality. With its spacious interior, advanced safety
                features, and impressive fuel efficiency, it's perfect for both
                city driving and off-road adventures. The Grand Vitra also
                boasts a powerful engine and cutting-edge technology, making
                every journey enjoyable.
              </Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={[styles.headerTitle, { marginHorizontal: 0 }]}>
                Specifications
              </Text>

              <View style={styles.specificationCardMainComp}>
                {SpecificationsData.map((item, index) => (
                  <Specifications
                    key={item.key || index.toString()}
                    item={item}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <CustomButton
          GradientColors={['#EDEBFF', '#EDEBFF']}
          mainstyle={styles.wishlistButton}
          TextValue={isWishlisted ? 'Wishlisted' : 'Wishlist'}
          TextStyle={styles.wishlistButtonText}
          OnPress={() => {
            setWishlisted(!isWishlisted);
          }}
          LHSIcon={
            <FontAwesome
              name={isWishlisted ? 'heart' : 'heart-o'}
              size={size.width * 4.5}
              color={'#846AF4'}
            />
          }
          PressableStyle={styles.wishlistPressable}
        />

        <CustomButton
          GradientColors={['#846AF4', '#846AF4']}
          mainstyle={styles.bookNowButton}
          TextValue="Book Now"
        />
      </View>
    </View>
  );
};

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5FE',
    },

    sectionComponentMargin: {
      marginHorizontal: size.width * 5,
      gap: size.height * 5,
    },

    variantsList: {
      gap: size.width * 3,
      paddingHorizontal: size.width * 5,
    },

    imageContainer: {
      width: size.width * 100,
      height: size.height * 100,
      alignItems: 'center',
    },

    productImages: {
      width: '100%',
      height: '100%',
    },

    images: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      borderColor: '#ededf2',
      borderWidth: size.width * 0.3,
      backgroundColor: '#ededf2',
    },

    swipeContainer: {
      flexDirection: 'row',
      backgroundColor: '#1B163B8C',
      alignItems: 'center',
      justifyContent: 'center',
      gap: size.width * 2,
      position: 'absolute',
      bottom: size.height * 18,
      alignSelf: 'center',
      padding: size.width,
      borderRadius: size.width * 3,
      paddingHorizontal: size.width * 3,
      borderWidth: 1,
      borderColor: '#9580f5a4',
      zIndex: 1,
    },

    swipeText: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 2.8,
      color: colors.white,
      includeFontPadding: false,
    },

    paginationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: size.width * 1.5,
      position: 'absolute',
      bottom: size.height * 13,
      alignSelf: 'center',
      zIndex: 1,
    },

    activeDot: {
      width: size.width * 4,
      paddingVertical: size.height * 0.7,
      backgroundColor: colors.white,
      borderRadius: size.width * 2,
    },

    inactiveDot: {
      width: size.width * 2,
      height: size.width * 2,
      backgroundColor: '#FFFFFF2E',
      borderRadius: size.width * 2,
    },

    gradient: {
      width: '100%',
      height: size.height * 11,
      position: 'absolute',
      bottom: 0,
      zIndex: 0,
    },

    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'absolute',
      top: insets.top + size.height * 4,
      left: 0,
      right: 0,
      paddingHorizontal: size.width * 4,
    },

    backButton: {
      backgroundColor: colors.white,
      width: size.width * 8,
      height: size.width * 8,
      borderRadius: size.width * 2.5,
      alignItems: 'center',
      justifyContent: 'center',
    },

    title: {
      fontFamily: fonts.bold,
      fontSize: size.width * 4,
      color: colors.text_Primary,
    },

    emptyView: {
      width: size.width * 10,
      height: size.width * 10,
    },

    contentContainer: {
      top: -size.height * 8,
    },

    highlightsRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      gap: size.width * 3,
    },

    detailsContainer: {
      marginTop: size.height * 3,
      paddingHorizontal: size.width * 5,
    },

    detailsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },

    titleContainer: {
      gap: size.width * 2,
      width: '45%',
    },

    carTitle: {
      fontFamily: fonts.bold,
      fontSize: size.width * 4,
      color: colors.text_Primary,
      includeFontPadding: false,
    },

    priceText: {
      fontFamily: fonts.medium,
      fontSize: size.width * 3,
      color: colors.text_Primary,
      includeFontPadding: false,
    },

    colorContainer: {
      gap: size.width * 2.5,
      width: '47%',
    },

    selectColorText: {
      fontFamily: fonts.semiBold,
      fontSize: size.width * 3,
      color: colors.text_Primary,
      includeFontPadding: false,
    },

    colorsRow: {
      flexDirection: 'row',
      gap: size.width * 2,
    },

    priceCard: {
      backgroundColor: '#EDEBFE',
      padding: size.width * 4,
      borderRadius: size.width * 3,
      gap: size.width * 2,
    },

    colorsListContainer: {
      gap: size.width,
    },

    priceInfoContainer: {
      alignItems: 'flex-start',
      gap: size.width * 2,
    },

    onRoadPriceBadge: {
      backgroundColor: '#E0D8FE',
      borderWidth: 1,
      borderColor: '#846AF470',
      padding: size.width * 1.5,
      paddingHorizontal: size.width * 2,
      borderRadius: size.width * 2,
    },

    onRoadPriceText: {
      fontFamily: fonts.bold,
      fontSize: size.width * 2.5,
      color: colors.text_Primary,
      includeFontPadding: false,
    },

    mainPriceText: {
      fontFamily: fonts.bold,
      fontSize: size.width * 4.5,
      color: colors.text_Primary,
      includeFontPadding: false,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: size.width * 3,
    },

    primaryButtonContainer: {
      flex: 1,
    },

    primaryButtonPressable: {
      paddingVertical: size.width * 3,
    },

    secondaryButtonContainer: {
      flex: 1,
      borderWidth: size.width * 0.2,
      borderColor: '#E0D8FE',
      borderRadius: size.width * 3,
    },

    secondaryButtonPressable: {
      paddingVertical: size.width * 3,
    },

    secondaryButtonText: {
      color: colors.text_Primary,
      fontSize: size.width * 3.3,
      fontFamily: fonts.semiBold,
    },
    sectionContainer: {
      gap: size.height * 3,
    },

    headerTitle: {
      fontFamily: fonts.bold,
      fontSize: size.width * 3.7,
      color: colors.text_Primary,
      marginHorizontal: size.width * 5,
    },
    aboutContainer: {
      backgroundColor: '#EDEBFE',
      padding: size.width * 4,
      borderRadius: size.width * 3,
      gap: size.width * 2,
    },

    aboutTitle: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3.8,
      color: colors.text_Primary,
    },

    aboutDescription: {
      fontFamily: fonts.regular,
      fontSize: size.fontSize * 3.3,
      color: '#0C00328C',
    },
    specificationCardMainComp: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      rowGap: size.width * 4,
    },
    bottomContainer: {
      flexDirection: 'row',
      paddingVertical: size.height * 4,
      alignItems: 'center',
      gap: size.width * 3,
      paddingHorizontal: size.width * 7,
      backgroundColor: colors.white,
      borderTopRightRadius: size.width * 5,
      borderTopLeftRadius: size.width * 5,
      borderWidth: 1,
      borderColor: colors.ligh_borderColor,
    },

    wishlistButton: {
      flex: 1,
      paddingVertical: size.height,
    },

    wishlistButtonText: {
      color: '#846AF4',
    },

    wishlistPressable: {
      gap: size.width,
    },

    bookNowButton: {
      flex: 1,
      paddingVertical: size.height,
    },
  });

export default Details;

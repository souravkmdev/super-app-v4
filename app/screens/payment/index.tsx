import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import Header from '../../globalComponents/Header';
import LinearGradient from 'react-native-linear-gradient';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { useCallback, useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, fonts } from '../../utils/constants/Theme';
import { Text } from '../../globalComponents/CustomText';
import PaymentsCard from './components/PaymentsCard';
import { paymentsData } from './data';

const Payments = () => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  const renderItem = useCallback(
    ({ item }: any) => (
      <PaymentsCard
        title={item.title}
        requestedBy={item.requestedBy}
        purpose={item.purpose}
        date={item.date}
        time={item.time}
        rupees={item.rupees}
        status={item.status}
      />
    ),
    [],
  );

  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

  return (
    <View style={styles.container}>
      <View>
        <LinearGradient
          colors={['#b7b7fe', '#d7d7fb', '#f3f3fd']}
          style={styles.gradient}
        />
        <Header onPress={() => {}} title="Payments" />
      </View>

      <View style={styles.contentContainer}>
        <ImageBackground
          source={require('../../assets/images/payments/payments_banner.png')}
          style={styles.banner}
          imageStyle={styles.bannerImage}
        >
          <View style={styles.bannerContent}>
            <Text style={styles.welcomeText}>Welcome back!</Text>

            <Text
              style={styles.nameText}
              ellipsizeMode="tail"
              numberOfLines={2}
            >
              Parasuraman Hari Basker{' '}
            </Text>

            <View style={styles.secureContainer}>
              <Image
                source={require('../../assets/images/payments/security.png')}
                style={styles.secureImg}
              />

              <Text style={styles.secureText}>Secure • Fast • Reliable</Text>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.sectionContainer}>
          <Text style={styles.headerTitle}> Your Payments </Text>

          <FlatList
            data={paymentsData}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContentContainer}
            removeClippedSubviews
            maxToRenderPerBatch={5}
            initialNumToRender={5}
            windowSize={5}
            updateCellsBatchingPeriod={50}
          />
        </View>
      </View>
    </View>
  );
};

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f3f3fd',
    },
    gradient: {
      width: '100%',
      height: size.height * 25,
      position: 'absolute',
      zIndex: 0,
    },
    contentContainer: {
      paddingTop: insets.top + size.height * 18,
    },
    banner: {
      width: size.width * 90,
      minHeight: size.height * 40,
      justifyContent: 'center',
      padding: size.width * 4,
      paddingHorizontal: size.width * 6,
      alignSelf: 'center',
    },
    bannerImage: {
      resizeMode: 'contain',
    },
    bannerContent: {
      alignItems: 'flex-start',
    },
    welcomeText: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3.1,
      color: '#5346EE',
      includeFontPadding: false,
      marginBottom: size.height * 2,
    },

    nameText: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 4.3,
      color: colors.text_Primary,
      width: size.width * 33,
      includeFontPadding: false,
      fontWeight: 700,
      //   backgroundColor : 'red'
    },

    secureContainer: {
      flexDirection: 'row',
      gap: size.width,
      alignItems: 'center',
      backgroundColor: colors.white,
      paddingHorizontal: size.width * 2,
      borderRadius: size.width,
      paddingVertical: size.width,
      marginTop: size.height * 3,
    },

    secureText: {
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.5,
      color: colors.text_Primary,
    },

    secureImg: {
      width: size.width * 4,
      height: size.width * 4,
      resizeMode: 'contain',
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
    listContentContainer: {
      gap: size.height * 3,
      paddingBottom: size.height * 130,
    },
  });

export default Payments;

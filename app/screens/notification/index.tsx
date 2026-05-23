import { useCallback, useMemo } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import { useSizeConfig } from '../../utils/context/SizeConfig';
import { Text } from '../../globalComponents/CustomText';
import { colors, fonts } from '../../utils/constants/Theme';
import { notificationData } from './data';

import Header from '../../globalComponents/Header';
import CustomButton from '../../globalComponents/CustomButton';
import NotificationCards from './components/NotificationCards';

const Notification = () => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  const renderItem = useCallback(
    ({ item }: any) => (
      <View>
        <NotificationCards
          title={item.title}
          description={item.description}
          time={item.time}
          buttonText={item.buttonText}
          onPress={() => {}}
        />
        <View style={styles.divider} />
      </View>
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

      <Header onPress={() => {}} title="Notification" />

      <View style={styles.contentContainer}>
        <ImageBackground
          source={require('../../assets/images/notification/notification_banner.png')}
          style={styles.banner}
          imageStyle={styles.bannerImage}
          resizeMode="stretch"
        >
          <View style={styles.bannerContent}>
            <Image
              source={require('../../assets/images/notification/notification_bell.png')}
              style={styles.bellIcon}
            />

            <View style={styles.textContainer}>
              <Text style={styles.titleText}>Enable Push Notifications</Text>

              <Text style={styles.descriptionText}>
                Get real-time updates about your bookings, offers and more.
              </Text>
            </View>

            <View style={styles.buttonWrapper}>
              <CustomButton
                GradientColors={['#633BDB', '#633BDB']}
                TextValue="Enable"
                mainstyle={styles.buttonContainer}
                PressableStyle={styles.pressableStyle}
                TextStyle={styles.buttonText}
              />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.sectionContainer}>
          <Text style={styles.headerTitle}> Today </Text>

          <FlatList
            data={notificationData}
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

    banner: {
      justifyContent: 'center',
      paddingVertical: size.width * 4.5,
      paddingHorizontal: size.width * 3,
      overflow: 'hidden',
    },

    bannerImage: {
      resizeMode: 'contain',
      borderRadius: size.width * 4,
    },

    bannerContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: size.width * 2,
    },

    bellIcon: {
      width: size.width * 13,
      height: size.width * 13,
      resizeMode: 'contain',
      marginRight: size.width * 3,
    },
    pressableStyle: {
      paddingVertical: size.height * 1.4,
      paddingHorizontal: size.width * 3.7,
    },
    textContainer: {
      flex: 1,
      gap: size.height,
    },

    titleText: {
      fontSize: size.fontSize * 3.3,
      fontFamily: fonts.bold,
      color: colors.text_Primary,
    },

    descriptionText: {
      fontSize: size.fontSize * 2.54,
      fontFamily: fonts.medium,
      color: colors.text_Primary,
    },

    buttonWrapper: {
      alignSelf: 'flex-end',
    },

    buttonContainer: {
      borderRadius: size.width * 1.5,
      bottom: -5,
    },

    buttonText: {
      fontSize: size.fontSize * 3,
    },
    sectionContainer: {
      gap: size.height,
    },
    headerTitle: {
      fontFamily: fonts.semiBold,
      fontSize: size.width * 3,
      color: colors.text_Primary,
    },
    listContentContainer: {
      gap: size.height,
      paddingBottom: size.height * 80,
    },
    divider: {
      width: '100%',
      borderTopWidth: size.width * 0.2,
      borderColor: '#1313130D',
    },
  });

export default Notification;

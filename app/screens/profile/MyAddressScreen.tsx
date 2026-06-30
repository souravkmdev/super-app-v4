import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../../globalComponents/Header';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { Text } from '../../globalComponents/CustomText';
import ProfileDetailCard from './components/DetialsCard';
import { addressList } from './data';
import { colors, fonts } from '../../utils/constants/Theme';
import ActionBannerCard from '../../globalComponents/ActionBannerCard';
import HeaderLinearGradient from '../../globalComponents/HeaderLinearGradient';
import RbSheetComp, { RbSheetRef } from '../../globalComponents/RbSheetComp';
import CustomButton from '../../globalComponents/CustomButton';
import MapView, { Marker } from 'react-native-maps';
import GetLocation from 'react-native-get-location';
import CustomInputComp from '../../globalComponents/CustomInputComp';
import CustomInputTextAreaComp from '../../globalComponents/CustomInputTextAreaComp';

const MyAddressScreen = ({ navigation }: any) => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const [fetchLocation, setFetchLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  const bottomRef = useRef<RbSheetRef>(null);

  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        const location = await GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 60000,
        });

        setFetchLocation({
          latitude: location.latitude,
          longitude: location.longitude,
        });
      } catch (error: any) {
        console.warn(error.code, error.message);
      }
    };

    getCurrentLocation();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <HeaderLinearGradient />
      <Header title="Addresses" onPress={() => navigation.goBack()} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Image
          source={require('../../assets/images/profile/addressbnr.png')}
          style={styles.bannerImage}
          resizeMode="contain"
        />

        <ActionBannerCard
          title="Add New Address"
          subtitle="Add a new delivery address"
          leftIcon={require('../../assets/images/profile/location.png')}
          rightImage={require('../../assets/images/carBooking/star.png')}
          onPress={() => {
            bottomRef.current?.open();
          }}
        />

        <Text style={styles.sectionTitle}>Saved Addresses</Text>

        {addressList.map(item => (
          <ProfileDetailCard
            key={item.id}
            iconName="car"
            title={item.title}
            subTitle={item.address}
            showEditIcon
            onEditPress={() => {}}
          />
        ))}
      </ScrollView>

      <RbSheetComp
        ref={bottomRef}
        sheetContStyle={{
          height: '55%',
        }}
      >
        <View style={styles.bottomSheetContent}>
          <Text style={styles.bottomSheetTitle}>Select Location</Text>

          <View style={styles.mapImage}>
            <MapView
              style={StyleSheet.absoluteFill}
              showsUserLocation={false}
              loadingEnabled={true}
              initialRegion={{
                latitude: fetchLocation.latitude,
                longitude: fetchLocation.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <Marker
                coordinate={{
                  latitude: fetchLocation.latitude,
                  longitude: fetchLocation.longitude,
                }}
                draggable
                onDragEnd={e => {
                  const { latitude, longitude } = e.nativeEvent.coordinate;

                  setFetchLocation({
                    latitude,
                    longitude,
                  });
                }}
              />
            </MapView>
          </View>
          {/* <View style={styles.locationCard}>
            <Fontisto
              name="map-marker-alt"
              size={size.width * 4.5}
              color={colors.primary}
            />
            <Text style={styles.locationText}>
              6/8 lth Main, 8th Cross Rd, KanchanHali, Raja Rajeshwari Nagar,
              Bengaluru, Karnataka, 560098, India
            </Text>
            <Feather
              name="edit"
              size={size.width * 4.5}
              color={colors.primary}
              style={styles.editIcon}
            />
          </View> */}

          <CustomInputTextAreaComp
            InputText={` 6/8 lth Main, 8th Cross Rd, KanchanHali, Raja Rajeshwari Nagar,
              Bengaluru, Karnataka, 560098, India`}
            LHSIcon={
              <Fontisto
                name="map-marker-alt"
                size={size.width * 4.5}
                color={colors.primary}
              />
            }
            RHSIcon={
              <Feather
                name="edit"
                size={size.width * 4.5}
                color={colors.primary}
                style={styles.editIcon}
              />
            }
          />

          <CustomButton
            TextValue="Save Address"
            mainstyle={styles.saveButton}
          />
        </View>
      </RbSheetComp>
    </View>
  );
};

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7Fe',
    },
    scrollContent: {
      paddingHorizontal: size.width * 4,
      paddingBottom: size.height * 5,
    },
    sectionTitle: {
      marginTop: size.height * 5,
      marginBottom: size.height,
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 4,
      color: colors.text_Primary,
    },
    bannerImage: {
      width: '100%',
      height: size.height * 30,
      marginTop: size.height * 5,
      marginBottom: size.height * 3,
    },
    bottomSheetContent: {
      gap: size.height * 4,
      paddingTop: size.height * 3,
    },

    bottomSheetTitle: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 3.7,
      color: colors.text_Primary,
    },

    mapImage: {
      width: size.width * 90,
      height: size.height * 50,
      borderRadius: size.width * 5,
      overflow: 'hidden',
    },

    locationCard: {
      flexDirection: 'row',
      gap: size.width * 4,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f3f3fe',
      padding: size.width * 3,
      borderRadius: size.width * 3,
      paddingHorizontal: size.width * 4,
    },

    locationText: {
      width: '78%',
    },

    editIcon: {
      alignSelf: 'flex-start',
    },

    saveButton: {
      paddingVertical: size.height * 1.3,
    },
  });

export default MyAddressScreen;

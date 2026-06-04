import React, { useMemo } from 'react';
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from '../../globalComponents/Header';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { Text } from '../../globalComponents/CustomText';
import ProfileDetailCard from './components/DetialsCard';
import { addressList } from './data';
import { colors, fonts } from '../../utils/constants/Theme';
import ActionBannerCard from '../../globalComponents/ActionBannerCard';

const MyAddressScreen = ({ navigation }: any) => {
    const size = useSizeConfig();
    const insets = useSafeAreaInsets();

    const styles = useMemo(
        () => getStyles(size, insets),
        [size, insets],
    );

    return (
          <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <LinearGradient
                colors={['#D3CAFB', '#E3DCFF', '#F3F3FF']}
                style={styles.headerGradient}
            >
                <Header
                    title="Addresses"
                    onPress={() => navigation.goBack()}
                />
            </LinearGradient>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Banner */}
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
                    onPress={() => { }}
                />

                <Text style={styles.sectionTitle}>
                    Saved Addresses
                </Text>

                {addressList.map(item => (
                    <ProfileDetailCard
                        key={item.id}
                        iconName="car"
                        title={item.title}
                        subTitle={item.address}
                        showEditIcon
                        onEditPress={() => { }}
                    />
                ))}

            </ScrollView>
        </View>
    );
};

const getStyles = (size: any, insets: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F3F3FF'
        },

        headerGradient: {
            height: insets.top + size.height * 14,
        },

        scrollContent: {
            paddingHorizontal: size.width * 4,
            paddingBottom: size.height * 5,
        },
        sectionTitle: {
            marginTop: size.height * 2,
            marginBottom: size.height,
            fontFamily: fonts.bold,
            fontSize: size.fontSize * 4,
            color: colors.text_Primary,
        },
        bannerImage: {
            width: '100%',
            height: size.height * 30,
            marginTop: size.height * 2,
        },
    });

export default MyAddressScreen;
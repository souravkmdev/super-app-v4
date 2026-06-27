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

import Header from '../../../globalComponents/Header';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import { Text } from '../../../globalComponents/CustomText';
import CustomButton from '../../../globalComponents/CustomButton';
import UsedCarCard from './components/UsedCarCard';

const UsedCarsScreen = ({ navigation }: any) => {
    const size = useSizeConfig();
    const insets = useSafeAreaInsets();

    const styles = useMemo(() => getStyles(size, insets), [size, insets],);
    const buyCarsData = [
        {
            title: 'Find Your Car',
            subtitle: 'Explore verified used cars.',
            iconPosition: 'left' as const,
        },
        {
            title: 'Book Test Drive',
            subtitle: 'Experience before you buy.',
            iconPosition: 'right' as const,
        },
        {
            title: 'Drive Home',
            subtitle: 'Easy finance & documentation.',
            iconPosition: 'left' as const,
        },
    ];

    const sellCarsData = [
        {
            title: 'Get Evaluation',
            subtitle: 'Get the best market value.',
            iconPosition: 'left' as const,
        },
        {
            title: 'Schedule Inspection',
            subtitle: 'Free doorstep inspection.',
            iconPosition: 'right' as const,
        },
        {
            title: 'Sell Your Car',
            subtitle: 'Instant payment & transfer.',
            iconPosition: 'left' as const,
        },
    ];

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <LinearGradient
                colors={['#D3CAFB', '#E3DCFF', '#F3F3FF']}
                style={styles.headerGradient}
            >
                <Header
                    title="Used Cars"
                    onPress={() => navigation.goBack()}
                    iconColor={colors.text_Primary}
                />
            </LinearGradient>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}>

                <View style={styles.heroSection}>
                    <Text style={styles.trueValueText}>
                        True Value
                    </Text>

                    <View style={styles.buySellRow}>
                        <Text style={styles.buyText}>
                            Buy or
                        </Text>

                        <Text style={styles.sellText}>
                            Sell
                        </Text>
                    </View>

                    <Text style={styles.descriptionText}>
                        Get the best value for your car
                    </Text>

                    <Text style={styles.descriptionText}>
                        in just 3 easy steps
                    </Text>

                    <Image
                        source={require('../../../assets/images/usedcar/tvcar.png')}
                        resizeMode="contain"
                        style={styles.carImage}
                    />

                    <View style={styles.buttonRow}>
                        <CustomButton
                            TextValue="Sell Cars"
                            OnPress={() =>
                                navigation.navigate('SellVehicleDetails')
                            }
                            GradientColors={['#F3F3FF', '#F3F3FF']}
                            mainstyle={styles.sellButton}
                            PressableStyle={styles.buttonPressable}
                            TextStyle={styles.sellButtonText}
                            LHSIcon={
                                <Image
                                    source={require('../../../assets/images/usedcar/sellicon.png')}
                                    style={styles.buttonIcon}
                                    resizeMode="contain"
                                />
                            }
                        />

                        <CustomButton
                            TextValue="Buy Cars"
                            OnPress={() =>
                                navigation.navigate('UsedCarFilterScreen')
                            }
                            GradientColors={['#807AF4', '#7478FF', '#ADA9F6']}
                            mainstyle={styles.buyButton}
                            PressableStyle={styles.buttonPressable}
                            LHSIcon={
                                <Image
                                    source={require('../../../assets/images/usedcar/buyicon.png')}
                                    style={styles.buttonIcon}
                                    resizeMode="contain"
                                />
                            }
                        />
                    </View>
                    <View style={styles.cardWrapper}>
                        <UsedCarCard
                            title="Buy Cars"
                            data={buyCarsData}
                        />
                    </View>

                    <View style={styles.cardWrapper}>
                        <UsedCarCard
                            title="Sell Cars"
                            data={sellCarsData}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default UsedCarsScreen;

const getStyles = (size: any, insets: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F3F3FF',
        },

        headerGradient: {
            height: insets.top + size.height * 14,
        },

        scrollContent: {
            paddingBottom: size.height * 5,
        },
        heroSection: {
            paddingHorizontal: size.width * 6,
            marginTop: size.height * 5,
        },

        trueValueText: {
            color: colors.text_Primary,
            fontSize: size.fontSize * 5,
            fontFamily: fonts.semiBold,
        },

        buySellText: {
            color: colors.primary,
            fontSize: size.fontSize * 3.5,
            fontFamily: fonts.bold,
        },

        descriptionText: {
            color: colors.text_Secondary,
            fontSize: size.fontSize * 3.3,
            fontFamily: fonts.medium,
        },
        buySellRow: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: size.width * 1.5,
        },

        buyText: {
            color: colors.Color_5346EE,
            fontSize: size.fontSize * 8,
            fontFamily: fonts.bold,
        },

        sellText: {
            color: colors.text_Primary,
            fontSize: size.fontSize * 8,
            fontFamily: fonts.bold,
        },
        carImage: {
            width: '100%',
            height: size.height * 45,
            marginTop: size.height * 2,
            alignSelf: 'center',
        },
        buttonRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: size.height * 8,
        },

        sellButton: {
            width: size.width * 43,
            borderWidth: 1,
            borderColor: colors.primary,
            borderRadius: size.width * 2,
        },

        buyButton: {
            width: size.width * 43,
            borderRadius: size.width * 2,
        },

        buttonPressable: {
            height: size.height * 10,
        },

        sellButtonText: {
            color: colors.primary,
            fontSize: size.fontSize * 3.5,
        },

        buttonIcon: {
            width: size.width * 4.3,
            height: size.width * 4.3,
            marginRight: size.width * 1,
        },
        cardWrapper: {
            marginTop: size.height * 4,
        },
    });
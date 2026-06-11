import React, { useMemo, useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from '../../../globalComponents/Header';
import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { filterOptions } from '../usedCarTypes';
import CustomButton from '../../../globalComponents/CustomButton';

const BuycarOverview = ({ navigation, route }: any) => {
    const size = useSizeConfig();
    const insets = useSafeAreaInsets();

    const styles = useMemo(
        () => getStyles(size, insets),
        [size, insets],
    );
    const getIcon = (title: string) =>
        filterOptions.find(
            item => item.key === title,
        )?.icon;

    const {
        brand,
        model,
        fuelType,
        transmission,
        budget,
        fromYear,
        toYear,
        kilometers,
    } = route.params || {};

    const preferenceData = [
        {
            title: 'Brand',
            value: brand,
        },
        {
            title: 'Model',
            value: model,
        },
        {
            title: 'Year',
            value: `${fromYear}-${toYear}`,
        },
        {
            title: 'Kilometers',
            value: kilometers,
        },
        {
            title: 'Transmission',
            value: transmission,
        },
        {
            title: 'Fuel Type',
            value: fuelType,
        },
        {
            title: 'Budget',
            value: budget,
        },
    ];

    const [showAddressSheet, setShowAddressSheet] = useState(false);

    return (
        <View style={styles.container}>

            <LinearGradient
                colors={['#D3CAFB', '#E3DCFF', '#F3F3FF']}
                style={styles.headerGradient}
            >
                <Header
                    title="Overview"
                    onPress={() => navigation.goBack()}
                    iconColor={colors.text_Primary}
                />
            </LinearGradient>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >

                <View style={styles.preferenceCard}>

                    <View style={styles.preferenceHeader}>
                        <Text style={styles.preferenceTitle}>
                            Your Preference
                        </Text>

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            hitSlop={{ top: 10, bottom: 10, }}>
                            <MaterialCommunityIcons
                                name="square-edit-outline"
                                size={18}
                                color={colors.Color_5346EE}
                            />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.preferenceGrid}>
                        {preferenceData.map((item, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.preferenceItem,
                                    item.title === 'Budget' && styles.budgetItem,
                                ]}
                            >
                                <Image
                                    source={getIcon(item.title)}
                                    style={styles.preferenceIcon}
                                    resizeMode="contain"
                                />

                                <View style={styles.textContainer}>
                                    <Text
                                        style={styles.label}
                                        numberOfLines={1}
                                    >
                                        {item.title}
                                    </Text>

                                    <Text
                                        style={styles.value}
                                        numberOfLines={1}
                                    >
                                        {item.value}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.locationCard}>
                    <View style={styles.savedAddressCard}>
                        <MaterialCommunityIcons
                            name="account-group"
                            size={size.width * 6}
                            color="#8E83FF"
                        />

                        <View style={styles.savedAddressContent}>
                            <Text style={styles.savedAddressTitle}>
                                Home
                            </Text>

                            <Text style={styles.savedAddressText}>
                                Sri Vinayaka Service Center 17, Mysore Rd,
                                Kenchenhalli, RajaRajeshwari Nagar,
                                Bengaluru, Karnataka, 560098, India
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.addressButton}
                        onPress={() => setShowAddressSheet(true)}>
                        <Text style={styles.addressButtonText}>
                            Select Address
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <CustomButton
                TextValue="Submit"
                OnPress={() => {
                    navigation.navigate('LocationScreen');
                }}
                mainstyle={styles.buttonContainer}
            />
        </View>
    );
};

export default BuycarOverview;

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
            paddingHorizontal: size.width * 4,
            paddingTop: size.height * 10,
        },

        textContainer: {
            flex: 1,
            justifyContent: 'center',
        },

        preferenceCard: {
            backgroundColor: colors.white,
            borderRadius: size.width * 4,
            paddingHorizontal: size.width * 3,
            paddingVertical: size.height * 2.5,
        },

        preferenceHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: size.height * 2.5,
        },

        preferenceTitle: {
            color: colors.text_Primary,
            fontSize: size.fontSize * 4,
            fontFamily: fonts.bold,
        },

        preferenceGrid: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        },

        preferenceItem: {
            width: '48%',
            borderRadius: size.width * 3,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: size.width * 2,
            paddingVertical: size.height * 1.5,
            marginBottom: size.height * 1.5,
            minHeight: size.height * 8,
        },

        budgetItem: {
            width: '100%',
        },

        preferenceIcon: {
            width: size.width * 6,
            height: size.width * 6,
            marginRight: size.width * 2,
        },

        label: {
            color: colors.text_Secondary,
            fontSize: size.fontSize * 2.7,
            fontFamily: fonts.semiBold,
        },

        value: {
            color: colors.text_Primary,
            fontSize: size.fontSize * 3.3,
            fontFamily: fonts.bold,
        },
        buttonContainer: {
            marginHorizontal: size.width * 5,
            marginBottom: size.height * 5,
            height: size.height * 12,
            alignItems: 'center',
            justifyContent: 'center',
        },
        locationCard: {
            backgroundColor: colors.white,
            borderRadius: size.width * 4,
            padding: size.width * 4,
            marginTop: size.height * 5,
        },
        addressButton: {
            height: size.height * 12,
            borderWidth: 1,
            borderColor: '#B9B2FF',
            borderRadius: size.width * 2,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: size.height * 8,
        },

        addressButtonText: {
            color: colors.Color_5346EE,
            fontSize: size.fontSize * 3.2,
            fontFamily: fonts.medium,
        },

        savedAddressCard: {
            flexDirection: 'row',
            marginTop: size.height * 2,
        },

        savedAddressContent: {
            flex: 1,
            marginLeft: size.width * 3,
        },

        savedAddressTitle: {
            color: colors.text_Secondary,
            fontFamily: fonts.semiBold,
            fontSize: size.fontSize * 3.5,
        },

        savedAddressText: {
            color: colors.text_Primary,
            fontFamily: fonts.medium,
            fontSize: size.fontSize * 3.3,
        },
    }); 
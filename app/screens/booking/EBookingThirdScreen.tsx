import React, { useState } from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '../../globalComponents/CustomText';
import CustomButton from '../../globalComponents/CustomButton';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { colors, fonts } from '../../utils/constants/Theme';

import BookingHeader from './components/BookingHeader';
import StepperBar from './components/StepperBar';
import SummaryRow from './components/SummaryRow';
import BookingBottomBar from './components/BookingBottomBar';

const ACTIVE_STEP = 3;

const EBookingThirdScreen: React.FC = () => {
    const size = useSizeConfig();
    const styles = getStyles(size);
    const insets = useSafeAreaInsets();

    const [redeemAdded] = useState(false);

    const subtotal = 10000;
    const savings = redeemAdded ? 500 : 0;
    const grandTotal = subtotal - savings;

    const formatINR = (amount: number) =>
        `₹${amount.toLocaleString('en-IN')}`;

    return (
        <View style={[styles.safeArea, { paddingTop: insets.top }]}>
            <StatusBar barStyle="dark-content" />

            <LinearGradient
                colors={['#d3cafb', '#e3dcffd2', '#fefeff47']}
                style={styles.barStyle}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: size.width * 6 }}
            >
                <BookingHeader title="E-Booking" />

                <StepperBar currentStep={ACTIVE_STEP} />

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Booking Summary</Text>
                    <TouchableOpacity style={styles.editBtn} activeOpacity={0.7}>
                        <MaterialCommunityIcons
                            name="square-edit-outline"
                            size={18}
                            color={colors.buttonBgColor}
                        />
                        <Text style={styles.editBtnText}>Edit</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.summaryCard}>
                    <SummaryRow
                        icon={
                            <Ionicons
                                name="person"
                                size={20}
                                color={colors.buttonBgColor}
                                style={styles.summaryIcon}
                            />
                        }
                        label="Name"
                        value="Hari Basker Parasuraman"
                    />
                    <SummaryRow
                        icon={
                            <Ionicons
                                name="location-sharp"
                                size={20}
                                color={colors.buttonBgColor}
                                style={styles.summaryIcon}
                            />
                        }
                        label="Address"
                        value={'Gnana Bharathi, Bengaluru,\nKarnataka'}
                    />
                    <SummaryRow
                        icon={
                            <FontAwesome5
                                name="city"
                                size={20}
                                color={colors.buttonBgColor}
                                style={styles.summaryIcon}
                            />
                        }
                        label="Outlet"
                        value={'Nexa, RR.Nagar,Bengaluru,\nKarnataka'}
                        isLast
                    />
                </View>

                <View style={[styles.sectionHeader, { marginTop: size.width * 6 }]}>
                    <Text style={styles.sectionTitle}>Savings Corners</Text>
                </View>

                <View style={styles.redeemCard}>
                    <View style={styles.redeemLeft}>
                        <Text style={styles.redeemStar}>⭐</Text>
                        <View style={styles.redeemTextBlock}>
                            <Text style={styles.redeemTitle}>Redeem Points</Text>
                            <Text style={styles.redeemSub}>Available: 1,250 pts</Text>
                        </View>
                    </View>

                    <CustomButton
                        TextValue="Add Points"
                        GradientColors={['#6358deff', '#5346EE']}
                        mainstyle={{ borderRadius: size.width * 2.4 }}
                        TextStyle={{
                            fontSize: size.fontSize * 2.8,
                            fontFamily: fonts.medium,
                        }}
                        RHSIcon={
                            <Ionicons name="arrow-forward" size={18} color="#fff" />
                        }
                    />
                </View>

                <View style={[styles.sectionHeader, { marginTop: size.width * 4.5 }]}>
                    <Text style={styles.sectionTitle}>Bill Summary</Text>
                </View>

                <View style={styles.billCard}>
                    <View style={styles.billRow}>
                        <Text style={styles.billLabel}>Subtotal</Text>
                        <Text style={styles.billValue}>{formatINR(subtotal)}</Text>
                    </View>

                    <View style={styles.billDivider} />

                    <View style={styles.billRow}>
                        <Text style={styles.billLabel}>Total Savings</Text>
                        <Text style={[styles.billValue, styles.billSavings]}>
                            {savings > 0
                                ? `-₹${savings.toLocaleString('en-IN')}`
                                : '-₹ 0'}
                        </Text>
                    </View>

                    <View style={styles.billDivider} />

                    <View style={styles.billRow}>
                        <Text style={styles.billLabelBold}>Grand Total</Text>
                        <Text style={styles.billGrandTotal}>{formatINR(grandTotal)}</Text>
                    </View>
                </View>

                <View style={styles.convenienceRow}>
                    <Ionicons
                        name="information-circle"
                        size={14}
                        color={colors.primary}
                        style={{ marginTop: 1 }}
                    />
                    <Text style={styles.convenienceText}>
                        Convenience charges may apply extra for payments made via credit
                        card, net banking, debit card and UPI. ...{' '}
                        <Text style={styles.moreInfoText}>MORE INFO</Text>
                    </Text>
                </View>
            </ScrollView>

            <BookingBottomBar variant="payment" grandTotal={grandTotal} />
        </View>
    );
};

const getStyles = (size: any) =>
    StyleSheet.create({
        safeArea: {
            flex: 1,
            backgroundColor: '#F3F3FF',
        },

        barStyle: {
            width: '100%',
            height: size.height * 21,
            position: 'absolute',
        },

        sectionHeader: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: size.width * 4,
            marginTop: size.width * 6,
        },

        sectionTitle: {
            fontSize: size.fontSize * 3.5,
            fontFamily: fonts.semiBold,
            color: colors.text_Primary,
        },

        editBtn: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
        },

        editBtnText: {
            fontSize: size.fontSize * 2.8,
            fontFamily: fonts.semiBold,
            color: colors.Color_5346EE,
        },

        summaryCard: {
            marginHorizontal: size.width * 3.7,
            marginTop: size.width * 3,
            backgroundColor: colors.white,
            borderRadius: size.width * 4,
            borderWidth: 1,
            borderColor: '#ECECEC',
            overflow: 'hidden',
            padding: size.width * 1.2,
        },

        summaryIcon: {
            marginRight: size.width * 3,
        },

        redeemCard: {
            marginHorizontal: size.width * 3.7,
            marginTop: size.width * 3,
            backgroundColor: colors.white,
            borderRadius: size.width * 2.5,
            borderWidth: 1,
            borderColor: '#ECECEC',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: size.width * 4,
            paddingHorizontal: size.width * 4,
        },

        redeemLeft: {
            flexDirection: 'row',
            alignItems: 'center',
        },

        redeemStar: {
            fontSize: size.fontSize * 4.5,
            marginRight: size.width * 3,
        },

        redeemTextBlock: {},

        redeemTitle: {
            fontSize: size.fontSize * 3,
            fontFamily: fonts.semiBold,
            color: colors.text_Primary,
        },

        redeemSub: {
            fontSize: size.fontSize * 2.2,
            fontFamily: fonts.semiBold,
            color: colors.text_Secondary,
            marginTop: 2,
        },

        billCard: {
            marginHorizontal: size.width * 3.7,
            marginTop: size.width * 3,
            backgroundColor: colors.white,
            borderRadius: size.width * 4,
            borderWidth: 1,
            borderColor: '#ECECEC',
            paddingHorizontal: size.width * 4,
            paddingTop: size.width * 4,
            paddingBottom: size.width * 4,
        },

        billRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: size.width * 3,
        },

        billDivider: {
            height: 1,
            backgroundColor: '#F0EEF9',
        },

        billLabel: {
            fontSize: size.fontSize * 2.8,
            fontFamily: fonts.medium,
            color: colors.text_Primary,
        },

        billLabelBold: {
            fontSize: size.fontSize * 3,
            fontFamily: fonts.bold,
            color: colors.text_Primary,
        },

        billValue: {
            fontSize: size.fontSize * 2.8,
            fontFamily: fonts.semiBold,
            color: colors.text_Primary,
        },

        billSavings: {
            color: '#E53935',
        },

        billGrandTotal: {
            fontSize: size.fontSize * 3.8,
            fontFamily: fonts.extraBold,
            color: colors.text_Primary,
        },

        convenienceRow: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: size.width * 3,
            marginHorizontal: size.width * 4.5,
            gap: 5,
        },

        convenienceText: {
            flex: 1,
            fontSize: size.fontSize * 1.9,
            fontFamily: fonts.medium,
            color: colors.buttonBgColor,
            lineHeight: size.fontSize * 3,
        },

        moreInfoText: {
            fontFamily: fonts.bold,
            color: '#3D3D4E',
            textDecorationLine: 'underline',
        },
    });

export default EBookingThirdScreen;
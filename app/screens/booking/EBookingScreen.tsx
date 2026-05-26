import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '../../globalComponents/CustomText';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { colors, fonts } from '../../utils/constants/Theme';

import BookingHeader from './components/BookingHeader';
import StepperBar from './components/StepperBar';
import FormInput from './components/FormInput';
import BookingBottomBar from './components/BookingBottomBar';
import { CarFeature } from './types/ebooking.types';

const CAR_FEATURES: CarFeature[] = [
    { icon: 'hybrid', iconFamily: 'MaterialCommunityIcons', label: 'Hybrid' },
    { icon: 'speedometer', iconFamily: 'MaterialCommunityIcons', label: '23.km/1' },
    { icon: 'car-seat', iconFamily: 'MaterialCommunityIcons', label: 'A/C' },
    { icon: 'snowflake', iconFamily: 'MaterialCommunityIcons', label: 'A/C' },
];

const FeaturePill: React.FC<{ feature: CarFeature }> = ({ feature }) => {
    const size = useSizeConfig();
    const styles = getStyles(size);

    return (
        <View style={styles.featurePill}>
            <Icon
                name={feature.icon}
                size={22}
                color="#6B5CE7"
                style={styles.featurePillIcon}
            />
            <Text style={styles.featurePillLabel}>{feature.label}</Text>
        </View>
    );
};

const ACTIVE_STEP = 1;

const EBookingScreen: React.FC = () => {
    const [name, setName] = useState<string>('Hari Basker Parasuraman');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('9876534567');

    const size = useSizeConfig();
    const styles = getStyles(size);
    const insets = useSafeAreaInsets();

    const isNameValid = name.trim().length > 2;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPhoneValid = /^\d{10}$/.test(phone.replace(/\s/g, ''));

    const handleContinue = () => {
        console.log('Proceeding to Outlet step');
    };

    return (
        <View style={[styles.safeArea, { paddingTop: insets.top + size.height * 2 }]}>
            <StatusBar barStyle="dark-content" />

            <LinearGradient
                colors={['#d3cafb', '#e3dcffd2', '#fefeff47']}
                style={styles.barStyle}
            />

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : size.height * 2}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ paddingBottom: size.width * 20 }}
                >
                    <BookingHeader title="E-Booking" />

                    <StepperBar currentStep={ACTIVE_STEP} />

                    <View style={styles.carCard}>
                        <LinearGradient
                            colors={['#e9e6f7e3', '#FFFCFC']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.carCardGradient}
                        >
                            <Text style={styles.carName}>Grand Vitara</Text>

                            <Image
                                source={require('../../assets/images/carBooking/grand_vitara.png')}
                                style={styles.carImage}
                                resizeMode="contain"
                            />

                            <View style={styles.featuresRow}>
                                {CAR_FEATURES.map((feature, i) => (
                                    <FeaturePill key={i} feature={feature} />
                                ))}
                            </View>
                        </LinearGradient>
                    </View>

                    <View style={styles.sectionBlock}>
                        <Text style={styles.sectionTitle}>Personal Details</Text>

                        <FormInput
                            icon={
                                <FontAwesome
                                    name="user"
                                    size={20}
                                    color={colors.buttonBgColor}
                                />
                            }
                            placeholder="Full Name"
                            value={name}
                            onChangeText={setName}
                            isValid={isNameValid}
                        />

                        <FormInput
                            icon={
                                <Icon
                                    name="email"
                                    size={20}
                                    color={colors.buttonBgColor}
                                />
                            }
                            placeholder="Enter Your E-mail"
                            value={email}
                            onChangeText={setEmail}
                            isValid={isEmailValid}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                        <FormInput
                            icon={
                                <Icon
                                    name="phone"
                                    size={22}
                                    color={colors.buttonBgColor}
                                />
                            }
                            placeholder="Phone Number"
                            value={phone}
                            onChangeText={setPhone}
                            isValid={isPhoneValid}
                            keyboardType="phone-pad"
                        />

                        <View style={styles.privacyRow}>
                            <Ionicons name="shield-checkmark" size={14} color="#6B5CE7" />
                            <Text style={styles.privacyText}>
                                Your details are safe with us.
                                We never share your information.
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            <BookingBottomBar variant="continue" onPress={handleContinue} />
        </View>
    );
};

const getStyles = (size: any) =>
    StyleSheet.create({
        safeArea: {
            flex: 1,
            backgroundColor: colors.white,
        },

        barStyle: {
            width: '100%',
            height: size.height * 21,
            position: 'absolute',
        },

        carCard: {
            marginTop: size.width * 5,
            marginHorizontal: size.width * 4,
            marginBottom: size.width * 5,
            borderRadius: size.width * 4.2,
            overflow: 'hidden',
        },

        carCardGradient: {
            width: '100%',
            height: size.height * 70,
        },

        carName: {
            fontSize: size.fontSize * 4.5,
            fontFamily: fonts.bold,
            marginTop: size.width * 4,
            marginLeft: size.width * 3.2,
            marginBottom: size.width * 1.5,
        },

        carImage: {
            width: '100%',
            height: size.width * 35,
            alignSelf: 'center',
            marginBottom: size.width * 3.3,
            top: '-8%',
            right: '-10%',
        },

        featuresRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: size.width * 1.4,
            marginHorizontal: size.width * 3.2,
        },

        featurePill: {
            flex: 1,
            backgroundColor: colors.white,
            borderRadius: size.width * 2,
            paddingVertical: size.width * 1.8,
            paddingHorizontal: size.width * 0.6,
            alignItems: 'center',
            elevation: 2,
        },

        featurePillIcon: {
            marginBottom: size.width * 2.6,
        },

        featurePillLabel: {
            fontSize: size.fontSize * 2.3,
            fontFamily: fonts.bold,
            textAlign: 'center',
        },

        sectionBlock: {
            marginHorizontal: size.width * 3.7,
            marginBottom: size.width * 4.1,
        },

        sectionTitle: {
            fontSize: size.fontSize * 3.5,
            fontFamily: fonts.medium,
            marginBottom: size.width * 3,
        },

        privacyRow: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: size.width * 1.6,
            paddingHorizontal: size.width * 6,
            gap: size.width * 2,
        },

        privacyText: {
            fontSize: size.fontSize * 2.5,
            fontFamily: fonts.medium,
            color: colors.buttonBgColor,
            flex: 1,
        },
    });

export default EBookingScreen;
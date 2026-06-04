import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
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

import StepperBar from './components/StepperBar';
import Highlights from '../../globalComponents/Highlights';
import { HighlightsImages } from './data';
import Header from '../../globalComponents/Header';
import CustomInputComp from '../../globalComponents/CustomInputComp';
import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../../globalComponents/CustomButton';

const ACTIVE_STEP = 1;

const BookingPersonalDetails: React.FC = () => {
    const [name, setName] = useState<string>('Hari Basker Parasuraman');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('9876534567');

    const size = useSizeConfig();
    const insets = useSafeAreaInsets();
    const styles = getStyles(size);

    const isNameValid = name.trim().length > 2;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPhoneValid = /^\d{10}$/.test(phone.replace(/\s/g, ''));

    const checkIcon = (
        <Feather
            name="check-circle"
            size={size.width * 4.5}
            color={colors.success}
        />
    );

    const emptyCircleIcon = (
        <Feather name="circle" size={size.width * 4.5} color={colors.border} />
    );

    return (
        <View
            style={[styles.safeArea, { paddingTop: insets.top + size.height * 2 }]}
        >
            <StatusBar barStyle="dark-content" />

            <LinearGradient
                colors={['#d3cafb', '#e3dcffd2', '#f3f3ff']}
                style={styles.barStyle}
            />
            <Header onPress={() => { }} title="E-Booking" />

            <KeyboardAvoidingView
                style={[
                    styles.keyboardContainer,
                    { paddingTop: insets.top + size.height * 2 },
                ]}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={styles.scrollContainer}
                >
                    <StepperBar currentStep={ACTIVE_STEP} />

                    <View style={styles.carCard}>
                        <LinearGradient
                            colors={['#c9bbf8', 'rgb(241, 241, 252)', '#f3f3ff', '#f3f3ff']}
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
                                {HighlightsImages.map((feature, index) => (
                                    <Highlights
                                        key={index}
                                        title={feature}
                                        textStyle={{
                                            fontSize: size.width * 2.7,
                                        }}
                                        imageStyle={{
                                            width: size.width * 4.5,
                                            height: size.width * 4.5,
                                        }}
                                    />
                                ))}
                            </View>
                        </LinearGradient>
                    </View>

                    <View style={styles.sectionBlock}>
                        <Text style={styles.sectionTitle}>Personal Details</Text>

                        <CustomInputComp
                            LHSIcon={
                                <FontAwesome
                                    name="user"
                                    size={size.width * 4.5}
                                    color={colors.buttonBgColor}
                                />
                            }
                            RHSIcon={checkIcon}
                            PlaceholderName="Full Name"
                            InputText={name}
                            InputOnTextChange={setName}
                            placeholderTextColor={colors.lightBorder}
                            compStyle={styles.inputContainer}
                        />

                        <CustomInputComp
                            LHSIcon={
                                <Icon
                                    name="email"
                                    size={size.width * 4.5}
                                    color={colors.buttonBgColor}
                                />
                            }
                            RHSIcon={emptyCircleIcon}
                            PlaceholderName="Enter Your E-mail"
                            InputText={email}
                            InputOnTextChange={setEmail}
                            placeholderTextColor={colors.lightBorder}
                            compStyle={styles.inputContainer}
                        />

                        <CustomInputComp
                            LHSIcon={
                                <Icon
                                    name="phone"
                                    size={size.width * 4.5}
                                    color={colors.buttonBgColor}
                                />
                            }
                            RHSIcon={checkIcon}
                            PlaceholderName="Enter Your Phone Number"
                            InputText={phone}
                            InputOnTextChange={setPhone}
                            keyboardType="phone-pad"
                            placeholderTextColor={colors.lightBorder}
                            compStyle={styles.inputContainer}
                        />

                        <View style={styles.privacyRow}>
                            <Ionicons
                                name="shield-checkmark"
                                size={size.width * 3.5}
                                color={colors.primary2}
                            />
                            <Text style={styles.privacyText}>
                                Your details are safe with us. We never share your information.
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            <View style={styles.bottomContainer}>
                <CustomButton
                    TextValue="Continue"
                    PressableStyle={styles.buttonStyle}
                />
                <View style={styles.privacyRow}>
                    <Ionicons
                        name="lock-closed"
                        size={size.width * 3}
                        color={colors.primary2}
                    />
                    <Text style={styles.privacyText}>Encrypted & Secure Booking.</Text>
                </View>
            </View>
        </View>
    );
};

const getStyles = (size: any) =>
    StyleSheet.create({
        safeArea: {
            flex: 1,
            backgroundColor: '#f3f3ff',
        },

        barStyle: {
            width: '100%',
            height: size.height * 21,
            position: 'absolute',
        },

        carCard: {
            marginTop: size.width * 6,
            marginHorizontal: size.width * 4,
            overflow: 'hidden',
            borderRadius: size.width * 1,
            borderWidth: 1.5,
            borderTopColor: colors.white,
            borderTopRightRadius: size.width * 5,
            borderTopLeftRadius: size.width * 5,
            borderColor: '#f3f3ff',
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
        sectionBlock: {
            marginHorizontal: size.width * 3.7,
            marginBottom: size.width * 4.1,
            gap: size.height * 3,
        },

        sectionTitle: {
            fontSize: size.fontSize * 3.5,
            fontFamily: fonts.semiBold,
        },

        privacyRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: size.width * 1.6,
            paddingHorizontal: size.width * 6,
            gap: size.width * 2,
        },

        privacyText: {
            fontSize: size.fontSize * 2.5,
            fontFamily: fonts.medium,
            color: colors.primary2,
            includeFontPadding: false,
        },
        inputContainer: {
            backgroundColor: colors.white,
            gap: size.width * 3,
            paddingHorizontal: size.width * 5,
            borderColor: '#dbd3fe',
        },

        buttonStyle: {
            paddingVertical: size.height * 3,
        },

        bottomContainer: {
            paddingHorizontal: size.width * 3.7,
            paddingVertical: size.height * 4,
            gap: size.height * 2,
        },

        scrollContainer: {
            gap: size.height * 3,
        },

        keyboardContainer: {
            flex: 1,
        },
    });

export default BookingPersonalDetails;
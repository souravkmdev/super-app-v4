import {
    ImageBackground,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    View,
    Image,
} from 'react-native';
import React, { useMemo, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from '../../../globalComponents/CustomText';
import { colors, fonts } from '../../../utils/constants/Theme';
import CustomInputComp from '../../../globalComponents/CustomInputComp';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-reanimated-carousel';
import CustomButton from '../../../globalComponents/CustomButton';


const carouselData = [
    require('../../../assets/images/auth/auth_bg.png'),
    require('../../../assets/images/auth/login_banner_02.png'),
    require('../../../assets/images/auth/login_banner_03.png'),
];

const LoginScreen = () => {
    const size = useSizeConfig();
    const insets = useSafeAreaInsets();
    const styles = useMemo(() => getStyles(size, insets), [size, insets]);

    const [phoneNumber, setPhoneNumber] = useState('');

    const handleContinue = () => {
        console.log('Phone Number:', phoneNumber);
    };

    const handleSkip = () => {
        console.log('Skip pressed');
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
                bounces={false}
            >
                <Carousel
                    loop
                    autoPlay
                    width={size.deviceWidth}
                    height={size.deviceHeight * 0.5}
                    autoPlayInterval={3000}
                    data={carouselData}
                    renderItem={({ item }) => (
                        <View>
                            <Image
                                source={item}
                                style={styles.carouselImage}
                                resizeMode="cover"
                            />
                            <LinearGradient
                                colors={['#fdfdfd06', '#ecebf0e2', '#f8f7feff']}
                                style={styles.carouselGradient}
                            />
                        </View>
                    )}
                />
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.titleText}>
                            Create Account
                        </Text>
                        <Text style={styles.subtitleText}>
                            Sign up with your phone number to continue
                        </Text>
                    </View>
                    <View style={styles.inputWrapper}>
                        <CustomInputComp
                            LableName='Phone Number'
                            PlaceholderName='Enter your mobile number'
                            InputText={phoneNumber}
                            InputOnTextChange={(val) => setPhoneNumber(val)}
                            keyboardType='number-pad'
                            maxLength={10}
                            inputStyle={styles.phoneInput}
                            compStyle={styles.phoneInputComp}
                            lableStyle={styles.phoneInputLabel}
                            LHSIcon={
                                <MaterialIcons
                                    name='phone-android'
                                    size={size.fontSize * 5.2}
                                    color={colors.primary}
                                    style={styles.phoneIcon}
                                />
                            }
                        />
                    </View>
                    <Text style={styles.termsText}>
                        By continuing, you agree to our{'\n'}

                        <Text style={styles.termsLink}>
                            Terms & Conditions
                        </Text>

                        <Text style={styles.termsAnd}>
                            {' '}and{' '}
                        </Text>

                        <Text style={styles.termsLink}>
                            Privacy Policy
                        </Text>
                        .
                    </Text>
                    <CustomButton
                        TextValue='Continue'
                        TextStyle={styles.continueButtonText}
                        mainstyle={styles.continueButton}
                        OnPress={handleContinue}
                    />
                    <Text style={styles.skipText}>
                        Skip
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const getStyles = (size: any, insets: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F8F7FE',
        },
        scrollContent: {
            flexGrow: 1,
            backgroundColor: '#F8F7FE',
        },
        carouselImage: {
            width: '100%',
            height: '100%',
        },
        carouselGradient: {
            width: '100%',
            height: size.height * 22,
            position: 'absolute',
            bottom: -1,
            zIndex: 0,
        },
        contentContainer: {
            flex: 1,
            marginTop: size.width * 3,
            paddingHorizontal: size.width * 5,
        },
        headerContainer: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        titleText: {
            fontSize: size.fontSize * 5.2,
            fontFamily: fonts.bold,
        },
        subtitleText: {
            fontSize: size.fontSize * 3,
            fontFamily: fonts.regular,
            color: colors.text_Secondary,
            marginTop: size.height * 1,
        },
        inputWrapper: {
            marginTop: size.width * 6,
            marginBottom: size.width * 4.5,
        },
        phoneInput: {
            fontFamily: fonts.medium,
            fontSize: size.fontSize * 3.5,
            color: colors.text_Primary,
        },
        phoneInputComp: {
            borderColor: '#B6A5FF',
            borderRadius: size.width * 3,
            height: size.width * 14.6,
        },
        phoneInputLabel: {
            fontSize: size.fontSize * 3.4,
            color: colors.text_Primary,
            fontFamily: fonts.semiBold,
            marginBottom: size.width * 3,
        },
        phoneIcon: {
            marginRight: size.width * 2,
        },
        termsText: {
            fontSize: size.fontSize * 3.2,
            fontFamily: fonts.medium,
            color: colors.text_Primary,
            textAlign: 'center',
            marginHorizontal: 40,
            lineHeight: size.width * 5.2,
        },
        termsLink: {
            color: colors.primary,
        },
        termsAnd: {
            color: colors.text_Primary,
        },
        continueButtonText: {
            fontSize: size.width * 3.6,
            fontFamily: fonts.bold,
            color: colors.white,
        },
        continueButton: {
            height: size.width * 13.6,
            borderRadius: size.width * 3.4,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            marginTop: size.width * 6,
        },
        skipText: {
            fontSize: size.fontSize * 3.4,
            fontFamily: fonts.bold,
            color: colors.primary,
            textAlign: 'center',
            marginTop: size.width * 4,
        },
    });
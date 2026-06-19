import React, { useMemo, useState } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import AuthLayout from '../components/AuthLayout';
import OTPInput from '../components/OTPInput';

import { Text } from '../../../globalComponents/CustomText';
import CustomButton from '../../../globalComponents/CustomButton';

import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

const OTPScreen = ({ navigation }: any) => {
    const size = useSizeConfig();
    const insets = useSafeAreaInsets();

    const styles = useMemo(
        () => getStyles(size, insets),
        [size, insets],
    );

    const [otp, setOtp] = useState([
        '',
        '',
        '',
        '',
        '',
        '',
    ]);

    const handleVerify = () => {
        navigation.navigate('PasswordScreen');
    };

    return (
        <AuthLayout
            title="Verify Your Number"
            subtitle="Enter the 6-digit OTP sent to"
        >
            <Text style={styles.mobileText}>
                +91 98765 43210
            </Text>

            <OTPInput
                otp={otp}
                onChangeOTP={(value, index) => {
                    const newOtp = [...otp];
                    newOtp[index] = value;
                    setOtp(newOtp);
                }}
            />

            <Text style={styles.resendText}>
                Didn't receive the OTP?
            </Text>

            <Text style={styles.resendOtpText}>
                Resend OTP in{' '}
                <Text style={styles.resendTimer}>
                    00:48
                </Text>
            </Text>

            <CustomButton
                TextValue="Verify & Continue"
                TextStyle={styles.buttonText}
                mainstyle={styles.button}
                OnPress={handleVerify}
            />

            <Text style={styles.changeNumberText}>
                Change Number
            </Text>
        </AuthLayout>
    );
};

export default OTPScreen;

const getStyles = (size: any, insets: any) =>
    StyleSheet.create({
        mobileText: {
            textAlign: 'center',
            marginTop: size.width * 2,
            fontSize: size.fontSize * 3.4,
            fontFamily: fonts.medium,
            color: colors.text_Primary,
        },

        resendText: {
            textAlign: 'center',
            marginTop: size.width * 5,
            fontSize: size.fontSize * 3,
            fontFamily: fonts.semiBold,
            color: colors.text_Secondary,
        },

        resendLink: {
            textAlign: 'center',
            marginTop: size.width * 1,
            fontSize: size.fontSize * 3.2,
            fontFamily: fonts.bold,
            color: colors.primary,
        },

        button: {
            height: size.width * 13.6,
            borderRadius: size.width * 3.4,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: size.width * 8,
        },

        buttonText: {
            fontSize: size.width * 3.6,
            fontFamily: fonts.bold,
            color: colors.white,
        },

        changeNumberText: {
            textAlign: 'center',
            marginTop: size.width * 4,
            fontSize: size.fontSize * 3.4,
            fontFamily: fonts.bold,
            color: colors.primary,
        },
        resendTimer: {
            color: colors.primary,
            fontFamily: fonts.bold,
        },
        resendOtpText: {
            textAlign: 'center',
            marginTop: size.width * 0.5,
            fontSize: size.fontSize * 3,
            fontFamily: fonts.semiBold,
            color: colors.text_Secondary,
        },
    });
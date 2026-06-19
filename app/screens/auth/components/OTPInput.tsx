import React, { useEffect } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native';

import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import { useRef } from 'react';

interface OTPInputProps {
    otp: string[];
    onChangeOTP: (value: string, index: number) => void;
}

const OTPInput = ({
    otp,
    onChangeOTP,
}: OTPInputProps) => {
    const size = useSizeConfig();

    const inputRefs = useRef<TextInput[]>([]);

    useEffect(() => {
        setTimeout(() => {
            inputRefs.current[0]?.focus();
        }, 300);
    }, []);

    return (
        <View style={styles(size).container}>
            {otp.map((item, index) => (
                <TextInput
                    key={index}
                    ref={(ref) => {
                        if (ref) {
                            inputRefs.current[index] = ref;
                        }
                    }}
                    value={item}
                    maxLength={1}
                    keyboardType="number-pad"
                    style={styles(size).otpBox}
                    onChangeText={(value) => {
                        onChangeOTP(value, index);

                        if (
                            value &&
                            index < otp.length - 1
                        ) {
                            inputRefs.current[index + 1]?.focus();
                        }
                    }}

                    onKeyPress={({ nativeEvent }) => {
                        if (
                            nativeEvent.key === 'Backspace' &&
                            !otp[index] &&
                            index > 0
                        ) {
                            inputRefs.current[index - 1]?.focus();
                        }
                    }}
                />
            ))}
        </View>
    );
};

export default OTPInput;

const styles = (size: any) =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: size.width * 7,
        },

        otpBox: {
            width: size.width * 13.5,
            height: size.width * 14,
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: size.width * 3,
            textAlign: 'center',
            fontSize: size.fontSize * 4,
            fontFamily: fonts.bold,
            color: colors.text_Primary,
            backgroundColor: colors.white,
        },
    });
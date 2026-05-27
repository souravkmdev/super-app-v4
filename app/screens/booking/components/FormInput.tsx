import React from 'react';
import { StyleSheet, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from '../../../globalComponents/CustomTextInput';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

interface FormInputProps {
    icon: React.ReactNode;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    isValid: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

const FormInput: React.FC<FormInputProps> = ({
    icon,
    placeholder,
    value,
    onChangeText,
    isValid,
    keyboardType = 'default',
    autoCapitalize = 'sentences',
}) => {
    const size = useSizeConfig();
    const styles = getStyles(size);

    return (
        <View style={styles.inputRow}>
            <View style={styles.inputIconWrap}>{icon}</View>

            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                placeholderTextColor="#B0AABB"
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
            />

            {isValid ? (
                <View style={styles.validationActiveCircle}>
                    <Ionicons
                        name="checkmark-sharp"
                        size={size.width * 3}
                        color="#4CAF82"
                    />
                </View>
            ) : (
                <View style={styles.validationBadgeEmpty}>
                    <View style={styles.validationCircleOutline} />
                </View>
            )}
        </View>
    );
};

const getStyles = (size: any) =>
    StyleSheet.create({
        inputRow: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.white,
            borderRadius: 14,
            marginBottom: 12,
            paddingHorizontal: 14,
            paddingVertical: 4,
            borderWidth: 1,
            borderColor: '#EDEAF8',
        },

        inputIconWrap: {
            marginRight: 10,
            width: 24,
            alignItems: 'center',
        },

        textInput: {
            flex: 1,
            fontSize: size.fontSize * 2.8,
            color: colors.text_Primary,
            paddingVertical: size.width * 3,
            fontFamily: fonts.medium,
        },

        validationActiveCircle: {
            width: size.width * 4.5,
            height: size.width * 4.5,
            borderRadius: size.width * 4,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1.5,
            borderColor: '#4CAF82',
        },

        validationBadgeEmpty: {
            marginLeft: size.width * 1.6,
        },

        validationCircleOutline: {
            width: size.width * 4.5,
            height: size.width * 4.5,
            borderRadius: size.width * 4,
            borderWidth: 1.5,
            borderColor: '#D0CCEE',
        },
    });

export default FormInput;
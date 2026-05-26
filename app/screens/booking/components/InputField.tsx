import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TextInput } from '../../../globalComponents/CustomTextInput';
import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

interface InputFieldProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    icon?: React.ReactNode;
    keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    value,
    onChangeText,
    placeholder,
    icon,
    keyboardType = 'default',
}) => {
    const size = useSizeConfig();
    const styles = getStyles(size);

    return (
        <View style={styles.inputContainer}>
            <View style={styles.dropdownLeft}>
                {icon}
                <View style={styles.dropdownTextBlock}>
                    <Text style={styles.dropdownLabel}>{label}</Text>
                    <TextInput
                        style={styles.textInput}
                        value={value}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        placeholderTextColor={colors.text_Primary}
                        keyboardType={keyboardType}
                    />
                </View>
            </View>
        </View>
    );
};

const getStyles = (size: any) =>
    StyleSheet.create({
        inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: colors.white,
            borderRadius: size.width * 4,
            paddingVertical: size.width * 3.5,
            paddingHorizontal: size.width * 4,
            borderWidth: 1,
            borderColor: '#D9D0FF',
        },

        dropdownLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
        },

        dropdownTextBlock: {
            marginLeft: size.width * 3,
            flex: 1,
        },

        dropdownLabel: {
            fontSize: size.fontSize * 2,
            color: '#7A7692',
            fontFamily: fonts.medium,
            marginBottom: 2,
        },

        textInput: {
            fontSize: size.fontSize * 3,
            color: colors.text_Primary,
            fontFamily: fonts.medium,
            padding: 0,
            margin: 0,
        },
    });

export default InputField;
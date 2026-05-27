import React from 'react';
import {
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
} from 'react-native';

export interface CustomTextInputProps extends RNTextInputProps { }

export const CustomTextInput: React.FC<CustomTextInputProps> = props => {
    return (
        <RNTextInput
            {...props}
            allowFontScaling={false}
            style={[props.style]}
        />
    );
};

export { CustomTextInput as TextInput };
export type { CustomTextInputProps as TextInputProps };
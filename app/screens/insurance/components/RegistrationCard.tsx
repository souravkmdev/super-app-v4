import React, { useMemo, useState } from 'react';
import {
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from '../../../globalComponents/CustomText';
import { TextInput } from '../../../globalComponents/CustomTextInput';
import CustomButton from '../../../globalComponents/CustomButton';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

const RegistrationCard = ({ navigation,
    registrationNumber,
    setRegistrationNumber,
    isValidRegistration,
}: any) => {
    const size = useSizeConfig();
    const styles = useMemo(() => getStyles(size), [size],);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>

                <View style={styles.starContainer}>
                    <Text style={styles.starText}>
                        ⭐
                    </Text>
                </View>

                <View style={styles.textContainer}>

                    <Text style={styles.title}>
                        Enter Registration Number
                    </Text>

                    <Text style={styles.subtitle}>
                        Get personalized insurance quotes
                    </Text>
                </View>
            </View>
            <View style={styles.inputContainer}>

                <View style={styles.leftContainer}>
                    <View style={styles.iconWrapper}>
                        <Image
                            source={require('../../../assets/images/insurance/regicon.png')}
                            style={styles.vehicleIcon}
                            resizeMode="contain"
                        />
                    </View>

                    <TextInput
                        value={registrationNumber}
                        onChangeText={(text) => {
                            const cleanedText = text
                                .toUpperCase()
                                .replace(/[^A-Z0-9]/g, '');
                            setRegistrationNumber(cleanedText);
                        }}
                        placeholder="KA52VF0120"
                        placeholderTextColor={colors.secondary}
                        style={styles.input}
                        maxLength={16}
                    />
                </View>

                {registrationNumber.length > 0 && (
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setRegistrationNumber('')}
                    >
                        <Feather
                            name="x"
                            size={size.width * 4.8}
                            color="#6D56F6"
                        />
                    </TouchableOpacity>
                )}
            </View>

            <CustomButton
                TextValue="Get Quotation"
                mainstyle={[
                    styles.buttonMain,
                ]}
                PressableStyle={styles.buttonPressable}
                TextStyle={styles.buttonText}
                GradientColors={['#6F63F6', '#A79AF8',]}
                OnPress={() =>
                    navigation.navigate('VehicleDetailsScreen')
                } />

        </View>
    );
};

export default RegistrationCard;

const getStyles = (size: any) =>
    StyleSheet.create({
        container: {
            marginTop: size.height * 14,
            minHeight: size.height * 36,
            backgroundColor: 'rgba(255,255,255,0.82)',
            borderRadius: size.width * 4,
            paddingTop: size.height * 3.4,
            paddingBottom: size.height * 6,
            paddingHorizontal: size.width * 5,
            borderWidth: 1,
            borderColor: 'rgba(233, 233, 233, 0.7)',
            overflow: 'hidden',
        },

        headerContainer: {
            flexDirection: 'row',
            alignItems: 'flex-start',
        },

        starContainer: {
            width: size.width * 6,
            height: size.width * 8,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: size.width * 1,
            marginTop: size.height * 1,
        },

        textContainer: {
            flex: 1,
        },

        title: {
            fontFamily: fonts.semiBold,
            fontSize: size.fontSize * 4.1,
            color: '#17133C',
        },

        subtitle: {
            marginTop: size.height * 0.8,
            fontFamily: fonts.medium,
            fontSize: size.fontSize * 2.8,
            color: '#7C7A92',
        },

        inputContainer: {
            marginTop: size.height * 3.8,
            height: size.height * 13,
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: size.width * 3,
            paddingHorizontal: size.width * 4.5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#FFFFFF',
        },

        leftContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
        },

        iconWrapper: {
            width: size.width * 6,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: size.width * 2,
        },

        input: {
            flex: 1,
            fontFamily: fonts.semiBold,
            fontSize: size.fontSize * 3.5,
            color: colors.text_Primary,
            paddingBottom: size.height * 3,
        },

        buttonMain: {
            marginTop: size.height * 4,
            borderRadius: size.width * 3.2,
        },

        buttonPressable: {
            height: size.height * 12,
            borderRadius: size.width * 3.2,
            justifyContent: 'center',
            alignItems: 'center',
        },

        buttonText: {
            fontFamily: fonts.medium,
            fontSize: size.fontSize * 3.5,
            color: '#FFFFFF',
        },
        vehicleIcon: {
            width: size.width * 6,
            height: size.width * 6,
        },
        starText: {
            fontSize: size.fontSize * 4.5,
        },

    });
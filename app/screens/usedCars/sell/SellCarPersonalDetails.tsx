import React, { useMemo, useState } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    StatusBar,
    Image,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from '../../../globalComponents/Header';
import HeaderLinearGradient from '../../../globalComponents/HeaderLinearGradient';
import StepperBar from '../../booking/components/StepperBar';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { Text } from '../../../globalComponents/CustomText';
import { colors, fonts } from '../../../utils/constants/Theme';
import CustomInputComp from '../../../globalComponents/CustomInputComp';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownComp from '../../../globalComponents/DropDownComp';
import CustomButton from '../../../globalComponents/CustomButton';

const SellCarPersonalDetailsScreen = ({ navigation }: any) => {
    const size = useSizeConfig();
    const insets = useSafeAreaInsets();

    const styles = useMemo(
        () => getStyles(size, insets),
        [size, insets],
    );
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');

    const sellCarSteps = [
        {
            id: 1,
            label: 'Vehicle Details',
        },
        {
            id: 2,
            label: 'Personal Details',
        },
        {
            id: 3,
            label: 'Confirm',
        },
    ];

    const cityData = [
        { label: 'Bangalore', value: 'Bangalore' },
        { label: 'Chennai', value: 'Chennai' },
        { label: 'Hyderabad', value: 'Hyderabad' },
    ];

    const addressData = [
        { label: 'Whitefield', value: 'Whitefield' },
        { label: 'Marathahalli', value: 'Marathahalli' },
        { label: 'Electronic City', value: 'Electronic City' },
    ];

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <HeaderLinearGradient />

            <Header
                title="Personal Details"
                onPress={() => navigation.goBack()}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <StepperBar
                    currentStep={2}
                    steps={sellCarSteps}
                />

                {/* Banner */}
                <Image
                    source={require('../../../assets/images/usedcar/sellcarbanner.png')}
                    resizeMode="contain"
                    style={styles.bannerImage}
                />

                <View style={styles.formCard}>
                    <Text style={styles.sectionTitle}>
                        Personal Details
                    </Text>

                    <CustomInputComp
                        PlaceholderName="Enter Name"
                        InputText={name}
                        InputOnTextChange={setName}
                        compStyle={styles.inputContainer}
                        inputStyle={styles.inputText}
                        LHSIcon={
                            <MaterialCommunityIcons
                                name="account"
                                size={size.width * 5}
                                color="#9580F5"
                            />
                        }
                        RHSIcon={
                            name ? (
                                <MaterialCommunityIcons
                                    name="close"
                                    size={size.width * 5}
                                    color={colors.text_Primary}
                                />
                            ) : null
                        }
                        RHSIconOnPress={() => setName('')}
                    />

                    <CustomInputComp
                        PlaceholderName="Enter Mobile Number"
                        InputText={mobileNumber}
                        InputOnTextChange={setMobileNumber}
                        keyboardType="number-pad"
                        compStyle={[
                            styles.inputContainer,
                            styles.fieldSpacing,
                        ]}
                        inputStyle={styles.inputText}
                        LHSIcon={
                            <MaterialCommunityIcons
                                name="phone"
                                size={size.width * 5}
                                color="#9580F5"
                            />
                        }
                    />

                    <DropDownComp
                        placeholder="Select City"
                        data={cityData}
                        value={city}
                        onChange={item => setCity(item.value)}
                        containerStyle={styles.fieldSpacing}
                        leftIcon={() => (
                            <MaterialCommunityIcons
                                name="domain"
                                size={size.width * 5}
                                color="#9580F5"
                            />
                        )}
                    />

                    <DropDownComp
                        placeholder="Select Address"
                        data={addressData}
                        value={address}
                        onChange={item => setAddress(item.value)}
                        containerStyle={styles.fieldSpacing}
                        leftIcon={() => (
                            <MaterialCommunityIcons
                                name="map-marker-outline"
                                size={size.width * 5}
                                color="#9580F5"
                            />
                        )}
                    />
                </View>
            </ScrollView>
            <CustomButton
                TextValue="Continue"
                OnPress={() =>
                    navigation.navigate('SellCarEvaluate')
                }
                mainstyle={styles.buttonContainer}
                GradientColors={['#807AF4', '#7478FF', '#ADA9F6']}
            />
        </View>
    );
};

export default SellCarPersonalDetailsScreen;

const getStyles = (size: any, insets: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F7F7FE',
        },

        scrollContent: {
            paddingHorizontal: size.width * 4,
            paddingBottom: size.height * 5,
        },
        bannerImage: {
            width: '100%',
            height: size.height * 40,
            marginTop: size.height * 10,
            alignSelf: 'center',
        },
        formCard: {
            backgroundColor: colors.white,
            borderRadius: size.width * 4,
            padding: size.width * 4,
            marginTop: size.height * 3,
        },
        sectionTitle: {
            color: colors.text_Primary,
            fontSize: size.fontSize * 4,
            fontFamily: fonts.semiBold,
            marginBottom: size.height * 3,
        },
        inputContainer: {
            borderColor: '#E6E6F0',
            backgroundColor: colors.white,
        },

        fieldSpacing: {
            marginTop: size.height * 5,
        },

        inputText: {
            fontFamily: fonts.semiBold,
        },
        buttonContainer: {
            marginHorizontal: size.width * 4,
            marginBottom: size.height * 3,
            height: size.height * 12,
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
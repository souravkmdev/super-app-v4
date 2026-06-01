import React, { useMemo, useState } from 'react';
import {
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import LinearGradient from 'react-native-linear-gradient';

const ClaimBannerCard = () => {
    const size = useSizeConfig();
    const styles = useMemo(() => getStyles(size), [size],);
    const [selectedOption, setSelectedOption] = useState('Yes');

    return (
        <LinearGradient
            colors={['#BDADFFA3', '#3200FF1A']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            <View style={styles.iconContainer}>
                <Image
                    source={require('../../../assets/images/insurance/claim_banner.png')}
                    style={styles.iconImage}
                    resizeMode="contain"
                />
            </View>

            <Text style={styles.title}>
                Made a claim in previous policy?
            </Text>

            <Text style={styles.subtitle}>
                Get personalized insurance quotes
            </Text>

            <View style={styles.buttonRow}>
                {['No', 'Yes'].map((item) => {
                    const isSelected = selectedOption === item;

                    return (
                        <TouchableOpacity
                            key={item}
                            activeOpacity={0.8}
                            style={[
                                styles.optionButton,
                                isSelected &&
                                styles.selectedButton,
                            ]}
                            onPress={() =>
                                setSelectedOption(item)
                            }>

                            <Text style={[styles.optionText, isSelected && styles.selectedText,]}>
                                {item}
                            </Text>

                        </TouchableOpacity>
                    );
                })}

            </View>

        </LinearGradient>
    );
};

export default ClaimBannerCard;

const getStyles = (size: any) =>
    StyleSheet.create({
        container: {
            borderRadius: size.width * 4,
            paddingTop: size.height * 3,
            paddingBottom: size.height * 3.5,
            alignItems: 'center',
            overflow: 'hidden',
        },

        iconContainer: {
            width: size.width * 14,
            height: size.width * 14,
            justifyContent: 'center',
            alignItems: 'center',
        },

        title: {
            marginTop: size.height * 1.2,
            fontFamily: fonts.semiBold,
            fontSize: size.fontSize * 3.5,
            color: colors.text_Primary,
        },

        subtitle: {
            marginTop: size.height * 1,
            fontFamily: fonts.medium,
            fontSize: size.fontSize * 3,
            color: colors.text_Secondary,
        },

        buttonRow: {
            flexDirection: 'row',
            marginTop: size.height * 2,
        },

        optionButton: {
            width: size.width * 20,
            height: size.height * 7,
            borderRadius: size.width * 2,
            backgroundColor: colors.white,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: size.width * 2,
            paddingBottom: size.height * 1,
        },

        selectedButton: {
            backgroundColor: '#6B5BFF',
        },

        optionText: {
            fontFamily: fonts.medium,
            fontSize: size.fontSize * 3.3,
            color: colors.text_Primary,
        },

        selectedText: {
            color: '#FFFFFF',
        },
        iconImage: {
            width: size.width * 15,
            height: size.width * 15,
        },

    });
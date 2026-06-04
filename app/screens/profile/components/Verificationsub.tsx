import React, { useMemo } from 'react';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';

import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { Text } from '../../../globalComponents/CustomText';
import { colors, fonts } from '../../../utils/constants/Theme';

const Verificationsub = () => {
    const size = useSizeConfig();

    const styles = useMemo(
        () => getStyles(size),
        [size],
    );

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/images/profile/profileverify.png')}
                style={styles.image}
                resizeMode="contain"
            />

            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    You're All Set!
                </Text>

                <Text style={styles.subTitle}>
                    Your profile is already verified.
                </Text>
            </View>
        </View>
    );
};

const getStyles = (size: any) =>
    StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: size.height * 6,
        },

        image: {
            width: size.width * 80,
            height: size.height * 70,
        },
        textContainer: {
            alignItems: 'center',
            marginTop: size.height * 8,
        },

        title: {
            fontFamily: fonts.bold,
            fontSize: size.fontSize * 4.5,
            color: colors.text_Primary,
        },

        subTitle: {
            marginTop: size.height * 0.8,
            fontFamily: fonts.medium,
            fontSize: size.fontSize * 3.2,
            color: colors.text_Secondary,
            textAlign: 'center',
        },
    });

export default Verificationsub;
import React, { useMemo } from 'react';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { Text } from '../../../globalComponents/CustomText';
import CustomButton from '../../../globalComponents/CustomButton';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

const RewardsCard = () => {
    const size = useSizeConfig();

    const styles = useMemo(
        () => getStyles(size),
        [size],
    );

    return (
        <LinearGradient
            colors={['#F0EEFF', '#E9E4F8']}
            style={styles.container}
        >
            <Image
                source={require('../../../assets/images/profile/gift.png')}
                style={styles.giftImage}
                resizeMode="contain"
            />

            <Text style={styles.walletTitle}>
                Reward points available
            </Text>

            <View style={styles.pointsRow}>
                <Text style={styles.points}>
                    50
                </Text>

                <Text style={styles.pointsText}>
                     points
                </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.memberSection}>
                <Image
                    source={require('../../../assets/images/profile/shield.png')}
                    style={styles.shieldImage}
                    resizeMode="contain"
                />

                <View style={styles.memberContent}>
                    <Text style={styles.memberTitle}>
                        Silver Member
                    </Text>

                    <Text style={styles.memberSubTitle}>
                        You are 150 points away from
                    </Text>

                    <Text style={styles.goldMember}>
                        Gold Member
                    </Text>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <CustomButton
                    TextValue="Upgrade Now"
                    PressableStyle={styles.button}
                    GradientColors={['#856add', '#846AF4']}
                />
            </View>
        </LinearGradient>
    );
};

const getStyles = (size: any) =>
    StyleSheet.create({
        container: {
            borderRadius: size.width * 5,
            padding: size.width * 5,
            marginTop: size.height * 2,
            overflow: 'hidden',
        },

        giftImage: {
            position: 'absolute',
            top: size.height * 1,
            right: size.width * 2,
            width: size.width * 30,
            height: size.width * 30,
        },

        walletTitle: {
            fontFamily: fonts.medium,
            fontSize: size.fontSize * 3.3,
            color: colors.text_Primary,
        },

        pointsRow: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: size.height * 0.5,
        },

        points: {
            fontFamily: fonts.bold,
            fontSize: size.fontSize * 7,
            color: colors.Color_5346EE,
        },

        pointsText: {
            marginLeft: size.width * 1,
            fontFamily: fonts.bold,
            fontSize: size.fontSize * 4.5,
            color: colors.Color_5346EE,
        },

        divider: {
            width: '55%',
            height: 1,
            backgroundColor: '#D9D3F5',
            marginTop: size.height * 2,
        },

        memberSection: {
            flexDirection: 'row',
            marginTop: size.height * 2,
        },

        shieldImage: {
            width: size.width * 16,
            height: size.width * 16,
            marginLeft: -size.width * 2.5,
        },

        memberContent: {
            flex: 1,
            marginLeft: size.width * 3,
        },

        memberTitle: {
            fontFamily: fonts.bold,
            fontSize: size.fontSize * 4.5,
            color: colors.text_Primary,
        },

        memberSubTitle: {
            marginTop: size.height,
            fontFamily: fonts.medium,
            fontSize: size.fontSize * 3.2,
            color: colors.text_Primary,
        },

        goldMember: {
            fontFamily: fonts.medium,
            fontSize: size.fontSize * 3.5,
            color: colors.primary,
        },

        buttonContainer: {
            alignItems: 'flex-end',
            marginTop: size.height * 1,
        },

        button: {
            width: size.width * 35,
            paddingVertical: size.height * 2,
        },
    });

export default RewardsCard;
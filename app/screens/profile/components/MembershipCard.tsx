import React, { useMemo } from 'react';
import {
    View,
    StyleSheet,
    Image,
} from 'react-native';

import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

interface MembershipCardProps {
    icon: any;
    memberName: string;
    points: string;
    rewardText: string;
    rewardPercent: string;
    backgroundColor?: string;
    titleColor?: string;
    borderColor?: string;
}

const MembershipCard = ({
    icon,
    memberName,
    points,
    rewardText,
    rewardPercent,
    backgroundColor = colors.white,
    titleColor = colors.Color_5346EE,
    borderColor = '#E6E1FF',
}: MembershipCardProps) => {
    const size = useSizeConfig();

    const styles = useMemo(
        () => getStyles(size, backgroundColor, titleColor, borderColor),
        [size, backgroundColor, titleColor, borderColor],
    );

    return (
        <View style={styles.card}>
            <View style={styles.iconContainer}>
                <Image
                    source={icon}
                    style={styles.icon}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.memberName}>
                    {memberName}
                </Text>

                <Text style={styles.points}>
                    Earn {points} points
                </Text>

                <Text style={styles.rewardText}>
                    {rewardText}
                </Text>
            </View>

            <View style={styles.rewardCircle}>
                <Text style={styles.percent}>
                    {rewardPercent}
                </Text>

                <Text style={styles.rewardLabel}>
                    Reward
                </Text>
            </View>
        </View>
    );
};

const getStyles = (
    size: any,
    backgroundColor: string,
    titleColor: string,
    borderColor: string,
) =>
    StyleSheet.create({
        card: {
            backgroundColor,
            borderRadius: size.width * 3,
            paddingVertical: size.height * 3,
            height: size.height * 25,
            paddingHorizontal: size.width * 4,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: size.height * 3,
        },

        icon: {
            width: size.width * 14,
            height: size.width * 14,
        },

        content: {
            flex: 1,
        },

        memberName: {
            fontFamily: fonts.bold,
            fontSize: size.fontSize * 3.4,
            color: titleColor,
        },

        points: {
            marginTop: size.height * 0.5,
            fontFamily: fonts.medium,
            fontSize: size.fontSize * 2.8,
            color: colors.text_Primary,
        },

        rewardText: {
            marginTop: size.height * 0.3,
            fontFamily: fonts.medium,
            fontSize: size.fontSize * 2.6,
            color: colors.text_Primary,
        },

        rewardCircle: {
            width: size.width * 15,
            height: size.width * 15,
            borderRadius: size.width * 8,
            borderWidth: 2,
            borderColor,
            justifyContent: 'center',
            alignItems: 'center',
        },

        percent: {
            fontFamily: fonts.bold,
            fontSize: size.fontSize * 3.8,
            color: titleColor,
        },

        rewardLabel: {
            fontFamily: fonts.semiBold,
            fontSize: size.fontSize * 2,
            color: colors.text_Secondary,
        },
        iconContainer: {
            width: size.width * 18,
            height: size.width * 18,
            borderRadius: size.width * 4,
            backgroundColor: '#F2ECFF',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: size.width * 4,
        },
    });

export default MembershipCard;
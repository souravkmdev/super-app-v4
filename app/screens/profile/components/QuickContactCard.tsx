import React, { useMemo } from 'react';
import {
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

interface Props {
    icon?: any;
    iconComponent?: React.ReactNode;
    title: string;
    subTitle?: string;
    onPress?: () => void;
    showSubTitle?: boolean;
}

const QuickContactCard = ({
    icon,
    iconComponent,
    title,
    subTitle,
    onPress,
    showSubTitle = true,
}: Props) => {
    const size = useSizeConfig();

    const styles = useMemo(
        () => getStyles(size),
        [size],
    );

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.card}
            onPress={onPress}
        >
            {iconComponent ? (
                iconComponent
            ) : icon ? (
                <Image
                    source={icon}
                    style={styles.icon}
                    resizeMode="contain"
                />
            ) : null}
            <Text style={styles.title}>
                {title}
            </Text>

            {showSubTitle && (
                <Text style={styles.subTitle}>
                    {subTitle}
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default QuickContactCard;

const getStyles = (size: any) =>
    StyleSheet.create({
        card: {
            flex: 1,
            backgroundColor: colors.white,
            borderRadius: size.width * 3,
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: size.height * 3.5,
            paddingHorizontal: size.width * 3,
        },

        icon: {
            width: size.width * 7,
            height: size.width * 7,
            marginBottom: size.height,
        },

        title: {
            fontFamily: fonts.semiBold,
            fontSize: size.fontSize * 2.6,
            color: colors.text_Primary,
            textAlign: 'center',
        },

        subTitle: {
            marginTop: size.height * 0.4,
            fontFamily: fonts.semiBold,
            fontSize: size.fontSize * 2.3,
            color: colors.text_Secondary,
            textAlign: 'center',
        },
    });
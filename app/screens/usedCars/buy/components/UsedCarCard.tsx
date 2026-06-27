import React, { useMemo } from 'react';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';

import { Text } from '../../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../../utils/constants/Theme';
import LinearGradient from 'react-native-linear-gradient';

interface StepItem {
    title: string;
    subtitle: string;
    iconPosition?: 'left' | 'right';
}

interface Props {
    title: string;
    data: StepItem[];
}

const UsedCarCard = ({ title, data }: Props) => {
    const size = useSizeConfig();
    const styles = useMemo(() => getStyles(size), [size]);

    const renderIcon = () => (
        <Image
            source={require('../../../../assets/images/usedcar/shield.png')}
            style={styles.icon}
            resizeMode="contain"
        />
    );

    return (
        <LinearGradient
            colors={['#FFFFFF', '#E3DEFA']}
            start={{ x: 0.6, y: 0.3 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.container}
        >
            <Text style={styles.cardTitle}>
                {title}
            </Text>

            {data.map((item, index) => (
                <LinearGradient
                    key={index}
                    colors={['#FFFFFF', '#F0EEFE']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.stepCard}
                >
                    {item.iconPosition !== 'right' && renderIcon()}

                    <View
                        style={[
                            styles.textContainer,
                            item.iconPosition === 'right' &&
                            styles.rightTextContainer,
                        ]}
                    >
                        <Text style={styles.stepTitle}>
                            {item.title}
                        </Text>

                        <Text style={styles.stepSubtitle}>
                            {item.subtitle}
                        </Text>
                    </View>

                    {item.iconPosition === 'right' && renderIcon()}
                </LinearGradient>
            ))}
        </LinearGradient>
    );
};

export default UsedCarCard;

const getStyles = (size: any) =>
    StyleSheet.create({
        container: {
            borderRadius: size.width * 5,
            padding: size.width * 4,
            gap: size.height * 2.5,
        },

        cardTitle: {
            color: colors.text_Primary,
            fontSize: size.fontSize * 4.4,
            fontFamily: fonts.semiBold,
        },

        stepCard: {
            backgroundColor: '#F5F3FF',
            borderRadius: size.width * 20,
            paddingHorizontal: size.width * 2,
            paddingVertical: size.height * 1.6,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },

        icon: {
            width: size.width * 12,
            height: size.width * 12,
        },

        textContainer: {
            flex: 1,
            marginHorizontal: size.width * 3,
        },

        stepTitle: {
            color: colors.text_Primary,
            fontSize: size.fontSize * 3.3,
            fontFamily: fonts.bold,
        },

        stepSubtitle: {
            color: colors.text_Primary,
            fontSize: size.fontSize * 3,
            fontFamily: fonts.medium,
        },

        rightTextContainer: {
            alignItems: 'flex-end',
        },
    });
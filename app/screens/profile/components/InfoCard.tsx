import React, { useMemo } from 'react';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { Text } from '../../../globalComponents/CustomText';
import { colors, fonts } from '../../../utils/constants/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const InfoCard = ({
    data,
}: {
    data: {
        icon?: any;
        iconName?: string;
        title: string;
        subTitle?: string;
        value?: string;
        highlight?: boolean;
        showCheck?: boolean;
    }[];
}) => {
    const size = useSizeConfig();

    const styles = useMemo(() => getStyles(size), [size],);

    return (
        <View style={styles.container}>
            {data.map((item, index) => (
                <View key={index}>
                    <View
                        style={[
                            styles.itemContainer,
                            item.highlight && styles.highlightRow,
                        ]}
                    >
                        <View style={styles.leftContainer}>
                            <View
                                style={[
                                    styles.iconContainer,
                                    item.highlight && styles.highlightIconContainer,
                                ]}
                            >
                                {item.icon ? (
                                    <Image
                                        source={item.icon}
                                        style={styles.icon}
                                        resizeMode="contain"
                                    />
                                ) : (
                                    <MaterialCommunityIcons
                                        name={item.iconName as any}
                                        size={size.width * 5}
                                        color={colors.primary}
                                    />
                                )}
                            </View>

                            <View>
                                <Text
                                    style={[
                                        styles.itemTitle,
                                        item.highlight && styles.highlightTitle,
                                    ]}
                                >
                                    {item.title}
                                </Text>

                                {!!item.subTitle && (
                                    <Text style={styles.itemSubTitle}>
                                        {item.subTitle}
                                    </Text>
                                )}
                            </View>
                        </View>

                        {item.showCheck ? (
                            <View style={styles.checkContainer}>
                                <Feather
                                    name="check"
                                    size={size.width * 3}
                                    color={colors.Color_5346EE}
                                />
                            </View>
                        ) : (
                            <View style={styles.valueContainer}>
                                <Text style={styles.valueText}>
                                    {item.value}
                                </Text>

                                <View style={styles.coinContainer}>
                                    <MaterialCommunityIcons
                                        name="star"
                                        size={size.width * 2.8}
                                        color={colors.white}
                                    />
                                </View>
                            </View>


                        )}
                    </View>

                    {index !== data.length - 1 && (
                        <View style={styles.divider} />
                    )}
                </View>
            ))}
        </View>
    );
};

const getStyles = (size: any) =>
    StyleSheet.create({
        container: {
            backgroundColor: colors.white,
            borderRadius: size.width * 4,
            padding: size.width * 4,
        },

        itemContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
        },

        leftContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
        },

        iconContainer: {
            width: size.width * 10,
            height: size.width * 10,
            borderRadius: size.width * 6,
            backgroundColor: '#F2EBFF',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: size.width * 3,
        },

        icon: {
            width: size.width * 5,
            height: size.width * 5,
        },

        itemTitle: {
            fontFamily: fonts.medium,
            fontSize: size.fontSize * 3.5,
            color: colors.text_Primary,
        },

        itemSubTitle: {
            marginTop: size.height * 0.5,
            fontFamily: fonts.medium,
            fontSize: size.fontSize * 2.8,
            color: colors.text_Secondary,
        },

        divider: {
            height: 0.5,
            backgroundColor: '#EEEEEE',
            marginVertical: size.height * 3.5,
        },

        checkContainer: {
            width: size.width * 5,
            height: size.width * 5,
            borderRadius: size.width * 3.5,
            borderWidth: 1.5,
            borderColor: colors.border,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.white,
        },

        valueText: {
            fontFamily: fonts.medium,
            fontSize: size.fontSize * 3.5,
            color: colors.text_Primary,
        },
        highlightRow: {
            backgroundColor: '#F7F3FF',
            borderRadius: size.width * 2,
            paddingVertical: size.height * 2.5,
            paddingHorizontal: size.width * 2,
        },

        highlightTitle: {
            color: colors.primary,
            fontFamily: fonts.medium,
        },
        highlightIconContainer: {
            backgroundColor: colors.white,
        },
        valueContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },

        coinContainer: {
            width: size.width * 5,
            height: size.width * 5,
            borderRadius: size.width * 2.5,
            backgroundColor: '#F2C318',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: size.width * 2,
        },
    });

export default InfoCard;
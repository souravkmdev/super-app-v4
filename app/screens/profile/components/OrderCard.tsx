import React, { useMemo } from 'react';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';

import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

interface Props {
    image: any;
    title: string;
    subTitle: string;
    paymentStatus: string;
    bookingStatus: string;
    dateTime: string;
}

const OrderCard = ({
    image,
    title,
    subTitle,
    paymentStatus,
    bookingStatus,
    dateTime,
}: Props) => {
    const size = useSizeConfig();

    const styles = useMemo(
        () => getStyles(size),
        [size],
    );

    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image
                    source={image}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>
                    {title}
                </Text>

                <Text style={styles.subTitle}>
                    {subTitle}
                </Text>

                <View style={styles.row}>
                    <Text style={styles.label}>
                        Payment Status :
                    </Text>

                    <Text
                        style={[
                            styles.status,
                            {
                                color:
                                    paymentStatus === 'Success'
                                        ? '#45B649'
                                        : '#FF8A00',
                            },
                        ]}
                    >
                        {paymentStatus}
                    </Text>
                </View>

                <View style={styles.bottomRow}>
                    <View style={styles.row}>
                        <Text style={styles.label}>
                            Booking Status :
                        </Text>

                        <Text
                            style={[
                                styles.status,
                                {
                                    color:
                                        bookingStatus === 'Confirmed'
                                            ? '#45B649'
                                            : '#FF6B6B',
                                },
                            ]}
                        >
                            {bookingStatus}
                        </Text>
                    </View>

                    <Text style={styles.date}>
                        {dateTime}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const getStyles = (size: any) =>
    StyleSheet.create({
        card: {
            backgroundColor: colors.white,
            borderRadius: size.width * 4.5,
            overflow: 'hidden',
            borderWidth: 0.5,
            borderColor: colors.border,
            marginTop: size.height * 4,
        },

        imageContainer: {
            width: '100%',
            height: size.width * 35,
            position: 'relative',
            overflow: 'hidden',
        },

        image: {
            width: '100%',
            height: '100%',
            borderBottomLeftRadius: 40,
        },

        content: {
            paddingHorizontal: size.width * 2.9,
            paddingTop: size.width * 2,
            paddingBottom: size.width * 3,
            backgroundColor: colors.white,
        },

        title: {
            fontFamily: fonts.semiBold,
            fontSize: size.fontSize * 3.4,
            color: colors.text_Primary,
        },

        subTitle: {
            marginTop: size.height * 0.5,
            fontFamily: fonts.semiBold,
            fontSize: size.fontSize * 3.2,
            color: colors.text_Primary,
        },

        row: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: size.height,
        },

        label: {
            fontFamily: fonts.semiBold,
            fontSize: size.fontSize * 3,
            color: colors.text_Secondary,
        },

        status: {
            marginLeft: size.width,
            fontFamily: fonts.medium,
            fontSize: size.fontSize * 3,
        },

        bottomRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: size.height * 0.5,
        },

        date: {
            fontFamily: fonts.medium,
            fontSize: size.fontSize * 2.7,
            color: colors.text_Secondary,
        },
    });

export default OrderCard;
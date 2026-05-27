import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, fonts } from '../../../utils/constants/Theme';
import CustomButton from '../../../globalComponents/CustomButton';
import { Text } from '../../../globalComponents/CustomText';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ContinueBarProps {
    variant: 'continue';
    onPress?: () => void;
}

interface PaymentBarProps {
    variant: 'payment';
    grandTotal: number;
    onPress?: () => void;
}

type BookingBottomBarProps = ContinueBarProps | PaymentBarProps;

const BookingBottomBar: React.FC<BookingBottomBarProps> = props => {
    const size = useSizeConfig();
    const insets = useSafeAreaInsets();
    const styles = getStyles(size);

    const paddingBottom = insets.bottom > 0 ? insets.bottom : size.width * 4;

    if (props.variant === 'payment') {
        const formatINR = (amount: number) =>
            `₹${amount.toLocaleString('en-IN')}`;

        return (
            <View style={[styles.bottomBarPayment, { paddingBottom }]}>
                <View style={styles.bottomAmountBlock}>
                    <View style={styles.bottomAmountRow}>
                        <Text style={styles.bottomAmount}>
                            {formatINR(props.grandTotal)}
                        </Text>
                        <Ionicons
                            name="chevron-down"
                            size={18}
                            color={colors.text_Primary}
                        />
                    </View>
                    <Text style={styles.bottomAmountLabel}>Select Payment</Text>
                </View>
                <CustomButton
                    TextValue="Select Payment Method"
                    TextStyle={styles.payBtnText}
                    mainstyle={{
                        paddingVertical: size.width * 1.8,
                        width: '65%',
                        borderRadius: size.width * 2,
                    }}
                />
            </View>
        );
    }

    return (
        <View style={[styles.bottomBarContinue, { paddingBottom }]}>
            <CustomButton
                TextValue="Continue"
                PressableStyle={styles.continueBtn}
                GradientColors={['#807AF4', '#7478FF', '#ADA9F6']}
                TextStyle={styles.continueBtnText}
            // onPress={props.onPress}
            />
        </View>
    );
};

const getStyles = (size: any) =>
    StyleSheet.create({
        bottomBarContinue: {
            backgroundColor: colors.white,
            paddingHorizontal: size.width * 3.4,
            paddingTop: size.width * 3,
            borderTopWidth: 1,
            borderTopColor: '#F0EDF9',
        },

        continueBtn: {
            paddingVertical: size.width * 4,
        },

        continueBtnText: {
            fontFamily: fonts.semiBold,
            fontSize: size.width * 2.8,
            color: colors.white,
        },

        bottomBarPayment: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: size.width * 6,
            paddingTop: size.width * 3,
            backgroundColor: colors.white,
            borderTopWidth: 1,
            borderTopColor: '#F0EDF9',
            borderTopLeftRadius: size.width * 4.5,
            borderTopRightRadius: size.width * 4.5,
            elevation: 5,
        },

        bottomAmountBlock: {},

        bottomAmountRow: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
        },

        bottomAmount: {
            fontSize: size.fontSize * 3.6,
            fontFamily: fonts.extraBold,
            color: colors.text_Primary,
        },

        bottomAmountLabel: {
            fontSize: size.fontSize * 2,
            fontFamily: fonts.medium,
            color: colors.text_Secondary,
            marginTop: 2,
        },

        payBtnText: {
            fontSize: size.fontSize * 2.8,
            fontFamily: fonts.semiBold,
            color: colors.white,
        },
    });

export default BookingBottomBar;
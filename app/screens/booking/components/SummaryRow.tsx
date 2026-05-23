import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

interface SummaryRowProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    isLast?: boolean;
}

const SummaryRow: React.FC<SummaryRowProps> = ({ icon, label, value, isLast }) => {
    const size = useSizeConfig();
    const styles = getStyles(size);

    return (
        <View style={[styles.summaryRow, !isLast && styles.summaryRowBorder]}>
            <View style={styles.summaryRowLeft}>
                {icon}
                <Text
                    style={styles.summaryRowLabel}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                >
                    {label}
                </Text>
            </View>
            <View style={styles.summaryValueContainer}>
                <Text
                    style={styles.summaryRowValue}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                >
                    {value}
                </Text>
            </View>
        </View>
    );
};

const getStyles = (size: any) =>
    StyleSheet.create({
        summaryRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: size.width * 4.6,
            paddingHorizontal: size.width * 4,
        },

        summaryRowBorder: {
            borderBottomWidth: 1,
            borderBottomColor: '#F0EEF9',
        },

        summaryRowLeft: {
            flexDirection: 'row',
            alignItems: 'center',
        },

        summaryValueContainer: {
            flex: 1,
            maxWidth: '50%',
        },

        summaryRowLabel: {
            fontSize: size.fontSize * 2.6,
            fontFamily: fonts.semiBold,
            color: colors.text_Primary,
        },

        summaryRowValue: {
            fontSize: size.fontSize * 2.6,
            fontFamily: fonts.medium,
            color: colors.text_Primary,
        },
    });

export default SummaryRow;
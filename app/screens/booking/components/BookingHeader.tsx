import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

interface BookingHeaderProps {
    title: string;
    onBackPress?: () => void;
}

const BookingHeader: React.FC<BookingHeaderProps> = ({ title, onBackPress }) => {
    const size = useSizeConfig();
    const styles = getStyles(size);

    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.backBtn}
                activeOpacity={0.7}
                onPress={onBackPress}
            >
                <Ionicons name="chevron-back" size={20} color="#3D3D4E" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>{title}</Text>

            <View style={styles.headerPlaceholder} />
        </View>
    );
};

const getStyles = (size: any) =>
    StyleSheet.create({
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: size.width * 4.1,
            paddingTop: size.width * 2.6,
        },

        backBtn: {
            width: size.width * 8.3,
            height: size.width * 8.3,
            borderRadius: size.width * 2.3,
            backgroundColor: colors.white,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 2,
            shadowColor: '#000',
            shadowOpacity: 0.08,
            shadowRadius: 4,
            shadowOffset: { width: 0, height: 1 },
        },

        headerTitle: {
            fontSize: size.width * 4,
            fontFamily: fonts.semiBold,
            color: colors.text_Primary,
            textAlign: 'center',
        },

        headerPlaceholder: {
            width: size.width * 8.3,
        },
    });

export default BookingHeader;
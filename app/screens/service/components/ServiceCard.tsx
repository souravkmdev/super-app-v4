import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import { Text } from '../../../globalComponents/CustomText';

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    image: any;
}


interface ServiceCardProps {
    item: ServiceItem;
    onPress?: (item: ServiceItem) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item, onPress }) => {
    const size = useSizeConfig();
    const styles = getStyles(size);
    return (
        <TouchableOpacity
            style={styles.serviceCard}
            activeOpacity={0.85}
            onPress={() => onPress?.(item)}
        >
            <Image source={item.image} style={styles.serviceCardImage} resizeMode="contain" />
            <View style={styles.serviceCardText}>
                <Text
                    style={styles.serviceCardTitle}
                    numberOfLines={2}
                    ellipsizeMode='tail'
                >
                    {item.title}
                </Text>
                <Text
                    style={styles.serviceCardDesc}
                    numberOfLines={3}
                    ellipsizeMode='tail'
                >
                    {item.description}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ServiceCard

const getStyles = (size: any) => StyleSheet.create({
    serviceCard: {
        width: size.width * 45,
        backgroundColor: '#FFFFFF',
        borderRadius: size.width * 2.5,
        padding: size.width * 2.2,
        flexDirection: 'row',
        alignItems: 'center',
        gap: size.width * 1.5,
        borderWidth: 1,
        borderColor: '#f1f0f0ff',
    },
    serviceCardImage: {
        width: size.width * 15,
        height: size.width * 18,
        flexShrink: 0,
    },
    serviceCardText: {
        maxWidth: size.width * 30,
    },
    serviceCardTitle: {
        fontSize: size.fontSize * 2.8,
        fontFamily: fonts.semiBold,
        color: colors.text_Primary,
        marginBottom: size.width * 1.2

    },
    serviceCardDesc: {
        fontSize: size.fontSize * 2.1,
        fontFamily: fonts.semiBold,
        color: colors.lightGray,
    },
})
import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    ImageSourcePropType,
} from 'react-native';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from '../../../globalComponents/CustomText';

export interface DrivingCourseFeatureItem {
    id: string;
    icon: ImageSourcePropType;
    title: string;
    subtitle: string;
}

interface FeatureRowProps {
    item: DrivingCourseFeatureItem;
    isLast: boolean;
}

const FeatureRow: React.FC<FeatureRowProps> = ({
    item,
    isLast,
}) => {
    const size = useSizeConfig();
    const styles = getStyles(size);
    return (
        <View
            style={[
                styles.featureRow,
                !isLast && styles.featureRowBorder,
            ]}
        >
            <View style={styles.iconBubble}>
                <Image
                    source={item.icon}
                    style={styles.featureIcon}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.featureText}>
                <Text style={styles.featureTitle}>
                    {item.title}
                </Text>

                <Text style={styles.featureSubtitle}>
                    {item.subtitle}
                </Text>
            </View>

            <View style={styles.checkCircle}>
                <Ionicons name='checkmark-sharp' size={14} color={colors.primary} />
            </View>
        </View>
    );
};

export default FeatureRow;

const getStyles = (size: any) => StyleSheet.create({
    featureRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: size.width * 2.4,
    },

    featureRowBorder: {
        borderBottomWidth: 1,
        borderBottomColor: colors.ligh_borderColor,
    },

    iconBubble: {
        width: size.width * 9.5,
        height: size.width * 9.5,
        borderRadius: size.width * 5,
        backgroundColor: colors.Color_EDE3FF,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: size.width * 2.8,
    },

    featureIcon: {
        width: size.width * 5,
        height: size.width * 5,
        tintColor: colors.primary,
    },

    featureText: {
        flex: 1,
    },

    featureTitle: {
        fontSize: size.fontSize * 3,
        fontFamily: fonts.bold,
        color: colors.text_Primary,
        marginBottom: size.width * 1.4,
        letterSpacing: 0.1,
    },

    featureSubtitle: {
        fontSize: size.fontSize * 2.5,
        color: colors.text_Secondary,
        lineHeight: size.width * 3.5,
    },

    checkCircle: {
        width: size.width * 5.4,
        height: size.width * 5.4,
        borderRadius: size.width * 2.7,
        borderWidth: 1.5,
        borderColor: '#C4B5E8',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: size.width * 2,
    },

    checkMark: {
        fontSize: 13,
        color: colors.Color_5346EE,
        lineHeight: 16,
    },
});
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { CarItem } from './CarCardType';
import { colors, fonts } from '../../../utils/constants/Theme';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const StarRating: React.FC<{ rating: number; isDark?: boolean }> = ({ rating, isDark = false }) => {
    const size = useSizeConfig();
    const styles = getStyles(size);
    return (
        <View style={styles.starContainer}>
            <AntDesign name='star' size={size.width * 2.8} color='#F2D422' />
            <Text style={[styles.ratingText, isDark && styles.ratingTextDark]}>
                {rating.toFixed(2)}
            </Text>
        </View>
    );
};

interface CarCardProps {
    item: CarItem;
    onFavoriteToggle: (id: string) => void;
    onDetailsPress: (id: string) => void;
    isDark?: boolean;

    showFavorite?: boolean;
    showPrice?: boolean;
    showRating?: boolean;
    showAvailability?: boolean;
    showDetailsButton?: boolean;
    showOrderInfo?: boolean;
}

const CarCard: React.FC<CarCardProps> = ({
    item,
    onFavoriteToggle,
    onDetailsPress,
    isDark = false,

    showFavorite = true,
    showPrice = true,
    showRating = true,
    showAvailability = true,
    showDetailsButton = true,
    showOrderInfo = false,
}) => {

    const size = useSizeConfig();
    const styles = getStyles(size);

    return (
        <View style={[styles.card, isDark && styles.cardDark]}>

            <View style={styles.imageContainer}>
                {/* <Image
                    source={{ uri: item.image }}
                    style={styles.carImage}
                    resizeMode='cover'
                /> */}

                <Image
                    source={
                        typeof item.image === 'string'
                            ? { uri: item.image }
                            : item.image
                    }
                    style={styles.carImage}
                   resizeMode = 'cover'
                />

                {/* Heart Icon */}
                {showFavorite && (
                    <TouchableOpacity
                        style={styles.heartButton}
                        onPress={() => onFavoriteToggle?.(item.id)}
                        activeOpacity={0.7}
                    >
                        {item.isFavorite ? (
                            <FontAwesome name='heart' size={20} color='#e92121cd' />
                        ) : (
                            <FontAwesome name='heart-o' size={20} color={colors.white} />
                        )}
                    </TouchableOpacity>
                )}
            </View>

            {/* Card Content */}
            <View style={[styles.cardContent, isDark && styles.cardContentDark]}>
                <View style={styles.cardRow}>
                    <Text style={[styles.carName, isDark && styles.textLight]}>
                        {item.name}
                    </Text>
                    {showPrice && (
                        <Text style={[styles.carPrice, isDark && styles.textLight]}>
                            {item.price}
                        </Text>
                    )}
                </View>

                {showOrderInfo && (
                    <View>
                        <Text>
                            Payment Status : {item.paymentStatus}
                        </Text>

                        <Text>
                            Booking Status : {item.bookingStatus}
                        </Text>

                        <Text>
                            {item.dateTime}
                        </Text>
                    </View>
                )}

                <View style={styles.cardBottomRow}>
                    <View>
                        {showRating && (
                            <View style={styles.ratingVariantRow}>
                                <StarRating rating={item.rating} isDark={isDark} />
                                <View style={[styles.dot, isDark && styles.dotDark]} />
                                <Text style={[styles.variantsText, isDark && styles.variantsTextDark]}>
                                    {item.variants} Variants
                                </Text>
                            </View>
                        )}
                        {showAvailability && (
                            <Text style={[styles.availabilityText, isDark && styles.availabilityTextDark]}>
                                {item.availability}
                            </Text>
                        )}
                    </View>

                    {showDetailsButton && (
                        <TouchableOpacity
                            style={[styles.detailsButton, isDark && styles.detailsButtonDark]}
                            onPress={() => onDetailsPress?.(item.id)}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.detailsButtonText}>
                                Details
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );
};

export default CarCard;

const CARD_BG = '#FFFFFF';

const getStyles = (size: any) => StyleSheet.create({
    card: {
        backgroundColor: CARD_BG,
        borderRadius: size.width * 4.5,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.border,
    },

    cardDark: {
        backgroundColor: '#1C1C1E',
        borderColor: '#2C2C2E',
    },

    imageContainer: {
        width: '100%',
        height: size.width * 40,
        position: 'relative',
    },

    carImage: {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 50,
    },

    heartButton: {
        position: 'absolute',
        top: size.width * 2.5,
        right: size.width * 2.5,
        width: size.width * 8.4,
        height: size.width * 8.4,
        borderRadius: size.width * 5,
        backgroundColor: 'rgba(255,255,255,0.25)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    cardContent: {
        paddingHorizontal: size.width * 2.9,
        paddingTop: size.width * 2,
        paddingBottom: size.width * 3,
        backgroundColor: CARD_BG,
    },

    cardContentDark: {
        backgroundColor: '#1C1C1E',
    },

    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: size.width * 1.6,
    },

    carName: {
        fontSize: size.fontSize * 4.6,
        color: colors.text_Primary,
        fontFamily: fonts.bold,
    },

    carPrice: {
        fontSize: size.fontSize * 4.6,
        color: colors.text_Primary,
        fontFamily: fonts.bold,
    },

    textLight: {
        color: '#FFFFFF',
    },

    cardBottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },

    ratingVariantRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: size.width * 2.4,
    },

    starContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },

    ratingText: {
        fontSize: size.fontSize * 3.2,
        color: colors.text_Secondary,
        paddingLeft: size.width * 0.82,
        fontFamily: fonts.regular,
    },

    ratingTextDark: {
        color: '#AAAAAA',
    },

    dot: {
        width: size.width * 1.2,
        height: size.width * 1.2,
        borderRadius: size.width * 2,
        backgroundColor: colors.lightGray,
    },

    dotDark: {
        backgroundColor: '#555555',
    },

    variantsText: {
        fontSize: size.fontSize * 3.2,
        color: colors.text_Primary,
        fontFamily: fonts.medium,
    },

    variantsTextDark: {
        color: '#CCCCCC',
    },

    availabilityText: {
        fontSize: size.fontSize * 3.27,
        color: colors.lightGray,
        fontFamily: fonts.regular,
    },

    availabilityTextDark: {
        color: '#666666',
    },

    detailsButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: size.width * 5.2,
        paddingVertical: size.width * 2.3,
        borderRadius: size.width * 2,
    },

    detailsButtonDark: {
        // backgroundColor: '#3A3A3C',
        backgroundColor: '#633BDB'
    },

    detailsButtonText: {
        color: '#FFFFFF',
        fontSize: size.width * 3.3,
        fontFamily: fonts.medium,
    },
});
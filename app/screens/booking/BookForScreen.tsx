import React, { useMemo, useState } from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Image,
    ScrollView,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { colors, fonts } from '../../utils/constants/Theme';
import { Text } from '../../globalComponents/CustomText';

type BookingOption = 'myself' | 'others';

const BookingForScreen: React.FC = () => {
    const size = useSizeConfig();
    const styles = useMemo(() => getStyles(size), [size]);
    const insets = useSafeAreaInsets();

    const [selected, setSelected] = useState<BookingOption>('myself');

    return (
        <View
            style={[styles.safeArea, { paddingTop: insets.top + size.height * 3 }]}
        >
            <StatusBar barStyle="dark-content" />
            <LinearGradient
                colors={['#d3cafb', '#e3dcffd2', '#fefeff47']}
                style={{
                    width: '100%',
                    height: size.height * 21,
                    position: 'absolute',
                }}
            />
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
                        <Ionicons
                            name="chevron-back"
                            size={size.width * 3.2}
                            color={colors.text_Primary}
                        />
                    </TouchableOpacity>

                    <Text style={styles.title}>
                        Who are you{'\n'}making this booking for?
                    </Text>

                    <Text style={styles.subtitle}>
                        This helps us personalise your experience.
                    </Text>

                    <Image
                        source={require('../../assets/images/carBooking/book_now.png')}
                        style={styles.illustrationContainer}
                        resizeMode="contain"
                    />

                    <Image
                        source={require('../../assets/images/carBooking/ellipse.png')}
                        style={styles.ellipseImage}
                    />

                    <View style={styles.cardsContainer}>
                        <TouchableOpacity
                            style={[
                                styles.optionCard,
                                selected === 'myself' && styles.optionCardSelected,
                            ]}
                            onPress={() => setSelected('myself')}
                            activeOpacity={0.85}
                        >
                            <View style={styles.optionLeft}>
                                <FontAwesome
                                    name="user"
                                    size={size.width * 4.5}
                                    color={selected === 'myself' ? '#DFDCFF' : '#846AF4'}
                                />

                                <View style={styles.optionTextContainer}>
                                    <Text
                                        style={[
                                            styles.optionTitle,
                                            selected === 'myself' && styles.optionTitleSelected,
                                        ]}
                                    >
                                        Myself
                                    </Text>

                                    <Text
                                        style={[
                                            styles.optionSubtitle,
                                            selected === 'myself' && styles.optionSubtitleSelected,
                                        ]}
                                    >
                                        Book for Yourself
                                    </Text>
                                </View>
                            </View>

                            <View
                                style={[
                                    styles.radioOuter,
                                    selected === 'myself' && styles.radioOuterSelected,
                                ]}
                            >
                                {selected === 'myself' && <View style={styles.radioInner} />}
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.optionCard,
                                selected === 'others' && styles.optionCardSelected,
                            ]}
                            onPress={() => setSelected('others')}
                            activeOpacity={0.85}
                        >
                            <View style={styles.optionLeft}>
                                <FontAwesome
                                    name="users"
                                    size={size.width * 4.5}
                                    color={selected === 'others' ? '#DFDCFF' : '#846AF4'}
                                />

                                <View style={styles.optionTextContainer}>
                                    <Text
                                        style={[
                                            styles.optionTitle,
                                            selected === 'others' && styles.optionTitleSelected,
                                        ]}
                                    >
                                        Others
                                    </Text>

                                    <Text
                                        style={[
                                            styles.optionSubtitle,
                                            selected === 'others' && styles.optionSubtitleSelected,
                                        ]}
                                    >
                                        Book for Someone else
                                    </Text>
                                </View>
                            </View>

                            <View
                                style={[
                                    styles.radioOuter,
                                    selected === 'others' && styles.radioOuterSelected,
                                ]}
                            >
                                {selected === 'others' && <View style={styles.radioInner} />}
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.noteContainer}>
                        <View style={styles.noteIconContainer}>
                            <Ionicons
                                name="information-circle-outline"
                                size={size.width * 3}
                                color={colors.text_Primary}
                            />
                        </View>

                        <Text style={styles.noteText}>
                            <Text style={styles.noteBold}>Note: </Text>
                            This information is crucial for booking and will be used for
                            vehicle registration. Please provide accurate details to ensure a
                            smooth process.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const getStyles = (size: any) =>
    StyleSheet.create({
        safeArea: {
            flex: 1,
            backgroundColor: colors.white,
        },

        container: {
            paddingHorizontal: size.width * 3.7,
            paddingBottom: size.width * 6.6,
            alignItems: 'center',
        },

        backButton: {
            alignSelf: 'flex-start',
            width: size.width * 8.3,
            height: size.width * 8.3,
            borderRadius: size.width * 2.3,
            backgroundColor: '#FFFFFF',
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 3,
            marginTop: size.width * 2,
        },

        title: {
            fontSize: size.width * 5.4,
            fontFamily: fonts.extraBold,
            color: colors.text_Primary,
            textAlign: 'center',
            marginTop: size.width * 4,
        },

        subtitle: {
            fontSize: size.fontSize * 3,
            color: colors.text_Secondary,
            textAlign: 'center',
            marginTop: size.width * 1.2,
        },

        illustrationContainer: {
            width: '100%',
            height: '40%',
            marginTop: size.height * 9,
            paddingHorizontal: size.width * 4.9,
        },
        ellipseImage: {
            width: size.width * 70,
            height: size.width * 70,
            resizeMode: 'contain',
            position: 'absolute',
            top: '30%',
            transform: [{ translateY: -(size.height * 21) / 2 }],
        },

        cardsContainer: {
            width: '100%',
            marginTop: size.width * 0.8,
            gap: size.width * 2.5,
            backgroundColor: 'rgba(107, 78, 255, 0.07)',
            borderRadius: size.width * 3,
            padding: size.width * 3,
            borderWidth: size.width * 0.2,
            borderColor: 'rgba(107, 78, 255, 0.12)',
        },

        optionCard: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#FFFFFF',
            borderRadius: size.width * 2.5,
            paddingVertical: size.width * 3.3,
            paddingHorizontal: size.width * 3.7,
            borderWidth: size.width * 0.3,
            borderColor: 'transparent',
        },

        optionCardSelected: {
            backgroundColor: colors.primary,
            borderColor: colors.primary,
            shadowOpacity: 0.25,
            shadowRadius: size.width * 2.5,
            elevation: 6,
        },

        optionLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: size.width * 2.8,
            flex: 1,
        },

        optionTextContainer: {
            flex: 1,
        },

        optionTitle: {
            fontSize: size.fontSize * 3.7,
            fontFamily: fonts.semiBold,
            color: colors.text_Primary,
        },

        optionTitleSelected: {
            color: '#FFFFFF',
        },

        optionSubtitle: {
            fontSize: size.width * 2.5,
            color: '#999',
            marginTop: size.width * 0.4,
        },

        optionSubtitleSelected: {
            color: 'rgba(255,255,255,0.75)',
        },

        radioOuter: {
            width: size.width * 5,
            height: size.width * 5,
            borderRadius: size.width * 2.5,
            borderWidth: size.width * 0.4,
            borderColor: '#DDD',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF',
        },

        radioOuterSelected: {
            borderColor: '#FFFFFF',
            backgroundColor: 'rgba(255,255,255,0.15)',
        },

        radioInner: {
            width: size.width * 2.5,
            height: size.width * 2.5,
            borderRadius: size.width * 1.25,
            backgroundColor: '#FFFFFF',
        },

        noteContainer: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            backgroundColor: 'rgba(107, 78, 255, 0.07)',
            borderRadius: size.width * 2.8,
            padding: size.width * 2.8,
            marginTop: size.width * 4.1,
            width: '100%',
            borderWidth: size.width * 0.2,
            borderColor: 'rgba(107, 78, 255, 0.12)',
        },

        noteIconContainer: {
            width: size.width * 4.5,
            height: size.width * 4.5,
            borderRadius: size.width * 2.3,
            // backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: size.width * 2,
            marginTop: size.width * 0.2,
            flexShrink: 0,
        },

        noteIcon: {
            color: '#FFF',
            fontSize: size.width * 2.7,
            fontWeight: '700',
        },

        noteText: {
            flex: 1,
            fontSize: size.width * 2.6,
            color: '#555',
            lineHeight: size.width * 3.9,
        },

        noteBold: {
            fontWeight: '700',
            color: '#333',
        },
    });

export default BookingForScreen;
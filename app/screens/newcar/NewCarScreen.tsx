import React, { useCallback, useMemo, useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    FlatList,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CarCard from '../../globalComponents/CarCard';
import Header from '../../globalComponents/Header';

import { colors, fonts } from '../../utils/constants/Theme';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { Text } from '../../globalComponents/CustomText';
import { ARENA_CARS, CarItem, NEXA_CARS } from './data';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const NewCarsScreen = () => {
    const [activeTab, setActiveTab] = useState<'Arena' | 'Nexa'>('Arena');
    const [arenaCars, setArenaCars] = useState<CarItem[]>(ARENA_CARS);
    const [nexaCars, setNexaCars] = useState<CarItem[]>(NEXA_CARS);

    const size = useSizeConfig();
    const insets = useSafeAreaInsets();
    const styles = useMemo(() => getStyles(size, insets), [size, insets]);
    const navigation = useNavigation<NavigationProp>();

    const isDark = activeTab === 'Nexa';
    const currentCars = activeTab === 'Arena' ? arenaCars : nexaCars;

    const handleFavoriteToggle = (id: string) => {
        if (activeTab === 'Arena') {
            setArenaCars(prev =>
                prev.map(car =>
                    car.id === id ? { ...car, isFavorite: !car.isFavorite } : car,
                ),
            );
        } else {
            setNexaCars(prev =>
                prev.map(car =>
                    car.id === id ? { ...car, isFavorite: !car.isFavorite } : car,
                ),
            );
        }
    };

    const renderItem = useCallback(
        ({ item }: any) => (
            <CarCard
                item={item}
                onFavoriteToggle={handleFavoriteToggle}
                onDetailsPress={(id) => { navigation.navigate('Details') }}
                isDark={isDark}
            />
        ),
        [activeTab],
    );

    const keyExtractor = useCallback((item: any) => item.id.toString(), []);

    return (
        <View style={[styles.safeArea, isDark && styles.safeAreaDark]}>
            <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

            <Header
                onPress={() => { }}
                title="New Cars"
                textStyle={{ color: isDark ? colors.white : colors.text_Primary }}
                iconColor={isDark ? colors.white : colors.text_Primary}
                iconComp={{
                    backgroundColor: isDark ? colors.text_Primary : colors.white,
                }}
            />

            <View style={styles.contentContainer}>
                <View style={styles.tabContainer}>
                    <View style={[styles.tabWrapper, isDark && styles.tabWrapperDark]}>
                        <TouchableOpacity
                            style={[styles.tab, activeTab === 'Arena' && styles.tabActive]}
                            onPress={() => setActiveTab('Arena')}
                        >
                            <Text
                                style={[
                                    styles.tabText,
                                    isDark && styles.tabTextDark,
                                    activeTab === 'Arena' && styles.tabTextActive,
                                ]}
                            >
                                Arena
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.tab, activeTab === 'Nexa' && styles.tabActiveDark]}
                            onPress={() => setActiveTab('Nexa')}
                        >
                            <Text
                                style={[
                                    styles.tabText,
                                    isDark && styles.tabTextDark,
                                    activeTab === 'Nexa' && styles.tabTextActive,
                                ]}
                            >
                                Nexa
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <FlatList
                    data={currentCars}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                    removeClippedSubviews
                    maxToRenderPerBatch={5}
                    initialNumToRender={5}
                    windowSize={5}
                    updateCellsBatchingPeriod={50}
                />
            </View>
        </View>
    );
};

export default NewCarsScreen;

const getStyles = (size: any, insets: any) =>
    StyleSheet.create({
        safeArea: {
            flex: 1,
            backgroundColor: colors.backGround,
        },
        contentContainer: {
            paddingTop: insets.top + size.height * 18,
        },
        safeAreaDark: {
            backgroundColor: '#0A0A0A',
        },

        tabContainer: {
            paddingHorizontal: size.width * 3.7,
            paddingBottom: size.width * 6,
        },

        tabWrapper: {
            flexDirection: 'row',
            backgroundColor: '#EAECFC',
            borderRadius: size.width * 6.2,
            padding: size.width * 0.83,
        },

        tabWrapperDark: {
            backgroundColor: '#1C1C1E',
        },

        tab: {
            flex: 1,
            borderRadius: size.width * 5.4,
            alignItems: 'center',
            justifyContent: 'center',
            height: size.width * 9.5,
        },

        tabActive: {
            backgroundColor: colors.buttonBgColor,
            elevation: 4,
        },

        tabActiveDark: {
            backgroundColor: '#2C2C2E',
            elevation: 4,
        },

        tabText: {
            fontSize: size.fontSize * 3.6,
            fontFamily: fonts.bold,
            color: colors.text_Primary,
        },

        tabTextDark: {
            color: '#888888',
        },

        tabTextActive: {
            color: colors.white,
        },

        listContent: {
            paddingHorizontal: size.width * 3.3,
            paddingBottom: size.width * 25,
            gap: size.width * 3.3,
        },
    });
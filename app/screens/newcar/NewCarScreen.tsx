import React, { useMemo, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CarCard from './components/CarCard';
import { colors, fonts } from '../../utils/constants/Theme';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface CarItem {
    id: string;
    name: string;
    price: string;
    rating: number;
    variants: number;
    availability: string;
    image: string;
    isFavorite: boolean;
}

const ARENA_CARS: CarItem[] = [
    {
        id: '1',
        name: 'Grand Vitara ',
        price: '₹12,80,000',
        rating: 5.0,
        variants: 4,
        availability: 'Available from 2 August',
        image:
            'https://assets.kalyanicrm.com/app-version4-development/Card/breeza.png',
        isFavorite: false,
    },
    {
        id: '2',
        name: 'Grand Vitara',
        price: '₹12,80,000',
        rating: 5.0,
        variants: 4,
        availability: 'Available from 2 August',
        image:
            'https://assets.kalyanicrm.com/app-version4-development/Card/dzire.png',
        isFavorite: false,
    },
];

const NEXA_CARS: CarItem[] = [
    {
        id: '3',
        name: 'Fronx',
        price: '₹7,51,500',
        rating: 4.8,
        variants: 6,
        availability: 'Latest launch...',
        image:
            'https://assets.kalyanicrm.com/app-version4-development/Card/fronx.png',
        isFavorite: false,
    },
];

const NewCarsScreen: React.FC = ({navigation}:any) => {
    const [activeTab, setActiveTab] = useState<'Arena' | 'Nexa'>('Arena');
    const [arenaCars, setArenaCars] = useState<CarItem[]>(ARENA_CARS);
    const [nexaCars, setNexaCars] = useState<CarItem[]>(NEXA_CARS);
    const size = useSizeConfig();
    const styles = useMemo(() => getStyles(size), [size]);

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

    const handleDetailsPress = (id: string) => {
        console.log('Details clicked for:', id);
    };

    return (
        <View style={[styles.safeArea, isDark && styles.safeAreaDark]}>
            <StatusBar
                barStyle={isDark ? 'light-content' : 'dark-content'}
                backgroundColor={isDark ? '#0A0A0A' : '#FFFFFF'}
            />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <MaterialIcons
                        name="arrow-back-ios"
                        size={size.width * 4.5}
                        color={isDark ? '#FFFFFF' : colors.text_Primary}
                    />
                </TouchableOpacity>

                <Text style={[styles.headerTitle, isDark && styles.textLight]}>
                    New Cars
                </Text>

                <View style={styles.headerSpacer} />
            </View>

            {/* Tabs */}
            <View style={styles.tabContainer}>
                <View style={[styles.tabWrapper, isDark && styles.tabWrapperDark]}>
                    <TouchableOpacity
                        style={[
                            styles.tab,
                            activeTab === 'Arena' && styles.tabActive,
                        ]}
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
                        style={[
                            styles.tab,
                            activeTab === 'Nexa' && styles.tabActiveDark,
                        ]}
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

            {/* Car List */}
            <FlatList
                data={currentCars}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <CarCard
                        item={item}
                        onFavoriteToggle={handleFavoriteToggle}
                        onDetailsPress={handleDetailsPress}
                        isDark={isDark}
                    />
                )}
            />
        </View>
    );
};

export default NewCarsScreen;

const getStyles = (size: any) => StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.backGround,
    },

    safeAreaDark: {
        backgroundColor: '#0A0A0A',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: size.width * 3.3,
        paddingVertical: size.width * 2.7,
    },

    backButton: {
        width: size.width * 7.4,
        height: size.width * 7.4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: size.fontSize * 4,
        fontFamily: fonts.bold,
        color: colors.text_Primary,
    },

    textLight: {
        color: '#FFFFFF',
    },

    headerSpacer: {
        width: size.width * 4.5,
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
        paddingBottom: size.width * 5,
        gap: size.width * 3.3,
    },
});
import React, { useMemo, useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from '../../../globalComponents/Header';
import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import {
    brands, budgets, filterOptions, fuelTypes, kilometers, models, transmissions,
    fromYears,
    toYears,
} from '../usedCarTypes';
import FilterOptionCard from './components/FilterOptionCard';


const UsedCarFilterScreen = ({ navigation }: any) => {
    const size = useSizeConfig();
    const insets = useSafeAreaInsets();

    const styles = useMemo(() => getStyles(size, insets), [size, insets],);

    const [selectedFilter, setSelectedFilter] = useState('Brand');
    const [selectedBrand, setSelectedBrand] = useState('BMW');
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedBudget, setSelectedBudget] = useState('');

    const [selectedModel, setSelectedModel] = useState('');
    const [selectedFuelType, setSelectedFuelType] = useState('');
    const [selectedTransmission, setSelectedTransmission] = useState('');
    const [selectedKilometers, setSelectedKilometers] = useState('');

    const [selectedFromYear, setSelectedFromYear] = useState('');
    const [selectedToYear, setSelectedToYear] = useState('');

    const [showThankYou, setShowThankYou] = useState(false);

    const filterFlow = [
        'Brand',
        'Model',
        'Fuel Type',
        'Transmission',
        'Budget',
        'Year',
        'Kilometers',
    ];

    const goToNextFilter = (currentFilter: string) => {
        const currentIndex = filterFlow.indexOf(currentFilter);

        if (currentIndex < filterFlow.length - 1) {
            setSelectedFilter(
                filterFlow[currentIndex + 1],
            );
        } else {
            navigation.navigate('UsedCarOverview', {
                brand: selectedBrand,
                model: selectedModel,
                fuelType: selectedFuelType,
                transmission: selectedTransmission,
                budget: selectedBudget,
                fromYear: selectedFromYear,
                toYear: selectedToYear,
                kilometers: selectedKilometers,
            });
        }
    };

    const getRightPanelData = (): string[] => {
        switch (selectedFilter) {
            case 'Model':
                return models;

            case 'Fuel Type':
                return fuelTypes;

            case 'Transmission':
                return transmissions;

            case 'Kilometers':
                return kilometers;

            default:
                return [];
        }
    };
    const rightPanelData = getRightPanelData();

    const getHeaderTitle = () => {
        switch (selectedFilter) {
            case 'Brand':
                return 'Choose Brand';

            case 'Model':
                return 'Choose Model';

            case 'Fuel Type':
                return 'Choose Fuel Type';

            case 'Transmission':
                return 'Choose Transmission';

            case 'Budget':
                return 'Choose Budget';

            case 'Year':
                return 'Choose Year';

            case 'Kilometers':
                return 'Choose Kilometers';

            default:
                return 'Used Cars';
        }
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#D3CAFB', '#E3DCFF', '#F3F3FF']}
                style={styles.headerGradient}
            >
                <Header
                    title={getHeaderTitle()}
                    onPress={() => navigation.goBack()}
                    iconColor={colors.text_Primary}
                />
            </LinearGradient>

            <View style={styles.contentContainer}>
                <LinearGradient
                    colors={['#E3DEFA', '#F3F3FF', '#F3F3FF']}
                    locations={[0, 0.3, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.leftPanel}
                >
                    {filterOptions.map(item => (
                        <TouchableOpacity
                            key={item.key}
                            onPress={() => setSelectedFilter(item.key)}

                        >
                            {selectedFilter === item.key ? (
                                <LinearGradient
                                    colors={['#807AF4', '#7478FF', '#ADA9F6']}
                                    style={styles.activeMenuContainer}
                                >
                                    <Image
                                        source={item.icon}
                                        resizeMode="contain"
                                        style={styles.activeMenuIcon}
                                    />

                                    <Text style={styles.menuItemActive}>
                                        {item.key}
                                    </Text>

                                    <Ionicons
                                        name="chevron-forward"
                                        size={size.width * 4}
                                        color={colors.white}
                                    />
                                </LinearGradient>
                            ) : (
                                <View style={styles.menuContainer}>
                                    <Image
                                        source={item.icon}
                                        resizeMode="contain"
                                        style={styles.menuIcon}
                                    />
                                    <Text style={styles.menuItem}>
                                        {item.key}
                                    </Text>
                                </View>
                            )}
                        </TouchableOpacity>
                    ))}
                </LinearGradient>


                <ScrollView
                    style={styles.rightPanel}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    {selectedFilter === 'Brand' ? (
                        brands.map(item => (
                            <FilterOptionCard
                                key={item.name}
                                title={item.name}
                                logo={item.logo}
                                isSelected={selectedBrand === item.name}
                                onPress={() => {
                                    setSelectedBrand(item.name);
                                    goToNextFilter('Brand');
                                }}
                            />
                        ))
                    ) : selectedFilter === 'Year' ? (
                        <>
                            <Text style={styles.yearLabel}>
                                From
                            </Text>

                            <View style={styles.yearGrid}>
                                {fromYears.map(year => (
                                    <FilterOptionCard
                                        key={year}
                                        variant="year"
                                        title={year}
                                        isSelected={selectedFromYear === year}
                                        onPress={() => setSelectedFromYear(year)}
                                    />
                                ))}
                            </View>

                            <Text style={styles.yearLabel}>
                                To
                            </Text>

                            <View style={styles.yearGrid}>
                                {toYears.map(year => (
                                    <FilterOptionCard
                                        key={year}
                                        variant="year"
                                        title={year}
                                        isSelected={selectedToYear === year}
                                        onPress={() => {
                                            setSelectedToYear(year);
                                            goToNextFilter('Year');
                                        }}
                                    />
                                ))}
                            </View>
                        </>
                    ) : selectedFilter === 'Budget' ? (
                        budgets.map(item => (
                            <FilterOptionCard
                                key={item.title}
                                variant="budget"
                                title={item.title}
                                subtitle={item.subtitle}
                                value={item.value}
                                isSelected={selectedBudget === item.title}
                                onPress={() => {
                                    setSelectedBudget(item.title);
                                    goToNextFilter('Budget');
                                }}
                            />
                        ))
                    ) : (
                        rightPanelData.map(item => (
                            <FilterOptionCard
                                key={item}
                                title={item}
                                isSelected={selectedOption === item}

                                onPress={() => {

                                    if (selectedFilter === 'Model') {
                                        setSelectedModel(item);
                                    }

                                    if (selectedFilter === 'Fuel Type') {
                                        setSelectedFuelType(item);
                                    }

                                    if (selectedFilter === 'Transmission') {
                                        setSelectedTransmission(item);
                                    }

                                    if (selectedFilter === 'Kilometers') {
                                        setSelectedKilometers(item);
                                    }

                                    setSelectedOption(item);
                                    goToNextFilter(selectedFilter);
                                }}
                            />
                        ))
                    )}
                </ScrollView>
            </View>
        </View>
    );
};

export default UsedCarFilterScreen;

const getStyles = (size: any, insets: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F3F3FF',

        },

        headerGradient: {
            height: insets.top + size.height * 14,
        },

        contentContainer: {
            flex: 1,
            flexDirection: 'row',
            marginTop: size.height * 5,
        },

        leftPanel: {
            width: '45%',
            paddingTop: size.height * 2,
            borderTopRightRadius: size.width * 3,
        },

        menuContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: size.width * 2,
            paddingVertical: size.height * 4,
            paddingHorizontal: size.width * 3.5,
        },

        activeMenuContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: size.height * 12,
            marginRight: size.width * 3,
            paddingHorizontal: size.width * 4,
            borderTopRightRadius: size.width * 3,
            borderBottomRightRadius: size.width * 3,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
        },

        menuItem: {
            color: colors.text_Primary,
            fontSize: size.fontSize * 3.5,
            fontFamily: fonts.medium,
        },

        menuItemActive: {
            flex: 1,
            marginLeft: size.width * 2,
            color: colors.white,
            fontSize: size.fontSize * 3.5,
            fontFamily: fonts.semiBold,
        },
        rightPanel: {
            flex: 1,
            paddingHorizontal: size.width * 3,
            paddingTop: size.height * 2,
        },
        brandCard: {
            height: size.height * 12,
            backgroundColor: colors.white,
            borderRadius: size.width * 2,
            justifyContent: 'center',
            paddingHorizontal: size.width * 4,
            marginBottom: size.height * 3,
            position: 'relative',
        },
        brandText: {
            color: colors.text_Primary,
            fontSize: size.fontSize * 3.3,
            fontFamily: fonts.medium,
            textAlign: 'center',
        },
        brandCardSelected: {
            borderWidth: 1,
            borderColor: '#A89AFF',
        },

        brandLogo: {
            width: size.width * 12,
            height: size.width * 6,
        },
        logoContainer: {
            position: 'absolute',
            left: size.width * 2,
            top: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            width: size.width * 12,
        },
        optionCard: {
            height: size.height * 8,
            backgroundColor: colors.white,
            borderRadius: size.width * 2,
            justifyContent: 'center',
            paddingHorizontal: size.width * 4,
            marginBottom: size.height * 2,
        },
        optionText: {
            color: colors.text_Primary,
            fontSize: size.fontSize * 3.3,
            fontFamily: fonts.medium,
            textAlign: 'center',
        },
        yearLabel: {
            color: colors.text_Primary,
            fontSize: size.fontSize * 3.5,
            fontFamily: fonts.semiBold,
            marginBottom: size.height * 1.5,
        },
        yearGrid: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginBottom: size.height * 3,
        },
        menuIcon: {
            width: size.width * 5.5,
            height: size.width * 5.5,
            tintColor: '#0C0032A8',
        },

        activeMenuIcon: {
            width: size.width * 5.5,
            height: size.width * 5.5,
            tintColor: colors.white,
        },
    });
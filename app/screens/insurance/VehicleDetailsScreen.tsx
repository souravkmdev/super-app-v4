import React, { useMemo, useState } from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Header from '../../globalComponents/Header';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { colors } from '../../utils/constants/Theme';
import StepperBar from '../booking/components/StepperBar';
import VehicleBannerCard from './components/VehicleBannerCard';
import VehicleDetailsFormCard from './components/VehicleDetailsForm';
import SelectionModal from './components/SelectionModal';

const VehicleDetailsScreen = ({ navigation }: any) => {
    const size = useSizeConfig();
    const styles = useMemo(() => getStyles(size), [size],);
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedFuel, setSelectedFuel] = useState('Petrol');
    const [selectedVariant, setSelectedVariant] = useState('');
    const [showModelModal, setShowModelModal] = useState(false);
    const [showVariantModal, setShowVariantModal] = useState(false);

    const modelItems = [
        { label: 'Swift', value: 'swift' },
        { label: 'Baleno', value: 'baleno' },
        { label: 'Brezza', value: 'brezza' },
    ];

    const variantItems = [
        { label: 'LXI', value: 'lxi' },
        { label: 'VXI', value: 'vxi' },
        { label: 'ZXI', value: 'zxi' },
    ];

    return (
        <LinearGradient
            colors={['#F3F3FF', '#F3F3FD', '#F3F3FF']}
            style={styles.container}
        >
            <StatusBar
                barStyle="dark-content" />

            <LinearGradient
                colors={['#d3cafb', '#e3dcffd2', '#F3F3FF']}
                style={styles.gradientContainer}
            >

                <Header
                    title="Insurance"
                    onPress={() => navigation.goBack()}
                />

            </LinearGradient>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >

                <StepperBar
                    currentStep={1}
                    steps={[
                        {
                            id: 1,
                            label: 'Details',
                        },
                        {
                            id: 2,
                            label: 'Outlet',
                        },
                        {
                            id: 3,
                            label: 'Contact details',
                        },
                    ]}
                />

                <View style={styles.bannerCard}>
                    <VehicleBannerCard />
                </View>
                <View style={styles.formContainer}>
                    <VehicleDetailsFormCard navigation={navigation}
                        selectedModel={selectedModel}
                        setSelectedModel={setSelectedModel}
                        selectedFuel={selectedFuel}
                        setSelectedFuel={setSelectedFuel}
                        selectedVariant={selectedVariant}
                        setSelectedVariant={setSelectedVariant}
                        onModelPress={() => setShowModelModal(true)}
                        onVariantPress={() => setShowVariantModal(true)}
                    />
                </View>

            </ScrollView>

            <SelectionModal
                visible={showModelModal}
                title="Select Model"
                data={modelItems}
                onClose={() => setShowModelModal(false)}
                onSelect={(item: { label: string; value: string }) =>
                    setSelectedModel(item.label)
                }
            />

            <SelectionModal
                visible={showVariantModal}
                title="Select Variant"
                data={variantItems}
                onClose={() => setShowVariantModal(false)}
                onSelect={(item: { label: string; value: string }) =>
                    setSelectedVariant(item.label)
                }
            />

        </LinearGradient>
    );
};

export default VehicleDetailsScreen;

const getStyles = (size: any) =>
    StyleSheet.create({

        container: {
            flex: 1,
        },

        gradientContainer: {
            height: size.height * 26,
        },

        scrollContent: {
            paddingHorizontal: size.width * 5,
            paddingBottom: size.height * 10,
        },

        stepperContainer: {
            alignItems: 'center',
            zIndex: 10,
        },

        bannerCard: {
            marginTop: size.height * 3,
        },
        formContainer: {
            marginTop: size.height * 2.5,
        },

    });
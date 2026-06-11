import React, { useMemo, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';

import Header from '../../globalComponents/Header';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import StepperBar from '../booking/components/StepperBar';
import VehicleBannerCard from './components/VehicleBannerCard';
import VehicleDetailsFormCard from './components/VehicleDetailsForm';
import SelectionModal from './components/SelectionModal';
import HeaderLinearGradient from '../../globalComponents/HeaderLinearGradient';

const VehicleDetailsScreen = ({ navigation }: any) => {
  const size = useSizeConfig();
  const styles = useMemo(() => getStyles(size), [size]);
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
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <HeaderLinearGradient />

      <Header title="Insurance" onPress={() => navigation.goBack()} />

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
          <VehicleDetailsFormCard
            navigation={navigation}
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
    </View>
  );
};

export default VehicleDetailsScreen;

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7Fe',
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
      marginTop: size.height * 9,
    },
    formContainer: {
      marginTop: size.height * 2,
    },
  });

import React from 'react';
import { StyleSheet, View } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import { Step } from '../types/ebooking.types';

interface StepperBarProps {
  currentStep: number;
  steps?: Step[];
}

const BOOKING_STEPS: Step[] = [
  { id: 1, label: 'Details' },
  { id: 2, label: 'Outlet' },
  { id: 3, label: 'Payments' },
  { id: 4, label: 'Confirm' },
];

const StepperBar: React.FC<StepperBarProps> = ({
  currentStep,
  steps = BOOKING_STEPS,
}) => {
  const size = useSizeConfig();
  const styles = getStyles(size);

  return (
    <View style={styles.stepperContainer}>
      {steps.map((step, index) => {
        const isCompleted = step.id < currentStep;
        const isActive = step.id === currentStep;

        return (
          <React.Fragment key={step.id}>
            {index > 0 && <View style={styles.stepLine} />}

            <View style={styles.stepItem}>
              <View
                style={[
                  styles.stepCircle,
                  isActive && styles.stepCircleActive,
                  isCompleted && styles.stepCircleCompleted,
                ]}
              >
                {isCompleted || isActive ? (
                  <Entypo name="check" size={size.width * 3.5} color="#fff" />
                ) : (
                  <View style={styles.stepDotInactive} />
                )}
              </View>

              <Text
                style={[styles.stepLabel, isActive && styles.stepLabelActive]}
              >
                {step.label}
              </Text>
            </View>
          </React.Fragment>
        );
      })}
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    stepperContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingHorizontal: size.width * 8,
      marginTop: size.width * 5.6,
    },

    stepItem: {
      alignItems: 'center',
    },

    stepCircle: {
      width: size.width * 5.8,
      height: size.width * 5.8,
      borderRadius: size.width * 2.9,
      borderWidth: 2,
      borderColor: '#846AF470',
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 6,
    },

    stepCircleActive: {
      backgroundColor: colors.Color_5346EE,
      borderColor: colors.Color_5346EE,
    },

    stepCircleCompleted: {
      backgroundColor: '#6354f0',
      borderColor: colors.Color_5346EE,
    },

    stepDotInactive: {
      width: size.width * 1.7,
      height: size.width * 1.7,
      borderRadius: size.width * 0.85,
      backgroundColor: '#6354f0',
    },

    stepLabel: {
      fontSize: size.fontSize * 2.4,
      color: colors.text_Secondary,
      fontFamily: fonts.bold,
      textAlign: 'center',
      position: 'absolute',
      width: size.width * 17,
      bottom: -size.width * 3.5,
    },

    stepLabelActive: {
      color: colors.Color_5346EE,
    },

    stepLine: {
      flex: 1,
      height: 2,
      backgroundColor: '#846AF470',
      marginTop: size.width * 2.6,
      borderRadius: 1,
    },
  });

export default StepperBar;

import React from 'react';
import { StyleSheet, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
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
                        {index > 0 && (
                            <View
                                style={[
                                    styles.stepLine,
                                    step.id <= currentStep && styles.stepLineActive,
                                ]}
                            />
                        )}

                        <View style={styles.stepItem}>
                            <View
                                style={[
                                    styles.stepCircle,
                                    isActive && styles.stepCircleActive,
                                    isCompleted && styles.stepCircleCompleted,
                                ]}
                            >
                                {isCompleted || isActive ? (
                                    <Ionicons name="checkmark" size={14} color="#fff" />
                                ) : (
                                    <View style={styles.stepDotInactive} />
                                )}
                            </View>

                            <Text
                                style={[
                                    styles.stepLabel,
                                    isActive && styles.stepLabelActive,
                                ]}
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
            width: size.width * 12,
        },

        stepCircle: {
            width: size.width * 5.8,
            height: size.width * 5.8,
            borderRadius: size.width * 2.9,
            borderWidth: 2,
            borderColor: '#C5C0E8',
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
            backgroundColor: colors.Color_5346EE,
            borderColor: colors.Color_5346EE,
        },

        stepDotInactive: {
            width: size.width * 1.7,
            height: size.width * 1.7,
            borderRadius: size.width * 0.85,
            backgroundColor: '#C5C0E8',
        },

        stepLabel: {
            fontSize: size.fontSize * 2.3,
            color: colors.text_Secondary,
            fontFamily: fonts.semiBold,
            textAlign: 'center',
        },

        stepLabelActive: {
            color: colors.Color_5346EE,
        },

        stepLine: {
            flex: 1,
            height: 2,
            backgroundColor: '#D4D0EE',
            marginTop: size.width * 2.6,
            borderRadius: 1,
        },

        stepLineActive: {
            backgroundColor: '#846AF470',
        },
    });

export default StepperBar;
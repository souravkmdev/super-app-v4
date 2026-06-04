import React, { useMemo } from 'react';
import {
    Modal,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { Text } from '../../../globalComponents/CustomText';
import CustomButton from '../../../globalComponents/CustomButton';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import FormField from './FormFeild';

const ContactDetailsBottomSheet = ({
    visible,
    onClose,
    name,
    setName,
    phone,
    setPhone,
    employeeName,
    setEmployeeName,
    employeeId,
    setEmployeeId,
    isChecked,
    setIsChecked,
    onSubmit,
}: any) => {

    const size = useSizeConfig();

    const styles = useMemo(
        () => getStyles(size),
        [size],
    );

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.sheet}>

                    <View style={styles.handle} />

                    <Text style={styles.title}>
                        Enter Contact Details
                    </Text>

                    <FormField
                        icon={
                            <Ionicons
                                name="person"
                                size={15}
                                color="#8B6FFF"
                            />
                        }
                        placeholder="Name"
                        value={name}
                        onChangeText={setName}
                    />

                    <FormField
                        icon={
                            <Ionicons
                                name="call"
                                size={15}
                                color="#8B6FFF"
                            />
                        }
                        placeholder="Phone Number"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                    />

                    <View style={styles.infoRow}>
                        <TouchableOpacity
                            onPress={() =>
                                setIsChecked(!isChecked)
                            }
                        >
                            <Ionicons
                                name={
                                    isChecked
                                        ? 'checkbox'
                                        : 'square-outline'
                                }
                                size={15}
                                color="#8B6FFF"
                            />
                        </TouchableOpacity>

                        <Text style={styles.infoText}>
                            Your details are safe with us.
                            We never share your information.
                        </Text>
                    </View>

                    <Text style={styles.sectionTitle}>
                        Referred By
                    </Text>

                    <FormField
                        icon={
                            <Ionicons
                                name="person"
                                size={15}
                                color="#8B6FFF"
                            />
                        }
                        placeholder="Employee Name"
                        value={employeeName}
                        onChangeText={setEmployeeName}
                    />

                    <FormField
                        icon={
                            <Ionicons
                                name="briefcase"
                                size={15}
                                color="#8B6FFF"
                            />
                        }
                        placeholder="Employee ID"
                        value={employeeId}
                        onChangeText={setEmployeeId}
                    />

                    <CustomButton
                        TextValue="Submit"
                        mainstyle={styles.buttonMain}
                        PressableStyle={styles.buttonPressable}
                        GradientColors={['#6F63F6', '#A79AF8',]}
                        OnPress={onSubmit}
                    />
                </View>
            </View>
        </Modal>
    );
};

export default ContactDetailsBottomSheet;

const getStyles = (size: any) =>
    StyleSheet.create({
        overlay: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.4)',
        },

        sheet: {
            backgroundColor: '#FFF',
            borderTopLeftRadius: size.width * 6,
            borderTopRightRadius: size.width * 6,
            padding: size.width * 5,
        },

        handle: {
            width: size.width * 15,
            height: size.height * 0.6,
            backgroundColor: '#D8D2FF',
            borderRadius: 10,
            alignSelf: 'center',
            marginBottom: size.height * 5,
        },

        title: {
            fontFamily: fonts.semiBold,
            fontSize: size.fontSize * 4,
            color: colors.text_Primary,
            marginBottom: size.height * 2.5,
        },

        infoRow: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: size.height,
            marginBottom: size.height * 2,
        },

        infoText: {
            flex: 1,
            color: '#8B6FFF',
            fontFamily: fonts.medium,
            fontSize: size.fontSize * 3,
            marginLeft: size.width * 2,
            lineHeight: 18,
        },

        sectionTitle: {
            fontFamily: fonts.semiBold,
            fontSize: size.fontSize * 3.5,
            marginBottom: size.height * 2,
            color: colors.text_Primary,
        },

        buttonMain: {
            marginTop: size.height * 5,
            borderRadius: size.width * 3,
        },

        buttonPressable: {
            height: size.height * 12,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
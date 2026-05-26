import React, { useState } from 'react';
import {
    FlatList,
    Modal,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import { DropdownItem } from '../types/ebooking.types';

interface DropdownProps {
    label: string;
    value: string;
    items: DropdownItem[];
    onSelect: (item: DropdownItem) => void;
    icon?: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ label, value, items, onSelect, icon }) => {
    const size = useSizeConfig();
    const styles = getStyles(size);
    const [visible, setVisible] = useState(false);

    const selectedItem = items.find(i => i.value === value);

    return (
        <>
            <TouchableOpacity
                style={styles.dropdownContainer}
                activeOpacity={0.8}
                onPress={() => setVisible(true)}
            >
                <View style={styles.dropdownLeft}>
                    {icon}
                    <View style={styles.dropdownTextBlock}>
                        <Text style={styles.dropdownLabel}>{label}</Text>
                        <Text style={styles.dropdownValue}>
                            {selectedItem ? selectedItem.label : `Select ${label}`}
                        </Text>
                    </View>
                </View>
                <Ionicons name="chevron-down" size={22} color="#000" />
            </TouchableOpacity>

            <Modal
                visible={visible}
                transparent
                animationType="fade"
                onRequestClose={() => setVisible(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setVisible(false)}
                >
                    <View style={styles.modalSheet}>
                        <Text style={styles.modalTitle}>Select {label}</Text>
                        <FlatList
                            data={items}
                            keyExtractor={item => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[
                                        styles.modalItem,
                                        item.value === value && styles.modalItemSelected,
                                    ]}
                                    onPress={() => {
                                        onSelect(item);
                                        setVisible(false);
                                    }}
                                >
                                    <Text
                                        style={[
                                            styles.modalItemText,
                                            item.value === value && styles.modalItemTextSelected,
                                        ]}
                                    >
                                        {item.label}
                                    </Text>
                                    {item.value === value && (
                                        <Ionicons
                                            name="checkmark"
                                            size={18}
                                            color={colors.Color_5346EE}
                                        />
                                    )}
                                </TouchableOpacity>
                            )}
                            ItemSeparatorComponent={() => (
                                <View style={styles.modalSeparator} />
                            )}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </>
    );
};

const getStyles = (size: any) =>
    StyleSheet.create({
        dropdownContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: colors.white,
            borderRadius: size.width * 4,
            paddingVertical: size.width * 4,
            paddingHorizontal: size.width * 4,
            borderWidth: 1,
            borderColor: '#D9D0FF',
        },

        dropdownLeft: {
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
        },

        dropdownTextBlock: {
            marginLeft: size.width * 3,
            flex: 1,
        },

        dropdownLabel: {
            fontSize: size.fontSize * 2,
            color: '#7A7692',
            fontFamily: fonts.medium,
            marginBottom: 2,
        },

        dropdownValue: {
            fontSize: size.fontSize * 3,
            color: colors.text_Primary,
            fontFamily: fonts.medium,
        },

        modalOverlay: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.4)',
            justifyContent: 'flex-end',
        },

        modalSheet: {
            backgroundColor: colors.white,
            borderTopLeftRadius: size.width * 6,
            borderTopRightRadius: size.width * 6,
            paddingTop: size.width * 5,
            paddingBottom: size.width * 10,
            maxHeight: '60%',
        },

        modalTitle: {
            fontSize: size.fontSize * 3,
            fontFamily: fonts.bold,
            color: colors.text_Primary,
            textAlign: 'center',
            marginBottom: size.width * 4,
        },

        modalItem: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: size.width * 4,
            paddingHorizontal: size.width * 6,
        },

        modalItemSelected: {
            backgroundColor: '#F1EEFF',
        },

        modalItemText: {
            fontSize: size.fontSize * 2.5,
            color: colors.text_Primary,
            fontFamily: fonts.medium,
        },

        modalItemTextSelected: {
            color: colors.Color_5346EE,
            fontFamily: fonts.bold,
        },

        modalSeparator: {
            height: 1,
            backgroundColor: '#ECECEC',
            marginHorizontal: size.width * 5,
        },
    });

export default Dropdown;
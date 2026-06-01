import React, { useMemo } from 'react';
import {
  Modal,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

const SelectionModal = ({
  visible,
  title,
  data,
  onClose,
  onSelect,
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
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.sheet}>
          <Text style={styles.title}>
            {title}
          </Text>

          <FlatList
            data={data}
            keyExtractor={item => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                <Text style={styles.itemText}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default SelectionModal;

const getStyles = (size: any) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.4)',
    },

    sheet: {
      backgroundColor: colors.white,
      borderTopLeftRadius: size.width * 6,
      borderTopRightRadius: size.width * 6,
      padding: size.width * 5,
      maxHeight: '60%',
    },

    title: {
      textAlign: 'center',
      fontFamily: fonts.semiBold,
      marginBottom: size.height * 2,
    },

    item: {
      paddingVertical: size.height * 2,
    },

    itemText: {
      fontFamily: fonts.medium,
    },
  });
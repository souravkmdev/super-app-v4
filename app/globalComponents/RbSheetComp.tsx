import React, {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import { SizeConfig } from '../assets/size/size';
import { colors } from '../utils/constants/Theme';

export type RbSheetRef = {
  open: () => void;
  close: () => void;
};

type RbSheetCompProps = {
  children: ReactNode;
  sheetContStyle?: StyleProp<ViewStyle>;
};

const RbSheetComp = forwardRef<RbSheetRef, RbSheetCompProps>(
  ({ children, sheetContStyle }, ref) => {
    const [visible, setVisible] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setVisible(true),
      close: () => setVisible(false),
    }));

    const styles = getStyles(SizeConfig);

    return (
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        statusBarTranslucent
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={() => setVisible(false)}
          />

          <View style={[styles.sheetContainer, sheetContStyle]}>
            <View style={styles.handle} />

            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={styles.scrollContent}
            >
              {children}
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  },
);

const getStyles = (size: any) =>
  StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.4)',
    },

    sheetContainer: {
      backgroundColor: colors.white,
      height: '70%',
      borderTopLeftRadius: size.width * 5,
      borderTopRightRadius: size.width * 5,
      overflow: 'hidden',
    },

    handle: {
      alignSelf: 'center',
      width: size.width * 15,
      height: size.width * 1.3,
      borderRadius: 5,
      backgroundColor: '#C1B3FF',
      marginTop: size.height * 2,
    },

    scrollContent: {
      paddingHorizontal: size.width * 5,
      paddingBottom: size.height * 5,
    },
  });

export default RbSheetComp;

import React, { useMemo } from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Image,
} from 'react-native';

import CustomButton from './CustomButton';
import { Text } from './CustomText';

import { useSizeConfig } from '../utils/context/SizeConfig';
import { colors, fonts } from '../utils/constants/Theme';

interface ThankYouModalProps {
  visible: boolean;
  image: any;
  title: string;
  description: string;
  buttonText: string;
  onButtonPress: () => void;
}

const ThankYouModal = ({
  visible,
  image,
  title,
  description,
  buttonText,
  onButtonPress,
}: ThankYouModalProps) => {

  const size = useSizeConfig();

  const styles = useMemo(
    () => getStyles(size),
    [size],
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>

          <Image
            source={image}
            resizeMode="contain"
            style={styles.image}
          />

          <Text style={styles.title}>
            {title}
          </Text>

          <Text style={styles.description}>
            {description}
          </Text>

          <CustomButton
            TextValue={buttonText}
            mainstyle={styles.buttonMain}
            PressableStyle={styles.buttonPressable}
            OnPress={onButtonPress}
          />

        </View>
      </View>
    </Modal>
  );
};

export default ThankYouModal;

const getStyles = (size: any) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.45)',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: size.width * 5,
    },

    container: {
      width: '86%',
      backgroundColor: colors.white,
      borderRadius: size.width * 5,
      paddingTop: size.height * 4,
      paddingBottom: size.height * 4,
      paddingHorizontal: size.width * 5,
      alignItems: 'center',
      minHeight: size.height * 50,
    },

    image: {
      width: size.width * 30,
      height: size.width * 30,
      marginTop: size.height,
      marginBottom: size.height * 2,
    },

    title: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 5.2,
      color: colors.text_Primary,
      textAlign: 'center',
      marginBottom: size.height * 1.5,
    },

    description: {
      width: '90%',
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.8,
      color: colors.text_Secondary,
      textAlign: 'center',
      marginBottom: size.height * 4,
    },

    buttonMain: {
      width: '100%',
      borderRadius: size.width * 3,
      marginTop: size.height,
    },

    buttonPressable: {
      height: size.height * 13,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
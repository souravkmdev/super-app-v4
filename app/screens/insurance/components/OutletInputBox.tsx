import React, { useMemo } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

type Props = {
  icon?: any;
  label: string;
  style?: any;
  imageIcon?: any;
  onPress?: () => void;
};

const OutletInputBox = ({
  icon,
  label,
  style,
  imageIcon,
  onPress,
}: Props) => {

  const size = useSizeConfig();
  const styles = useMemo(() => getStyles(size),[size],);

  return (
    <TouchableOpacity
    onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.container,
        style,
      ]}
    >

      <View style={styles.leftContainer}>

        {
          imageIcon ? (
            <Image
              source={imageIcon}
              style={styles.iconImage}
              resizeMode="contain"
            />
          ) : (
            <Ionicons
              name={icon}
              size={size.width * 5}
              color="#987BF6"
            />
          )
        }

        <Text style={styles.label}>
          {label}
        </Text>

      </View>

      <Ionicons
        name="chevron-down"
        size={size.width * 5}
        color="#17133C"
      />

    </TouchableOpacity>
  );
};

export default OutletInputBox;

const getStyles = (size: any) =>
  StyleSheet.create({

    container: {
      height: size.height * 12,
      borderRadius: size.width * 3,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: '#FFFFFF',
      paddingHorizontal: size.width * 4,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    leftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    label: {
      marginLeft: size.width * 3,
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3,
      color: colors.text_Primary,
    },
    iconImage: {
      width: size.width * 5,
      height: size.width * 5,
    },


  });
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMemo } from 'react';
import { colors, fonts } from '../../../utils/constants/Theme';
import { Text } from '../../../globalComponents/CustomText';

interface NotificationCardsProps {
  title: string;
  description: string;
  time: string;
  buttonText?: string;
  onPress?: () => void;
}

const NotificationCards = ({
  title,
  description,
  time,
  buttonText,
  onPress,
}: NotificationCardsProps) => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.paymentCard}
      onPress={onPress}
    >
      <View style={styles.vehicleIconContainer}>
        <Ionicons
          name="car-sport-sharp"
          size={size.width * 7}
          color={'#5B4CF0'}
        />
      </View>

      <View style={styles.paymentDetails}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.paymentTitle}
        >
          {title}
        </Text>

        <Text style={styles.requestedText}>{description}</Text>

      
      </View>

      <Text style={styles.timeText}>{time}</Text>
    </TouchableOpacity>
  );
};

export default NotificationCards;

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    paymentCard: {
      paddingVertical: size.width * 4,
      paddingHorizontal : size.width * 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },

    vehicleIconContainer: {
      width: size.width * 14,
      height: size.width * 14,
      justifyContent: 'center',
      alignItems: 'center',
    },

    paymentDetails: {
      flex: 1,
      marginLeft: size.width * 4,
      gap: size.height * 1.2,
      alignItems: 'flex-start',
    },

    paymentTitle: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 3.5,
      color: '#12003A',
      width: size.width * 40,
    },

    requestedText: {
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.6,
      color: '#7B74A1',
      width: size.width * 45,
    },

    buttonText: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3,
      color: colors.primary,
    },

    pressableStyle: {
      paddingHorizontal: size.width * 3,
      paddingVertical: size.height * 0.7,
    },

    buttonContainer: {
      borderRadius: size.width * 1.7,
      marginTop: size.height,
    },

    timeText: {
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.5,
      color: '#00000094',
    },
  });
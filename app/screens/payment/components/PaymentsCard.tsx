import { memo, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Text } from '../../../globalComponents/CustomText';
import { colors, fonts } from '../../../utils/constants/Theme';
import { useSizeConfig } from '../../../utils/context/SizeConfig';

interface PaymentsCardProps {
  title: string;
  requestedBy: string;
  purpose: string;
  date: string;
  time: string;
  rupees: number;
  status: 'Success' | 'Expired';
}

const PaymentsCard = ({
  title,
  requestedBy,
  purpose,
  date,
  time,
  rupees,
  status,
}: PaymentsCardProps) => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  const isSuccess = status?.toLowerCase() === 'success';

  const amountColor = isSuccess ? '#2DB84D' : '#E53935';

  const statusBgColor = isSuccess ? '#E8F5EC' : '#FDECEC';

  const statusTextColor = isSuccess ? '#2DB84D' : '#E53935';

  const statusIcon = isSuccess ? 'check-circle' : 'cancel';

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.paymentCard}>
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

        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={styles.requestedText}
        >
          Requested by
          <Text style={styles.requestedName}> {requestedBy}</Text>
        </Text>

        <Text style={styles.purposeText}>{purpose}</Text>

        <View style={styles.dateContainer}>
          <EvilIcons name="calendar" size={size.width * 4} color={'#846AF4'} />

          <Text style={styles.dateText}>
            {date} • {time}
          </Text>
        </View>
      </View>

      <View style={styles.rightContainer}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.amountText, { color: amountColor }]}
        >
          ₹{rupees}
        </Text>

        <View
          style={[styles.statusContainer, { backgroundColor: statusBgColor }]}
        >
          <MaterialIcons
            name={statusIcon}
            size={size.width * 3.3}
            color={statusTextColor}
          />

          <Text style={[styles.statusText, { color: statusTextColor }]}>
            {status}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(PaymentsCard);

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    paymentCard: {
      backgroundColor: colors.white,
      marginHorizontal: size.width * 4,
      borderRadius: size.width * 5,
      padding: size.width * 4,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },

    vehicleIconContainer: {
      width: size.width * 14,
      height: size.width * 14,
      borderRadius: size.width * 3,
      backgroundColor: '#EFEEFF',
      justifyContent: 'center',
      alignItems: 'center',
    },

    paymentDetails: {
      flex: 1,
      marginLeft: size.width * 4,
      gap: size.height * 1.2,
    },

    paymentTitle: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 3.8,
      color: '#12003A',
      width: size.width * 40,
    },

    requestedText: {
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.7,
      color: '#7B74A1',
      width: size.width * 40,
    },

    requestedName: {
      color: '#5B4CF0',
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 2.7,
    },

    purposeText: {
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.7,
      color: '#7B74A1',
    },

    dateContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: size.width,
    },

    dateText: {
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.5,
      color: '#0C003291',
    },

    rightContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: size.height * 3,
      alignSelf: 'center',
    },

    amountText: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 4,
      width: size.width * 25,
      textAlign: 'center',
    },

    statusContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: size.width * 3,
      paddingVertical: size.width,
      borderRadius: size.width * 10,
      gap: size.width * 1.5,
    },

    statusText: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 2.7,
      includeFontPadding: false,
      textTransform: 'capitalize',
    },
  });

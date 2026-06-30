// PaymentDetailsScreen.tsx
// NOTE: Skeleton single-file implementation.
// Replace import paths according to your project.

import React, { ReactNode, useMemo } from 'react';
import { View, ScrollView, StyleSheet, StatusBar, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Text } from '../../globalComponents/CustomText';

import { useSizeConfig } from '../../utils/context/SizeConfig';
import { colors, fonts } from '../../utils/constants/Theme';
import Header from '../../globalComponents/Header';
import CustomButton from '../../globalComponents/CustomButton';
import HeaderLinearGradient from '../../globalComponents/HeaderLinearGradient';
import LinearGradient from 'react-native-linear-gradient';
import { SizeConfig } from '../../assets/size/size';

const STATUS = {
  success: {
    title: 'Payment Success',
    color: colors.success,
    icon: 'credit-card-check-outline',
  },
  expired: {
    title: 'Payment Expired',
    color: colors.error,
    icon: 'credit-card-remove-outline',
  },
  pending: {
    title: 'Payment Pending',
    color: colors.warning,
    icon: 'clock-outline',
  },
  failed: {
    title: 'Payment Failed',
    color: colors.error,
    icon: 'close-circle-outline',
  },
};

const DetailRow = ({
  label,
  value,
  styles,
}: {
  label: string;
  value: string;
  styles: any;
}) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const SectionCard = ({
  title,
  children,
  styles,
}: {
  title: string;
  children: ReactNode;
  styles: any;
}) => (
  <View style={styles.card}>
    {!!title && <Text style={styles.sectionTitle}>{title}</Text>}
    {children}
  </View>
);

export default function PaymentDetailsScreen({ navigation }: any) {
  const status = STATUS.success;

  const size = useSizeConfig();
  const styles = useMemo(() => getStyles(size), [size]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <HeaderLinearGradient />
      <Header title="Payments" onPress={() => navigation.goBack()} />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: size.width * 4,
          gap: size.height * 2,
          paddingTop: size.height * 3,
        }}
      >
        <LinearGradient
          colors={['#b5eaae', '#c4d8c2']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.statusCard}
        >
          <Image
            source={require('../../assets/images/payments/payment_success.png')}
            style={{
              width: size.width * 30,
              height: size.width * 30,
              resizeMode: 'contain',
              position: 'absolute',
              left: '5%',
              bottom: '-15%',
            }}
          />
          <View>
            <Text
              style={[
                styles.status,
                { color: status.color, textAlign: 'right' },
              ]}
            >
              {status.title}
            </Text>
            <Text
              style={{
                fontFamily: fonts.semiBold,
                color: '#0C00328C',
                fontSize: size.fontSize * 3,
                textAlign: 'right',
              }}
            >
              Your payment of
            </Text>
            <Text
              style={[
                styles.amount,
                {
                  color: status.color,
                  textAlign: 'right',
                  fontFamily: fonts.bold,
                  fontSize: size.fontSize * 4,
                },
              ]}
            >
              ₹5,00,000
            </Text>
          </View>
        </LinearGradient>

        <SectionCard styles={styles} title="Transaction Details">
          <DetailRow
            styles={styles}
            label="Payment Order ID"
            value="#4567ujgu98"
          />
        </SectionCard>

        <SectionCard styles={styles} title="Customer / Vehicle Details">
          <DetailRow styles={styles} label="Customer Name" value="VIKAS V" />
          <DetailRow
            styles={styles}
            label="Cust Id / Reg No"
            value="KA34M2345"
          />
          <DetailRow styles={styles} label="Requested By" value="Suhail S" />
          <DetailRow styles={styles} label="Purpose" value="Testing" />
        </SectionCard>

        <SectionCard styles={styles} title="Payment Made By">
          <DetailRow styles={styles} label="App User" value="VIKAS V" />
          <DetailRow
            styles={styles}
            label="Vehicle Owner"
            value="4kjhgfdsazXC"
          />
        </SectionCard>

        <SectionCard styles={styles} title="Bill Summary">
          <DetailRow styles={styles} label="Subtotal" value="₹5" />
          <DetailRow styles={styles} label="Total Savings" value="₹0" />
          <View style={styles.total}>
            <Text style={{ fontFamily: fonts.bold }}>Grand Total</Text>
            <View style={styles.badge}>
              <Text style={{ color: 'white' }}>₹5</Text>
            </View>
          </View>
        </SectionCard>

        <CustomButton
          TextValue="Share"
          OnPress={() => {}}
          mainstyle={{ marginTop: 20, marginBottom: 30 }}
        />
      </ScrollView>
    </View>
  );
}

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F3F3D',
    },
    statusCard: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      borderColor: colors.border,
      padding: size.width * 3,
      borderRadius: size.width * 4,
      alignItems: 'center',
      overflow: 'hidden',
      paddingVertical: size.height * 6,
    },
    status: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 3.5,
    },
    amount: { fontFamily: fonts.extraBold },
    card: {
      backgroundColor: 'white',
      borderRadius: size.width * 3,
      padding: size.width * 3,
      paddingHorizontal: size.width * 4,
      gap: size.height * 2,
    },
    sectionTitle: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3.3,
      color: colors.text_Primary,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    label: {
      color: colors.text_Secondary,
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3,
    },
    value: {
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 3,
      color: colors.text_Primary,
    },
    total: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 12,
    },
    badge: {
      backgroundColor: colors.primary,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
    },
  });

import React, { useMemo, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from '../../globalComponents/Header';
import CustomTabSwitcher from '../../globalComponents/CustomTabSwitcher';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import OrderCard from './components/OrderCard';
import { carOrders, serviceOrders } from './data';
import ProfileDetailCard from './components/DetialsCard';
import HeaderLinearGradient from '../../globalComponents/HeaderLinearGradient';

const YourOrdersScreen = ({ navigation }: any) => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('Cars');

  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <HeaderLinearGradient />

      <Header title="Your Orders" onPress={() => navigation.goBack()} />

      <View style={styles.tabContainer}>
        <CustomTabSwitcher
          leftTab="Cars"
          rightTab="Service"
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Cars Orders */}
        {activeTab === 'Cars' && (
          <>
            {carOrders.map(item => (
              <OrderCard
                key={item.id}
                image={item.image}
                title={item.title}
                subTitle={item.subTitle}
                paymentStatus={item.paymentStatus}
                bookingStatus={item.bookingStatus}
                dateTime={item.dateTime}
              />
            ))}
          </>
        )}

        {/* Service Orders */}
        {activeTab === 'Service' && (
          <>
            {serviceOrders.map(item => (
              <ProfileDetailCard
                key={item.id}
                iconName="car"
                title={item.serviceName}
                subTitle={item.vehicleName}
                status={item.bookingStatus}
                statusColor={
                  item.bookingStatus === 'Booked' ? '#45B649' : '#FF6B6B'
                }
                footerText={`Pickup At : ${item.pickupAt}`}
              />
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
};

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7Fe',
    },

    headerGradient: {
      height: insets.top + size.height * 14,
    },

    scrollContent: {
      paddingHorizontal: size.width * 4,
      paddingBottom: size.height * 5,
      paddingTop: size.height * 1,
    },
    tabContainer: {
      paddingHorizontal: size.width * 4,
      marginTop: size.height * 3,
    },
  });

export default YourOrdersScreen;

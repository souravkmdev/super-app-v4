import React, { useMemo } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../../globalComponents/Header';
import { Text } from '../../globalComponents/CustomText';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import QuickContactCard from './components/QuickContactCard';
import { colors, fonts } from '../../utils/constants/Theme';
import ProfileDetailCard from './components/DetialsCard';
import { headQuarters } from './data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderLinearGradient from '../../globalComponents/HeaderLinearGradient';

const ContactUs = ({ navigation }: any) => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  const socialMedia = [
    {
      id: '1',
      title: 'Instagram',
      icon: require('../../assets/images/contactus/insta.png'),
    },
    {
      id: '2',
      title: 'Youtube',
      icon: require('../../assets/images/contactus/youtube.png'),
    },
    {
      id: '3',
      title: 'Facebook',
      icon: require('../../assets/images/contactus/facebook.png'),
    },
    {
      id: '4',
      title: 'Twitter',
      icon: require('../../assets/images/contactus/twit.png'),
    },
    {
      id: '5',
      title: 'LinkedIn',
      icon: require('../../assets/images/contactus/linkedin.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <HeaderLinearGradient />
      <Header title="Contact Us" onPress={() => navigation.goBack()} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* banner */}
        <Image
          source={require('../../assets/images/contactus/helpbnr.png')}
          style={styles.helpBanner}
          resizeMode="contain"
        />

        <Text style={styles.sectionTitle}>Quick Contact</Text>

        <View style={styles.quickContactRow}>
          <QuickContactCard
            iconComponent={
              <Ionicons name="call" size={size.width * 7} color="#846AF4" />
            }
            title="Call Support"
            subTitle="Speak to our team"
          />

          <QuickContactCard
            iconComponent={
              <Ionicons name="mail" size={size.width * 7} color="#846AF4" />
            }
            title="Email Us"
            subTitle="Drop us an email"
          />

          <QuickContactCard
            icon={require('../../assets/images/contactus/whatsapp.png')}
            title="WhatsApp"
            subTitle="Chat with support"
          />
        </View>

        <Text style={styles.sectionTitle}>Head Quarters</Text>

        {headQuarters.map(item => (
          <ProfileDetailCard
            key={item.id}
            iconName="business"
            title={item.branchName}
            subTitle={item.address}
            contactButtonText="Contact us"
            onContactPress={() => {}}
            titleStyle={styles.hqTitle}
            subTitleStyle={styles.hqSubTitle}
          />
        ))}

        <Text style={styles.sectionTitle}>Connect with Us</Text>

        <View style={styles.socialMediaRow}>
          {socialMedia.map(item => (
            <View key={item.id} style={styles.socialCard}>
              <Image
                source={item.icon}
                style={styles.socialIcon}
                resizeMode="contain"
              />

              <Text style={styles.socialTitle}>{item.title}</Text>
            </View>
          ))}
        </View>
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
    },
    helpBanner: {
      width: '100%',
      height: size.height * 35,
      marginTop: size.height * 2.5,
    },
    sectionTitle: {
      marginTop: size.height * 2,
      marginBottom: size.height * 1.5,
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 4,
      color: colors.text_Primary,
    },

    quickContactRow: {
      flexDirection: 'row',
      gap: size.width * 3,
    },
    hqTitle: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 3.3,
      color: colors.text_Primary,
    },

    hqSubTitle: {
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 3,
      color: colors.text_Secondary,
    },
    socialMediaRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    socialCard: {
      width: size.width * 15,
      height: size.width * 16,
      backgroundColor: colors.white,
      borderRadius: size.width * 3,
      alignItems: 'center',
      justifyContent: 'center',
    },

    socialIcon: {
      width: size.width * 7,
      height: size.width * 7,
    },

    socialTitle: {
      marginTop: size.height * 0.8,
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 2.4,
      color: colors.text_Primary,
    },
  });

export default ContactUs;

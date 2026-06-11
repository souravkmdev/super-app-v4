import React, { useMemo } from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../../globalComponents/Header';
import CustomButton from '../../globalComponents/CustomButton';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import Verificationsub from './components/Verificationsub';
import InfoCard from './components/InfoCard';
import HeaderLinearGradient from '../../globalComponents/HeaderLinearGradient';

const ProfileVerification = ({ navigation }: any) => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <HeaderLinearGradient />
      <Header
        title="Profile Verification"
        onPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Verificationsub />

        <View style={{ marginTop: size.height * 2 }}>
          <InfoCard
            data={[
              {
                icon: require('../../assets/images/profile/verify.png'),
                title: 'Verified Profile',
                subTitle: 'Your identity has been confirmed',
                showCheck: true,
              },
              {
                icon: require('../../assets/images/profile/secure.png'),
                title: 'Secure & Trusted',
                subTitle: 'Enjoy a safe and trusted experience',
                showCheck: true,
              },
              {
                icon: require('../../assets/images/profile/benifits.png'),
                title: 'Unlock All Benefits',
                subTitle: 'Access exclusive offers and features',
                showCheck: true,
              },
            ]}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton
          TextValue="Explore Products"
          PressableStyle={styles.button}
          OnPress={() => navigation.navigate('BottomNavigation')}
        />
      </View>
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
      paddingHorizontal: size.width * 3,
      paddingBottom: size.height * 5,
    },

    buttonContainer: {
      paddingHorizontal: size.width * 3,
      paddingBottom: size.height * 3,
    },

    button: {
      paddingVertical: size.height * 4,
    },
  });

export default ProfileVerification;

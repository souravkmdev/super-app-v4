import React, { useMemo } from 'react';
import { FlatList, Image, StatusBar, StyleSheet, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';

import { useSizeConfig } from '../../utils/context/SizeConfig';
import { Text } from '../../globalComponents/CustomText';
import { colors, fonts } from '../../utils/constants/Theme';

import SubSections from './components/subSections';
import CustomButton from '../../globalComponents/CustomButton';
import { logIn, logOut } from './data';

const Profile = () => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  const isLoggedIn = true;

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <FlatList
        data={isLoggedIn ? logIn : logOut}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => <SubSections title={item} />}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <Image
              source={require('../../assets/images/profile/profileBg.png')}
              style={styles.backgroundImage}
              resizeMode="cover"
            />

            <View style={styles.overlayContainer}>
              <Text style={styles.profileTitle}>Profile</Text>

              {isLoggedIn ? (
                <View style={styles.profileInfoContainer}>
                  <View style={styles.avatarOuterContainer}>
                    <View style={styles.avatarContainer}>
                      <Text style={styles.avatarText}>S</Text>
                    </View>
                  </View>

                  <View style={styles.userDetailsContainer}>
                    <Text style={styles.userName}>Hello, Suhail</Text>

                    <Text style={styles.phoneNumber}>+91 12345 67890</Text>
                  </View>
                </View>
              ) : (
                <View
                  style={{
                    gap: size.height * 5,
                    marginTop: size.height * 5,
                    marginBottom: size.height * 3,
                  }}
                >
                  <View style={styles.loginContainer}>
                    <View style={styles.avatarOuterContainer}>
                      <View style={styles.loginAvatarContainer}>
                        <Feather
                          name="user"
                          size={size.width * 7}
                          color={colors.primary}
                        />
                      </View>
                    </View>

                    <View style={styles.loginTextContainer}>
                      <Text style={styles.loginTitle}>Login / Sign Up</Text>

                      <Text style={styles.loginSubtitle}>
                        Login to access your profile and manage your account
                      </Text>
                    </View>
                  </View>
                  <CustomButton
                    TextValue="Login / Sign Up"
                    PressableStyle={{
                      paddingVertical: size.height * 2.5,
                    }}
                    TextStyle={{ fontFamily: fonts.bold }}              
                  />
                </View>
              )}
            </View>
          </View>
        }
      />
    </View>
  );
};

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },

    listContent: {
      paddingBottom: size.height * 3,
      gap: size.height,
    },

    headerContainer: {
      position: 'relative',
      paddingHorizontal: size.width * 5,
    },

    backgroundImage: {
      width: size.deviceWidth,
      height: size.width * 52,
      position: 'absolute',
      top: 0,
    },

    overlayContainer: {
      paddingTop: insets.top + size.width * 7,
      gap: size.height * 2,
      marginBottom: size.height * 2,
    },

    profileTitle: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 4.5,
      color: colors.text_Primary,
      textAlign: 'center',
    },

    profileInfoContainer: {
      marginTop: size.height * 4,
      alignItems: 'center',
      gap: size.height * 3,
    },

    avatarOuterContainer: {
      width: size.width * 16,
      height: size.width * 16,
      borderRadius: size.width * 8,

      backgroundColor: '#9580f540',

      alignItems: 'center',
      justifyContent: 'center',
    },

    avatarContainer: {
      width: size.width * 13,
      height: size.width * 13,
      borderRadius: size.width * 6.5,

      backgroundColor: colors.primary,

      alignItems: 'center',
      justifyContent: 'center',
    },

    loginAvatarContainer: {
      width: size.width * 14,
      height: size.width * 14,
      borderRadius: size.width * 7,

      backgroundColor: '#FAF7FF',

      alignItems: 'center',
      justifyContent: 'center',
    },

    avatarText: {
      fontFamily: fonts.extraBold,
      fontSize: size.fontSize * 5,
      color: colors.white,

      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    userDetailsContainer: {
      alignItems: 'center',
    },

    userName: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 4.2,
      color: colors.text_Primary,
    },

    phoneNumber: {
      marginTop: size.height * 0.4,

      fontFamily: fonts.medium,
      fontSize: size.fontSize * 3,
      color: '#9B9CB5',
    },

    loginContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    loginTextContainer: {
      flex: 1,
      marginLeft: size.width * 4,
      gap: size.height * 1.5,
    },

    loginTitle: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 4.2,
      color: colors.text_Primary,
    },

    loginSubtitle: {
      marginTop: size.height * 0.5,

      fontFamily: fonts.medium,
      fontSize: size.fontSize * 2.8,
      color: '#9B9CB5',

      lineHeight: size.fontSize * 4,
    },
  });

export default Profile;

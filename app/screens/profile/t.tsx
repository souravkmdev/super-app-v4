import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useSizeConfig } from '../../utils/context/SizeConfig';
import { Text } from '../../globalComponents/CustomText';
import { colors, fonts } from '../../utils/constants/Theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import SubSections from './components/subSections';
import { profileSections } from './data';

const Profile = () => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const styles = getStyles(size, insets);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'rgba(0, 0, 0, 0)'}
        barStyle={'dark-content'}
      />

      <ScrollView>
        <Image
          source={require('../../assets/images/profile/profileBg.png')}
          style={styles.backgroundImage}
        />
        <View style={styles.overlayContainer}>
          <Text style={styles.profileTitle}>Profile </Text>

          <View style={styles.profileInfoContainer}>
            <View style={styles.avatarOuterContainer}>
              <View style={styles.avatarContainer}>
                <Text style={styles.avatarText}>S</Text>
              </View>
            </View>

            <View style={{ gap: size.width }}>
              <Text style={styles.userName}>Hello, Suhail</Text>
              <Text style={styles.phoneNumber}>12345 67890</Text>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: insets.top + size.width * 5 }} />

        <FlatList
          data={profileSections}
          contentContainerStyle={{
            gap: size.width * 2,
            paddingHorizontal: size.width * 4,
          }}
          renderItem={({ item, index }) => (
            <SubSections title={item} />
          )}
        />
      </ScrollView>
    </View>
  );
};

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },

    backgroundImage: {
      width: size.deviceWidth,
      height: size.width * 50,
    },

    overlayContainer: {
      position: 'absolute',
      top: size.width * 7,
      left: 0,
      right: 0,
      paddingTop: insets.top,

      alignItems: 'center',
      justifyContent: 'center',
      gap: size.height * 7,
    },

    profileTitle: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 4.5,
      color: colors.text_Primary,
    },

    profileInfoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: size.height * 2,
    },

    avatarOuterContainer: {
      backgroundColor: '#9580f55b',
      width: size.width * 15,
      height: size.width * 15,
      borderRadius: size.width * 8,

      alignItems: 'center',
      justifyContent: 'center',
    },

    avatarContainer: {
      backgroundColor: colors.primary,
      width: size.width * 13,
      height: size.width * 13,
      borderRadius: size.width * 10,

      alignItems: 'center',
      justifyContent: 'center',
    },

    avatarText: {
      fontFamily: fonts.extraBold,
      fontSize: size.fontSize * 5,
      color: colors.white,

      includeFontPadding: false,
      textAlignVertical: 'center',

      lineHeight: size.fontSize * 4.5,
      marginTop: -1,
    },

    userName: {
      fontFamily: fonts.bold,
      fontSize: size.fontSize * 4.3,
      color: colors.text_Primary,
      textAlign: 'center',
    },

    phoneNumber: {
      fontFamily: fonts.medium,
      fontSize: size.fontSize * 3,
      color: '#9B9CB5',
      textAlign: 'center',
    },
  });

export default Profile;

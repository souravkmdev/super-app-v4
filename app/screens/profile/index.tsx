import { Image, StatusBar, StyleSheet, View } from 'react-native';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { Text } from '../../globalComponents/CustomText';
import { colors } from '../../utils/constants/Theme';

const Profile = () => {
  const size = useSizeConfig();
  const styles = getStyles(size);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'rgba(0, 0, 0, 0)'}
        barStyle={'dark-content'}
      />

      <View>
        <Image
          source={require('../../assets/images/profile/profileBg.png')}
          style={styles.backgroundImage}
        />

        <View style={styles.overlayContainer}>
          <Text>Profile</Text>

          <View style={styles.profileInfoContainer}>
            <View style={styles.avatarContainer}>
              <Text>S</Text>
            </View>

            <Text>Hello, Suhail</Text>
            <Text>+91 12345 67890</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },

    backgroundImage: {
      width: size.deviceWidth,
      height: size.width * 50,
    },

    overlayContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: size.height * 8,
      position: 'absolute',
      top: size.width * 10,
      left: 0,
      right: 0,
    },

    profileInfoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: size.height * 2,
    },

    avatarContainer: {
      backgroundColor: colors.primary,
      width: size.width * 13,
      height: size.width * 13,
      borderRadius: size.width * 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 4,
      borderColor: '#836af49c',
    },
  });

export default Profile;
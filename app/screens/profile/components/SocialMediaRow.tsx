import React, { useMemo } from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';

const SocialMediaRow = () => {
  const size = useSizeConfig();

  const styles = useMemo(
    () => getStyles(size),
    [size],
  );

  const socialMedia = [
    {
      id: '1',
      title: 'Instagram',
      icon: require('../../../assets/images/contactus/insta.png'),
    },
    {
      id: '2',
      title: 'Youtube',
      icon: require('../../../assets/images/contactus/youtube.png'),
    },
    {
      id: '3',
      title: 'Facebook',
      icon: require('../../../assets/images/contactus/facebook.png'),
    },
    {
      id: '4',
      title: 'Twitter',
      icon: require('../../../assets/images/contactus/twit.png'),
    },
    {
      id: '5',
      title: 'LinkedIn',
      icon: require('../../../assets/images/contactus/linkedin.png'),
    },
  ];

  return (
    <View style={styles.socialMediaRow}>
      {socialMedia.map(item => (
        <View key={item.id} style={styles.socialCard}>
          <Image
            source={item.icon}
            style={styles.socialIcon}
            resizeMode="contain"
          />

          <Text style={styles.socialTitle}>
            {item.title}
          </Text>
        </View>
      ))}
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    socialMediaRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    socialCard: {
      width: size.width * 15,
      height: size.width * 18,
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

export default SocialMediaRow;
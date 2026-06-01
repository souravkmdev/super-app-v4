import React, { useMemo } from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
const VehicleBannerCard = () => {
  const size = useSizeConfig();
  const styles = useMemo(() => getStyles(size),[size],);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/insurance/vehicle_banner.png')}
        style={styles.bannerImage}
        resizeMode="cover"
      />
    </View>
  );
};

export default VehicleBannerCard;

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      width: '100%',
      borderRadius: size.width * 3,
      overflow: 'hidden',
    },

    bannerImage: {
      width: '100%',
      height: size.height * 40,
    },

  });
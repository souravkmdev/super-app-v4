import { Image, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { useMemo, useRef, useState } from 'react';
import HeaderLinearGradient from '../../../globalComponents/HeaderLinearGradient';
import Header from '../../../globalComponents/Header';
import StepperBar from '../../../globalComponents/StepperBar';
import { colors, fonts } from '../../../utils/constants/Theme';
import CustomInputComp from '../../../globalComponents/CustomInputComp';
import { Text } from '../../../globalComponents/CustomText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { stepperData } from './data';


interface RbSheetRef {
  open: () => void;
  close: () => void;
}

const VehicleDetails = () => {
  const size = useSizeConfig();
  const styles = useMemo(() => getStyles(size), [size]);
  const sheetRef = useRef<RbSheetRef>(null);

  const [regNo, setRegNo] = useState<string>('');

  const checkIcon = (
    <Feather
      name="check-circle"
      size={size.width * 4.5}
      color={colors.success}
    />
  );

  const emptyCircleIcon = (
    <Feather name="circle" size={size.width * 4.5} color={colors.border} />
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <HeaderLinearGradient />
      <Header title="Selling Cars" onPress={() => {}} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <StepperBar currentStep={1} steps={stepperData} />

        <Image
          source={require('../../../assets/images/sell/sell_banner.png')}
          style={styles.bannerImage}
          resizeMode="contain"
        />

        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitle}>Personal Details</Text>

          <CustomInputComp
            LHSIcon={
              <FontAwesome
                name="user"
                size={size.width * 4.5}
                color={colors.buttonBgColor}
              />
            }
            RHSIcon={
              regNo.length > 0 ? (
                <Ionicons
                  name="close"
                  size={size.width * 4.5}
                  color={colors.text_Primary}
                />
              ) : null
            }
            PlaceholderName="Enter Registration Number"
            InputText={regNo}
            InputOnTextChange={setRegNo}
            placeholderTextColor={colors.lightBorder}
            compStyle={styles.inputContainer}
          />

          <CustomInputComp
            LHSIcon={
              <FontAwesome
                name="user"
                size={size.width * 4.5}
                color={colors.buttonBgColor}
              />
            }
            RHSIcon={
              regNo.length > 0 ? (
                <Ionicons
                  name="close"
                  size={size.width * 4.5}
                  color={colors.text_Primary}
                />
              ) : null
            }
            PlaceholderName="Enter Registration Number"
            InputText={regNo}
            InputOnTextChange={setRegNo}
            placeholderTextColor={colors.lightBorder}
            compStyle={styles.inputContainer}
          />

          <CustomInputComp
            LHSIcon={
              <FontAwesome
                name="user"
                size={size.width * 4.5}
                color={colors.buttonBgColor}
              />
            }
            RHSIcon={
              regNo.length > 0 ? (
                <Ionicons
                  name="close"
                  size={size.width * 4.5}
                  color={colors.text_Primary}
                />
              ) : null
            }
            PlaceholderName="Enter Registration Number"
            InputText={regNo}
            InputOnTextChange={setRegNo}
            placeholderTextColor={colors.lightBorder}
            compStyle={styles.inputContainer}
          />
        </View>
      </ScrollView>
      {/* <RbSheetComp
        ref={sheetRef}
        onChange={index => console.log('Sheet Index:', index)}
      >
        <Text>Hello Gorhom Sheet 🚀</Text>
      </RbSheetComp> */}
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7Fe',
    },
    scrollContent: {
      paddingHorizontal: size.width * 5,
      paddingBottom: size.height * 10,
      gap: size.height * 3,
    },
    bannerImage: {
      width: '100%',
      height: size.height * 40,
      marginTop: size.height * 4,
    },
    sectionBlock: {
      //   marginHorizontal: size.width * 3.7,
      marginBottom: size.width * 4.1,
      gap: size.height * 3,
    },

    sectionTitle: {
      fontSize: size.fontSize * 3.5,
      fontFamily: fonts.semiBold,
    },
    inputContainer: {
      backgroundColor: colors.white,
      gap: size.width * 3,
      paddingHorizontal: size.width * 5,
      borderColor: '#dbd3fe',
    },
  });

export default VehicleDetails;

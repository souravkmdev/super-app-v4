import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { Text } from '../../../globalComponents/CustomText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, fonts } from '../../../utils/constants/Theme';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/RootStackParamList';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type ExploreServiceItem = {
  id: number;
  title: string;
  subtitle: string;
  image: any;
  backgroundColor: string;
  screen: keyof RootStackParamList;
};

const servicesData: ExploreServiceItem[] = [
  {
    id: 1,
    title: 'New Cars',
    subtitle: 'Latest Models',
    image: require('../../../assets/images/home/car.png'),
    backgroundColor: '#7D73FF',
    screen: 'NewCarScreen',
  },
  {
    id: 2,
    title: 'Service',
    subtitle: 'Expert Care',
    image: require('../../../assets/images/home/service.png'),
    backgroundColor: '#8FB39A',
    screen: 'ServiceScreen',
  },
];

const ExploreServices = () => {
  const navigation = useNavigation<NavigationProp>();

  const size = useSizeConfig();
  const styles = getStyles(size);

  return (
    <View
      style={{
        gap: size.height * 3,
      }}
    >
      <Text style={styles.sectionTitle}>Explore Our Services</Text>

      <View style={styles.row}>
        {servicesData.map(item => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(item.screen as never)
              }}
              key={item.id}
              activeOpacity={0.9}
            >
              <LinearGradient
                colors={
                  item.id === 1
                    ? ['#604bfd', '#817bf9', '#604bfd', '#604bfd']
                    : ['#6a967e', '#91bd9b', '#6a967e', '#6a967e']
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.card}
              >
                <View style={styles.textContainer}>
                  <Text style={styles.cardTitle}>{item.title}</Text>

                  <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                </View>

                <Image
                  source={item.image}
                  style={styles.cardImage}
                  resizeMode="contain"
                />

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    navigation.navigate(item.screen as never)
                  }}
                  style={[
                    styles.arrowButton,
                    {
                      backgroundColor:
                        item.id === 1
                          ? 'rgba(148, 134, 250, 0.78)'
                          : 'rgba(126,165,138,0.78)',
                    },
                  ]}
                >
                  <Ionicons
                    name="chevron-forward-outline"
                    size={size.width * 4.2}
                    color={colors.white}
                    style={{
                      marginLeft: size.width * 0.4,
                    }}
                  />
                </TouchableOpacity>
              </LinearGradient>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    textContainer: {
      zIndex: 10,
      marginTop: size.height * -2,
    },
    sectionTitle: {
      paddingHorizontal: size.width * 4,
      color: colors.text_Primary,
      fontSize: size.fontSize * 3.5,
      fontFamily: fonts.bold,
      // marginBottom: size.height * 1.8,
    },

    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: size.width * 4,
    },

    card: {
      width: size.width * 44,
      height: size.height * 30,
      borderRadius: size.width * 5,
      overflow: 'hidden',
      padding: size.width * 4,
      justifyContent: 'flex-start',
    },

    cardTitle: {
      color: colors.white,
      fontSize: size.fontSize * 4.5,
      fontFamily: fonts.bold,
    },

    cardSubtitle: {
      color: 'rgba(255,255,255,0.85)',
      fontSize: size.fontSize * 2.6,
      fontFamily: fonts.medium,
    },

    cardImage: {
      position: 'absolute',
      right: -size.width * 3,
      bottom: 0,
      width: size.width * 34,
      height: size.width * 28,
    },

    arrowButton: {
      position: 'absolute',
      right: size.width * 1.2,
      bottom: size.height * 1.5,
      width: size.width * 7,
      height: size.width * 7,
      borderRadius: size.width * 4,
      borderWidth: 1.2,
      borderColor: 'rgba(255,255,255,0.25)',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default ExploreServices;







// import React from 'react';
// import {
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import { useSizeConfig } from '../../../utils/context/SizeConfig';
// import { Text } from '../../../globalComponents/CustomText';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { colors, fonts } from '../../../utils/constants/Theme';
// import LinearGradient from 'react-native-linear-gradient';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../../../navigation/RootStackParamList';
// import { useNavigation } from '@react-navigation/native';

// type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// type ExploreServiceItem = {
//   id: number;
//   title: string;
//   subtitle: string;
//   image: any;
//   backgroundColor: string;
//   screen: keyof RootStackParamList;
// };

// const servicesData: ExploreServiceItem[] = [
//   {
//     id: 1,
//     title: 'New Cars',
//     subtitle: 'Latest Models',
//     image: require('../../../assets/images/home/car.png'),
//     backgroundColor: '#7D73FF',
//     screen: 'NewCarScreen',
//   },
//   {
//     id: 2,
//     title: 'Service',
//     subtitle: 'Expert Care',
//     image: require('../../../assets/images/home/service.png'),
//     backgroundColor: '#8FB39A',
//     screen: 'ServiceScreen',
//   },
// ];

// const ExploreServices = () => {
//   const navigation = useNavigation<NavigationProp>();
//   const size = useSizeConfig();
//   const styles = getStyles(size);

//   return (
//     <View style={styles.mainContainer}>
//       <Text style={styles.sectionTitle}>
//         Explore Our Services
//       </Text>

//       <View style={styles.row}>
//         {servicesData.map(item => {
//           return (
//             <TouchableOpacity
//               key={item.id}
//               activeOpacity={0.9}
//               onPress={() => navigation.navigate(item.screen as never)}
//             >
//               <LinearGradient
//                 colors={
//                   item.id === 1
//                     ? ['#8B7BFF', '#6C63FF']
//                     : ['#9BC3A5', '#7EA58A']
//                 }
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 1, y: 1 }}
//                 style={styles.card}>
//                 <View style={styles.textContainer}>
//                   <Text style={styles.cardTitle}>
//                     {item.title}
//                   </Text>

//                   <Text style={styles.cardSubtitle}>
//                     {item.subtitle}
//                   </Text>
//                 </View>


//                 <Image
//                   source={item.image}
//                   style={styles.cardImage}
//                   resizeMode="contain"
//                 />


//                 <TouchableOpacity
//                   activeOpacity={0.8}
//                   style={[
//                     styles.arrowButton,
//                     {
//                       backgroundColor:
//                         item.id === 1
//                           ? 'rgba(148, 134, 250, 0.78)'
//                           : 'rgba(126,165,138,0.78)',
//                     },
//                   ]}
//                 >
//                   <Ionicons
//                     name="chevron-forward-outline"
//                     size={size.width * 4.2}
//                     color={colors.white}
//                     style={{
//                       marginLeft: size.width * 0.4,
//                     }}
//                   />
//                 </TouchableOpacity>
//               </LinearGradient>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     </View>
//   );
// };

// const getStyles = (size: any) =>
//   StyleSheet.create({
//     mainContainer: {
//       marginTop: size.height * 3.5,
//     },
//     textContainer: {
//       zIndex: 10,
//       marginTop: size.height * -2,
//     },
//     sectionTitle: {
//       paddingHorizontal: size.width * 4,
//       color: colors.text_Primary,
//       fontSize: size.fontSize * 3.8,
//       fontFamily: fonts.semiBold,
//       marginBottom: size.height * 1.8,
//     },

//     row: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       paddingHorizontal: size.width * 4,
//     },

//     card: {
//       width: size.width * 44,
//       height: size.height * 30,
//       borderRadius: size.width * 5,
//       overflow: 'hidden',
//       padding: size.width * 4,
//       justifyContent: 'flex-start',
//     },

//     cardTitle: {
//       color: colors.white,
//       fontSize: size.fontSize * 4.5,
//       fontFamily: fonts.bold,
//     },

//     cardSubtitle: {
//       color: 'rgba(255,255,255,0.85)',
//       fontSize: size.fontSize * 2.6,
//       fontFamily: fonts.medium,
//     },

//     cardImage: {
//       position: 'absolute',
//       right: -size.width * 3,
//       bottom: 0,
//       width: size.width * 34,
//       height: size.width * 28,
//     },

//     arrowButton: {
//       position: 'absolute',
//       right: size.width * 1.2,
//       bottom: size.height * 1.5,
//       width: size.width * 7,
//       height: size.width * 7,
//       borderRadius: size.width * 4,
//       borderWidth: 1.2,
//       borderColor: 'rgba(255,255,255,0.25)',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });

// export default ExploreServices;
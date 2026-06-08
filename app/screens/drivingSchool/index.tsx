import { Image, StatusBar, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../globalComponents/Header';
import { Text } from '../../globalComponents/CustomText';
import { colors, fonts } from '../../utils/constants/Theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../globalComponents/CustomButton';
import FeatureGrid from '../../globalComponents/FeatureGrid';
import { KalyaniDrivingHighlightData, DrivingSchoolData } from './data';
import Feather from 'react-native-vector-icons/Feather';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

type NavigationProp = NativeStackScreenProps<RootStackParamList, 'DrivingSchool'>;
const DrivingSchool = ({ navigation }: NavigationProp) => {
    const size = useSizeConfig();
    const styles = getStyles(size);
    const insets = useSafeAreaInsets();

    const renderCard = ({ item }: { item: typeof DrivingSchoolData[0] }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('DrivingCourseDetail', { item })}
            style={styles.cardContainer}
            activeOpacity={0.8}
        >
            <View style={styles.cardContentContainer}>
                <LinearGradient
                    colors={['#DCD4FF', '#FFFFFF00']}
                    style={styles.iconContainer}
                >
                    <FontAwesome5
                        name="car"
                        size={size.width * 7.2}
                        color={colors.Color_5346EE}
                    />
                </LinearGradient>

                <View style={styles.courseInfoContainer}>
                    <Text
                        style={styles.courseTitle}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >
                        {item.title}
                    </Text>

                    <Text
                        style={styles.courseDescription}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >
                        {item.description}
                    </Text>

                    {item.features.slice(0, 3).map((feature, index) => (
                        <View key={index} style={styles.highlightContainer}>
                            <View style={styles.bulletPoint} />
                            <Text
                                style={styles.courseHighlight}
                                numberOfLines={1}
                                ellipsizeMode="tail"
                            >
                                {feature}
                            </Text>
                        </View>
                    ))}
                </View>

                <View style={styles.buttonContainer}>
                    <CustomButton
                        TextValue={item.duration}
                        TextStyle={{
                            fontSize: size.width * 2.6,
                            fontFamily: fonts.bold,
                            color: colors.white,
                        }}
                        mainstyle={{
                            borderRadius: size.width * 1.2,
                        }}
                    />
                    <View style={styles.arrowContainer}>
                        <Feather name='chevron-right' size={size.width * 4} color={colors.primary} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    const ListHeader = () => (
        <>
            <Image
                source={require('../../assets/images/drivingSchool/driving_school_banner.png')}
                style={styles.bannerImg}
            />

            <View style={styles.textContainer}>
                <Text style={styles.sectionTitle}>Our 4 Driving Plans</Text>
                <Text style={styles.sectionSubtitle}>
                    Choose the perfect plan for your learning journey
                </Text>
            </View>
        </>
    );

    const ListFooter = () => (
        <View style={styles.whyChooseContainer}>
            <Text style={styles.whyChooseTitle}>
                Why Choose Kalyani Driving School?
            </Text>
            <FeatureGrid
                featureData={KalyaniDrivingHighlightData}
                textStyle={{ fontFamily: fonts.semiBold }}
            />
        </View>
    );

    return (
        <View style={[styles.safeArea, { paddingTop: insets.top + size.height * 2 }]}>
            <StatusBar barStyle={'dark-content'} />

            <LinearGradient
                colors={['#d3cafb', '#e3dcffd2', '#f3f3ff']}
                style={styles.barStyle}
            />

            <Header onPress={() => { }} title="Driving School" />

            <FlatList
                data={DrivingSchoolData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderCard}
                ListHeaderComponent={ListHeader}
                ListFooterComponent={ListFooter}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={styles.flatListContent}
                style={{ marginTop: size.height * 15, }}
                ItemSeparatorComponent={() => <View style={styles.cardSeparator} />}
            />
        </View>
    );
};

export default DrivingSchool;

const getStyles = (size: any) =>
    StyleSheet.create({
        safeArea: {
            flex: 1,
            backgroundColor: '#f2f2fd',
        },

        barStyle: {
            width: '100%',
            height: size.height * 21,
            position: 'absolute',
        },

        flatListContent: {
            paddingHorizontal: size.width * 5,
            paddingBottom: size.height * 8,
        },

        bannerImg: {
            width: '100%',
            height: size.height * 40,
        },

        textContainer: {
            alignItems: 'center',
            marginTop: size.width * 4.2,
            marginBottom: size.width * 4.2,
        },

        sectionTitle: {
            fontFamily: fonts.semiBold,
            fontSize: size.width * 4.2,
            color: colors.text_Primary,
            marginBottom: size.width * 1.5,
        },

        sectionSubtitle: {
            fontFamily: fonts.semiBold,
            fontSize: size.width * 3,
            color: colors.text_Secondary,
        },

        cardContainer: {
            width: '100%',
            backgroundColor: colors.white,
            borderRadius: size.width * 2.1,
        },

        cardSeparator: {
            height: size.width * 3,
        },

        cardContentContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: size.width * 2,
            paddingHorizontal: size.width * 1.2,
        },

        iconContainer: {
            width: size.width * 20,
            borderRadius: size.width * 3.5,
            justifyContent: 'center',
            alignItems: 'center',
        },

        courseInfoContainer: {
            width: '46%',
        },

        courseTitle: {
            fontSize: size.fontSize * 3.6,
            fontFamily: fonts.bold,
            color: colors.text_Primary,
        },

        courseDescription: {
            fontSize: size.fontSize * 2.6,
            fontFamily: fonts.semiBold,
            color: colors.text_Primary,
            marginTop: size.width * 1.6,
            marginBottom: size.width * 0.6,
        },

        highlightContainer: {
            flexDirection: 'row',
            gap: size.width * 2,
            alignItems: 'center',
            marginBottom: size.width * 1.2,
        },

        bulletPoint: {
            width: size.width * 2.3,
            height: size.height * 2.3,
            backgroundColor: colors.Color_5346EE,
            borderRadius: 50,
        },

        courseHighlight: {
            fontSize: size.fontSize * 2.8,
            fontFamily: fonts.regular,
            color: colors.text_Secondary,
        },

        buttonContainer: {},

        whyChooseContainer: {
            marginTop: size.width * 5,
        },

        whyChooseTitle: {
            fontSize: size.fontSize * 4,
            fontFamily: fonts.medium,
            color: colors.text_Primary,
            marginBottom: size.width * 2.8,
        },

        arrowContainer: {
            width: size.width * 6,
            height: size.width * 6,
            borderRadius: size.width * 10,
            backgroundColor: '#EBE6FF70',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 0,
            right: 0,
        },
    });
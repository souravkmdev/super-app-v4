import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import { useSizeConfig } from '../../utils/context/SizeConfig';
import Header from '../../globalComponents/Header';
import { Text } from '../../globalComponents/CustomText';
import { colors, fonts } from '../../utils/constants/Theme';
import {
    COURSE_DETAILS,
    COURSE_FEATURES,
    KalyaniDrivingHighlightData,
} from './data';
import FeatureRow from './component/FeatureRow';
import FeatureGrid from '../../globalComponents/FeatureGrid';

const DrivingCourseDetail = () => {
    const size = useSizeConfig();
    const styles = getStyles(size);
    const insets = useSafeAreaInsets();

    return (
        <View
            style={[
                styles.safeArea,
                // { paddingTop: insets.top + size.height * 2 },
            ]}>
            <LinearGradient
                colors={['#d3cafb', '#e3dcffd2', '#f3f3ff']}
                style={styles.barStyle}
            />

            <Header onPress={() => { }} title="Driving School" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
                style={styles.scrollView}>
                <Image
                    source={require('../../assets/images/drivingSchool/driving_course_banner.png')}
                    style={styles.bannerImg}
                />

                <View style={styles.aboutContainer}>
                    <Text style={styles.aboutTitle}>About This Course</Text>

                    <Text style={styles.aboutDescription}>
                        Designed for new drivers with no prior experience. This course
                        builds a strong foundation and helps you become a safe, confident
                        and responsible driver.
                    </Text>
                </View>

                <Text style={styles.sectionTitle}>What's Included</Text>

                <View style={styles.cardContainer}>
                    {COURSE_FEATURES.map((item, index) => (
                        <FeatureRow
                            key={item.id}
                            item={item}
                            isLast={index === COURSE_FEATURES.length - 1}
                        />
                    ))}
                </View>

                <Text style={styles.sectionTitle}>You Will Learn</Text>

                <FeatureGrid
                    featureData={KalyaniDrivingHighlightData}
                    textStyle={{ fontFamily: fonts.semiBold }}
                />

                <Text style={[styles.sectionTitle, { marginTop: size.width * 2.5 }]}>What's Included</Text>

                <View style={styles.cardContainer}>
                    {COURSE_DETAILS.map((item, index) => (
                        <FeatureRow
                            key={item.id}
                            item={item}
                            isLast={index === COURSE_DETAILS.length - 1}
                        />
                    ))}
                </View>
            </ScrollView>
        </View >
    );
};

export default DrivingCourseDetail;

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

        scrollView: {
            marginTop: size.height * 5,
        },

        scrollContent: {
            paddingHorizontal: size.width * 5,
            paddingBottom: size.height * 3,
        },

        bannerImg: {
            width: '100%',
            height: size.height * 40,
            borderRadius: size.width * 4.8,
        },

        sectionTitle: {
            fontSize: size.fontSize * 4,
            fontFamily: fonts.medium,
            color: colors.text_Primary,
            marginBottom: size.width * 2.8,
        },

        aboutContainer: {
            marginTop: size.width * 2.5,
            backgroundColor: '#F0ECFF',
            borderRadius: size.width * 3.5,
            paddingHorizontal: size.width * 3,
            paddingVertical: size.width * 2.5,
            marginBottom: size.width * 5,
        },

        aboutTitle: {
            fontSize: size.width * 3.6,
            fontFamily: fonts.medium,
            color: colors.text_Primary,
            marginBottom: size.width * 2,
        },

        aboutDescription: {
            fontSize: size.width * 2.8,
            fontFamily: fonts.regular,
            color: colors.text_Secondary,
            lineHeight: size.width * 4.2,
            marginBottom: size.width * 2,
        },

        cardContainer: {
            backgroundColor: colors.white,
            borderRadius: size.width * 3.5,
            padding: size.width * 3,
            marginBottom: size.width * 3,
        },
    });
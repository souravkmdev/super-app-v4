import React from 'react';
import {
    View,
    StyleSheet,
    Image,
} from 'react-native';

import Carousel from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient';

import { Text } from '../../../globalComponents/CustomText';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors, fonts } from '../../../utils/constants/Theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const carouselData = [
    require('../../../assets/images/auth/auth_bg.png'),
    require('../../../assets/images/auth/login_banner_02.png'),
    require('../../../assets/images/auth/login_banner_03.png'),
];

interface AuthLayoutProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

const AuthLayout = ({
    title,
    subtitle,
    children,
}: AuthLayoutProps) => {
    const size = useSizeConfig();
    const styles = getStyles(size);

    return (
        <KeyboardAwareScrollView
            style={styles.container}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            enableOnAndroid
            extraScrollHeight={150}
        >
            <Carousel
                loop
                autoPlay
                width={size.deviceWidth}
                height={size.deviceHeight * 0.5}
                autoPlayInterval={3000}
                data={carouselData}
                renderItem={({ item }) => (
                    <View>
                        <Image
                            source={item}
                            style={styles.carouselImage}
                            resizeMode="cover"
                        />
                        <LinearGradient
                            colors={[
                                '#fdfdfd06',
                                '#ecebf0e2',
                                '#f8f7feff',
                            ]}
                            style={styles.carouselGradient}
                        />
                    </View>
                )}
            />

            <View style={styles.contentContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.titleText}>
                        {title}
                    </Text>

                    <Text style={styles.subtitleText}>
                        {subtitle}
                    </Text>
                </View>

                {children}
            </View>
        </KeyboardAwareScrollView>
    );
};

export default AuthLayout;

const getStyles = (size: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F8F7FE',
        },

        carouselImage: {
            width: '100%',
            height: '100%',
        },

        carouselGradient: {
            width: '100%',
            height: size.height * 22,
            position: 'absolute',
            bottom: -1,
        },

        contentContainer: {
            flex: 1,
            marginTop: size.width * 3,
            paddingHorizontal: size.width * 5,
        },

        headerContainer: {
            alignItems: 'center',
        },

        titleText: {
            fontSize: size.fontSize * 5.2,
            fontFamily: fonts.bold,
            color: colors.text_Primary,
        },

        subtitleText: {
            fontSize: size.fontSize * 3,
            fontFamily: fonts.regular,
            color: colors.text_Secondary,
            marginTop: size.height,
            textAlign: 'center',
        },
    });
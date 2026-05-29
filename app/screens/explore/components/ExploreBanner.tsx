import React, { useMemo, useRef, useState } from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    View,
} from 'react-native';
import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { Text } from '../../../globalComponents/CustomText';
import LinearGradient from 'react-native-linear-gradient';
import { colors, fonts } from '../../../utils/constants/Theme';
import CustomButton from '../../../globalComponents/CustomButton';

const bannerData = [
    {
        id: '1',
        image: require('../../../assets/images/explore/jimny.png'),
        title: 'Bold Looks. Smart\nPerformance.',
        subtitle: 'Experience the New Age SUV',
        buttonText: 'Book Now',
    },
    {
        id: '2',
        image: require('../../../assets/images/explore/victoris.png'),
        title: 'Your Victoris \nBuilt To Your Vision',
        subtitle: 'Experience the New Age SUV',
        buttonText: 'Explore',
    },

];

const ExploreBanner = () => {
    const size = useSizeConfig();
    const [activeIndex, setActiveIndex] = useState(0);
    const styles = useMemo(() => getStyles(size), [size]);
    const onViewRef = useRef(({ viewableItems }: any) => {
        if (viewableItems?.length > 0) {
            setActiveIndex(viewableItems[0].index);
        }
    });

    const viewConfigRef = useRef({
        viewAreaCoveragePercentThreshold: 50,
    });

    return (
        <View style={styles.container}>
            <FlatList
                data={bannerData}
                horizontal
                pagingEnabled
                bounces={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
                renderItem={({ item }) => (
                    <View style={styles.bannerContainer}>

                        <Image
                            source={item.image}
                            resizeMode="contain"
                            style={styles.carImage}
                        />
                        <LinearGradient
                            colors={[
                                'transparent',
                                'rgba(255,255,255,0.4)',
                                '#FFFFFF',
                            ]}
                            style={styles.fadeOverlay}
                        />

                        <View style={styles.contentContainer}>
                            <Text style={styles.title}>
                                {item.title}
                            </Text>

                            <View style={styles.line} />

                            <Text style={styles.subtitle}>
                                {item.subtitle}
                            </Text>

                            <CustomButton
                                TextValue="Book Now"
                                TextStyle={styles.buttonText}
                                mainstyle={styles.button}
                                PressableStyle={styles.buttonPressable}
                                GradientColors={['#6B4EFF', '#8F7BFF']}
                            />
                        </View>

                    </View>
                )}
            />

            <View style={styles.dotContainer}>
                {bannerData.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            activeIndex === index && styles.activeDot,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

export default ExploreBanner;

const getStyles = (size: any) =>
    StyleSheet.create({
        container: {
            marginTop: size.height * 1,
        },

        bannerContainer: {
            width: size.deviceWidth,
            height: size.height * 80,
            overflow: 'hidden',
            justifyContent: 'center',
        },

        carImage: {
            width: size.width * 90,
            height: size.width * 70,
            position: 'absolute',
            left: -size.width * 24,
            top: size.height * 1,
            zIndex: 1,
        },

        dotContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: size.height * -5,
        },

        dot: {
            width: size.width * 1.2,
            height: size.width * 1.2,
            borderRadius: size.width,
            backgroundColor: '#D6CCFF',
            marginHorizontal: size.width * 0.8,
        },

        activeDot: {
            width: size.width * 5,
            height: size.width * 1.2,
            backgroundColor: '#8B75FF',
            borderRadius: size.width,
        },
        contentContainer: {
            position: 'absolute',
            right: size.width * 6,
            top: size.height * 10,
            alignItems: 'flex-end',
        },

        title: {
            fontSize: size.fontSize * 5.5,
            color: '#14003B',
            fontFamily: fonts.bold,
            textAlign: 'right',
        },

        line: {
            width: size.width * 13,
            height: size.height * 1,
            borderRadius: size.width,
            backgroundColor: '#8B75FF',
            marginTop: size.height * 1.2,
        },

        subtitle: {
            marginTop: size.height * 3,
            fontSize: size.fontSize * 3,
            color: '#6E56FF',
            fontFamily: fonts.semiBold,
        },
        button: {
            marginTop: size.height * 3.5,
            width: size.width * 28,
            borderRadius: size.width * 2,
            paddingBottom: size.height * 1,
        },
        buttonPressable: {
            height: size.height * 8,
        },
        buttonText: {
            fontFamily: fonts.semiBold,
            fontSize: size.fontSize * 3.4,
            color: colors.white,
            textAlign: 'center',
        },
        fadeOverlay: {
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: size.height * 65,
            zIndex: 2,
        },
    });
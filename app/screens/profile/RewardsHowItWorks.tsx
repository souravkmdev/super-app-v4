import React, { useMemo } from 'react';
import {
    View,
    StatusBar,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from '../../globalComponents/Header';
import HeaderLinearGradient from '../../globalComponents/HeaderLinearGradient';

import { useSizeConfig } from '../../utils/context/SizeConfig';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MembershipCard from './components/MembershipCard';
import { Text } from '../../globalComponents/CustomText';
import { colors, fonts } from '../../utils/constants/Theme';

const RewardsHowItWorksScreen = ({ navigation }: any) => {
    const size = useSizeConfig();
    const insets = useSafeAreaInsets();

    const styles = useMemo(
        () => getStyles(size, insets),
        [size, insets],
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <HeaderLinearGradient />

            <Header
                title="Rewards Points"
                onPress={() => navigation.goBack()}
            />

            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <Image
                    source={require('../../assets/images/profile/rewardbnr.png')}
                    style={styles.bannerImage}
                    resizeMode="contain"
                />

                <View style={styles.membershipHeader}>
                    <Text style={styles.membershipTitle}>
                        Membership Pathway
                    </Text>

                    <TouchableOpacity activeOpacity={0.7}>
                        <Text style={styles.connectText}>
                            Connect with Your Friends
                        </Text>
                    </TouchableOpacity>
                </View>

                <MembershipCard
                    icon={require('../../assets/images/profile/silver.png')}
                    memberName="Silver Member"
                    points="10"
                    rewardText="Get 1% reward on amount paid."
                    rewardPercent="1%"
                />

                <MembershipCard
                    icon={require('../../assets/images/profile/gold.png')}
                    memberName="Gold Member"
                    points="10,000"
                    rewardText="Get 1% reward on amount paid."
                    rewardPercent="2%"
                />

                <MembershipCard
                    icon={require('../../assets/images/profile/platinum.png')}
                    memberName="Platinum Member"
                    points="20,000"
                    rewardText="Get 3% reward on amount paid."
                    rewardPercent="3%"
                />

                <MembershipCard
                    icon={require('../../assets/images/profile/titanium.png')}
                    memberName="Titanium Member"
                    points="50,000"
                    rewardText="Get 4% reward on amount paid."
                    rewardPercent="5%"
                />
            </KeyboardAwareScrollView>
        </View>
    );
};

const getStyles = (size: any, insets: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F7F7FE',
        },

        scrollContent: {
            paddingHorizontal: size.width * 4,
            paddingTop: size.height * 4,
            paddingBottom: size.height * 5,
        },

        bannerImage: {
            width: '100%',
            height: size.height * 45,
            alignSelf: 'center',
        },
        membershipHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: size.height * 4,
        },

        membershipTitle: {
            fontFamily: fonts.semiBold,
            fontSize: size.fontSize * 4,
            color: colors.text_Primary,
        },

        connectText: {
            fontFamily: fonts.semiBold,
            fontSize: size.fontSize * 2.9,
            color: colors.Color_5346EE,
            textDecorationLine: 'underline',
        },
    });

export default RewardsHowItWorksScreen;
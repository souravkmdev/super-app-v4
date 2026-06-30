import React, { useMemo } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    ImageSourcePropType,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import { colors, fonts } from '../../utils/constants/Theme';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { CustomText } from '../../globalComponents/CustomText';


interface Benefit {
    icon: ImageSourcePropType;
    title: string;
    desc: string;
}

const GRADIENT_HERO: [string, string] = ['#99a3b902', '#ffffff'];
const GRADIENT_PURPLE: [string, string] = ['#9580F5', '#5346EE'];
const GRADIENT_PALE: [string, string] = ['#eeeaffff', '#FEFAFF'];

const BENEFITS: Benefit[] = [
    {
        icon: require('../../assets/images/resq/ic_technician.png'),
        title: '24x7 Certified & Trusted Technicians',
        desc: 'Round-the-clock support from trained professionals to assist you anytime, anywhere.',
    },
    {
        icon: require('../../assets/images/resq/ic_towing.png'),
        title: 'Seamless Towing Support (Up to 40 km)',
        desc: 'Hassle-free towing to the nearest authorised workshop during breakdowns.',
    },
    {
        icon: require('../../assets/images/resq/ic_key.png'),
        title: 'Lost or Locked Key Assistance',
        desc: 'Immediate help when your keys are misplaced or locked inside your vehicle.',
    },
    {
        icon: require('../../assets/images/resq/ic_battery.png'),
        title: 'Reliable Jump-Start Service',
        desc: 'Quick assistance to revive your vehicle in case of a dead battery.',
    },
    {
        icon: require('../../assets/images/resq/ic_fuel.png'),
        title: 'Fuel Delivery in Emergency',
        desc: 'On-the-spot fuel delivery when your vehicle runs out unexpectedly.',
    },
    {
        icon: require('../../assets/images/resq/ic_tyre.png'),
        title: 'Flat Tyre Replacement Support',
        desc: 'Fast and reliable help for flat tyre situations, ensuring minimum downtime.',
    },
];


interface BenefitRowProps {
    benefit: Benefit;
    isLast: boolean;
    styles: ReturnType<typeof getStyles>;
}

const BenefitRow = React.memo<BenefitRowProps>(({ benefit, isLast, styles }) => (
    <View
        style={[
            styles.benefitRow,
            !isLast && styles.benefitRowDivider,
        ]}
    >
        <Image
            source={benefit.icon}
            style={styles.benefitIcon}
            accessibilityIgnoresInvertColors
        />
        <View style={styles.benefitTextCol}>
            <CustomText style={styles.benefitTitle}>{benefit.title}</CustomText>
            <CustomText style={styles.benefitDesc}>{benefit.desc}</CustomText>
        </View>
    </View>
));


export default function ResQScreen() {
    const size = useSizeConfig();
    const styles = useMemo(() => getStyles(size), [size]);

    return (
        <View style={styles.safe}>
            <ScrollView
                style={styles.scroll}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Hero Banner */}
                <View>
                    <Image
                        source={require('../../assets/images/resq/resq_hero.png')}
                        style={styles.heroBanner}
                        accessibilityLabel="ResQ hero banner"
                    />
                    <LinearGradient colors={GRADIENT_HERO} style={styles.gradient} />
                </View>

                <View style={styles.section}>
                    {/* Membership Card */}
                    <CustomText style={styles.sectionTitle}>Your Membership</CustomText>
                    <Image
                        source={require('../../assets/images/resq/img_membership_card.png')}
                        style={styles.memberCardImg}
                        resizeMode="cover"
                        accessibilityLabel="Membership card"
                    />

                    {/* Assistance heading */}
                    <View style={styles.subSection}>
                        <CustomText style={styles.sectionTitle}>Need Assistance?</CustomText>
                        <CustomText style={styles.sectionSub}>
                            Quick assistance for general queries.
                        </CustomText>
                    </View>

                    {/* Assistance Cards */}
                    <View style={styles.subSection}>
                        <View style={styles.assistanceRow}>
                            {/* ResQ Assist card */}
                            <LinearGradient
                                colors={GRADIENT_PURPLE}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.assistanceContainer}
                            >
                                <CustomText style={[styles.assistanceTitle, styles.textWhite]}>
                                    Kalyani Motors ResQ Assist
                                </CustomText>
                                <CustomText style={[styles.assistanceDesc, styles.textWhite]}>
                                    Premium plan with extra benefits and faster support.
                                </CustomText>
                                <TouchableOpacity
                                    style={[styles.linkPolicyBtn, styles.linkPolicyBtnWhite]}
                                    accessibilityLabel="Link policy"
                                    accessibilityRole="button"
                                >
                                    <View style={styles.iconRow}>
                                        <CustomText style={[styles.linkPolicyBtnText, styles.textPurple]}>
                                            Link Policy
                                        </CustomText>
                                        <Entypo
                                            name="link"
                                            size={size.width * 3}
                                            color={colors.buttonBgColor}
                                            style={styles.iconOffset}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </LinearGradient>

                            {/* Maruti Road Service card */}
                            <View style={[styles.assistanceContainer, styles.assistancePale]}>
                                <CustomText style={[styles.assistanceTitle, styles.textPurpleDark]}>
                                    Maruti Road Service
                                </CustomText>
                                <CustomText style={[styles.assistanceDesc, styles.textPrimary]}>
                                    Basic manufacturer help for all Maruti Suzuki vehicles.
                                </CustomText>
                                <LinearGradient colors={GRADIENT_PURPLE} style={styles.linkPolicyBtn}>
                                    <View style={styles.iconRow}>
                                        <CustomText style={[styles.linkPolicyBtnText, styles.textWhite]}>
                                            Call Now
                                        </CustomText>
                                        <Ionicons
                                            name="call"
                                            size={size.width * 3}
                                            color={colors.white}
                                            style={styles.iconOffset}
                                        />
                                    </View>
                                </LinearGradient>
                            </View>
                        </View>
                    </View>

                    {/* Helpline Banner */}
                    <LinearGradient colors={GRADIENT_PALE} style={styles.helpLineBtn}>
                        <View style={styles.row}>
                            <Image
                                source={require('../../assets/images/resq/img_assistance_illustration.png')}
                                style={styles.assistImg}
                                resizeMode="contain"
                                accessibilityLabel="Assistance illustration"
                            />
                            <View>
                                <CustomText style={styles.needAsstTitle}>Need Assistance?</CustomText>
                                <CustomText style={styles.needAsstDesc}>
                                    Quick assistance for general queries.
                                </CustomText>
                            </View>
                            <LinearGradient colors={GRADIENT_PURPLE} style={styles.enquireBtn}>
                                <CustomText style={styles.enquireBtnText}>Enquire</CustomText>
                            </LinearGradient>
                        </View>
                    </LinearGradient>

                    {/* Member Benefits */}
                    <View style={styles.subSection}>
                        <CustomText style={styles.sectionTitle}>Member Benefits</CustomText>
                        <View style={styles.benefitsCard}>
                            {BENEFITS.map((benefit) => (
                                <BenefitRow
                                    key={benefit.title}
                                    benefit={benefit}
                                    isLast={benefit === BENEFITS[BENEFITS.length - 1]}
                                    styles={styles}
                                />
                            ))}
                        </View>
                    </View>
                </View>

                <View style={styles.bottomSpacer} />
            </ScrollView>
        </View>
    );
}


const getStyles = (size: any) =>
    StyleSheet.create({
        safe: {
            flex: 1,
            backgroundColor: colors.white,
        },
        scroll: {
            flex: 1,
        },
        scrollContent: {
            paddingBottom: size.width * 3.3,
        },
        bottomSpacer: {
            height: 108,
        },
        section: {
            paddingHorizontal: size.width * 3.7,
            marginTop: size.width * 3.6,
        },
        subSection: {
            marginTop: size.width * 3.6,
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: size.width * 15,
        },
        assistanceRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        iconRow: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
        },
        heroBanner: {
            width: '100%',
        },
        gradient: {
            width: '100%',
            height: size.height * 11,
            position: 'absolute',
            bottom: 0,
            zIndex: 0,
        },
        sectionTitle: {
            fontSize: size.fontSize * 4,
            fontFamily: fonts.semiBold,
            color: colors.text_Primary,
        },
        sectionSub: {
            fontSize: size.fontSize * 2.7,
            fontFamily: fonts.medium,
            color: colors.text_Primary,
        },
        memberCardImg: {
            width: '100%',
            height: size.width * 30,
            borderRadius: size.width * 3.5,
            marginTop: size.width * 2,
        },
        assistanceContainer: {
            paddingHorizontal: size.width * 3.7,
            borderRadius: size.width * 4,
            maxWidth: size.width * 46,
        },
        assistancePale: {
            backgroundColor: '#DFD8FF70',
        },
        assistanceTitle: {
            fontSize: size.fontSize * 4,
            fontFamily: fonts.bold,
            paddingBottom: size.width * 1.6,
            paddingTop: size.width * 1.6,
        },
        assistanceDesc: {
            fontSize: size.fontSize * 2.8,
            fontFamily: fonts.regular,
        },
        linkPolicyBtn: {
            marginTop: size.width * 3.4,
            padding: size.width * 1.8,
            borderRadius: size.width * 3.5,
            marginBottom: size.width * 1.8,
            elevation: 3,
            alignItems: 'center',
        },
        linkPolicyBtnWhite: {
            backgroundColor: colors.white,
        },
        linkPolicyBtnText: {
            fontSize: size.fontSize * 3,
            fontFamily: fonts.medium,
        },
        helpLineBtn: {
            width: '100%',
            marginTop: size.width * 8.4,
            borderRadius: size.width * 3,
        },
        assistImg: {
            width: size.width * 16.5,
            height: size.width * 13.2,
            marginRight: 10,
        },
        needAsstTitle: {
            color: colors.text_Primary,
            fontSize: size.width * 3.5,
            fontFamily: fonts.semiBold,
        },
        needAsstDesc: {
            color: colors.text_Primary,
            fontSize: size.width * 2.8,
            fontFamily: fonts.medium,
        },
        enquireBtn: {
            height: '100%',
            position: 'absolute',
            right: 0,
            justifyContent: 'center',
            borderTopLeftRadius: size.width * 4.5,
            borderTopRightRadius: size.width * 3.5,
            borderBottomRightRadius: size.width * 4.5,
        },
        enquireBtnText: {
            color: colors.white,
            padding: 15,
            fontSize: size.fontSize * 2.8,
            fontFamily: fonts.semiBold,
        },
        benefitsCard: {
            marginTop: size.width * 3.8,
        },
        benefitRow: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            paddingVertical: size.width * 3.8,
            paddingHorizontal: 16,
        },
        benefitRowDivider: {
            borderBottomWidth: 1.5,
            borderBottomColor: '#F0E8FF',
        },
        benefitIcon: {
            width: size.width * 11,
            height: size.width * 11,
        },
        benefitTitle: {
            fontSize: size.width * 2.7,
            fontFamily: fonts.medium,
            color: colors.text_Primary,
            marginBottom: 4,
            lineHeight: 19,
        },
        benefitDesc: {
            fontSize: 12,
            color: '#7A6499',
            lineHeight: 17,
        },
        benefitTextCol: {
            flex: 1,
            marginLeft: size.width * 2.7,
            paddingTop: 2,
        },
        textWhite: {
            color: colors.white
        },
        textPrimary: {
            color: colors.text_Primary
        },
        textPurple: {
            color: colors.buttonBgColor
        },
        textPurpleDark: {
            color: '#6946FF'
        },
        iconOffset: {
            marginTop: 6
        },
    });
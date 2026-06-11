import React, { useMemo } from 'react';
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from '../../globalComponents/Header';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import { Text } from '../../globalComponents/CustomText';
import { colors, fonts } from '../../utils/constants/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RewardsCard from './components/RewardsCard';
import InfoCard from './components/InfoCard';
import PointsHistoryCard from './components/PointsHistoryCard';
import HeaderLinearGradient from '../../globalComponents/HeaderLinearGradient';

const RewardsScreen = ({ navigation }: any) => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  const pointsHistory = [
    {
      title: 'Towards Payment\nCollection',
      description: 'Test',
      date: '14 May 2026',
      time: '12:52 PM',
      earnedPoints: '+ 0 Pts',
      spentPoints: '- 0 Pts',
    },
    {
      title: 'Towards Payment\nCollection',
      description: 'Test',
      date: '14 May 2026',
      time: '12:52 PM',
      earnedPoints: '+ 0 Pts',
      spentPoints: '- 0 Pts',
    },
    {
      title: 'Towards Payment\nCollection',
      description: 'Test',
      date: '14 May 2026',
      time: '12:52 PM',
      earnedPoints: '+ 0 Pts',
      spentPoints: '- 0 Pts',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <HeaderLinearGradient />
      <Header title="Rewards Points" onPress={() => navigation.goBack()} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.userRow}>
          <View style={styles.userLeftContainer}>
            <View style={styles.userIconContainer}>
              <Ionicons
                name="person"
                size={size.width * 3.5}
                color={colors.white}
              />
            </View>

            <Text style={styles.userName}>PARASURAMAN HARI</Text>
          </View>

          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.howItWorks}>How it works?</Text>
          </TouchableOpacity>
        </View>

        <RewardsCard />

        <Text style={styles.summaryTitle}>Reward Points Summary</Text>
        <InfoCard
          data={[
            {
              iconName: 'star',
              title: 'Inaugural Points',
              value: '0',
            },
            {
              iconName: 'gift',
              title: 'Earned Points',
              value: '50',
            },
            {
              iconName: 'trophy',
              title: 'Total Earned Points',
              value: '50',
              highlight: true,
            },
          ]}
        />

        <Text style={styles.historyTitle}>Points History</Text>

        <FlatList
          data={pointsHistory}
          scrollEnabled={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <PointsHistoryCard
              title={item.title}
              description={item.description}
              date={item.date}
              time={item.time}
              earnedPoints={item.earnedPoints}
              spentPoints={item.spentPoints}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7Fe',
    },

    headerGradient: {
      height: insets.top + size.height * 14,
    },

    scrollContent: {
      paddingHorizontal: size.width * 4,
      paddingBottom: size.height * 5,
    },
    userRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: size.height * 6,
      marginBottom: size.height * 5,
    },

    userLeftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    userIconContainer: {
      width: size.width * 6,
      height: size.width * 6,
      borderRadius: size.width * 3,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: size.width * 2,
    },

    userName: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3.5,
      color: colors.text_Primary,
    },

    howItWorks: {
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3.3,
      color: colors.primary,
    },
    summaryTitle: {
      marginTop: size.height * 3,
      marginBottom: size.height * 1.5,
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3.8,
      color: colors.text_Primary,
    },
    historyTitle: {
      marginTop: size.height * 3,
      marginBottom: size.height * 1.5,
      fontFamily: fonts.semiBold,
      fontSize: size.fontSize * 3.8,
      color: colors.text_Primary,
    },
  });

export default RewardsScreen;

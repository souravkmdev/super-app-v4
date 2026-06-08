import React, { useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
  ListRenderItem,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, fonts } from '../../utils/constants/Theme';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import LinearGradient from 'react-native-linear-gradient';
import BookingHeader from '../booking/components/BookingHeader';
import { Text } from '../../globalComponents/CustomText';
import ServiceCard, { ServiceItem } from './components/ServiceCard';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import HeaderLinearGradient from '../../globalComponents/HeaderLinearGradient';

interface Category {
  id: string;
  label: string;
  image: any;
  items: ServiceItem[];
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CATEGORIES: Category[] = [
  {
    id: 'ac',
    label: 'AC Service\n& Repair',
    image: require('../../assets/images/service/ac_service.png'),
    items: [
      {
        id: 'ac1',
        title: 'A/C Gas\nLeakage Check',
        description: 'Detects leaks & keeps\nyour AC efficient',
        image: require('../../assets/images/service/ac_gas_leak.png'),
      },
      {
        id: 'ac2',
        title: 'A/C Gas\nChanging Full',
        description: 'Complete gas refill\nfor maximum cooling',
        image: require('../../assets/images/service/ac_gas_full.png'),
      },
      {
        id: 'ac3',
        title: 'Blower Motor\nCleaning',
        description: 'Better airflow.\nFresher Cabin.',
        image: require('../../assets/images/service/blower_motor.png'),
      },
      {
        id: 'ac4',
        title: 'A/C Gas\nLeakage Check',
        description: 'Detects leaks & keeps\nyour AC efficient',
        image: require('../../assets/images/service/ac_fan.png'),
      },
      {
        id: 'ac5',
        title: 'A/C Gas\nLeakage Check',
        description: 'Detects leaks & keeps\nyour AC efficient',
        image: require('../../assets/images/service/ac_gas_leak.png'),
      },
      {
        id: 'ac6',
        title: 'A/C Gas\nLeakage Check',
        description: 'Detects leaks & keeps\nyour AC efficient',
        image: require('../../assets/images/service/ac_gas_leak.png'),
      },
      {
        id: 'ac7',
        title: 'Blower Motor\nCleaning',
        description: 'Better airflow.\nFresher Cabin.',
        image: require('../../assets/images/service/blower_motor.png'),
      },
      {
        id: 'ac8',
        title: 'A/C Gas\nLeakage Check',
        description: 'Detects leaks & keeps\nyour AC efficient',
        image: require('../../assets/images/service/ac_fan.png'),
      },
    ],
  },
  {
    id: 'accessories',
    label: 'Accessories',
    image: require('../../assets/images/service/accessories.png'),
    items: [
      {
        id: 'acc1',
        title: 'Seat Covers',
        description: 'Premium quality\nseat protection',
        image: require('../../assets/images/service/ac_gas_leak.png'),
      },
      {
        id: 'acc2',
        title: 'Car Mats',
        description: 'Heavy duty\nfloor protection',
        image: require('../../assets/images/service/ac_gas_leak.png'),
      },
      {
        id: 'acc3',
        title: 'Dash Cam',
        description: 'HD recording for\nyour safety',
        image: require('../../assets/images/service/ac_fan.png'),
      },
      {
        id: 'acc4',
        title: 'Steering Cover',
        description: 'Comfort grip for\nbetter control',
        image: require('../../assets/images/service/ac_gas_full.png'),
      },
    ],
  },
  {
    id: 'battery',
    label: 'Battery',
    image: require('../../assets/images/service/battery.png'),
    items: [
      {
        id: 'bat1',
        title: 'Battery Check',
        description: 'Full health test\nfor your battery',
        image: require('../../assets/images/service/ac_fan.png'),
      },
    ],
  },
  {
    id: 'carcare',
    label: 'Car Care',
    image: require('../../assets/images/service/car_care.png'),
    items: [
      {
        id: 'cc1',
        title: 'Car Wash',
        description: 'Premium foam\nwash & clean',
        image: require('../../assets/images/service/ac_fan.png'),
      },
    ],
  },
  {
    id: 'body_repair',
    label: 'Body Repair',
    image: require('../../assets/images/service/accessories.png'),
    items: [
      {
        id: 'acc1',
        title: 'Seat Covers',
        description: 'Premium quality\nseat protection',
        image: require('../../assets/images/service/ac_gas_leak.png'),
      },
      {
        id: 'acc2',
        title: 'Car Mats',
        description: 'Heavy duty\nfloor protection',
        image: require('../../assets/images/service/ac_gas_leak.png'),
      },
      {
        id: 'acc3',
        title: 'Dash Cam',
        description: 'HD recording for\nyour safety',
        image: require('../../assets/images/service/ac_fan.png'),
      },
      {
        id: 'acc4',
        title: 'Steering Cover',
        description: 'Comfort grip for\nbetter control',
        image: require('../../assets/images/service/ac_gas_full.png'),
      },
    ],
  },
];

type ServiceRow = ServiceItem[];

const ServiceScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const [selectedCategory, setSelectedCategory] = useState<Category>(
    CATEGORIES[0],
  );

  const size = useSizeConfig();
  const styles = getStyles(size);
  const insets = useSafeAreaInsets();

  const handleCategoryPress = useCallback((category: Category) => {
    setSelectedCategory(category);
  }, []);

  const itemPairs = useCallback((): ServiceRow[] => {
    const pairs: ServiceRow[] = [];
    const items = selectedCategory.items;
    for (let i = 0; i < items.length; i += 2) {
      pairs.push(items.slice(i, i + 2));
    }
    return pairs;
  }, [selectedCategory.items]);

  const renderCategoryItem: ListRenderItem<Category> = useCallback(
    ({ item }) => {
      const isSelected = selectedCategory.id === item.id;
      return (
        <TouchableOpacity
          style={[
            styles.categoryCard,
            isSelected && styles.categoryCardSelected,
          ]}
          activeOpacity={0.8}
          onPress={() => handleCategoryPress(item)}
        >
          <Image
            source={item.image}
            style={styles.categoryIcon}
            resizeMode="contain"
          />
          <Text
            style={[
              styles.categoryLabel,
              isSelected && styles.categoryLabelSelected,
            ]}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {item.label}
          </Text>
          <View style={{ height: 8 }} />
        </TouchableOpacity>
      );
    },
    [selectedCategory.id, styles, handleCategoryPress],
  );

  const renderServiceRow: ListRenderItem<ServiceRow> = useCallback(
    ({ item: pair, index: rowIndex }) => (
      <View key={`row-${rowIndex}`} style={styles.serviceRow}>
        {pair.map(item => (
          <ServiceCard
            key={item.id}
            item={item}
            onPress={item =>
              navigation.navigate('ServiceDetailScreen', { item })
            }
          />
        ))}
      </View>
    ),
    [styles],
  );

  const ListHeader = useCallback(
    () => (
      <>
        <View style={styles.bannerContainer}>
          <Image
            source={require('../../assets/images/service/maintenance_banner.png')}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.sectionTitle}>Budget To Suit You</Text>
        <FlatList
          data={CATEGORIES}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScrollContent}
          style={styles.categoryScroll}
          keyExtractor={item => item.id}
          renderItem={renderCategoryItem}
        />
        <Text style={styles.sectionTitle}>
          {selectedCategory.label.replace('\n', ' ')}
        </Text>
      </>
    ),
    [selectedCategory, styles, renderCategoryItem],
  );

  const ListFooter = useCallback(
    () => <View style={styles.bottomPadding} />,
    [styles],
  );

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top + size.height * 2,
        backgroundColor: '#F7F7Fe',
      }}
    >
      <StatusBar barStyle="dark-content" />
      <HeaderLinearGradient />
      <BookingHeader title="Service" />
      <FlatList
        data={itemPairs()}
        keyExtractor={(_, index) => `row-${index}`}
        renderItem={renderServiceRow}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        contentInsetAdjustmentBehavior="automatic"
      />
    </View>
  );
};

const getStyles = (size: any) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.white,
    },
    barStyle: {
      width: '100%',
      height: size.height * 21,
      position: 'absolute',
    },
    scrollView: {
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: 20,
    },
    bannerContainer: {
      borderRadius: size.width * 3,
      overflow: 'hidden',
      marginBottom: size.width * 4,
      marginTop: size.width * 5,
    },
    bannerImage: {
      width: '100%',
      height: size.width * 30,
      borderRadius: size.width * 3,
    },

    sectionTitle: {
      fontSize: size.fontSize * 3.5,
      fontFamily: fonts.medium,
      marginBottom: size.width * 3,
    },
    categoryScroll: {
      marginBottom: size.width * 3,
    },
    categoryScrollContent: {
      gap: size.width * 2.1,
    },
    categoryCard: {
      width: size.width * 21.5,
      backgroundColor: colors.white,
      borderRadius: size.width * 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    categoryCardSelected: {
      backgroundColor: '#ece5faff',
      borderWidth: 1,
      borderColor: '#fcfcfcff',
    },
    categoryIcon: {
      width: size.width * 20,
      height: size.width * 16,
    },
    categoryLabel: {
      fontSize: size.fontSize * 2.6,
      fontFamily: fonts.semiBold,
      color: colors.text_Primary,
      textAlign: 'center',
    },
    categoryLabelSelected: {
      color: '#7B5EA7',
    },
    serviceGrid: {
      gap: size.width * 2.5,
    },
    serviceRow: {
      flexDirection: 'row',
      gap: size.width * 2.5,
      marginBottom: size.width * 1.5,
    },

    bottomPadding: {
      height: 32,
    },
  });

export default ServiceScreen;

import React, { useMemo } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { Text } from '../../../globalComponents/CustomText';
import { colors, fonts } from '../../../utils/constants/Theme';

export interface SuggestionItem {
  id: number;
  title: string;
  subtitle: string;
  extra?: string;
}

type Props = {
  title: string;
  data: SuggestionItem[];
};

const cardConfig = [
  {
    image: require('../../../assets/images/home/serv.png'),
    backgroundColor: '#F6F2FF',
  },

  {
    image: require('../../../assets/images/home/sheild.png'),
    backgroundColor: '#FFF5F6',
  },

  {
    image: require('../../../assets/images/home/recommend.png'),
    backgroundColor: '#FAF4FF',
  },
];

const SuggestionSection = ({
  title,
  data,
}: Props) => {
  const size = useSizeConfig();

  const styles = useMemo(() => getStyles(size), [size]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>
          {title}
        </Text>

        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.viewAllText}>
            View All
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.8}
              style={[
                styles.card,
                {
                  backgroundColor:
                    cardConfig[index].backgroundColor,
                },
              ]}
            >
              <Text style={styles.cardTitle}>
                {item.title}
              </Text>

              <Text style={styles.cardSubTitle}>
                {item.subtitle}
              </Text>

              {item.extra && (
                <Text style={styles.extraText}>
                  {item.extra}
                </Text>
              )}

              <View style={styles.iconContainer}>
                <Image
                  source={cardConfig[index].image}
                  style={styles.iconImage}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default SuggestionSection;

const getStyles = (size: any) =>
  StyleSheet.create({
    mainContainer: {
      marginTop: size.height * 3.5,
      paddingHorizontal: size.width * 4,
    },
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: size.height * 3.5,
    },

    viewAllText: {
      color: colors.text_Primary,
      fontSize: size.fontSize * 3,
      fontFamily: fonts.semiBold,
    },

    sectionTitle: {
      color: colors.text_Primary,
      fontSize: size.fontSize * 3.8,
      fontFamily: fonts.semiBold,
    },

    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    card: {
      width: size.width * 30,
      borderRadius: size.width * 3,
      paddingHorizontal: size.width * 2.5,
      paddingTop: size.height * 1.5,
      paddingBottom: size.height * 1.8,
      minHeight: size.height * 23,
      position: 'relative',
      borderWidth:0.4,
      borderColor: colors.border,
    },

    cardTitle: {
      color: '#2A1F47',
      fontSize: size.fontSize * 3,
      fontFamily: fonts.bold,
    },

    cardSubTitle: {
      marginTop: size.height * 0.8,
      color: '#3E345B',
      fontSize: size.fontSize * 2.7,
      fontFamily: fonts.medium,
    },

    extraText: {
      marginTop: size.height * 5,
      color: '#FF5A4E',
      fontSize: size.fontSize * 2.5,
      fontFamily: fonts.medium,
    },

    iconContainer: {
      position: 'absolute',
      right: size.width * 2.5,
      bottom: size.height * 1.2,
      width: size.width * 7,
      height: size.width * 7,
      borderRadius: size.width * 6,
      backgroundColor: 'rgba(255,255,255,0.75)',
      alignItems: 'center',
      justifyContent: 'center',
    },

    iconImage: {
      width: size.width * 4.5,
      height: size.width * 4.5,
    },
  });
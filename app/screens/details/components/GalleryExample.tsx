import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Gallery, stackTransition } from 'react-native-zoom-toolkit';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useSizeConfig } from '../../../utils/context/SizeConfig';
import { colors } from '../../../utils/constants/Theme';
import Animated, {
  FadeIn,
  FadeOut,
  ZoomIn,
  ZoomOut,
} from 'react-native-reanimated';

const GalleryExample = ({
  imagesList,
  isVisible,
  onPress,
}: {
  imagesList: string[];
  isVisible: boolean;
  onPress: () => void;
}) => {
  const ref = useRef<any>(null);

  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const [activeIndex, setActiveIndex] = useState(0);

  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  const renderItem = useCallback(
    (item: string) => {
      return (
        <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
      );
    },
    [styles],
  );

  const keyExtractor = useCallback(
    (item: string, index: number) => `${item}-${index}`,
    [],
  );

  const onTap = useCallback((_: any, index: number) => {
    console.log(`Tapped on index ${index}`);
  }, []);

  const thumbnailKeyExtractor = useCallback(
    (item: string, index: number) => `thumb-${item}-${index}`,
    [],
  );

  return (
    <Modal
      visible={isVisible}
      transparent
      statusBarTranslucent
      animationType="slide"
    >
      <GestureHandlerRootView style={styles.root}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.overlay}
          onPress={onPress}
        >
          <Animated.View
            entering={ZoomIn.duration(250)}
            exiting={ZoomOut.duration(200)}
            style={styles.container}
          >
            <View style={styles.galleryContainer}>
              <Gallery
                ref={ref}
                data={imagesList}
                keyExtractor={thumbnailKeyExtractor}
                initialIndex={0}
                onIndexChange={index => setActiveIndex(index)}
                renderItem={renderItem}
                onTap={onTap}
                customTransition={stackTransition}
              />
            </View>

            <FlatList
              data={imagesList}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={keyExtractor}
              contentContainerStyle={styles.flatListContent}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      if (index === activeIndex) return;
                      setActiveIndex(index);
                      ref.current?.setIndex(index);
                    }}
                    activeOpacity={0.8}
                    style={styles.thumbnailContainer}
                  >
                    <Image
                      source={{ uri: item }}
                      style={styles.thumbnailImage}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </Animated.View>
        </TouchableOpacity>
      </GestureHandlerRootView>
    </Modal>
  );
};

export default GalleryExample;

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    root: {
      flex: 1,
    },

    overlay: {
      flex: 1,
      backgroundColor: '#000000af',
    },

    container: {
      top: '20%',
      gap: size.height * 5,
    },

    galleryContainer: {
      width: size.width * 90,
      height: size.height * 80,
      justifyContent: 'center',
      left: '5%',
    },

    image: {
      width: size.width * 90,
      height: size.height * 80,
      borderRadius: size.width * 5,
    },

    flatListContent: {
      gap: size.width * 3,
      paddingHorizontal: size.width * 5,
    },

    thumbnailContainer: {
      width: size.width * 15,
      height: size.width * 14,
      borderWidth: size.width * 0.5,
      borderColor: colors.white,
      borderRadius: size.width * 4,
      overflow: 'hidden',
    },

    thumbnailImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
  });

import React, { useMemo } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import { WebView } from 'react-native-webview';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from '../../globalComponents/Header';
import { useSizeConfig } from '../../utils/context/SizeConfig';
import HeaderLinearGradient from '../../globalComponents/HeaderLinearGradient';

const WebViewScreen = ({ route, navigation }: any) => {
  const size = useSizeConfig();
  const insets = useSafeAreaInsets();

  const styles = useMemo(() => getStyles(size, insets), [size, insets]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <HeaderLinearGradient
        linearGradientProps={['#b7b7fe', '#d7d7fb', '#fafafe']}
      />
      <Header
        title={route?.params?.title}
        onPress={() => navigation.goBack()}
      />

      <View style={styles.webViewContainer}>
        <WebView
          source={{
            uri: route?.params?.url,
          }}
          startInLoadingState
        />
      </View>
    </View>
  );
};

const getStyles = (size: any, insets: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F3F3FF',
    },

    headerGradient: {
      height: insets.top + size.height * 14,
    },

    webViewContainer: {
      flex: 1,
    },
  });

export default WebViewScreen;

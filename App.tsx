import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import StackNavigation from './app/navigation/StackNavigation';
import { SizeConfigProvider } from './app/utils/context/SizeConfig';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  return (
    <GestureHandlerRootView>
      <SizeConfigProvider>
        <SafeAreaProvider>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="dark-content"
          />

          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </SizeConfigProvider>
    </GestureHandlerRootView>
  );
}

export default App;

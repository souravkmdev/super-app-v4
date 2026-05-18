import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import StackNavigation from './app/navigation/stackNavigation';
import { SizeConfigProvider } from './app/utils/context/SizeConfig';

function App() {
  return (
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
  );
}

export default App;

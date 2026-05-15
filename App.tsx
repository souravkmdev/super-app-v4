import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigation from './app/navigation/stackNavigation';
import { SizeConfigProvider } from './app/utils/context/SizeConfig';

function App() {
  return (
    <SizeConfigProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </SizeConfigProvider>
  );
}

export default App;

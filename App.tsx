import { StatusBar } from 'expo-status-bar';
import  AppLoading  from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import{ useFonts,  Raleway_500Medium, Raleway_700Bold, Raleway_500Medium_Italic, Raleway_700Bold_Italic, } from '@expo-google-fonts/raleway'
import Navigation from './src/navigation';
import { StoreProvider } from './src/hooks/Store';

SplashScreen.preventAutoHideAsync();


export default function App() {
 let [fontsLoaded, error ] = useFonts({
  Raleway_500Medium,
   Raleway_700Bold,
  Raleway_500Medium_Italic,
  Raleway_700Bold_Italic,

 })
 if (!fontsLoaded) {
  return <AppLoading />;
}

  return (
    <StoreProvider>
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
    </StoreProvider>
  );
}



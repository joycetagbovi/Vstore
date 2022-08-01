import { StatusBar } from 'expo-status-bar';
import  AppLoading  from 'expo-app-loading';
import{ useFonts,  Raleway_500Medium, Raleway_700Bold, Raleway_500Medium_Italic, Raleway_700Bold_Italic, } from '@expo-google-fonts/raleway'
import Navigation from './src/navigation';

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
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}



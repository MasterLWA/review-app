import React, { useState } from 'react';
import Home from './Screens/Home';
import * as Font from 'expo-font'; 
import AppLoading from 'expo';

const getFonts = () => Font.loadAsync({
  'rale': require('./assets/Fonts/Raleway-VariableFont_wght.ttf'),
}); 

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (<Home />);
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}
// ranmini unathanna  - wso2 

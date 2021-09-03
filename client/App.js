

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import Index from './src/index';


const fetchFonts = () => {
    return Font.loadAsync({
    LibreBaskerville : require('./assets/fonts/LibreBaskerville-Regular.ttf'),
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
    
    });
    };


export default App = () => {
  //Font import in root
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
    <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
    />
    );
  } 
  return Index()

}




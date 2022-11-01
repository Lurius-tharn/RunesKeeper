import * as Font from 'expo-font';
import React, {useState} from 'react';
import Index from './src/index';
import AppLoading from "expo-app-loading";


const fetchFonts = () => {
    return Font.loadAsync({
        LibreBaskerville: require('./assets/fonts/LibreBaskerville-Regular.ttf'),
        Montserrat: require('./assets/fonts/Montserrat-Regular.ttf '),

    });
};


const App = () => {
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

export default App;
import React, {useEffect} from 'react'


import AuthStyle from "../styles/authentification/AuthStyles";
import {Text, View} from "react-native";
import RunesKeeper from "../assets/svg/RunesKeeper";
import RunesKeeperStyles from "../styles/RunesKeeperStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useIsFocused} from "@react-navigation/native";
import {IhaveColor, PrimaryColor, PrimaryTextColor} from "../styles/colors";
import Rune from "../react-native/StrokeAnimation";

const RunesKeeperRedirect = ({navigation})=> {
    const isFocused = useIsFocused();

    const setNavigation = async () =>{
        try {
            const responseJSON = await AsyncStorage.getItem('@ma_clé')
            console.log(responseJSON != null ? JSON.parse(responseJSON) : null
            )
            responseJSON ?
                navigation.navigate('Main', {"pseudo": JSON.parse(responseJSON).pseudo}):
                navigation.navigate('Authentication')
        } catch(e) {
        }
    }

    useEffect(() => {
        if(isFocused){
            const timer = setTimeout(() => {
                // setNavigation();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isFocused]);
    return(
        <View style={RunesKeeperStyles.RksMainView}>
            <View style={RunesKeeperStyles.RksView}>
                <Rune backgroundColor={PrimaryTextColor} percentageComplete={80} radius={100} strokeWidth={30}/>
                <Text style={AuthStyle.title}>RunesKeeper</Text>
                <Text style={AuthStyle.subtitle}>Gardez Votre savoir</Text>
            </View>
        </View>
    )
}

export default RunesKeeperRedirect;
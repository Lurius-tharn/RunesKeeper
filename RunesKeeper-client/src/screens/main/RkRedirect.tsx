import React, {useEffect} from 'react'


import {Text, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useIsFocused} from "@react-navigation/native";
import RunesKeeperStyles from "../../styles/RunesKeeperStyles";
import RunesKeeper from "../../../assets/svg/RunesKeeper";
import AuthStyle from "../../styles/authentification/AuthStyles";


const RunesKeeperRedirect = ({navigation}) => {
    const isFocused = useIsFocused();

    const setNavigation = async () => {
        try {
            const responseJSON = await AsyncStorage.getItem('@ma_clé')
            console.log(responseJSON != null ? JSON.parse(responseJSON) : null
            )
            responseJSON ?
                navigation.navigate('Main', {"pseudo": JSON.parse(responseJSON).pseudo}) :
                navigation.navigate('Authentication')
        } catch (e) {
        }
    }

    useEffect(() => {
        if (isFocused) {
            const timer = setTimeout(() => {
                setNavigation();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isFocused]);
    return (
        <View style={RunesKeeperStyles.RksMainView}>
            <View style={RunesKeeperStyles.RksView}>
                <RunesKeeper height={'90%'} width={'85%'}/>
                <Text style={AuthStyle.title}>RunesKeeper</Text>
                <Text style={AuthStyle.subtitle}>Gardez Votre savoir</Text>
            </View>
        </View>


    )
}

export default RunesKeeperRedirect;

import React from "react";
import {Text, TouchableOpacity, View} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthStyle from "../../styles/authentification/AuthStyles";
import RunesKeeper from "../../../assets/svg/RunesKeeper";

const UserScreen = ({route, navigation}) => {

    const logOut = async (navigation) => {
        await AsyncStorage.removeItem('@ma_clé')
        const responseJSON = await AsyncStorage.getItem('@ma_clé')
        console.log(responseJSON != null ? JSON.parse(responseJSON) : null)
        navigation.navigate("RunesKeeperRedirect")
    }

    return (
        <View style={AuthStyle.mainView}>
            <View style={AuthStyle.view}>
                <RunesKeeper height={undefined} width={undefined}/>

                <View>
                    <Text> Utilisateur {route.params.pseudo}</Text>
                    <TouchableOpacity onPress={() => {
                        logOut(navigation).then()

                    }}><Text> Se déco</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default UserScreen;
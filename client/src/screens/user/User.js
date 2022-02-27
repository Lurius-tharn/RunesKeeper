import React from "react";
import { View , Text , Image,ImageBackground ,TouchableOpacity} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthStyle from "../../styles/authentification/AuthStyles";
import RunesKeeper from "../../assets/svg/RunesKeeper";

const User = ( {route, navigation}) => {

    const logOut = async (navigation) => {
        AsyncStorage.removeItem('@ma_clé')
        const responseJSON = await AsyncStorage.getItem('@ma_clé')
        console.log(responseJSON != null ? JSON.parse(responseJSON) : null)
        navigation.navigate("RunesKeeperRedirect")
    }

        return (
            <View style={AuthStyle.mainView}>
                <View style={AuthStyle.view}>
                    <RunesKeeper/>

        <View>
            <Text> Utilisateur {route.params.pseudo}</Text>
            <TouchableOpacity onPress={() =>{
                logOut(navigation)

            }}><Text> Se déco</Text></TouchableOpacity>
        </View>
                </View>
            </View>
    )
}

export default User;
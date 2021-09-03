import React from "react"
import { View } from "react-native"
import { Text } from "react-native"
import AuthStyle from "../../styles/authentification/AuthStyles"

export const HomeScreen = (props) => {
    return (
        <View >
            <Text style = {AuthStyle.title}>Bonjour toi</Text>


        </View>
    )
}

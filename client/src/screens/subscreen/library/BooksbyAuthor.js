import React from "react"
import React, {useEffect, useState} from "react"
import { View , Text , Image,ImageBackground ,TouchableOpacity} from "react-native"
import LibStyle from "../../../styles/main/LibraryStyles";
import {createStackNavigator} from '@react-navigation/stack'
import {IP_ADRESS} from "../../../config";

import * as Colors from  "../../../styles/colors";
const Stack = createStackNavigator()
export const BooksbyAuthorScreen = ({navigation}) => {

    const [authorBookDataSource, setauthorBookDataSource ] = useState([])
    const fetchData = () => {
        fetch("http://" + IP_ADRESS + ":4547/Runeskeeper/allBooksbyAuthor/1")
            .then((response) => response.json())
            .then((responseJson) => {
                setDataSource(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (

        <View >
            <View style= {LibStyle.blocContainer}>

            </View>
        </View>
    )
}

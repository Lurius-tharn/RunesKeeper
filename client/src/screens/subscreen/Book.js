import React from "react";
import { View , Text , Image,FlatList ,TouchableOpacity} from "react-native"


export const BookScreen = ({route,navigation}) =>{
    const {dataBook} = route.params;

  
    return(
        <View>
           
            <Text>{dataBook.subtitle}</Text>
        </View>
    )
}
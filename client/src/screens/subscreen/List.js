import React from "react"
import { View , Text , Image,FlatList ,TouchableOpacity} from "react-native"
import ListStyle from "../../styles/main/ListStyle";

export const ListScreen = ({route, navigation}) => {
    const Iconpath = '../../assets/icons/'

    const {dataBooks,nbBooks} = route.params;
    return(
        
        <View style={ListStyle.listContainer}>
            <View style={ListStyle.upContainer}>
            <Image style={{height:21, width:51}} source = {require(Iconpath+"trier.png")} />

                <View style ={ListStyle.bookNumberContainer}>
                    <Text  style={ListStyle.numberText}> {JSON.stringify(nbBooks)} livres </Text>
                </View>
            </View>
          
            <FlatList 
                data={dataBooks}
                keyExtractor={(item,index) => index.toString()}  
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress = {() => {
                                navigation.navigate("Book", {
                                    name:item.title,
                                    dataBook:item
                                })

                            }}
                        >
                             <View  style={ListStyle.itemContainer}>
                      
                                <Image style={ListStyle.thumbnailContainer} source={{uri: item.thumbnail}}></Image>
                                <View style={ListStyle.textContainer}>
                                    <View style={ListStyle.subtitleContainer}>
                                        <Text style= {ListStyle.subtitle}> {item.subtitle}</Text>
                                    </View>
                                    <View style={ListStyle.otherTextContainer}>
                                        <View style={ListStyle.publisher}>
                                            <Text style= {ListStyle.otherText}> {item.publisher}</Text>
                                            <Text style= {ListStyle.otherText}> {item.published_date}</Text>
                                        </View> 
                                        <View style={ListStyle.book}>
                                            <Text style= {ListStyle.otherText}> {item.nb_pages} pages</Text>
                                            <Text style= {ListStyle.otherText}> {item.author}</Text>
                                        </View>          
                                    </View>
            
                                </View>
                   
                   
                            </View>
                        </TouchableOpacity>
                   
                    
                        
                        
                        )
                }}
            >
            </FlatList>
                
        </View>
    )
}
import React, {useEffect, useState} from "react"
import {View, Text, Image, FlatList, TouchableOpacity, RefreshControl} from "react-native"
import ListStyle from "../../styles/main/ListStyle";
import BooksBy from "../../components/BooksByComponent";

export const ListScreen = ({route, navigation}) => {
    const Iconpath = '../../assets/icons/'
    const sortBy =
        [{
            titre: 'Titre',taille:'32',couleur:'#FFFFFF',trierPar:"title"
        },{
        titre: 'Auteur',taille:'32',couleur:'#FFFFFF',trierPar:"author"
    },{
        titre: 'Publisher',taille:'32',couleur:'#FFFFFF',trierPar:"publisher"
    },{
            titre: 'subtitle',taille:'32',couleur:'#FFFFFF',trierPar:"subtitle"
        },

]


    const {dataBooks,nbBooks} = route.params;
    const [Books,setBooks] = useState(dataBooks);
    const trieValue = "publisher";
    const [trie, setTrie] = useState(trieValue);

    const [refreshing, setRefreshing] = useState(true);

    const isChanged = {
        value:false
    };


    return(
        <View style={ListStyle.listContainer}>
            <View style={ListStyle.upContainer}>
            <BooksBy sortBy={sortBy} trie ={setTrie}/>

                <View style ={ListStyle.bookNumberContainer}>
                    <Text  style={ListStyle.numberText}> {JSON.stringify(nbBooks)} livres </Text>
                </View>
            </View>
          
            <FlatList 
                data={Books.sort(function (a, b) {
                    return a[trie].localeCompare(b[trie]);
                })}
                extraData={Books}
                keyExtractor={(item,index) => index.toString()}
                refreshing={true}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress = {() => {
                                console.log(trie)
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
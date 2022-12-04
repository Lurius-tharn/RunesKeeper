import React, {useState} from "react"
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native"
import ListStyle from "../../styles/main/ListStyle";
import {BooksByComponent} from "../../components/BooksByComponent";
import {BookSynthesis} from "../../models/BookSynthesis";

export const ListScreen = ({route, navigation}) => {
    const Iconpath = '../../assets/icons/'
    const sortBy =
        [ {
            titre: 'Auteur', taille: '32', couleur: '#FFFFFF', trierPar: "author"
        }, {
            titre: 'Publisher', taille: '32', couleur: '#FFFFFF', trierPar: "publisher"
        }, {
            titre: 'subtitle', taille: '32', couleur: '#FFFFFF', trierPar: "subtitle"
        },

        ]


    const {dataBooks, nbBooks} = route.params ;
    const [Books, setBooks] = useState<BookSynthesis[]>(dataBooks) ;
    const trieValue = "publisher";
    const [trie, setTrie] = useState(trieValue);

    return (
        <View style={ListStyle.listContainer}>
            <View style={ListStyle.upContainer}>
                <BooksByComponent sortBy={sortBy} trie={setTrie}/>

                <View style={ListStyle.bookNumberContainer}>
                    <Text style={ListStyle.numberText}> {JSON.stringify(nbBooks)} livres </Text>
                </View>
            </View>

            <FlatList
                data={Books.sort(function (a, b) {
                    return a[trie].localeCompare(b[trie]);
                })}
                extraData={Books}
                keyExtractor={(item, index) => index.toString()}
                refreshing={true}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Book", {
                                    title: item.subtitle,
                                    isbn: item.isbn
                                })
                            }}
                        >
                            <View style={ListStyle.itemContainer}>

                                <Image style={ListStyle.thumbnailContainer} source={{uri: item.thumbnail}}></Image>
                                <View style={ListStyle.textContainer}>
                                    <View style={ListStyle.subtitleContainer}>
                                        <Text style={ListStyle.subtitle}> {item.subtitle}</Text>
                                    </View>
                                    <View style={ListStyle.otherTextContainer}>
                                        <View style={ListStyle.publisher}>
                                            <Text style={ListStyle.otherText}> {item.publisher}</Text>
                                            <Text style={ListStyle.otherText}> {item.published_date}</Text>
                                        </View>
                                        <View style={ListStyle.book}>
                                            <Text style={ListStyle.otherText}> {item.nb_pages} pages</Text>
                                            <Text style={ListStyle.otherText}> {item.author}</Text>
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
};

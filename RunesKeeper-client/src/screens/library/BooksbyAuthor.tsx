import React, {useEffect, useState} from "react"
import {FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native"
import ListStyle from "../../styles/main/ListStyle";
import {BooksByComponent} from "../../components/BooksByComponent";
import LibStyle from "../../styles/main/LibraryStyles";
import {bookService} from "../../services/book.service";
import {BooksInAuthor} from "../../models/BooksInAuthor";


const Iconpath = '../../../assets/icons/'

export const BooksbyAuthorScreen = ({navigation}) => {

    const sortBy =
        [{
            titre: 'De A - Z', taille: '32', couleur: '#FFFFFF', trierPar: "aOrder"
        }, {
            titre: 'De Z - A', taille: '32', couleur: '#FFFFFF', trierPar: "zOrder"
        }

        ]
    const trieValue = "aOrder";

    const [authorBookDataSource, setauthorBookDataSource] = useState<BooksInAuthor[]>([])
    const [trie, setTrie] = useState(trieValue);

    const fetchData = () => {
        bookService.recupererLivresDesAuteurs(1).then((booksInAuthors) => {
                setauthorBookDataSource(booksInAuthors)
            console.log (booksInAuthors)
            })
            .catch((error) => {
                console.error(error);
            });
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchData();
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    return (


        <View style={ListStyle.listContainer}>
            <FlatList
                ListHeaderComponent={<View style={ListStyle.upContainer}>
                    <BooksByComponent sortBy={sortBy} trie={setTrie}/>

                    <View style={ListStyle.bookNumberContainer}>
                        <Text
                            style={ListStyle.numberText}> {Object.keys(authorBookDataSource).length} Auteurs </Text>
                    </View>
                </View>}
                data={authorBookDataSource.sort((a, b) => trie == "aOrder" ?
                    a["Auteur"].localeCompare(b["Auteur"]) :
                    b["Auteur"].localeCompare(a["Auteur"])
                )}
                extraData={authorBookDataSource}
                style={{height: 100 + "%"}}
                refreshing={true}

                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    return (
                        <View>
                            <View style={LibStyle.container}>
                                <View
                                    style={
                                        LibStyle.authorBlocTitleContainer
                                    }>
                                    <Text style={LibStyle.titleTxt}> {item.authorName}</Text>
                                </View>
                            </View>
                            <View style={LibStyle.authorContainer}>
                                <FlatList
                                    data={item.books}
                                    horizontal={true}
                                    refreshing={true}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({item: data, index}) => {
                                        let isFull = false;
                                        if (!isFull) {
                                            if (index >= 4) {
                                                isFull = true;
                                                return (
                                                    <ImageBackground
                                                        style={{
                                                            ...LibStyle.thumbnail,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center"
                                                        }}
                                                        imageStyle=
                                                            {{opacity: 0.5}}
                                                        resizeMode="cover"
                                                        source={{
                                                            uri: data.thumbnail,
                                                        }}
                                                    ><Text
                                                        style={LibStyle.thumbnailCount}>+{Object.keys(item.books).length - 3}</Text>
                                                    </ImageBackground>
                                                )

                                            } else {
                                                return (
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            navigation.navigate("Book", {
                                                                title: data.subtitle,
                                                                dataBook: data.isbn

                                                            })
                                                        }}
                                                    >
                                                        <Image
                                                            style={LibStyle.thumbnail}
                                                            source={{
                                                                uri: data.thumbnail,
                                                            }}
                                                        />
                                                    </TouchableOpacity>
                                                )
                                            }
                                        }

                                    }


                                    }

                                >


                                </FlatList>
                                <View style={LibStyle.roundedNavigationButton}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate("List", {
                                                dataBooks: item.books,
                                                sectionName: item.authorName,
                                                nbBooks: Object.keys(item.books).length
                                            })
                                        }}
                                    >
                                        <Image style={{height: 40, width: 40, alignSelf: "center"}}
                                               source={require(Iconpath + "arrow_right.png")}/>


                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                    )


                }}
            >


            </FlatList>


        </View>

    )


}

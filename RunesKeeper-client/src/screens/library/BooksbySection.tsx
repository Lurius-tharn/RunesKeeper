import React, {useEffect, useState} from "react"
import {FlatList, Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import LibStyle from "../../styles/main/LibraryStyles";
import {bookService} from "../../services/book.service";
import {BooksInSection} from "../../models/BooksInSection";

export const BooksbySectionScreen = ({navigation}) => {

    const [synthesisBooksBySections, setSynthesisBooksBySections] = useState<BooksInSection[]>()

    const fetchData = () => {
        bookService.recupererLivresDesSections(1).then((booksInSections) => {
            setSynthesisBooksBySections(booksInSections)

        }).catch((error) => {
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
        <View style={LibStyle.container}>

            <View>
                <FlatList
                    data={synthesisBooksBySections}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => {
                        let color;
                        switch (item.section.section_name) {
                            case "Coup de cœur":
                                color = '#BF8F00'
                                break;
                            case "J'ai":
                                color = '#468C52'
                                break;
                            case "J'ai lu":
                                color = '#A7CC5C'
                                break;
                            case "Je veux":
                                color = '#E67C73'
                                break;
                            default:
                                break;
                        }
                        return <View style={LibStyle.blocContainer}>
                            <View
                                style={
                                    {...LibStyle.containerTitle, backgroundColor: item.section.section_color}
                                }>
                                <Text style={LibStyle.titleTxt}> {item.section.section_name}</Text>
                            </View>
                            <FlatList data={item.books}
                                      contentContainerStyle={LibStyle.booksContainer}
                                      horizontal={true}
                                      refreshing={true}
                                      keyExtractor={(item, index) => index.toString()}
                                      renderItem={({item: books, index}) => {
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
                                                              uri: books.thumbnail,
                                                          }}
                                                      ><Text
                                                          style={LibStyle.thumbnailCount}>+{Object.keys(item.books).length - 3}</Text>
                                                      </ImageBackground>
                                                  )

                                              } else {
                                                  return (
                                                      <Pressable
                                                          onPress={() => {
                                                              navigation.navigate("Book", {
                                                                  title: books.subtitle,
                                                                  isbn: books.isbn

                                                              })
                                                          }}
                                                      >
                                                          <Image
                                                              style={LibStyle.thumbnail}
                                                              source={{
                                                                  uri: books.thumbnail,
                                                              }}
                                                          />
                                                      </Pressable>
                                                  )
                                              }
                                          }

                                      }


                                      }
                            />
                            <TouchableOpacity
                                style={LibStyle.selectButton}
                                onPress={() => {
                                    navigation.navigate("List", {
                                        dataBooks: item.books,
                                        sectionName: item.section.section_name,
                                        nbBooks: Object.keys(item.books).length
                                    })
                                }}
                            >
                                <Text style={LibStyle.textButton}> Voir la sélection</Text>
                            </TouchableOpacity>

                        </View>
                    }


                    }


                />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

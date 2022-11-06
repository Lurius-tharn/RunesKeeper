import React, {useEffect, useState} from "react";
import {Alert, Image, Text, TouchableOpacity, View} from "react-native"
import bookStyle from "../../styles/main/BookStyles";
import ListStyle from "../../styles/main/ListStyle";
import * as Colors from "../../styles/colors";
import {bookService} from "../../services/book.service";
import {BookWithLikedSections} from "../../models/BookWithLikedSections";

const Iconpath = '../../assets/icons/'
/*
* Trois appels au back:
* Vérifier dans quel section est le livre pour l'identifier
*          recuperer en fonction des sections présentes dans la base une couleur
* Ajouter dans une section
* Retirer d'une section
*
* */
export const BookScreen = ({route, navigation}) => {
    const {isbn} = route.params.isbn;
    const authorApi = {}
    const Iconpath = '../../../assets/icons/'
    const [bookWithLikedSections, setbookWithLikedSections] = useState<BookWithLikedSections>()

    const fetchSectionsData = () => {
        bookService.recupererLivreParIsbn(1,isbn)
            .then((book) => {
                console.log (book)
                 setbookWithLikedSections (book);
            })
            .catch((error) => {
                console.error(error);
            });
    }



    useEffect(() => {
        const timer = setTimeout(() => {
            fetchSectionsData();
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    function getColorFromDatabase(number) {
        let section;
        let sectionColor;
        let returnedColor = "transparent";

        switch (number) {
            case 2:
                section = "Coup de cœur";
                sectionColor = Colors.PrimaryTextColor;
                break;
            case 3:
                section = "J'ai";
                sectionColor = Colors.IhaveColor;
                break;
            case 4:
                section = "J'ai lu";
                sectionColor = Colors.IreadColor;
                break;
            case 5:
                section = "Je veux";
                sectionColor = Colors.IwantColor;
                break;
        }

        bookWithLikedSections.likedSections.forEach((element) => {
            if (element.section_name === section)
                returnedColor = sectionColor;
        })
        return returnedColor;


    }

    return (
        <View style={bookStyle.BookContainer}>
            <View style={bookStyle.BannerContainer}>
                <Image
                    source={{
                        uri: bookWithLikedSections.book.thumbnail,
                    }}
                    style={{
                        height: 96.41,
                        width: 59.78,
                        marginRight: 5

                    }}
                />
                <View>
                    <Text style={bookStyle.titleText}>{bookWithLikedSections.book.title}</Text>
                    <Text style={bookStyle.subTitleText}>{bookWithLikedSections.book.subtitle}</Text>
                    <Text
                        style={bookStyle.publishText}>{bookWithLikedSections.book.publisher}, {bookWithLikedSections.book.nb_pages}, {bookWithLikedSections.book.published_date}</Text>

                </View>
            </View>
            <View style={bookStyle.authGenreContainer}>
                <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <Image style={{height: 22, width: 22}} source={require(Iconpath + "author.png")}/>
                    <Text style={bookStyle.authText}>{bookWithLikedSections.book.author}</Text>
                </View>

                <Text style={bookStyle.genreText}>{bookWithLikedSections.book.genre.name}</Text>
            </View>
            <View style={bookStyle.AddSectionsContainer}>
                <View style={bookStyle.OneSectionContainer}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: getColorFromDatabase(2),
                            borderColor: Colors.PrimaryTextColor, ...bookStyle.sectionsIconContainer
                        }}>
                        <Image style={{height: 35, width: 35, opacity: 1}} source={require(Iconpath + "iLove.png")}/>
                    </TouchableOpacity>
                    <Text style={{
                        ...bookStyle.sectionsText, color: Colors.PrimaryTextColor,
                    }}>Coup de coeur</Text>
                </View>


                <View style={{...bookStyle.OneSectionContainer, marginBottom: 10}}>
                    <TouchableOpacity style={{
                        backgroundColor: getColorFromDatabase(3),
                        borderColor: Colors.IhaveColor, ...bookStyle.sectionsIconContainer
                    }}>
                        <Image style={{height: 35, width: 35, zIndex: 99999}} source={require(Iconpath + "IHave.png")}/>
                    </TouchableOpacity>
                    <Text style={{
                        ...bookStyle.sectionsText, color: Colors.IhaveColor,
                    }}>J'ai</Text>
                </View>

                <View style={{...bookStyle.OneSectionContainer, marginBottom: 10}}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: getColorFromDatabase(4),
                            borderColor: Colors.IreadColor, ...bookStyle.sectionsIconContainer
                        }}
                        onPress={() => {
                            addBookOnSection(1, bookWithLikedSections.book.isbn, 4);
                        }}
                    >
                        <Image style={{height: 35, width: 35, zIndex: 444}} source={require(Iconpath + "iRead.png")}/>
                    </TouchableOpacity>
                    <Text style={{
                        ...bookStyle.sectionsText, color: Colors.IreadColor,
                    }}>J'ai lu</Text>
                </View>
                <View style={{...bookStyle.OneSectionContainer, marginBottom: 10}}>
                    <TouchableOpacity style={{

                        borderColor: Colors.IwantColor,
                        backgroundColor: getColorFromDatabase(5), ...bookStyle.sectionsIconContainer
                    }}>
                        <Image style={{height: 35, width: 35, zIndex: 9999, position: "relative"}}
                               source={require(Iconpath + "iWant.png")}/>
                    </TouchableOpacity>
                    <Text style={{
                        ...bookStyle.sectionsText, color: Colors.IwantColor,
                    }}>Je veux</Text>
                </View>


            </View>
            <View style={bookStyle.contentContainer}>
                <View>
                    <View style={ListStyle.bookNumberContainer}>
                        <Text style={ListStyle.numberText}>Du même auteur</Text>
                    </View>
                    {/* <FlatList
                        data={ApiBooks}
                    /> */}
                    <View>

                    </View>
                </View>

                <View
                    style={{
                        display: "flex",
                        flexDirection: "row-reverse"
                    }}
                >
                    <View style={{...ListStyle.bookNumberContainer}}>
                        <Text style={ListStyle.numberText}>Résumé</Text>
                    </View>
                </View>

                <View style={bookStyle.resumeContainer}>
                    <Text> {bookWithLikedSections.book.resume}</Text>
                </View>
            </View>

        </View>
    )
}

const updateStatus = async (status, idUser, idBook, idSection) => {
    if (status == 0) {
        addBookOnSection(idUser, idBook, idSection)

    }
}

const deleteBookOnSection = async (idUser, idBook, idSection) => {
    // Verifier dans un premier temps l'état du bouton (OnKeep, OffKeep)
    // en fonction de ca, supprimer ou ajouter la section et
    fetch("http://" + ":4547/Runeskeeper/deleteKeeper", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "idUser": idUser,
            "idBook": idBook,
            "idSection": idSection,

        })
    }).then(response => {
        return response.json()
    })
        .then(responseJSON => {
            if (!responseJSON.valid) {
                Alert.alert("ERREUR", responseJSON.message)
            } else {
                Alert.alert("VALID", responseJSON.message)
            }
        }).catch(error => console.log(error))
}

const addBookOnSection = async (idUser, idBook, idSection) => {

    // Verifier dans un premier temps l'état du bouton (OnKeep, OffKeep)
    // en fonction de ca, supprimer ou ajouter la section et
    fetch("http://" + ":4547/Runeskeeper/newKeeper", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "idUser": idUser,
            "idBook": idBook,
            "idSection": idSection,

        })
    }).then(response => {
        return response.json()
    })
        .then(responseJSON => {
            if (!responseJSON.valid) {
                Alert.alert("ERREUR", responseJSON.message)
            } else {
                Alert.alert("VALID", responseJSON.message)
            }
        }).catch(error => console.log(error))
}



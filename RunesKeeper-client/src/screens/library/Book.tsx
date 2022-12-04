import React, {useEffect, useState} from "react";
import {Alert, Text, TouchableOpacity, Image, View, FlatList} from "react-native"
import * as Colors from "../../styles/colors";
import {BookWithLikedSections} from "../../models/BookWithLikedSections";
import {bookService} from "../../services/book.service";
import bookStyle from "../../styles/main/BookStyles";
import ListStyle from "../../styles/main/ListStyle";
import {useFocusEffect, useIsFocused} from "@react-navigation/native";
import {userService} from "../../services/user.service";
import {Section} from "../../models/Section";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { MaterialIcons } from '@expo/vector-icons';
import {Book} from "../../models/Books";
import {User} from "../../models/User";

type MaterialIconName = React.ComponentProps<typeof MaterialIcons>['name'];
/*
* Trois appels au back:
* Vérifier dans quel section est le livre pour l'identifier
*          recuperer en fonction des sections présentes dans la base une couleur
* Ajouter dans une section
* Retirer d'une section
*
* */
export const BookScreen = ({route}) => {
    const {isbn} = route.params;
    const authorApi = {}
    const Iconpath = '../../../assets/icons/'
    const [bookWithLikedSections, setbookWithLikedSections] = useState<BookWithLikedSections>()
    const [secionsOfUser, setSecionsOfUser] = useState<Section[]>()

    const isFocused = useIsFocused();
    type Props = {
        materialIconName: keyof typeof MaterialIcons.glyphMap;
    }
    const fetchSectionsData = async () => {

        await userService.recupererSectionsUtilisateur(1).then((sections) => {
            setSecionsOfUser(sections)
        })
       await bookService.recupererLivreParIsbn(1, isbn)
            .then((bookWithLikedSections) => {
                if (!bookWithLikedSections){
                    // Recherche API
                    // enregistre le livre
                }
                setbookWithLikedSections(bookWithLikedSections);
                rafraichirSectionsLikes(bookWithLikedSections.likedSections)
            })
            .catch((error) => {
                console.error(error);
            });
    }


    useFocusEffect(
        React.useCallback(() => {
            const timer = setTimeout(() => {
                fetchSectionsData ().then ();
            });
            return () => clearTimeout(timer);
        }, [])
    );

    const afficherSectionsAjoutees = (section:Section) => {
               setSecionsOfUser((secionsOfUser)=> {
                   let secOfUser = secionsOfUser.find((seco) => seco.section_name == section.section_name)
                   secOfUser.addedSection = !secOfUser.addedSection
                   secOfUser.section_icon = secOfUser.addedSection?secOfUser.section_icon.split("-outline")[0]:secOfUser.section_icon + '-outline'
                   return [...secionsOfUser]
               })
    }
    // appeler ca dans un put
    const rafraichirSectionsLikes = (sections: Section[]) => {
        sections.forEach((liked)=> {
            secionsOfUser.find((seco) => seco.section_name == liked.section_name).addedSection = true
            afficherSectionsAjoutees(liked)
        })
    }

    const mettreAJourSections = (utilisateur: number, livre:Book,section:Section) => {
        bookService.modifierSectionPourLivre({id_user:1,password:0,email:"",pseudonyme:""}, livre, section).then((sections) =>{
            rafraichirSectionsLikes(sections)
        })
    }

    return bookWithLikedSections ?(
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
                    <MaterialCommunityIcons name="typewriter" size={22} color={Colors.IwantColor} />
                    <Text style={bookStyle.authText}>{bookWithLikedSections.book.author}</Text>
                </View>

                <Text style={bookStyle.genreText}>{bookWithLikedSections.book.genre.name}</Text>
            </View>
                <FlatList
                    data={secionsOfUser}
                    renderItem={({item: section, index}) =>
                        {
                            return (
                                <View style={{...bookStyle.OneSectionContainer}}>
                                    <TouchableOpacity onPress={() => {
                                        mettreAJourSections(1, bookWithLikedSections.book,section)
                                    }} style={{
                                        borderColor: section.section_color, ...bookStyle.sectionsIconContainer
                                    }}  >
                                        <MaterialCommunityIcons name={section.section_icon} size={35} color={section.section_color} />
                                    </TouchableOpacity>
                                    <Text style={{
                                        ...bookStyle.sectionsText, color: section.section_color,
                                    }}>{section.section_name}</Text>
                                </View>
                        )

                        }}
                    contentContainerStyle={bookStyle.AddSectionsContainer}
                    extraData={secionsOfUser}
                    refreshing={true}
                    keyExtractor={(item, index) => index.toString()}
                >


                </FlatList>

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
    ) : null
}


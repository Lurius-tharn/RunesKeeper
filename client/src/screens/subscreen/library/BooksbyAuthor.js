import React, {useEffect, useState} from "react"
import {View, FlatList, Image, ImageBackground, TouchableOpacity, Text} from "react-native"
import LibStyle from "../../../styles/main/LibraryStyles";
import {createStackNavigator} from '@react-navigation/stack'
import {IP_ADRESS} from "../../../../config/config";

import BooksByComponent from "../../../components/BooksByComponent";
const Stack = createStackNavigator()
const Iconpath = '../../../assets/icons/'

export const BooksbyAuthorScreen = ({navigation}) => {

    const [authorBookDataSource, setauthorBookDataSource ] = useState([])

    const fetchData = () => {
        fetch("http://" + IP_ADRESS + ":4547/Runeskeeper/allBooksbyAuthor/1")
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                setauthorBookDataSource(responseJson)
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

        <View >

            <BooksByComponent></BooksByComponent>
            <View style={LibStyle.container}>

                <View>

                    <FlatList
                    data={authorBookDataSource}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => {
                        return(
                        <View>
                            <View style={LibStyle.container}>
                                <View
                                    style={
                                        LibStyle.authorBlocTitleContainer
                                    }>
                                    <Text style={LibStyle.titleTxt}> {item.Auteur}</Text>
                                </View>
                            </View>
                            <View style={LibStyle.authorContainer}>
                                <FlatList
                                    data={item.data}
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
                                                        style={LibStyle.thumbnailCount}>+{Object.keys(item.data).length - 3}</Text>
                                                    </ImageBackground>
                                                )

                                            } else {
                                                return (
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            console.log(data)
                                                            navigation.navigate("Book", {
                                                                name: data.title,
                                                                dataBook: data

                                                            })
                                                        }}
                                                    >
                                                        <Image
                                                            style={LibStyle.thumbnail}
                                                            source={{
                                                                uri: data.thumbnail,
                                                            }}
                                                        >
                                                        </Image>
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
                                                dataBooks: item.data,
                                                name: item.sectionName,
                                                nbBooks: Object.keys(item.data).length
                                            })
                                        }}
                                    >
                                        <Image style={{height: 40, width: 40, alignSelf:"center"}}
                                               source={require(Iconpath+"arrow_right.png")}/>


                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                        )


                    }}
                    >


                    </FlatList>




                </View>
        </View>
        </View>
    )
}

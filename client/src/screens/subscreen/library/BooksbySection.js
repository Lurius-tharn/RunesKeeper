import React, {useEffect, useState} from "react"
import {FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native"
import LibStyle from "../../../styles/main/LibraryStyles";
import {createStackNavigator} from '@react-navigation/stack'
import {IP_ADRESS} from "../../../config";

const Stack = createStackNavigator()
export const BooksbySectionScreen = ({navigation}) => {

    const [dataSource, setDataSource] = useState([])
    const fetchData = () => {

        fetch("http://" + IP_ADRESS + ":4547/Runeskeeper/allBooksbysection/1")
            .then((response) => response.json())
            .then((responseJson) => {
                setDataSource(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchData();
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        //Components
        <View style={LibStyle.container}>
            <FlatList
                data={dataSource}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    let color;
                    switch (item.sectionName) {
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
                                {...LibStyle.containerTitle, backgroundColor: color}
                            }>
                            <Text style={LibStyle.titleTxt}> {item.sectionName}</Text>
                        </View>
                        <FlatList data={item.data}
                                  contentContainerStyle={LibStyle.booksContainer}
                                  horizontal={true}
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
                        />
                        <TouchableOpacity
                            style={LibStyle.selectButton}
                            onPress={() => {
                                navigation.navigate("List", {
                                    dataBooks: item.data,
                                    name: item.sectionName,
                                    nbBooks: Object.keys(item.data).length
                                })
                            }}
                        >
                            <Text style={LibStyle.textButton}> Voir la sélection</Text>
                        </TouchableOpacity>

                    </View>
                }


                }


            />


            {/* <SectionList 
            
                style= {LibStyle.blocContainer}
                
                sections = {dataSource}
                keyExtractor={(item,index) => index.toString()}  
                renderSectionHeader=
                { 
                    ({ section } ) => 
                        ( 
                            <View 
                                style={
                                    { ...LibStyle.containerTitle, backgroundColor:Colors.PrimaryTextColor}
                                }>
                                <Text style={LibStyle.titleTxt}>{section.sectionName}</Text>          
                            </View>
                        ) 
                }
                renderItem={({ item, index, section }) => (
                        <FlatList
                            data={item}
                            horizontal={true}
                            renderItem={({ item }) => <Text style={{color:Colors.BluedGreenColor}}>{item.Osbn}</Text>} 
                            
                        />
                    ) 

                    
                }
                             >
                
                <TouchableOpacity style= {LibStyle.selectButton}>
                <Text style={LibStyle.textButton}> Voir la sélection</Text>
            </TouchableOpacity>
            </SectionList> */}
        </View>
    )
}

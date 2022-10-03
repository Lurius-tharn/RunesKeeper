import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, LibraryScreen, SearchScreen} from '../screens/main/index'
import { View , Text , Image,ImageBackground ,TouchableOpacity} from "react-native"
import * as Colors from "../styles/colors";
import ListStyle from "../styles/main/ListStyle";
import { getHeaderTitle } from '@react-navigation/elements';
import header from "react-native/Libraries/NewAppScreen/components/Header";

const Tab = createBottomTabNavigator();
const Iconpath = '../assets/icons/'

const Navbar = ({route, navigation}) => {
    let pseudo = route.params.pseudo;
    const  LogoTitle = (title, options,titleStyle) => {
        return (
            <View style={options}>
                <Text style={titleStyle}>{title}</Text>

                <TouchableOpacity
                    style={{
                        ...titleStyle,
                        marginRight:10,
                        flex: 0.3,
                        backgroundColor: "beige",
                        borderWidth: 1,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        display:'flex',
                        justifyContent:'center',
                        flexDirection:'column'
                    }}
                    onPress={() => {
                      navigation.navigate('User', {'pseudo':pseudo})
                    }}>
                    <View style={{
                        height:15,
                        marginBottom:30,
                        backgroundColor: "red",


                    }}>
                        <Text style={{
                            fontFamily: "Montserrat",
                            fontSize: 32,
                            color: Colors.PrimaryTextColor,
                            marginTop:7,
                            marginLeft: 10

                        }}>{pseudo.substr(0,1)}</Text>

                    </View>
                </TouchableOpacity>


            </View>

        );
    }
    return (
        <Tab.Navigator
            screenOptions={
                [{
                    "tabBarActiveTintColor": Colors.WhiteColor,
                    "tabBarInactiveTintColor": Colors.WhiteColor,
                    "tabBarStyle": [
                        {
                            "display": "flex"
                        },
                        null
                    ]
                },
                ({route}) => ({
                    tabBarLabel: ({focused, color, size}) => {
                    return (
                    <Text
                    style={{
                    fontSize: 12,
                    fontWeight: '200',
                    fontFamily:'Montserrat',
                    opacity : focused ? 100 : 70, height: focused ? size : 0
                }}>
                {focused ? route.name.toUpperCase() : false}
                    </Text>
    
                    )
                },
                })
]
                
        
            }

        >
            <Tab.Group screenOptions={{

                headerStyle: {
                    backgroundColor: Colors.PrimaryColor,
                    height: 80,
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:"space-between",


                },
                header: ({ navigation, route, options }) => {
                    const title = getHeaderTitle(options, route.name);
                    return LogoTitle(title,options.headerStyle, options.headerTitleStyle) ;
                },
                headerTitleStyle: {
                    fontFamily: "Montserrat",
                    fontSize: 32,
                    color: Colors.PrimaryTextColor,
                    marginTop:35,
                    marginLeft: 15

                },
            }}>

                <Tab.Screen
                    name="Bibliothèque"
                    children={() => <LibraryScreen/>}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <Image style={{height: 40, width: 40}} source={require(Iconpath + "book.png")}/>)
                    }}
                />

                <Tab.Screen
                    name="Accueil"
                    component={HomeScreen} navigation={navigation}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <Image style={{height: 40, width: 40}} source={require(Iconpath + "home.png")}/>)
                    }}
                />

                <Tab.Screen
                    name="Rechercher"
                    children={() => <SearchScreen/>}
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <Image style={{height: 40, width: 40}} source={require(Iconpath + "search.png")}/>),


                    }}
                />

            </Tab.Group>

        </Tab.Navigator>

    )

}


export default Navbar;
 
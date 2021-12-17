import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, LibraryScreen, SearchScreen} from '../screens/main/index'
import { View , Text , Image,ImageBackground ,TouchableOpacity} from "react-native"
import * as Colors from "../styles/colors";

const Tab = createBottomTabNavigator();
const Iconpath = '../assets/icons/'

const Navbar = ({route, navigation}) => {
    //let pseudo = route.params.pseudo;
    return (
        <Tab.Navigator
            screenOptions={
                {
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
            }

        >
            <Tab.Group screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.PrimaryColor,

                },

                headerTitleStyle: {
                    fontFamily: "Montserrat",
                    fontSize: 32,
                    color: Colors.PrimaryTextColor
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
 
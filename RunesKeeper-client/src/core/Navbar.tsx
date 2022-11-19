import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, LibraryScreen, SearchScreen} from '../screens/main/MainIndex'
import {Image, Text, TouchableOpacity, View} from "react-native"
import * as Colors from "../constants/Colors";
import {getHeaderTitle} from '@react-navigation/elements';


const NavBarTab = createBottomTabNavigator<any>();
const Iconpath = '../../assets/icons/'

export const Navbar: React.FunctionComponent<any> = ({route, navigation}) => {
    let pseudo = route.params?.pseudo ?? '';


    const LogoTitle = (title: string, options: any, titleStyle: any) => {
        return (
            <View style={options}>
                <Text style={titleStyle}>{title}</Text>

                <TouchableOpacity
                    style={{
                        ...titleStyle,
                        marginRight: 10,
                        flex: 0.3,
                        backgroundColor: "beige",
                        borderWidth: 1,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}
                    onPress={() => {
                        navigation.navigate('User', {'pseudo': pseudo})
                    }}>
                    <View style={{
                        height: 15,
                        marginBottom: 30,
                        backgroundColor: "red",


                    }}>
                        <Text style={{
                            fontFamily: "Montserrat",
                            fontSize: 32,
                            color: Colors.PrimaryTextColor,
                            marginTop: 7,
                            marginLeft: 10

                        }}>{pseudo.substr(0, 1)}</Text>

                    </View>
                </TouchableOpacity>


            </View>

        );
    }

    function getTabBarLabel (routeName: string) {
        return ({focused, color}) => {
            return (
                <Text
                    style={{
                        fontSize: 12,
                        fontWeight: '200',
                        fontFamily: 'Montserrat',
                        opacity: focused ? 100 : 70,
                        height: focused ? 10 : 0
                    }}>
                    {focused ? routeName.toUpperCase () : false}
                </Text>

            )
        };
    }

    return (
        <NavBarTab.Navigator
            screenOptions={{
                tabBarActiveTintColor: Colors.PrimaryTextColor,
                tabBarInactiveTintColor: Colors.WhiteColor,
                tabBarStyle: [{display: "flex"}],
            }}


        >
            <NavBarTab.Group screenOptions={{

                headerStyle: {
                    backgroundColor: Colors.PrimaryColor,
                    height: 80,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: "space-between",


                },
                header: ({navigation, route, options}) => {
                    const title = getHeaderTitle(options, route.name);
                    return LogoTitle(title, options.headerStyle, options.headerTitleStyle);
                },
                headerTitleStyle: {
                    fontFamily: "Montserrat",
                    fontSize: 32,
                    color: Colors.PrimaryTextColor,
                    marginTop: 35,
                    marginLeft: 15

                },
            }}>

                <NavBarTab.Screen
                    name="Bibliothèque"
                    children={() => <LibraryScreen navigation={navigation}/>}
                    options={{
                        tabBarLabel:getTabBarLabel ('Bibliothèque'),
                        tabBarIcon: ({color, size,focused}) => (
                            <Image style={{height: 40, width: 40}} source={require(Iconpath + "book.png")}/>)
                    }}
                />

                <NavBarTab.Screen
                    name="Accueil"
                    children={() => <HomeScreen/>}

                    options={{
                        tabBarLabel:getTabBarLabel ("Accueil"),

                        tabBarIcon: ({color, size}) => (
                            <Image style={{height: 40, width: 40}} source={require(Iconpath + "home.png")}/>)
                    }}
                />

                <NavBarTab.Screen
                    name="Rechercher"
                    children={() => <SearchScreen/>}
                    options={{
                        tabBarLabel:getTabBarLabel ("Rechercher"),

                        tabBarIcon: ({color, size}) => (
                            <Image style={{height: 40, width: 40}} source={require(Iconpath + "search.png")}/>),


                    }}
                />

            </NavBarTab.Group>

        </NavBarTab.Navigator>

    )

}


export default Navbar;

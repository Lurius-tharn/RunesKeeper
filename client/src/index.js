import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Navbar from './navigation/Navbar';
import {ListScreen} from './screens/subscreen/List';
import {PrimaryColor, PrimaryTextColor} from './styles/colors';
import {BookScreen} from './screens/subscreen/Book';
import Authentification from "./screens/authentification/Authentification";
import RunesKeeperRedirect from "./screens/RkRedirect";
import User from "./screens/user/User";
const Stack = createStackNavigator()
const Index = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {/*Troisième écran qui s'affiche en p^remier, chargé de l'aggichage de RK. Si il detecte un utilisateur il navige dans le main*/}
                <Stack.Screen
                    name = "RunesKeeperRedirect"
                    component = {RunesKeeperRedirect}
                />
                <Stack.Screen
                    name = "Authentication"
                    component = {Authentification}
                />
                <Stack.Screen
                    name = "User"
                    component = {User}
                />
                <Stack.Screen
                    name="Main"
                    component={Navbar}
                />
                <Stack.Group screenOptions={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: PrimaryColor,

                    },
                    headerTitleStyle: {
                        fontFamily: "Montserrat",
                        fontSize: 32,
                        color: PrimaryTextColor
                    }
                }


                }>
                    <Stack.Screen
                        name="List"
                        component={ListScreen}
                        options={({route}) => ({
                            titre: route.params.name
                        })}
                    />
                    <Stack.Screen
                        name="Book"
                        component={BookScreen}
                        options={({route}) => ({
                            titre: route.params.name
                        })}
                    />
                </Stack.Group>

            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Index;

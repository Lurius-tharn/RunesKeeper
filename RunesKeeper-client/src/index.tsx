import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {PrimaryColor, PrimaryTextColor} from './styles/colors';
import UserScreen from "./screens/main/UserScreen";
import Navbar from "./core/Navbar";
import AuthentificationScreen from "./screens/authentification/AuthentificationScreen";
import RunesKeeperRedirect from "./screens/main/RkRedirect";
import {ListScreen} from "./screens/library/List";
import {BookScreen} from "./screens/library/Book";


type RootStackParamList = {
    RunesKeeperRedirect: undefined;
    Authentication: undefined;
    User: undefined;
    Main: undefined;
    List: { sectionName: string }
    Book: { title: string }
}
const RootStack = createStackNavigator<RootStackParamList>();
const Index = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{headerShown: false}}>
                <RootStack.Screen
                    name="RunesKeeperRedirect"
                    component={RunesKeeperRedirect}
                />
                <RootStack.Screen
                    name="Authentication"
                    component={AuthentificationScreen}
                />
                <RootStack.Screen
                    name="User"
                    component={UserScreen}
                />
                <RootStack.Screen
                    name="Main"
                    component={Navbar}
                />
                <RootStack.Group screenOptions={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: PrimaryColor,

                    },
                    headerTitleStyle: {
                        fontFamily: "Montserrat",
                        fontSize: 32,
                        color: PrimaryTextColor
                    },
                }


                }>
                    <RootStack.Screen
                        name="List"
                        component={ListScreen}
                        options={({route}): any => ({
                            headerTitle: route?.params.sectionName
                        })}
                    />
                    <RootStack.Screen
                        name="Book"
                        component={BookScreen}
                        options={({route}): any => ({
                            headerTitle: route.params?.title
                        })}

                    />
                </RootStack.Group>

            </RootStack.Navigator>
        </NavigationContainer>
    );
}


export default Index;

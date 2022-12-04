import React from "react"
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {BooksbyAuthorScreen, BooksbyGenreScreen, BooksbySectionScreen} from '../library/index';
import * as Colors from "../../constants/Colors";

const Tab = createMaterialTopTabNavigator();
export const LibraryScreen = ({navigation}) => {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: Colors.WhiteColor,
                tabBarLabelStyle: {fontSize: 12},
                tabBarStyle: {backgroundColor: Colors.DarkBlue},
                tabBarIndicatorStyle: {backgroundColor: Colors.PrimaryTextColor}
            }}
        >
            <Tab.Screen
                name="Rubrique"
                component={BooksbySectionScreen}
                options={{tabBarLabel: 'Rubrique'}}
            />
            <Tab.Screen
                name="Autheur"
                component={BooksbyAuthorScreen}
                options={{tabBarLabel: 'Auteur'}}
            />
            <Tab.Screen
                name="Genre"
                component={BooksbyGenreScreen}
                options={{tabBarLabel: 'Genre'}}

            />
        </Tab.Navigator>

    )
}

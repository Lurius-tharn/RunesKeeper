import React from "react"
import { View , Text , Image,ImageBackground ,TouchableOpacity} from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LibStyle from "../../styles/main/LibraryStyles"
import {  BooksbySectionScreen,
    BooksbyAuthorScreen,
    BooksbyGenreScreen} from '../subscreen/library/index';
import * as Colors from  "../../styles/colors";

const Tab = createMaterialTopTabNavigator();
export const LibraryScreen = ({navigation}) => {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
            tabBarActiveTintColor: Colors.WhiteColor,
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { backgroundColor: Colors.DarkBlue },
            tabBarIndicatorStyle :{ backgroundColor: Colors.PrimaryTextColor }
      }}
    >
      <Tab.Screen
        name="Rubrique"
        component={BooksbySectionScreen } 
        navigator = {navigation}
        options={{ tabBarLabel: 'Rubrique' }}
      />
      <Tab.Screen
        name="Autheur"
        component={BooksbyAuthorScreen}
        options={{ tabBarLabel: 'Auteur' }}
      />
      <Tab.Screen
        name="Genre"
        component={BooksbyGenreScreen }
        options={{ tabBarLabel: 'Genre' }}

      />
    </Tab.Navigator>
        
    )
}

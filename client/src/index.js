
import React from 'react';

import { ScrollView,StyleSheet } from 'react-native';
import Authentication from './screens/authentification/Authentification'
import Register from './screens/authentification/Register';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Navbar from './navigation/Navbar';
import { ListScreen } from './screens/subscreen/List';
import { PrimaryColor, PrimaryTextColor } from './styles/colors';
import { BookScreen } from './screens/subscreen/Book';

const Stack = createStackNavigator()
export default Index = () => {
    return (

        <NavigationContainer>
          <Stack.Navigator screenOptions= {{headerShown : false}}>
              <Stack.Screen name = "Authentication" component = {Authentication} />
              <Stack.Screen 
                name = "Main"  
                component = {Navbar} 
               
               />
               <Stack.Group screenOptions = {{
                 headerShown:true,
                  headerStyle: {
                    backgroundColor:PrimaryColor, 
                              
                  },
                              
                  headerTitleStyle: {
                    fontFamily:"Montserrat",
                    fontSize:32,
                    color:PrimaryTextColor
                  }
                }
                 
                 
               }>
                  <Stack.Screen 
                    name = "List"  
                    component = {ListScreen}
                    options={({ route }) => ({ 
                      title: route.params.name
                     })}
                  />
                  <Stack.Screen 
                    name = "Book"  
                    component = {BookScreen}
                    options={({ route }) => ({ 
                      title: route.params.name
                     })}
                  />
                 </Stack.Group>
               
          </Stack.Navigator>
        </NavigationContainer>
      );
}

const styles =  StyleSheet.create({

  main:{
  },
})

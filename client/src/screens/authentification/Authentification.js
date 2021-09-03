import React, { useState } from 'react'

import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

import {Login} from "./Login";
import {Register} from './Register';

import AuthStyle from '../../styles/authentification/AuthStyles';
import RunesKeeper from '../../assets/svg/RunesKeeper';

import { PrimaryColor } from '../../styles/colors';
const Stack = createStackNavigator()

export default Authentification = ({navigation}) => {
    
    return(
        <View style={AuthStyle.mainView}>
          <View style={AuthStyle.view}>
              <RunesKeeper/>
              <Text style= {AuthStyle.title}>RunesKeeper</Text>           
          </View>
          <Stack.Navigator screenOptions = {
            {headerShown : false, 
            cardStyle:{backgroundColor: PrimaryColor, height:0},
            presentation:'modal'}
          }>
            <Stack.Screen name="Login" component={Login} navigator = {navigation}  />
            <Stack.Screen name="Register" component={Register} navigator = {navigation}  />

          </Stack.Navigator>
          
        </View>
    )
}



import React from 'react'

import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'

import {Login} from "./Login";
import {Register} from './Register';

import AuthStyle from '../../styles/authentification/AuthStyles';

import {PrimaryColor} from '../../styles/colors';
import RunesKeeper from "../../../assets/svg/RunesKeeper";

const Stack = createStackNavigator()

const AuthentificationScreen = ({navigation}) => {

    return (
        <View style={AuthStyle.mainView}>
            <View style={AuthStyle.view}>
                <RunesKeeper height={'80%'} width={'75%'}/>
            </View>
            <View>

            </View>
            <Stack.Navigator screenOptions={
                {
                    headerShown: false,
                    cardStyle: {backgroundColor: PrimaryColor, height: 0},
                    presentation: 'modal'
                }
            }>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>

            </Stack.Navigator>

        </View>
    )
}


export default AuthentificationScreen;
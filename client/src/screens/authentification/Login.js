import React, {useState} from 'react';
import {Alert, Pressable, Text, TextInput, TouchableOpacity, View} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStyle from '../../styles/authentification/AuthStyles';
import {IP_ADRESS} from '../../../config/config';
import Checkbox from 'expo-checkbox';

export const Login = ({navigation}) => {
    const [pseudo, setPseudo] = useState('')
    const [password, setPassword] = useState('')
    const [isSelected, setSelection] = useState(false);
    let data = {"pseudo": pseudo, "pwd": password}
    const validate = (email, password) => {
        const pseudoRegex = /^[a-zA-Z]+$/
        return {
            pseudo: pseudoRegex.test(pseudo) && pseudo.length >0  ,
            password: password.length > 0 && password.length < 15,

        };
    }

    const errors = validate(pseudo, password);
    const isDisabled = Object.keys(errors).every(x => errors[x]);

    const getErrorColor = (control) => {
        return errors[control] ? '#65D4B0' : '#913F3F';
    }
    return (

        <View style={AuthStyle.formView}>
            <Text style={AuthStyle.CenterTextFormView}>Connectez-vous !</Text>
            <View style={AuthStyle.formContent}>
                <Text style={AuthStyle.txt}>Votre pseudonyme</Text>
                <TextInput value={pseudo}
                           placeholder="FitzChevalerie"
                           style={{...AuthStyle.inputText, borderColor: getErrorColor('pseudo'),  color: getErrorColor('pseudo')}}
                           onChangeText={(text) => setPseudo(text.trim())}>
                </TextInput>
                <Text style={AuthStyle.txt}>Votre mot de passe</Text>

                <TextInput value={password}

                           placeholder="Loinvoyant"

                           secureTextEntry={true}
                           style={{...AuthStyle.inputText, borderColor: getErrorColor('password'),  color: getErrorColor('password')}}
                           onChangeText={(text) => setPassword(text.trim())}>
                </TextInput>
                <View style={AuthStyle.checkBoxView}>

                    <Checkbox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={AuthStyle.checkbox}
                    />
                    <Text style={AuthStyle.txt}>Restez connecté ?</Text>
                </View>
                <Text style={AuthStyle.registerTxt}>Pas encore inscrit ?
                    <Text style={{...AuthStyle.registerTxt, textDecorationLine: "underline"}}
                          onPress={() => navigation.navigate('Register')}>
                        Rejoignez nous !
                    </Text>
                </Text>
                <Text style={AuthStyle.registerTxt}>Mot de pass oublié ?</Text>


            </View>

            <Pressable
                disabled={!isDisabled}
                style={({pressed}) => [
                    AuthStyle.loginButton,
                    {
                        opacity: pressed ? 0.5 : 1.0,
                        backgroundColor: isDisabled ? '#65D4B0' : '#913F3F'
                    }
                ]}

               onPress={() => {logIn(data, navigation,isSelected)}}
            >
                <Text style={AuthStyle.loginButtonText}>Se connecter</Text>
            </Pressable>


        </View>
    )
}

const logIn = async (data, navigation, isLogged) => {
    fetch("http://" + IP_ADRESS + ":4547/Runeskeeper/signin", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "pseudo": data["pseudo"],
            "password": data["pwd"]
        })
    }).then(response => {
        return response.json()
    })
        .then(responseJSON => {
            if (!responseJSON.valid) {
                Alert.alert("ERREUR", responseJSON.message)
            } else {

                if (isLogged){
                    try {
                        const jsonValue = JSON.stringify(responseJSON)
                         AsyncStorage.setItem('@ma_clé', jsonValue)
                    } catch (e) {
                        Alert.alert("ERREUR", 'impossible de rester connecter')
                    }
                }
                navigation.navigate('Main', {"pseudo": responseJSON.pseudo})
            }
        }).catch(error => console.log(error))
}
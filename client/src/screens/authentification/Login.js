import React, {useState} from 'react';
import {Alert, CheckBox, Text, TextInput, TouchableOpacity, View} from 'react-native'
import AuthStyle from '../../styles/authentification/AuthStyles';
import {IP_ADRESS} from '../../config';

export const Login = ({navigation}) => {
    const [pseudo, setPseudo] = useState('')
    const [password, setPassword] = useState('')
    const [isSelected, setSelection] = useState(false);
    let data = {"pseudo": pseudo, "pwd": password}


    return (

        <View style={AuthStyle.formView}>
            <Text style={AuthStyle.CenterTextFormView}>Connectez-vous !</Text>
            <View style={AuthStyle.formContent}>
                <Text style={AuthStyle.txt}>Votre pseudonyme</Text>
                <TextInput value={pseudo}
                           style={AuthStyle.inputText}
                           onChangeText={(text) => setPseudo(text.trim())}>
                </TextInput>
                <Text style={AuthStyle.txt}>Votre mot de passe</Text>

                <TextInput value={password}
                           secureTextEntry={false}
                           style={AuthStyle.inputText}
                           onChangeText={(text) => setPassword(text.trim())}>
                </TextInput>
                <View style={AuthStyle.checkBoxView}>

                    <CheckBox
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

            <TouchableOpacity style={AuthStyle.loginButton} onPress={() => {
                if (!pseudo) {
                    Alert.alert('ERREUR', "vous devez saisir votre pseudo !")
                } else if (!password) {
                    Alert.alert('ERREUR', "vous devez saisir votre mot de passe !")
                } else {
                    logIn(data, navigation)
                }
            }}>
                <Text style={AuthStyle.loginButtonText}>Se connecter</Text>
            </TouchableOpacity>


        </View>
    )
}

const logIn = async (data, navigation) => {
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
                navigation.navigate('Main', {"pseudo": responseJSON.pseudo})
            }
        }).catch(error => console.log(error))
}
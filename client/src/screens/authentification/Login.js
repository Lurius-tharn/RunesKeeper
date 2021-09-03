import React, { useState }  from 'react';
import { CheckBox, Text, TextInput, View,TouchableOpacity, Alert,Linking  } from 'react-native'
import AuthStyle from '../../styles/authentification/AuthStyles';

const ip_address = '172.20.41.106'

export const Login = ({navigation}) => {
    const [pseudo, setPseudo] =  useState('Caca')
    const [password, setPassword] = useState('Caca')
    const [isSelected, setSelection] = useState(false);    
    let data = { "pseudo": pseudo, "pwd" : password}

     

    return (
     
        <View style = {AuthStyle.formView}>
            <Text style={AuthStyle.CenterTextFormView}>Connectez-vous !</Text>
            <View style = {AuthStyle.formContent}>
                <Text style={AuthStyle.txt}>Votre pseudonyme</Text>
                <TextInput value={'Caca'} 
                        style={AuthStyle.inputText} 
                        onChangeText={(text) => setPseudo(text.trim())}>
                </TextInput>
                <Text style={AuthStyle.txt}>Votre mot de passe</Text>

                <TextInput value={'Caca'} 
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
                    <Text  style={AuthStyle.txt}>Restez connecté ?</Text>
                </View>
                <Text  style={AuthStyle.registerTxt}>Pas encore inscrit ? 
                    <Text style={AuthStyle.registerTxt,{textDecorationLine: "underline"}}
                        onPress={() => navigation.navigate('Register')}>
                        Rejoignez nous !
                     </Text>
                </Text>
                <Text  style={AuthStyle.registerTxt}>Mot de pass oublié ?</Text>

               
            </View>

            <TouchableOpacity style={AuthStyle.loginButton}   onPress={() => {
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
    fetch("http://" + ip_address + ":4547/Runeskeeper/signin", {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            "pseudo":data["pseudo"],
            "password":data["pwd"]
        })
    }).then(response => {return response.json()})
      .then(responseJSON => {
          if(!responseJSON.valid) {
              Alert.alert("ERREUR", responseJSON.message)
          } else {
            navigation.navigate('Main', {"pseudo": responseJSON.pseudo})
          }
        }).catch (error => console.log(error))
}
import React, { useState }  from 'react';
import { CheckBox, Text, TextInput, View,TouchableOpacity, Alert,Linking  } from 'react-native'
import AuthStyle from '../../styles/authentification/AuthStyles';
import { Login } from './Login';

import { IP_ADRESS } from '../../config';
export const Register = ({props,navigation }) => {
  
  const [email, setEmail] =  useState('')

  const [pseudo, setPseudo] =  useState('')
  const [password, setPassword] = useState('')
  const [verifiedPassword, setVerifiedPassword] = useState('')
  let data = { "email":email,"pseudo": pseudo, "pwd" : password}

    return(
      <View style = {AuthStyle.formView}>
      <Text style={AuthStyle.CenterTextFormView}>Inscrivez-vous !</Text>
      <View style = {AuthStyle.formContent}>
          <Text style={AuthStyle.txt}>Entrez votre email</Text>
          <TextInput value={email} 
                  style={AuthStyle.inputText} 
                  onChangeText={(text) => setEmail(text.trim())}>
          </TextInput>
          <Text style={AuthStyle.txt}>Entrez votre Pseudonyme</Text>

          <TextInput value={pseudo} 
              secureTextEntry={false} 
              style={AuthStyle.inputText} 
              onChangeText={(text) => setPseudo(text.trim())}>
          </TextInput>
          <Text style={AuthStyle.txt}>Entrez votre mot de passe</Text>

          <TextInput value={password} 
              secureTextEntry={false} 
              style={AuthStyle.inputText} 
              onChangeText={(text) => setPassword(text.trim())}>
          </TextInput>
          <Text style={AuthStyle.txt}>Entrez de nouveau votre mot de passe</Text>

          <TextInput value={verifiedPassword} 
              secureTextEntry={false} 
              style={AuthStyle.inputText} 
              onChangeText={(text) => setVerifiedPassword(text.trim())}>
          </TextInput>
          

         
      </View>

      <TouchableOpacity style={AuthStyle.loginButton}   onPress={() => {
                      if (!email) {
                          Alert.alert('ERREUR', "vous devez saisir votre adresse e-mail !")
                      } else if (!pseudo) {
                          Alert.alert('ERREUR', "vous devez saisir votre pseudonyme !")
                      } else if (!password) {
                        Alert.alert('ERREUR', "vous devez saisir votre mot de passe !")
                      }else if (!verifiedPassword) {
                      Alert.alert('ERREUR', "vous devez vérifier votre mot de passe !")
                      } else {
                        signIn(data, navigation.navigator)
                      }
                  }}>
                  <Text style={AuthStyle.loginButtonText}>S'inscrire</Text>
      </TouchableOpacity>
      

  </View>
    )
}
const signIn = async (data, navigation) => {
  fetch("http://" + IP_ADRESS + ":4547/Runeskeeper/signup", {
      method:"POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "email":data["email"],
          "pseudo":data["pseudo"],
          "password":data["pwd"],
         "repeatPassword": data["repeatPassword"]
      })
  }).then(response => {return response.json()})
    .then(responseJSON => {
        if(!responseJSON.valid) {
            Alert.alert("ERREUR", responseJSON.message)
        } else {
          navigation.navigate('Login', Login)
        }
      }).catch (error => console.log(error))
}



import React, {useState} from 'react';
import {Alert, Pressable, Text, TextInput, View} from 'react-native'
import AuthStyle from '../../styles/authentification/AuthStyles';

export const Register = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [pseudo, setPseudo] = useState('')
    const [password, setPassword] = useState('')
    const [verifiedPassword, setVerifiedPassword] = useState('')
    let data = {"email": email, "pseudo": pseudo, "pwd": password}

    const validate = (pseudo, email, password, verifiedPassword) => {
        const pseudoRegex = /^[a-zA-Z]+$/
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        return {
            pseudo: pseudoRegex.test(pseudo) && pseudo.length > 0,
            email: emailRegex.test(email) && email.length > 0,
            password: password.length > 0 && password.length < 15,
            verifiedPassword: verifiedPassword == password && verifiedPassword.length > 0
        };
    }

    const errors = validate(pseudo, email, password, verifiedPassword);
    const isDisabled = Object.keys(errors).every(x => errors[x]);
    const getErrorColor = (control) => {
        return errors[control] ? '#65D4B0' : '#913F3F';
    }

    return (
        <View style={AuthStyle.formView}>
            <Text style={AuthStyle.CenterTextFormView}>Inscrivez-vous !</Text>
            <View style={AuthStyle.formContent}>
                <Text style={AuthStyle.txt}>Entrez votre email</Text>
                <TextInput value={email}
                           style={{
                               ...AuthStyle.inputText,
                               borderColor: getErrorColor('email'),
                               color: getErrorColor('email')
                           }}
                           onChangeText={(text) => setEmail(text.trim())}>
                </TextInput>
                <Text style={AuthStyle.txt}>Entrez votre Pseudonyme</Text>

                <TextInput value={pseudo}
                           style={{
                               ...AuthStyle.inputText,
                               borderColor: getErrorColor('pseudo'),
                               color: getErrorColor('pseudo')
                           }}
                           onChangeText={(text) => setPseudo(text.trim())}>
                </TextInput>
                <Text style={AuthStyle.txt}>Entrez votre mot de passe</Text>

                <TextInput value={password}
                           secureTextEntry={true}
                           style={{
                               ...AuthStyle.inputText,
                               borderColor: getErrorColor('password'),
                               color: getErrorColor('password')
                           }}

                           onChangeText={(text) => setPassword(text.trim())}>
                </TextInput>
                <Text style={AuthStyle.txt}>Entrez de nouveau votre mot de passe</Text>

                <TextInput value={verifiedPassword}
                           secureTextEntry={true}
                           style={{
                               ...AuthStyle.inputText,
                               borderColor: getErrorColor('verifiedPassword'),
                               color: getErrorColor('verifiedPassword')
                           }}
                           onChangeText={(text) => setVerifiedPassword(text.trim())}>
                </TextInput>


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

                onPress={() => {
                    signIn(data, navigation)
                }}
            >
                <Text style={AuthStyle.loginButtonText}>S'inscrirer</Text>
            </Pressable>

        </View>
    )
}
const signIn = async (data, navigation) => {
    fetch("http://" + ":4547/Runeskeeper/signup", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": data["email"],
            "pseudo": data["pseudo"],
            "password": data["pwd"],
            "repeatPassword": data["repeatPassword"]
        })
    }).then(response => {
        return response.json()
    })
        .then(responseJSON => {
            if (!responseJSON.valid) {
                Alert.alert("ERREUR", responseJSON.message)
            } else {
                navigation.navigate("RunesKeeperRedirect")
            }
        }).catch(error => console.log(error))
}



import React, {useEffect, useState} from "react"
import {Button, Text, TextInput, TouchableOpacity, View} from "react-native"
import SearchStyle from "../../styles/main/SearchStyle";
import {BarCodeScanner} from "expo-barcode-scanner";
import LibStyle from "../../styles/main/LibraryStyles";

export const SearchScreen = (props) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions().then();
    }, []);

    const handleBarCodeScanned = ({type, data}) => {
        setScanned(true);
        const requiredBarCodeTypes = [BarCodeScanner.Constants.BarCodeType.ean13, BarCodeScanner.Constants.BarCodeType.ean8]

        requiredBarCodeTypes.forEach(requiredType => requiredType === type ? alert(`Bar code with type ${type} and data ${data} has been scanned!`) : '')


    };

    if (hasPermission === null) {
        return <Text>Demande d'autorisation d'acccès à la caméra</Text>;
    }
    if (hasPermission === false) {
        return <Text>Pas d'autorisation d'accès à la caméra</Text>;
    }

    return (
        <View style={SearchStyle.searchContainer}>

            <TextInput
                placeholder="Rechercher par titre, auteur ou ISBN"
                style={{
                    ...SearchStyle.SearchInputContainer,
                }}
            >
            </TextInput>
            <TouchableOpacity
                style={LibStyle.selectButton}
                onPress={() => {

                }}
            >
                <Text style={LibStyle.textButton}> Rechercher</Text>
            </TouchableOpacity>
            <View style={SearchStyle.BarCodeContainer}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{
                        width: 100 + "%",
                        height: 100 + "%",
                        display: "flex",
                        top: 0,
                        bottom: 0
                    }}

                />
                <Text style={{
                    position: 'absolute',
                    margin: 'auto',
                    height: 50,
                    color: "green",
                    alignItems: 'center', justifyContent: 'center',
                }}>Scannez le code barre de votre livre </Text>
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)}/>}

            </View>

        </View>
    )
}

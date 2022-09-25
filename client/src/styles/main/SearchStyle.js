import * as Colors from "../colors";
import {StyleSheet} from "react-native";

const SearchStyle = StyleSheet.create({

    searchContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 30,
        flex: 1,

    },

    SearchInputContainer: {
        backgroundColor: Colors.WhiteColor,
        borderColor: Colors.IwantColor,
        borderWidth: 7,
        borderRadius: 35,
        height: 70,
        width: 100 + "%",
        color: '#65D4B0',
        fontSize: 20,
        textAlign: "center",
        justifyContent: "center",
        alignContent: "center",

    },
    BarCodeContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        width: 100 + "%",
        height: 100 + "%",
        paddingBottom: 100

    }

})

export default SearchStyle;
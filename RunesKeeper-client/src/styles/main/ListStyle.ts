import {StyleSheet} from "react-native";

import * as Colors from "../colors";

const ListStyle = StyleSheet.create({

    upContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 90 + "%",
        margin: 15,
        position: "relative",
        zIndex: 1000
    },

    bookNumberContainer: {
        backgroundColor: Colors.DarkBlue,
        borderRadius: 16,
        width: 196,
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    numberText: {
        fontFamily: "Montserrat",
        fontSize: 25,
        color: Colors.WhiteColor,
        flexWrap: "nowrap",

        textAlign: "center"

    },

    listContainer: {
        display: "flex",
        flexGrow: 1,
        flexWrap: "wrap"

    },
    itemContainer: {
        display: "flex",
        flexDirection: "row",
        height: 120,
        width: 320,
        backgroundColor: Colors.WhiteColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        margin: 15,
        alignItems: "flex-start"
    },
    thumbnailContainer: {
        width: 80,
        height: 120,
    },
    textContainer: {
        display: "flex",
        width: 240,
    },
    subtitleContainer: {
        display: "flex",

    },
    subtitle: {
        fontFamily: "Montserrat",
        fontSize: 15,
        color: "#000000"
    },
    otherTextContainer: {
        display: "flex",
        height: 120
    },
    otherText: {
        fontFamily: "Montserrat",
        fontSize: 8,
        color: "#000000",

    },
    publisher: {
        display: "flex",
        justifyContent: "flex-start",
        width: 50 + "%"
    },
    book: {
        display: "flex",

    }

})

export default ListStyle;
import React from "react";
import {StyleSheet} from "react-native";
import {WhiteColor} from "../colors";

const bookStyle = StyleSheet.create({

    BookContainer: {
        display: "flex",
        flexDirection: "column",
        flex: 1,

    },

    BannerContainer: {
        height: 115,
        backgroundColor: "#0A546F",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },

    authGenreContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10
    },
    AddSectionsContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderTopWidth: 0.2,
        borderTopColor: "#707070",
        borderBottomWidth: 0.2,
        borderBottomColor: "#707070",
        marginRight: 10,
        marginLeft: 10

    },
    contentContainer: {
        margin: 20
    },
    resumeContainer: {
        display: "flex",
        flexGrow: 1,
        marginTop: 15
    },
    resumeText: {
        fontFamily: "Montserrat",
        fontSize: 15,
        fontWeight: "200",


    },
    titleText: {
        fontFamily: "Montserrat",
        fontSize: 20,
        color: WhiteColor,
        fontWeight: "bold",
        lineHeight: 20

    },
    subTitleText: {
        fontFamily: "Montserrat",
        fontSize: 15,
        color: WhiteColor,
        fontWeight: "bold",
        opacity: 0.52,
        marginBottom: 10
    },
    publishText: {
        fontFamily: "Montserrat",
        fontSize: 13,
        color: WhiteColor,
        fontWeight: "bold",
    },
    authText: {
        fontFamily: "Montserrat",
        fontSize: 12,
        color: "#E67C73",
        fontWeight: "bold",

    },
    genreText: {
        fontFamily: "Montserrat",
        fontSize: 12,
        color: "#77AAEE",
        fontWeight: "bold",
    },
    sectionsText: {
        fontFamily: "Montserrat",
        fontSize: 9,
        textAlign: "center",
        fontWeight: "bold",

    },

    sectionsIconContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "nowrap",
        borderRadius: 50,
        height: 40,
        width: 40,
        borderWidth: 1,

    }, OneSectionContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 7,
        marginRight: 5,
        width: 50,
        height: 70,
        minHeight: 70
    }


})

export default bookStyle;
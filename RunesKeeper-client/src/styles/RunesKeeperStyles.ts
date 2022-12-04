import React from "react";
import {StyleSheet} from "react-native";
import * as Colors from "./colors";

const RunesKeeperStyles = StyleSheet.create({
    RksMainView:{
        flexGrow: 1,
        flex:1,
        backgroundColor:Colors.PrimaryColor,


    },
    RksView: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

        height:"75%",
    }

})

export default RunesKeeperStyles;
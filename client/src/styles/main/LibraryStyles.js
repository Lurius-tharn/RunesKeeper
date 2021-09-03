import { StyleSheet } from "react-native";
import * as Colors from "../colors";

const LibStyle =  StyleSheet.create({

    container:{
      
    },
    blocContainer: {
        display:"flex",
        
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:Colors.WhiteColor,
        minHeight:230,
        height:230,
        margin:20,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
containerTitle: {
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        width:100+"%",
        height:32,
    },
    titleTxt:{
        color:Colors.WhiteColor,
        fontFamily:"Montserrat",
        fontSize:19,
    },
    booksContainer:{
        display: "flex",
        alignItems:"center",
        justifyContent:"flex-start",
        flexDirection:'row',
        height: 104,
       marginTop:30
    },
    thumbnail:{
        width: 60, 
        height: 104,
        margin:10,
     
    },
    thumbnailCount:{
        color: "#913F3F",
        fontFamily:"Montserrat",
        fontSize: 20,
        lineHeight: 40,
        fontWeight: "bold",
        textAlign: "center",
        alignSelf:"center"
    },

    selectButton:{
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:Colors.DarkBlue,
        borderRadius:32,
        height:43,
        width:154,
        margin:10

    },
    textButton:{
        color: Colors.WhiteColor,
        fontFamily:"Montserrat",
        fontSize: 17,
        lineHeight: 40,
    }
})

export default LibStyle;
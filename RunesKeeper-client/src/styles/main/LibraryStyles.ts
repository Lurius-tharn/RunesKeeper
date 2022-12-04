import { StyleSheet } from "react-native";
import * as Colors from "../colors";

const LibStyle =  StyleSheet.create({

    container:{
        display:"flex",
        flexDirection:"column",
    },
    authorBlocTitleContainer : {
        top:35,
        backgroundColor:Colors.DarkBlue,
        display: "flex",
        alignItems:"flex-start",
        justifyContent:"center",
        width:55+"%",
        height:50,
        borderRadius:10,
        marginBottom:20,
        marginLeft:20,



    },
    authorContainer:{
        display:"flex",
        zIndex:-10000,
        flexDirection:"row",
        alignItems:"flex-start",

        backgroundColor:Colors.WhiteColor,
        minHeight:130,
        height:130,
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
    blocContainer: {
        display:"flex",
        zIndex:-10000,
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
        fontSize:22,
    },
    booksContainer:{
        display: "flex",
        alignItems:"center",
        justifyContent:"flex-start",
        flexDirection:'row',
        height: 104,
       marginTop:30,

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
    },
    roundedNavigationButton: {
        alignSelf:"center",
        display:"flex",
        backgroundColor: Colors.DarkBlue,
        justifyContent:"center",
        width: 50,
        height:50,
        borderRadius:50,
        marginRight:10

    }
})

export default LibStyle;
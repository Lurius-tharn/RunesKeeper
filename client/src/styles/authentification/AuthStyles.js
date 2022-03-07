import { StyleSheet } from "react-native";
import * as Colors from "../colors";
import RunesKeeperStyles from "../RunesKeeperStyles";
const AuthStyle =  StyleSheet.create({

    mainView:{
        flexGrow: 1,
        flex:1,
        backgroundColor:Colors.PrimaryColor,

    },
    view: {
        ...RunesKeeperStyles.RksView,
        height:"45%",

    },
    title: {
       
        fontSize:35,
        fontWeight:'normal',
        fontFamily:"LibreBaskerville",
        color:Colors.WhiteColor,
        position:"relative"
    },
    subtitle: {
        fontSize:17,
        fontWeight:'normal',
        fontFamily:"LibreBaskerville",
        color:Colors.WhiteColor,
        opacity:0.37,
        position:"relative"
    },
    formView: {
        display: "flex",
        flexDirection:"column",
       
        alignItems:'center',
        justifyContent:'center',

    },
    formContent:{
        display: "flex",
        flexDirection:"column",
        marginTop:10,
        alignItems:"flex-start",
        justifyContent:"flex-start"
    },

    CenterTextFormView:{
        textAlign:"center",
        fontSize:25,
        fontWeight:'normal',
        fontFamily:"LibreBaskerville",
        color:Colors.WhiteColor,
        marginBottom:10,
    },txt: {
        fontSize:15,
        fontWeight:'normal',
        fontFamily:"LibreBaskerville",
        color:Colors.WhiteColor,
        paddingRight:10,

    },
    registerTxt:{
        fontSize:15,
        fontWeight:'normal',
        fontFamily:"LibreBaskerville",
        color:Colors.WhiteColor,
        opacity:0.37,
        marginBottom:5,
        
    },
    inputText:{
        backgroundColor:Colors.WhiteColor,
        borderColor:"#392D2D",
        borderWidth:5,
        borderRadius:25,
        padding:1 ,
        height:49,
        width:300,
        textAlign:"center",
        marginBottom:5 ,
        color: '#65D4B0'
    },
    checkBoxView:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
   
    loginButton : {
        backgroundColor:Colors.BluedGreenColor,
        borderRadius:35,
        width:154,
        height:45,
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        marginTop:10
    },
    loginButtonText : {
        fontSize:18,
        fontWeight:'normal',
        fontFamily:"LibreBaskerville",
        color:Colors.WhiteColor,
      
        
       
    }
    

})

export default AuthStyle;
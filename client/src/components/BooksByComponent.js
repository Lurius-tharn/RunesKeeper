import {Pressable, Animated, Text, View, StyleSheet, Modal} from "react-native";
import React, {useState, useRef} from 'react';
import * as Colors from "../styles/colors";
import SvgComponent from "../assets/svg/SvgComponent";




 const BooksByComponent = ({sortBy, trie}) => {
     const translation = useRef(new Animated.Value(0)).current;
     const fadeAnim  = useRef(new Animated.Value(0)).current;
     const translationy = useRef(new Animated.Value(0)).current;
     const [modalVisible, setModalVisible] = useState(false);

     const [push, setPush ] = useState(0)


     const animation = (animatedStyle,animatedToValue) => {
         Animated.timing(animatedStyle, {
             toValue: animatedToValue,
             delay:20,
             useNativeDriver: true,
             duration: 500
         }).start();
     }
     const openModal = () => {
             animation(translation,30);
             animation(fadeAnim,1);
             animation(translationy,50);
             setModalVisible(true)

     };
     const closeModal = () => {
         animation(translation,0);
         animation(fadeAnim,0);
         animation(translationy,0);
         setTimeout(() => {
             setModalVisible(false)
         }, 500);





     };

     const Item = ({ titre ,taille, couleur, trierPar}) => (
             <Pressable
                 style={({pressed}) => [
                     {
                         opacity: pressed ? 0.5 : 1.0,
                     }, styles.item
                 ]}
                 onPress={({}) => {
                     trie(trierPar)
                     console.log("click")

                 }}
             >
                 <SvgComponent title={titre} size={taille} color={couleur} />
                 <Text style={styles.title}>{titre}</Text>
             </Pressable>

     );

     const renderItem = ({ item }) => (
         <Item taille={item.taille} couleur={item.couleur} titre={item.titre} trierPar={item.trierPar} />);


         return (
             <View style={styles.container}>

                 <Pressable
                     onPress={({}) => {
                         setPush(push+1)
                         push % 2 == 0 ? openModal() : closeModal()

                     }}

                 >
                     <View style={styles.fadingContainer}/>
                     <Animated.View
                         style={[
                             styles.fadingContainer,
                             {
                                 transform: [{translateX: translation}],
                             }
                         ]}/>

                     <View style={styles.fadingContainer}/>

                 </Pressable>

                 <Modal
                     transparent={true}
                     visible={modalVisible}
                     onRequestClose={() =>closeModal()}

                 >
                     <Pressable style={styles.outsideModal}
                                onPress={(event) => { if (event.target == event.currentTarget) {
                                    closeModal()
                                    console.log("ferme la")
                                } }} >

                         <Animated.FlatList

                             style={{
                                 opacity: fadeAnim,
                                 transform: [{translateY: translationy}],
                                 borderRadius:15,
                                 backgroundColor:'#3B404D',
                                 flexGrow: 0,
                                 position:"absolute",
                                 margin:90,




                             }}
                             data={sortBy}

                             renderItem={renderItem}
                             keyExtractor={item => item.titre} >

                         </Animated.FlatList>
                     </Pressable>
                 </Modal>


             </View>
         );
 }

const styles = StyleSheet.create({

    container: {

        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        position:"relative",

    },
    fadingContainer: {
        margin:20,

        width: 60,
        height:6,
        backgroundColor: "#484E5F",
        marginBottom:2,
        marginTop:2,


    },
    fadingText: {
        fontSize: 28
    },
    buttonRow: {
        flexBasis: 100,
        justifyContent: "space-evenly",
        marginVertical: 16,

    },
    item: {
        padding: 5,
        paddingBottom: 15,

        zIndex:1,
        paddingHorizontal:5,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        borderBottomColor:'#4A5061',
        borderBottomWidth:0.5,
        position:"relative"




    },
    title: {
        marginLeft:15,
        fontSize: 20,
        fontFamily: "Montserrat",
        fontWeight: "200",
        color:Colors.WhiteColor,
        justifyContent:'center',
    },

    outsideModal:{
        flex: 1,
    }
});

export default BooksByComponent;
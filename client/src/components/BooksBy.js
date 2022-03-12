import {Pressable, Animated, Text, View, StyleSheet,SafeAreaView, Button} from "react-native";
import React, {useState, useEffect, useRef} from 'react';




 const BooksByComponent = ({props}) => {
     const translation = useRef(new Animated.Value(0)).current;
     const fadeAnim  = useRef(new Animated.Value(0)).current;
     const translationy = useRef(new Animated.Value(0)).current;

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
         if (push % 2 == 0){

             animation(translation,30);
             animation(fadeAnim,1);
             animation(translationy,50);
         }else {
             animation(translation,0);
             animation(fadeAnim,0);
             animation(translationy,0);
         }

     };

     const DATA = [
         {
             id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
             title: 'First Item',
         },
         {
             id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
             title: 'Second Item',
         },
         {
             id: '58694a0f-3da1-471f-bd96-145571e29d72',
             title: 'Third Item',
         },{
             id: '58694a0f-3da1-471f-bd96-145571e29d72',
             title: 'Third Item',
         },
     ];
     const Item = ({ title }) => (
         <View style={styles.item}>
             <Text style={styles.title}>{title}</Text>
         </View>
     );
     const renderItem = ({ item }) => (
         <Item title={item.title} />);
     return (
         <View style={styles.container}>

             <Pressable
                 onPress={({pressed}) => {
                     setPush(push+1)
                     openModal()
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


             <Animated.FlatList style={{

                 opacity: fadeAnim,         // Bind opacity to animated value
                 transform: [{translateY: translationy}],
                 borderRadius:15,
                 backgroundColor:'#3B404D',
                 padding:30,
                 maxHeight: DATA.length*50

             }} data={DATA}   renderItem={renderItem}
                                keyExtractor={item => item.id} >

             </Animated.FlatList>

         </View>
     );
 }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'relative'
    },
    fadingContainer: {
        width: 60,
        height:10,
        backgroundColor: "powderblue",
        marginBottom:5,
        marginTop:5,
        borderRadius:15
    },
    fadingText: {
        fontSize: 28
    },
    buttonRow: {
        flexBasis: 100,
        justifyContent: "space-evenly",
        marginVertical: 16
    },
    item: {
        padding: 10,
        borderBottomColor:'#4A5061',
        borderBottomWidth:0.5


    },
    title: {
        fontSize: 15,
    },
});

export default BooksByComponent;
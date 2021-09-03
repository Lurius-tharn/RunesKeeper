import React from "react"
import { View , Text , Image,ImageBackground ,TouchableOpacity} from "react-native"
import LibStyle from "../../../styles/main/LibraryStyles";

import * as Colors from  "../../../styles/colors";
export const BooksbyAuthorScreen = (props) => {
    return (
        //Components
        <View >
            <View style= {LibStyle.blocContainer}>
                <View 
                    style={
                        { ...LibStyle.containerTitle, backgroundColor:Colors.PrimaryTextColor}
                    }>
                    <Text style={LibStyle.titleTxt}> Coup de coeur</Text>          
                </View>
                <View style={LibStyle.booksContainer}>
                    <Image    style = {LibStyle.thumbnail} 
                    source={{
                    uri: 'http://books.google.com/books/content?id=bcCGAQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                    }}          
                    ></Image>

                    <Image  style = {LibStyle.thumbnail} 
                                        source={{
                                        uri: 'http://books.google.com/books/content?id=bcCGAQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                                        }}          
                                        ></Image>

                    <Image  style = {LibStyle.thumbnail}  
                                        source={{
                                        uri: 'http://books.google.com/books/content?id=bcCGAQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                                        }}          
                                        ></Image>
                    <ImageBackground    style = {{
                                            ...LibStyle.thumbnail,   
                                            display:"flex",
                                            alignItems:"center",
                                            justifyContent:"center"}}   
                                        imageStyle= 
                                            {{opacity:0.5}}
                                        resizeMode="cover"
                                        source={{
                                            uri: 'http://books.google.com/books/content?id=bcCGAQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                                        }}          
                                        ><Text style={LibStyle.thumbnailCount} >+10</Text></ImageBackground>
                </View>
            <TouchableOpacity style= {LibStyle.selectButton}>
                <Text style={LibStyle.textButton}> Voir la sélection</Text>
            </TouchableOpacity>

            </View>
        </View>
    )
}

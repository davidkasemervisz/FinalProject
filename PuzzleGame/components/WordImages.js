import React from 'react';
import { View, Image } from 'react-native';

const WordImages = ({props}) => {
    firstImage = props.firstImage;
    secondImage = props.secondImage;

    return (
        <View style={{flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: 'center'}} >
            <Image style={{resizeMode: 'contain', width: '40%', padding: '5%'}} source={firstImage} />
            <Image style={{resizeMode: 'contain', width: '40%', padding: '5%'}} source={secondImage} />
        </View>
    ); 
}

export default WordImages;

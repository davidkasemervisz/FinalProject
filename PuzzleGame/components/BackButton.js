import React from 'react';
import { Pressable } from 'react-native'
import { Text } from '@ui-kitten/components';

const BackButton = ({navigation, props}) => {
    var targetLocation = props.targetLocation;
    var code = props.code;

    return (
        <Pressable onPress={() => navigation.navigate(targetLocation, {code: code})}
        style = {{padding: '5%'}}>
            <Text category='h2'>Back</Text>
        </Pressable>
    );
}

export default BackButton;

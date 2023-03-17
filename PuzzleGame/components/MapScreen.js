import React from 'react';
import { Pressable } from 'react-native'
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import BackButton from './BackButton';

const LevelButton = ({navigation, props}) => {
    var levelNumber = props.levelNumber;
    var code = props.code;

    var color;
    if(code.charAt(levelNumber-1) == 'f') {
      color = 'white';
    } else {
      color = 'green';
    }

    return (
        <Pressable onPress={() => navigation.navigate("Level", {levelNumber: levelNumber, code: code})}>
            <Text category='h2' style={{color: color}}>Level {levelNumber}</Text>
        </Pressable>
    );
}

const MapScreen = ({route, navigation}) => {  
  var code = route.params.code;

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text category='h1' style={{padding:"10%"}}>MAP</Text>
          <LevelButton navigation={navigation} props={{levelNumber: 1, code: code}} />
          <LevelButton navigation={navigation} props={{levelNumber: 2, code: code}}/>
          <LevelButton navigation={navigation} props={{levelNumber: 3, code: code}} />
          <LevelButton navigation={navigation} props={{levelNumber: 4, code: code}} />
          <LevelButton navigation={navigation} props={{levelNumber: 5, code: code}} />
          <LevelButton navigation={navigation} props={{levelNumber: 6, code: code}} />
          <BackButton navigation={navigation} props={{targetLocation: "Home", code: code}} />
      </Layout>
    </ApplicationProvider>
  );
}

export default MapScreen; 

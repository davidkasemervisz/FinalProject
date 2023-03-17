import React from 'react';
import { useState } from 'react';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { TextInput, View } from 'react-native';
import * as eva from '@eva-design/eva';
import BackButton from './BackButton';
import WordImages from './WordImages'
import GetLevelInfo from '../assets/LevelData';

const UpdateLevelCompletedCode = (code, levelNumber, completed) => {
  var character = completed ? 't' : 'f';
  var newCode = code.substring(0, levelNumber-1) + character + code.substring(levelNumber);
  return newCode;
}

const LevelScreen = ({route, navigation}) => {
  const [guess, setGuess] = useState("");

  var levelNumber = route.params.levelNumber;
  var info = GetLevelInfo(levelNumber);
  var firstImage = info.firstImage;
  var secondImage = info.secondImage;
  var word = info.word;
  var code = route.params.code;

  var message; 
  var color;
  if(guess != "") {
    if(guess == word) {
      message = "Correct!";
      color = "green";
      code = UpdateLevelCompletedCode(code, levelNumber, true);
    } else {
      message = "Incorrect!";
      color = "red";
      code = UpdateLevelCompletedCode(code, levelNumber, false);
    }
  }

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text category='h1'>Level {levelNumber}</Text>
          <WordImages props={{firstImage: firstImage, secondImage: secondImage}} />
          <View style={{backgroundColor: 'white', width: '80%', borderSize: '5%', borderRadius: 25, padding: '5%'}}>
            <Text style={{color: 'black'}}>Enter Word:</Text>
            <TextInput style={{color: 'black'}} 
            onChangeText={(text) => setGuess(text)} 
            value={guess}
            />
            <Text style={{color: color}}>{message}</Text>
          </View>
          <BackButton navigation={navigation} props={{targetLocation: "Map", code: code}} />
      </Layout>
    </ApplicationProvider>
  );
}

export default LevelScreen; 

import React from 'react';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import BackButton from './BackButton';
import WordImages from './WordImages'
import GetLevelInfo from '../assets/LevelData';

const InstructionsScreen = ({route, navigation}) => {
    var code = route.params.code;
    var info = GetLevelInfo(0);
    var firstImage = info.firstImage;
    var secondImage = info.secondImage;
    var word = info.word;

    return (
        <ApplicationProvider {...eva} theme={eva.dark}>
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text category='h1' style={{padding: '5%'}}>Instructions</Text>
            <Text category='h2'>Use Images To Find Word</Text>
            <WordImages props={{firstImage: firstImage, secondImage: secondImage}} />
            <Text category='h2'>Example Word:</Text>
            <Text category='h2'>{word}</Text>
            <BackButton navigation={navigation} props={{targetLocation: "Home", code: code}} />
        </Layout>
        </ApplicationProvider>
    );
}

export default InstructionsScreen;

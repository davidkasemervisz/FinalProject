import React from 'react';
import { Pressable } from 'react-native'
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const HomeScreen = ({route, navigation}) => {
  var code;
  if(route.params == undefined) {
    code = 'ffffff';
  } else {
    code = route.params.code;
  }

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category='h1' style={{padding:'10%'}}>WORD PUZZLE</Text>
        <Pressable onPress={() => navigation.navigate("Map", {code: code})}>
          <Text category='h2' style={{padding:'5%'}}>Play</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Instructions", {code: code})}>
          <Text category='h2' style={{padding:'5%'}}>Instructions</Text>
        </Pressable>
      </Layout>
    </ApplicationProvider>
  );
}

export default HomeScreen; 

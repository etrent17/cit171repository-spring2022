import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons from './Icons.js';
import Bar  from './Bar.js';

//const setUserEmail = setUserEmail
const setUserEmail = 'trent6679@gmail.com'

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, marginTop: 30, justifyContent: 'flex-start'}}>
    <View>
      <Bar loggedInUser="trent6679@gmail.com"/>
      <Icons />
    </View>
    </SafeAreaView>
  );
};

export default Home;

import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons from './Icons.js';
import Bar  from './Bar.js';
import getToken from './Login.js';

//const setUserEmail = setUserEmail
// const setUserEmail = 'trent6679@gmail.com'

const Home = (props) => {
  return (
    <SafeAreaView style={{flex: 1, marginTop: 30, justifyContent: 'flex-start'}}>
    <View style = {{flex: 1, marginTop: 30, justifyContent: 'flex-start'}}>
      
      <Bar loggedInUser={props.loggedInUser}/>
      <Icons />
    </View>
    </SafeAreaView>
  );
};

export default Home;

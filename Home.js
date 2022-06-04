import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons from './Icons.js';
import Bar  from './Bar.js';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, marginTop: 30}}>
    <View>
      <Bar loggedInUser="Elijah"/>
      <Icons />
    </View>
    </SafeAreaView>
  );
};

export default Home;

import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-elements';

const Icons = () => {
  return (
    <View style={styles.icons}>
      <Card style={styles.card}>
        <Image style={styles.image} source={require('./image/ImproveBalance.png')}></Image>
      </Card>
      <Card style={styles.card}>
        <Image style={styles.image} source={require('./image/LearnAboutBalance.png')}></Image>
      </Card>
      <Card style={styles.card}>
        <Image style={styles.image} source={require('./image/Profile.png')}></Image>
      </Card>
      <Card style={styles.card}>
        <Image style={styles.image} source={require('./image/StatsandImprovement.png')}></Image>
      </Card>
      <Card style={styles.card}>
        <Image style={styles.image} source={require('./image/STEDITimer.png')}></Image>
      </Card>
      <Card style={styles.card}>
        <Image style={styles.image} source={require('./image/Tutorial.png')}></Image>
      </Card>
    </View>
  );
};

export default Icons;
const cardWidth = (Dimensions.get('window').width) / 4;

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    justifyContent: 'center',
    height: '75%',
    width: "100%"
  },
  image: {
    maxWidth: cardWidth
  }
});

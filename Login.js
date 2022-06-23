import React, {useState} from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native';

const sendText = async (phoneNumber) => {
	console.log("PhoneNumber: ", phoneNumber)
	await fetch('https://dev.stedi.me/twofactorlogin/' + phoneNumber, {
		method: 'POST',
		headers: {'Content-Type': 'application/text'}});
}

const getToken = async ({phoneNumber, oneTimePassword}) =>{
	const tokenResponse = await fetch('https://dev.stedi.me/twofactorlogin',{
		method: 'POST',
		body: JSON.stringify({oneTimePassword, phoneNumber}),
		headers: {
			'content-type':'application/json'
		}
	});

	const tokenResponseString = await tokenResponse.text();
}

const image = {uri: "https://images.pexels.com/photos/8046382/pexels-photo-8046382.jpeg?cs=srgb&dl=pexels-beyza-erdem-8046382.jpg&fm=jpg"}

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [oneTimePassword, setOneTimePassword] = useState(null);
		const[count, setCount] = useState(0)
		const onPress = () => setCount(prevCount => prevCount + 1)
  
    return (
      <ImageBackground
      source={image} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.margin}>
        <View style={styles.titleBox}>

        <Text style={styles.textTitle}>
          Login Here
        </Text>
        </View>
        
        <TextInput
          style={styles.input}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          placeholder="123-456-7890"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          onChangeText={setOneTimePassword}
          value={oneTimePassword}
          placeholder="1234"
          keyboardType="numeric"
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={()=>{getToken(phoneNumber, oneTimePassword)}}
          >
          <Text>Login</Text>
        </TouchableOpacity>
		<TouchableOpacity
          style={styles.button}
          onPress={()=>{sendText({phoneNumber, getToken})}}
					>
          <Text>Get OTP</Text>
        </TouchableOpacity>
      </SafeAreaView>
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    textTitle: {
      fontFamily: "sans-serif" ,
      fontSize: 30
    },
    titleBox: {
      alignItems: "center",
      justifyContent: "center"
    },
    margin:{
      marginTop:"30%",
      backgroundColor: "lavender"
    },
    button:{
      alignItems: "center",
      backgroundColor: "lightsalmon",
      padding: 10,
      borderBottomColor: '#CB624B',
      borderBottomWidth: 2,
    },
    image: {
      flex: 1,
      //justifyContent: "center"
    },
  });
  
  export default Login;



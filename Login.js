import React, {useState} from 'react';
import { AppRegistry, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native';

const sendText = async (phoneNumber) => {
	console.log("PhoneNumber: ", phoneNumber)
	await fetch('https://dev.stedi.me/twofactorlogin/' + phoneNumber, {
		method: 'POST',
		headers: {'Content-Type': 'application/text'}})
}

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [oneTimePassword, setOneTimePassword] = useState(null);
		const[count, setCount] = useState(0)
		const onPress = () => setCount(prevCount => prevCount + 1)
  
    return (
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
          onPress={()=>console.log("Login Button was Clicked")}
          >
          <Text>Login</Text>
        </TouchableOpacity>
		<TouchableOpacity
          style={styles.button}
          onPress={()=>{sendText(phoneNumber)}}
          >
          <Text>Get OTP</Text>
        </TouchableOpacity>
      </SafeAreaView>
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
      marginTop:"50%",
      backgroundColor: "lavender"
    },
    button:{
      alignItems: "center",
      backgroundColor: "lightsalmon",
      padding: 10
    }
  });
  
  export default Login;



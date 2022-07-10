import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, ImageBackground } from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const sendText= async (phoneNumber)=>{
  console.log("PhoneNumber: ",phoneNumber);
  await fetch('https://dev.stedi.me/twofactorlogin/'+phoneNumber, {
    method: 'POST',
    headers:{
      'content-type':'application/text'
    }
  });
}


const setUserName = async tokenResponseString => {
  const some_token = await fetch('https://dev.stedi.me/validate/'
    + tokenResponseString,
      {method: 'GET'}
  )

  const userName = await some_token.text()
  console.log('You are logged in as: ', userName)
}



const getToken = async ({phoneNumber, oneTimePassword, setUserLoggedIn}) =>{
  const tokenResponse = await fetch('https://dev.stedi.me/twofactorlogin',{
    method: 'POST',
    body:JSON.stringify({phoneNumber, oneTimePassword}),
    headers: {
      'content-type':'application/json'
    }

  });

  const responseCode = tokenResponse.status;// 200 means logged in
  console.log("Response Status Code", responseCode);
  if(responseCode==200){
    setUserLoggedIn(true);
  }
  const tokenResponseString = await tokenResponse.text();
  const emailResponse = await fetch('https://dev.stedi.me/validate/' + tokenResponseString,
  {
    method: 'GET',
    headers:
    {
      'content-type': 'application/json'
    }
  }
);
  const email = await emailResponse.text();


  props.setUserName(email);
}

const image = {uri: "https://cdn.quotesgram.com/small/23/20/1497809967-b3d5d041736276bdf3a95792634592f2.jpg"}






const Login = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);

  return (
    <ImageBackground
    source={image} resizeMode="cover" style={styles.image}>
    <SafeAreaView >
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholderTextColor = '#4251f5'
        placeholder= "123-456-7890"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={()=>{
          sendText(phoneNumber);
        }}
      >
        <Text>Send Text</Text>
      </TouchableOpacity>
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
        onPress={()=>{
          getToken({phoneNumber, oneTimePassword, setUserLoggedIn:props.setUserLoggedIn});
        }}
      >
        <Text>Login</Text>
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
    backgroundColor: '#ffffff'
  },
  margin:{
    marginTop:100
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 10
  },
  image: {
    flex: 1,
    marginTop:100
    //justifyContent: "center"
  },
});

export default Login;

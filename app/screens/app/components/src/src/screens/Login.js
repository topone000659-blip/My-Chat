import React,{useState} from "react";

import {
 View,
 Text,
 TextInput,
 Button,
 Alert
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import API from "../services/api";

import {saveUser} from "../services/storage";



export default function Login({navigation}){


const [phone,setPhone]=useState("");

const [password,setPassword]=useState("");



const login=async()=>{


try{


const response =
await API.post(
"/auth/login",
{
 phone,
 password
}
);



await AsyncStorage.setItem(
"token",
response.data.token
);



if(response.data.user){

 await saveUser(
  response.data.user
 );

}



Alert.alert(
"Success",
"Login success"
);



navigation.replace(
"ChatList"
);



}catch(error){


Alert.alert(
"Error",
"Login failed"
);


}


};



return(

<View>

<Text>
Login
</Text>


<TextInput
placeholder="Phone"
value={phone}
onChangeText={setPhone}
/>


<TextInput
placeholder="Password"
secureTextEntry
value={password}
onChangeText={setPassword}
/>


<Button
title="Login"
onPress={login}
/>


</View>

);


}

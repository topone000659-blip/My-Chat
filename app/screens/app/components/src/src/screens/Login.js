import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert
} from "react-native";

import API from "../services/api";



export default function Login({navigation}) {


  const [phone,setPhone] = useState("");

  const [password,setPassword] = useState("");



  const login = async()=>{

    try{


      const response = await API.post(
        "/auth/login",
        {
          phone,
          password
        }
      );



      const token =
        response.data.token;



      Alert.alert(
        "Success",
        "Login success"
      );


      console.log(token);



      // နောက်မှာ Token Storage ထည့်မယ်


    }catch(error){


      Alert.alert(
        "Error",
        "Login failed"
      );


    }

  };



  return (

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

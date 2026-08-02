import React, {useEffect, useState} from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  FlatList
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import API from "../services/api";



export default function ChatRoom({route}) {


  const {userId} = route.params;


  const [messages,setMessages] = useState([]);

  const [message,setMessage] = useState("");



  useEffect(()=>{

    loadMessages();

  },[]);



  const loadMessages = async()=>{

    try{

      const token =
        await AsyncStorage.getItem("token");


      const myId = "MY_USER_ID";


      const response =
        await API.get(

          `/messages/${myId}/${userId}`,

          {
            headers:{
              Authorization:
              `Bearer ${token}`
            }
          }

        );


      setMessages(response.data);


    }catch(error){

      console.log(error);

    }

  };



  const sendMessage = async()=>{

    try{


      const token =
        await AsyncStorage.getItem("token");


      await API.post(

        "/messages",

        {
          sender_id:"MY_USER_ID",
          receiver_id:userId,
          message
        },

        {
          headers:{
            Authorization:
            `Bearer ${token}`
          }
        }

      );


      setMessage("");

      loadMessages();


    }catch(error){

      console.log(error);

    }

  };



  return (

    <View>


      <FlatList

        data={messages}

        keyExtractor={
          (item)=>item.id
        }

        renderItem={({item})=>(

          <Text>
            {item.message}
          </Text>

        )}

      />



      <TextInput

        placeholder="Message"

        value={message}

        onChangeText={setMessage}

      />



      <Button

        title="Send"

        onPress={sendMessage}

      />


    </View>

  );

}

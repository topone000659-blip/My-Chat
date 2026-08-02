import React, {useEffect, useState} from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  FlatList
} from "react-native";

import socket from "../services/socket";

import AsyncStorage from "@react-native-async-storage/async-storage";

import API from "../services/api";



export default function ChatRoom({route}) {


  const {userId} = route.params;


  const [messages,setMessages] = useState([]);

  const [message,setMessage] = useState("");



  useEffect(()=>{


    loadMessages();


    socket.connect();



    socket.emit(
      "joinRoom",
      userId
    );



    socket.on(
      "receiveMessage",
      (data)=>{


        setMessages(
          old => [
            ...old,
            data
          ]
        );


      }
    );



    return ()=>{

      socket.off(
        "receiveMessage"
      );

      socket.disconnect();

    };


  },[]);




  const loadMessages = async()=>{

    try{


      const token =
      await AsyncStorage.getItem("token");



      const response =
      await API.get(

        `/messages/MY_USER_ID/${userId}`,

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


    const data = {

      sender_id:"MY_USER_ID",

      receiver_id:userId,

      message

    };



    socket.emit(
      "sendMessage",
      data
    );



    setMessage("");

  };




  return (

    <View>


      <FlatList

        data={messages}

        keyExtractor={
          item=>item.id || Math.random().toString()
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


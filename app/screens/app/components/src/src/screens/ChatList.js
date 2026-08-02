import React, {useEffect, useState} from "react";

import {
  View,
  Text,
  FlatList
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import API from "../services/api";



export default function ChatList({navigation}) {


  const [chats,setChats] = useState([]);



  useEffect(()=>{

    loadChats();

  },[]);



  const loadChats = async()=>{

    try{


      const token =
        await AsyncStorage.getItem("token");



      const response =
        await API.get(

          "/chats",

          {
            headers:{
              Authorization:
              `Bearer ${token}`
            }
          }

        );



      setChats(response.data);



    }catch(error){

      console.log(error);

    }

  };



  return (

    <View>

      <Text>
        Chat List
      </Text>


      <FlatList

        data={chats}

        keyExtractor={
          (item)=>item.user_id
        }


        renderItem={({item})=>(

          <Text>

            User: {item.user_id}

          </Text>

        )}

      />

    </View>

  );

}


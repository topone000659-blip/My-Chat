import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';

import ChatBubble from '../components/ChatBubble';
import colors from '../theme/colors';


export default function ChatRoom(){

  const [message,setMessage] = useState("");

  const messages=[
    {
      id:"1",
      text:"Hello 👋",
      sender:"other"
    },
    {
      id:"2",
      text:"Hi, How are you?",
      sender:"me"
    }
  ];


  return (

    <View style={styles.container}>


      <View style={styles.header}>

        <Text style={styles.back}>
          ←
        </Text>

        <Text style={styles.name}>
          Ko Ko
        </Text>

        <Text>
          📞 📹
        </Text>

      </View>



      <FlatList

        data={messages}

        keyExtractor={(item)=>item.id}

        renderItem={({item})=>(

          <ChatBubble
            message={item.text}
            sender={item.sender}
          />

        )}

      />



      <View style={styles.inputArea}>


        <TextInput
          style={styles.input}
          placeholder="Message"
          value={message}
          onChangeText={setMessage}
        />


        <TouchableOpacity style={styles.send}>

          <Text style={styles.sendText}>
            ➤
          </Text>

        </TouchableOpacity>


      </View>


    </View>

  );

}



const styles=StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:colors.background
  },


  header:{
    height:70,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    padding:15,
    borderBottomWidth:1,
    borderColor:colors.border
  },


  back:{
    fontSize:25
  },


  name:{
    fontSize:20,
    fontWeight:"bold"
  },


  inputArea:{
    flexDirection:"row",
    padding:10
  },


  input:{
    flex:1,
    height:50,
    borderWidth:1,
    borderColor:colors.border,
    borderRadius:25,
    paddingHorizontal:20
  },


  send:{
    width:50,
    height:50,
    borderRadius:25,
    backgroundColor:colors.primary,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:10
  },


  sendText:{
    color:"#fff",
    fontSize:20
  }

});


import React from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import colors from '../theme/colors';


const chats = [
  {
    id:"1",
    name:"Ko Ko",
    message:"Hello 👋"
  },
  {
    id:"2",
    name:"Aung Aung",
    message:"How are you?"
  },
  {
    id:"3",
    name:"Mg Mg",
    message:"See you later"
  }
];


export default function ChatList(){

  const navigation = useNavigation();


  return (

    <View style={styles.container}>


      <View style={styles.header}>

        <Text style={styles.title}>
          My Chat
        </Text>

        <Text style={styles.search}>
          🔍
        </Text>

      </View>


      <FlatList

        data={chats}

        keyExtractor={(item)=>item.id}

        renderItem={({item})=>(

          <TouchableOpacity

            style={styles.chatItem}

            onPress={() => navigation.navigate("ChatRoom")}

          >

            <View style={styles.avatar}>
            </View>


            <View>

              <Text style={styles.name}>
                {item.name}
              </Text>


              <Text style={styles.message}>
                {item.message}
              </Text>


            </View>


          </TouchableOpacity>

        )}

      />


    </View>

  );

}



const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:colors.background,
    padding:20
  },


  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:25
  },


  title:{
    fontSize:28,
    fontWeight:"bold",
    color:colors.primary
  },


  search:{
    fontSize:24
  },


  chatItem:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:25
  },


  avatar:{
    width:55,
    height:55,
    borderRadius:50,
    backgroundColor:colors.primary,
    marginRight:15
  },


  name:{
    fontSize:18,
    fontWeight:"bold"
  },


  message:{
    color:colors.secondaryText,
    marginTop:5
  }

});

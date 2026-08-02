
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import colors from '../theme/colors';


export default function Login(){

  const [phone, setPhone] = useState("");


  return (

    <View style={styles.container}>


      <Text style={styles.logo}>
        My Chat
      </Text>


      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />


      
  <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate("ChatList")}
>

  



        <Text style={styles.buttonText}>
          LOGIN
        </Text>

      </TouchableOpacity>


    </View>

  );

}



const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:colors.background,
    padding:20
  },


  logo:{
    fontSize:45,
    fontWeight:"bold",
    color:colors.primary,
    marginBottom:40
  },


  input:{
    width:"90%",
    height:55,
    borderWidth:1,
    borderColor:colors.border,
    borderRadius:25,
    paddingHorizontal:20,
    fontSize:16
  },


  button:{
    width:"90%",
    height:55,
    marginTop:20,
    borderRadius:25,
    backgroundColor:colors.primary,
    justifyContent:"center",
    alignItems:"center"
  },


  buttonText:{
    color:"#FFFFFF",
    fontSize:18,
    fontWeight:"bold"
  }

});

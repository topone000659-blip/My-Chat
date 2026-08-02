import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import colors from '../theme/colors';


export default function Profile(){

  return (

    <View style={styles.container}>


      <Text style={styles.title}>
        Profile
      </Text>


      <View style={styles.avatar}>
        <Text style={styles.camera}>
          📷
        </Text>
      </View>


      <Text style={styles.name}>
        Ko Ko
      </Text>


      <Text style={styles.username}>
        @koko123
      </Text>


      <Text style={styles.bio}>
        Hello My Chat 👋
      </Text>


      <View style={styles.card}>

        <Text>
          👤 Edit Profile
        </Text>

      </View>


      <View style={styles.card}>

        <Text>
          ⚙ Settings
        </Text>

      </View>


    </View>

  );

}



const styles=StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:colors.background,
    alignItems:"center",
    padding:25
  },


  title:{
    fontSize:28,
    fontWeight:"bold",
    color:colors.primary
  },


  avatar:{
    width:100,
    height:100,
    borderRadius:50,
    backgroundColor:colors.primary,
    justifyContent:"center",
    alignItems:"center",
    marginTop:30
  },


  camera:{
    fontSize:35
  },


  name:{
    fontSize:24,
    fontWeight:"bold",
    marginTop:15
  },


  username:{
    color:colors.secondaryText
  },


  bio:{
    marginTop:20
  },


  card:{
    width:"100%",
    padding:18,
    backgroundColor:"#f7f7f7",
    borderRadius:15,
    marginTop:15
  }

});


import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../theme/colors';


export default function Splash(){

  return (

    <View style={styles.container}>

      <Text style={styles.logo}>
        My Chat
      </Text>

      <Text style={styles.loading}>
        Connect with friends
      </Text>

    </View>

  );

}


const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:colors.background
  },


  logo:{
    fontSize:48,
    fontWeight:"bold",
    color:colors.primary
  },


  loading:{
    marginTop:15,
    fontSize:16,
    color:colors.secondaryText
  }

});


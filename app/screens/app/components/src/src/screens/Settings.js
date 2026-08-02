import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import colors from '../theme/colors';


export default function Settings(){

  return (

    <View style={styles.container}>


      <Text style={styles.title}>
        Settings
      </Text>


      <View style={styles.item}>
        <Text>
          👤 Account
        </Text>
      </View>


      <View style={styles.item}>
        <Text>
          🎨 Theme
        </Text>

        <Text style={styles.option}>
          Light  •  Dark  •  Green
        </Text>

      </View>


      <View style={styles.item}>
        <Text>
          🔔 Notifications
        </Text>
      </View>


      <View style={styles.item}>
        <Text>
          🔒 Privacy
        </Text>
      </View>


      <View style={[styles.item, styles.logout]}>
        <Text>
          🚪 Logout
        </Text>
      </View>


    </View>

  );

}



const styles=StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:colors.background,
    padding:25
  },


  title:{
    fontSize:30,
    fontWeight:"bold",
    color:colors.primary,
    marginBottom:25
  },


  item:{
    backgroundColor:"#f7f7f7",
    padding:18,
    borderRadius:15,
    marginBottom:15
  },


  option:{
    marginTop:10,
    color:colors.secondaryText
  },


  logout:{
    marginTop:20
  }

});


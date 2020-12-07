import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import SearchPage from '../SearchPage';



class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>PharmApp</Text>
       
       
     
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('SearchPage')}>
          <Text style={styles.loginText}>User Page</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('PharmacistManage')}>
          <Text style={styles.loginText}>Pharmacist Page</Text>
        </TouchableOpacity>

        
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40
    },
    inputView:{
      width:"80%",
      // backgroundColor:"#ffffff",
      borderRadius:25,
      borderWidth: 1,
      borderColor: "black",
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"#fb5b5a"
    },
    forgot:{
      color:"#fb5b5a",
      fontSize:11
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
    }
  });
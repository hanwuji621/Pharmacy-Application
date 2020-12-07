'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity
} from 'react-native';

export default class SearchPage extends Component {
  static navigationOptions = {
    title: 'Pharmacy Finder',
  };

  constructor(props) {
    super(props);
    this.state = {
      searchString: 'london',
      isLoading: false,
      message: '',
      JSONResult: [],
      FlatListItems: [],
      AvailabilityList: ['true', 'false'],

    };
  }

  _onSearchTextChanged = (event) => {
    this.setState({ searchString: event.nativeEvent.text });
  };

  _executeQuery = (query) => {
    console.log(query);
    fetch(query)
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       JSONResult: responseJson.results
      });
      console.log("))))))))))))))))))))))))))))))))))))))))))))))))))))))")
      console.log(this.state.JSONResult)
    }).catch(error => this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
    }));
  };

  _onSearchPressed = () => {
    const query = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=pharmacies+near+me&key=AIzaSyBEPXzqc3sjZAPTCpaN3OBwZ8tf20IhM7Q';
    this._executeQuery(query);
  };

  render() {
  	const spinner = this.state.isLoading ?
      <ActivityIndicator size='large'/> : null;
    
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for Pharmacies closest to you by pressing the icon below:
        </Text>
        <View >
        <TouchableOpacity onPress={this._onSearchPressed}>
          <Image style={styles.button} source={require('./Images/pharm.png')}/>
        </TouchableOpacity>
        </View>
        <Text style={styles.description}>{this.state.message}</Text>
        <FlatList
           data={this.state.JSONResult}
           renderItem={({item})=>(<View style={{justifyContent:'center',marginBottom:10}}>
            <View >
                <Image style={styles.thumb} source={{ uri: item.img_url }} />
                <Text style={{backgroundColor:'#fb5b5a', color:'white', fontSize: 15, fontWeight:'bold', padding: 7, width:Dimensions.get('window').width-70}}>
                {item.name}</Text>
                <Text style={{backgroundColor:'#fb5b5a',color:'white', fontSize: 15, padding: 7,width:Dimensions.get('window').width-70}}>
                {item.formatted_address}</Text>
                <Text style={{backgroundColor:'#fb5b5a',color:'white', fontSize: 15, padding: 7,width:Dimensions.get('window').width-70}}>
                  Open Now: {" "}
                {JSON.stringify(item.opening_hours)}</Text>
                <Text style={{backgroundColor:'#fb5b5a',color:'white', fontSize: 15, padding: 7,width:Dimensions.get('window').width-70}}>
                Metformin Availability: {" "}
                {this.state.AvailabilityList[Math.floor(Math.random() * this.state.AvailabilityList.length)]}</Text>
            </View>
        </View>)}          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
  image: {
    width: 217,
    height: 138,
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    padding:10,
    width:Dimensions.get('window').width,
    fontWeight: 'bold',
    color: '#48BBEC',
    borderWidth: 1,
    borderColor: '#48BBEC',
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
   insuranceBtn:{
    width:"80%",
    backgroundColor:"#fd5c5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
   },
 rowContainer: {
   flexDirection: 'row',
   padding: 10
 },
  insuranceText:{
    color:"white"
  }
});
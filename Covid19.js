import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import virus from '../PharmApp/assets/coronavirus.png';
import {Divider} from 'react-native-elements';


export default class Covid19 extends Component {
  static navigationOptions = {
    title: 'Property Finder',
  };

  constructor(props) {
    super(props);
    this.state = {
      searchString: 'london',
      isLoading: false,
      message: '',
      JSONResult: [],
      FlatListItems: [],
    };
  }

  render() {

    return (
        <View style={styles.container}>
            <Text style= {styles.title}>Covid-19 Tracker</Text>
            <Image source ={virus} style = {styles.logo}></Image>
            <View style={styles.group}>
                <Button title="Global" 
                        containerStyle ={styles.separator}
                        onPress={() => this.props.navigation.navigate('Globalscreen')}/>
                <Button title="List Countries" 
                        containerStyle ={styles.separator}
                        onPress={() => this.props.navigation.navigate('ListContries')}/>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 130,
        height: 130,
        marginBottom: 30
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 30
    },
    separator: {
        marginBottom: 10,
        marginVertical: 10,
    },
    group: {
        marginTop: 10,
        padding: 10,
        borderRadius: 4,
        backgroundColor: '#ddd',
        flexDirection: 'column',
    }
});



// import * as React from 'react';
// import {View, Text, Image } from 'react-native';
// import {StyleSheet } from 'react-native';
// import virus from '../PharmApp/assets/coronavirus.png';
// import {Button, Divider} from 'react-native-elements';


// const Covid19 = () => {

//     return(
//         <View style={styles.container}>
//             <Text style= {styles.title}>Covid-19 Tracker</Text>
//             <Image source ={virus} style = {styles.logo}></Image>
//             <View style={styles.group}>
//                 <Button title="Global" containerStyle ={styles.separator}/>
//                 <Button title="Test" />
//             </View>
//         </View>
//     );
// }

// export default Covid19;

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     logo: {
//         width: 130,
//         height: 130,
//         marginBottom: 30
//     },
//     title: {
//         fontSize: 36,
//         fontWeight: 'bold',
//         marginBottom: 30
//     },
//     separator: {
//         marginBottom: 10,
//     },
//     group: {
//         marginTop: 10,
//         padding: 10,
//         borderRadius: 4,
//         backgroundColor: '#ddd',
//         flexDirection: 'row',
//     }
// });
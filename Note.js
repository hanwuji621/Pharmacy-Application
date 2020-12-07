import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class Note extends Component {
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
        <View key={this.props.keyval} style={styles.note}>
            <Text style={styles.noteText}> {this.props.val.date}</Text>
            <Text style={styles.noteText1}> {this.props.val.note}</Text>
        
            <TouchableOpacity 
                style={styles.noteDelete}
                onPress={this.props.deleteMethod}>
                <Text style={styles.noteDeleteText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
        // flexDirection: 'column',
        // justifyContent: 'flex-start',
        // alignItems: 'flex-start',
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#e91e63',
    },
    noteText1: {
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderLeftColor: '#e91e63',
      color:'blue'
    },
    noteDelete: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
         top: 10,
         width: 100,
        // bottom: 10,
        // right: 10,
    },
    noteDeleteText:{
        color: 'white',
    }

});
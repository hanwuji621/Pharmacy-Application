import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Note from './Note';

export default class toDoList extends Component {
  static navigationOptions = {
    title: 'Property Finder',
  };

  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    };
  }
  
  render() {

    let notes =  this.state.noteArray.map((val, key) => {
        return <Note key={key} keyval={key} val={val} deleteMethod={()=> this.deleteNote(key)} />
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}> - NOTER -</Text>
            </View>

            <ScrollView style={styles.scrollContainter}>
                {notes}
            </ScrollView>

            <View style={styles.footer}>
                <TextInput 
                    style={styles.textInput} 
                    value={this.state.noteText}
                    onChangeText={(noteText) => this.setState({noteText})}
                    placeholder = ">note"
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'>
                </TextInput>
            </View>

            <TouchableOpacity onPress = {this.addNote.bind(this)} style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
  }
  addNote() {
      if(this.state.noteText) {
          var d = new Date();
          this.state.noteArray.push({
              'date': d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
              'note': this.state.noteText,
          });
          this.setState({ noteArray: this.state.noteArray});
          this.setState({noteText: ''});
      }
    //alert("test");
    }
    deleteNote(key) {
        this.state.noteArray.splice(key, 1);
        this.setState({noteArray: this.state.noteArray})
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginBottom: 100,
    },
    header: {
        backgroundColor: '#e91e63',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
    },
    headerText:{
        color: 'white',
        fontSize: 18,
        padding: 26,
    },
    scrollContainter: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton: {
        position: "relative",
        zIndex: 30,
        //right: 20,
        bottom: 90,
        backgroundColor: '#e91e63',
        width: 90,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },
});
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


export default class PharmacistManage extends Component {
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
      <View>
        <Button
          title="Task Manage"
          onPress={() => this.props.navigation.navigate('TaskManage')}
        />

        <Button
          title="Covid-19 Tracker"
          onPress={() => this.props.navigation.navigate('Covid19')}
        />

        <Button
          title="Todo List"
          onPress={() => this.props.navigation.navigate('toDoList')}
        />
      </View>
    );
  }
}


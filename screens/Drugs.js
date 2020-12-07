// screens/Drugs.js

import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Table, Row, Rows } from 'react-native-table-component';

class Drugs extends Component {

    constructor(props) {
        super(props);
        var one = 'pms-metformintest';
        this.state = {
          tableHead: ['Name', 'Price', 'Strength', 'Desc'],
          tableData: [
            ['pms-metformintest', 0.5, '500mg', 'type 2 diabetes glucose control'],
            ['zopiclone', 1.4, '7.5mg', 'cns sedative'],
            ['apo-atorvastatin', 0.15, '10mg', 'statin. cholesterol']
            
          ]
        }
      }

  render() {
      const state = this.state;

    return (
        <View>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
      <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
      </Table>
    
        </View>
    );
  }
//   postRequest = (data) => {
//     fetch('http://localhost:3000/drugs', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//       },
//       body: "main=" + parseInt(data),
//     })
//     .then((response) => {
//       responseData = response.json();
//       if (response.status == 200) {
//         return responseData.then((data) => this.setState({ tableData: [data[0][0], data[0][1], data[0][2], data[0][3], data[0][4]] }));
//       } else {
//         throw new Error('Server Error!');
//       }
//     })
//   }
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });

export default Drugs;
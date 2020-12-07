import Axios from 'axios';
import * as React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Card, ListItem, Icon} from 'react-native-elements';
import { useScreens } from 'react-native-screens';

// NewConfirmed
// TotalConfirmed
// NewDeaths
// TotalDeaths
// NewRecovered
// TotalRecovered

const ListContries = () => {
    const url= 'https://api.covid19api.com/summary';
    const [report, setReport] = useState({}); 

    useEffect( () => {
        const getData = async () => {
            try{
                const response = await axios.get(url);
                const data = response.data.Countries;
                setReport(data);
            }catch(error){
                alert(error.message);
            }
        };
        getData();
    },[]);

    return(
        <View style={styles.container}>
            <FlatList
                 data = {report}
                 renderItem = {
                     ({item, index}) => (
                         <ListItem 
                            key={index} 
                            title={item.Country} 
                            subtitle={`TotalConfirmed: ${item.TotalConfirmed}`}
                            subtitleStyle={styles.subtitileStyle}
                            bottomDivider 
                            chevron/>
                    )
                 }>
            </FlatList>
        </View>
    );
}

export default ListContries;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subtitileStyle: {
        color: 'grey',
    }
});
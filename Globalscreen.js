import Axios from 'axios';
import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Card, ListItem, Icon} from 'react-native-elements';
import { useScreens } from 'react-native-screens';

// NewConfirmed:678217,
// TotalConfirmed:65889578,
// NewDeaths:12409,
// TotalDeaths:1518573,
// NewRecovered:419856,
// TotalRecovered:42344112

const Globalscreen = () => {
    const url= 'https://api.covid19api.com/summary';
    const [report, setReport] = useState({}); 

    useEffect( () => {
        const getData = async () => {
            try{
                const response = await axios.get(url);
                const data = response.data.Global;
                setReport(data);
            }catch(error){
                alert(error.message);
            }
        };
        getData();
    },[]);

    return(
        <View >
            <Card title={"Covid 19"}>
                <ListItem bottomDivider title="New Confirmed" rightTitle={String(report.NewConfirmed)}></ListItem>
                <ListItem bottomDivider title="Total Confirmed" rightTitle={String(report.TotalConfirmed)}></ListItem>
                <ListItem bottomDivider title="New Deaths" rightTitle={String(report.NewDeaths)}></ListItem>
                <ListItem bottomDivider title="Total Deaths" rightTitle={String(report.TotalDeaths)}></ListItem>
                <ListItem bottomDivider title="New Recovered" rightTitle={String(report.NewRecovered)}></ListItem>
                <ListItem bottomDivider title="Total Recovered" rightTitle={String(report.TotalRecovered)}></ListItem>
            </Card>
        </View>
    );
}

export default Globalscreen;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 700
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
    },
    group: {
        marginTop: 10,
        padding: 10,
        borderRadius: 4,
        backgroundColor: '#ddd',
        flexDirection: 'row',
    }
});
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchPage from './SearchPage';
import PharmacistManage from './PharmacistManage';
import TaskManage from './TaskManage';
import Covid19 from './Covid19';
import Globalscreen from './Globalscreen';
import ListContries from './ListContries';
import toDoList from './toDoList';
import Home from './screens/Home';
import Signup from './signup';
import Dashboard from './dashboard';
import Login from './login';

const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#fb5b5a',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen 
      name="Signup" 
      component={Signup} 
      options={{ title: 'Signup' }}
    />       
    <Stack.Screen 
      name="Login" 
      component={Login} 
      options={
        {title: 'Login'},
        {headerLeft: null} 
      }
    />
    <Stack.Screen 
     name="Dashboard" 
     component={Dashboard} 
     options={
       { title: 'Dashboard' },
       {headerLeft: null} 
     }
    />

    <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Home', headerShown: false }}
      />
     
      <Stack.Screen 
        name="SearchPage" 
        component={SearchPage} 
        options={{ title: 'SearchPage', headerShown: true }}
      />

      <Stack.Screen 
        name="PharmacistManage" 
        component={PharmacistManage} 
        options={{ title: 'PharmacistManage', headerShown: true }}
      />

      <Stack.Screen 
        name="TaskManage" 
        component={TaskManage} 
        options={{ title: 'TaskManage', headerShown: true }}
      />

      <Stack.Screen 
        name="Covid19" 
        component={Covid19} 
        options={{ title: 'Covid19', headerShown: true }}
      />

      <Stack.Screen 
        name="Globalscreen" 
        component={Globalscreen} 
        options={{ title: 'Global Covid-19', headerShown: true }}
      />

      <Stack.Screen 
        name="ListContries" 
        component={ListContries} 
        options={{ title: 'List Countries', headerShown: true }}
      />

      <Stack.Screen 
        name="toDoList" 
        component={toDoList} 
        options={{ title: 'To do List', headerShown: true }}
      />
    
  </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}

console.disableYellowBox = true;
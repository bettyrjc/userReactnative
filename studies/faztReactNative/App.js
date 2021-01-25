import React,{useEffect} from 'react';
import {Provider} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import UsersScreen  from './src/screens/Users'
import AddUser  from './src/screens/AddUser'
import EditUser  from './src/screens/EditUser'

import store from './store';
//import CoinDetailScreen from '../coinDetail/CoinDetailScreen'
const Stack = createStackNavigator();

const App = () =>(
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
              headerStyle: {
                  backgroundColor:'rgba(0,0,0,0.2)',
                  shadowOpacity: 0,
              },
              headerTintColor: '#FFFFFF'
          }}
        >
          <Stack.Screen
            name='Users'
            component={UsersScreen}
          />
          <Stack.Screen
            name='AddUser'
            component={AddUser}
          />
          <Stack.Screen
            name='EditUser'
            component={EditUser}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );


export default App;

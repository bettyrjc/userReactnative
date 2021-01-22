import React,{useEffect} from 'react';
import {Provider} from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UsersScreen  from './src/screens/Users'
import AddUser  from './src/screens/AddUser'
import store from './store';
//import CoinDetailScreen from '../coinDetail/CoinDetailScreen'
const Stack = createStackNavigator();

const App = () =>(
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
              headerStyle: {
                  backgroundColor:'rgba(0,0,0,0.5)',
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );


export default App;

import React, { Component } from 'react'
import { connect } from 'react-redux';
import {View, Text,  StyleSheet } from 'react-native'

import FormAddUser from '../components/addUser'
import {addUsers} from '../store/actions/usersAction'

 class AddUser extends Component {
     state={
         name:'',
         email:'',
         username:''
     }

    handleChangeText = (value, name) => {
        this.setState({[name]: value });  
    };
    saveNewUser = async () => {
        const { username, name, email}=this.state;
        if (name === "" || username   === "" || email  === "") {
          console.log(`Hay un campo vacio`);
        } else {
          try {
            const dataUser ={username, name, email}
            this.props.addUsers(dataUser)
            console.log(dataUser);
            
          } catch (error) {
            console.log(error)
          }
        }
      };

    render() {
    console.log(this.state);

        return (
            <View>
            <Text style={styles.title}>Add new user</Text>
                <FormAddUser 
                    state={this.state}
                    handleChangeText={this.handleChangeText} 
                    saveNewUser={this.saveNewUser}             
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:16,
        color:'#000',
        paddingLeft:10,
        paddingTop:15,
    },

})
export default connect(
    '',
    { addUsers }
  )(AddUser);
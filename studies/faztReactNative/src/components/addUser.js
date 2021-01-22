import React from 'react'
import {View, Button, TextInput, StyleSheet } from 'react-native'

const addUser = ({state, handleChangeText, saveNewUser}) => {
    return (
        <View style={styles.form}>
            <TextInput
                style={styles.inputText}
                placeholder="name"
                onChangeText={(value) => handleChangeText(value, "name")}
                value={state.phone}
            /> 
            <TextInput
                style={styles.inputText}
                placeholder="email"
                onChangeText={(value) => handleChangeText(value, "email")}
                value={state.phone}
            />
            <TextInput
                style={styles.inputText}
                placeholder="username"
                onChangeText={(value) => handleChangeText(value, "username")}
                value={state.phone}
            />
            <View style={styles.btnContainer}>
                <Button 
                    style={styles.btnText} 
                    title="Save User" 
                    onPress={() => saveNewUser()} 
                />
            </View>
      </View>
    )
}
const styles = StyleSheet.create({
    form:{
        padding:10,
    },
    inputText:{
        borderColor:'#c4c4c4',
        borderWidth:1,
        borderRadius:8,
        padding:5,
        paddingLeft:15,
        marginTop:5,
        marginBottom:5
    },
    btnContainer:{
        marginTop:10
    },
    btnText:{
        color: '#FFF',
        fontSize:16,
        fontWeight:'bold',
        borderRadius:16,
    },
})

export default addUser

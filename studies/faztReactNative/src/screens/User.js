import React from 'react'
import {View, Text,StyleSheet} from 'react-native'

const User = ({user}) => {
    const {name, username, email} = user
    return (
        <View style={styles.divider}>
            <View >
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>{username}</Text>
                <Text style={styles.text}>{email}</Text>
            </View>
       
        </View>
    )
}

const styles = StyleSheet.create({
    divider:{
        borderBottomWidth:2,
        borderBottomColor: '#F4F4F4',
        paddingBottom:5,
        flex:1
    },
    text:{
        color: '#FFF',
        fontSize:12,
        marginTop:2
    }
})
export default User

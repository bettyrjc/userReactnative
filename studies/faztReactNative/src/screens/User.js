import React from 'react'
import {useDispatch} from 'react-redux'
import {View, Text,StyleSheet, Image, Pressable, Alert} from 'react-native'
import { deleteUser } from '../store/actions/usersAction'

const User = ({user, moveToEdit}) => {

    const {name, username, email, id} = user
    const dispatch = useDispatch()

    const deletedUser = async  () => {
        console.log('hola deleted');
        Alert.alert("Remove favorite", "Are u sure?", [
            {
                text: "cancel",
                onPress: () => {},
                style: "cancel"
            },
             {
                text: "Remove",
                onPress:() =>  dispatch(deleteUser(id)),
                style: "destructive"
            }
        ])
    }
    return (
        <View style={styles.divider}>
            <View >
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.text}>{username}</Text>
                <Text style={styles.text}>{email} </Text>
            </View>
            <View style={styles.row}>
                <Pressable onPress={() => moveToEdit()}>
                    <Image
                        style={{tintColor: '#fff', width: 20, height:20, marginRight:15 }}
                        source={require('../assets/edit.png')}
                    />
                </Pressable>
                <Pressable onPress={ () => deletedUser() } >
                    <Image
                        style={{tintColor: '#fff', width: 20, height:20 }}
                        source={require('../assets/delete.png')}
                    />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    divider:{
        borderBottomWidth:2,
        borderBottomColor: '#F4F4F4',
        paddingBottom:5,
      
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
    },
    row:{
       
        flexDirection:'row',
        display: 'flex',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:10
    },
    text:{
        color: '#FFF',
        fontSize:12,
        marginTop:2
    }
})
export default User

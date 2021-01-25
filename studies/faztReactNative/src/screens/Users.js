import React, { Component } from 'react'
import {View, Text, FlatList, StyleSheet, ActivityIndicator, Pressable,Alert} from 'react-native'
import {getUsers} from '../store/actions/usersAction'
import { connect } from 'react-redux';
import User from './User'

class Users extends Component {
    state = {
        users:"",
        loading:false
    }
    componentDidMount = async () => {
        this.getAllUsers()
    }

    getAllUsers = async () =>{
        this.setState({loading:true})
        const user = await this.props.getUsers()
        this.setState({
            users: user,
            loading: false
        })
    }
    addNewUser =()=>{
        this.props.navigation.navigate('AddUser');
    }

     moveToEdit =()=>{
         console.log('editar');
        this.props.navigation.navigate('EditUser');
    }

      
    render() {
        const {users} = this.props
        return (
            <View style={styles.container}>
                {
                    this.state.loading ? 
                        <ActivityIndicator
                            color='#fff'
                            size='large'
                        />  : <View>
                        <View style={styles.row}>
                            <Text style={styles.title}>Usuarios</Text>
                            <Pressable onPress={(e) => this.addNewUser(e)} style={styles.btn}>
                                <Text style={styles.btnText}>Nuevo usuario</Text>
                            </Pressable>
                        </View>
                            <FlatList
                                style={styles.list}
                                data={users}
                                renderItem={({ item }) =><User 
                                                            user={item} 
                                                            moveToEdit={()=>this.moveToEdit()}
                                                           
                                                        /> 
                                            }
                            />
                        </View>
                }
    </View>
    )
   }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        color: '#FFF',
        paddingLeft:5
       
    },
    row:{
        marginTop:5,
        flexDirection:'row',
        display: 'flex',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:10
    },
    title:{
        fontWeight:'bold',
        fontSize:16,
        color:'#FFF',
        paddingLeft:10

    },
    text:{
        color: '#FFF',
        fontSize:12,
        marginTop:2
    },
    btn:{
        backgroundColor:'rgba(0,0,0,0.1)',
        padding:10, 
        paddingLeft:15,
        paddingRight:15,
        borderRadius:8,
        width:140,
    },
    btnText:{
        color: '#FFF',
        fontSize:16,
        fontWeight:'bold',
    },
})
const mapStateToProps = state => ({
    users: state.user.users,
    loading: state.user.loading,
    
});
  
  export default connect(
    mapStateToProps,
    { getUsers }
  )(Users);



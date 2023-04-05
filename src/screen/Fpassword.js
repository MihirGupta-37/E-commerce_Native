import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Pressable, Alert} from 'react-native';

const Fpassword = () => {
    const[email, setEmail] = useState("");

    const submitData = () => {
        return console.log(email)
    }
    return (
        <View style = {styles.container}>
            <View style = {styles.header}><Text style = {styles.headerMain}>Forgot Password</Text>
            <Text style = {styles.subHeading}>Join our Community to get different feedbacks and reviews about Products!</Text></View>


            <View style = {styles.inputContainer}>
                <Text style = {styles.label}>Email</Text>
                <TextInput style = {styles.inputStyle} 
                autoCapitalize="none"
                autoCorrect = {false}
                keyboardType='email-address'
                value = {email}
                onChangeText={(storedata) => setEmail(storedata)}
                 />
            </View>

            <View style ={styles.buttonContainer}>
            <Pressable><Text style ={styles.pressableBtn} onPress={() => submitData()}>Send OTP</Text></Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        display : 'flex',
        justifyContent :'center',
        flexDirection :'column',
    },
    header : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        width : '90%',
        height : 180,
    },
    headerMain : {
        fontSize : 32,
        paddingVertical : 25,
        color : 'black',
        fontWeight : '800',
    },
    subHeading : {
        textAlign : 'center',
    },
    label : {
        color : 'lightgrey',
        fontWeight : '400',
    },
    inputContainer : {
        marginTop : 5,
        width : '90%',
        display : 'flex',
    },
    inputStyle : {
        borderBottomColor : 'lightgrey',
        borderBottomWidth : 2,
        marginBottom : 15,
        paddingBottom : 20,
        fontSize : 20,
    },
    buttonContainer : {
        width: '90%',
        marginVertical : 40,
    },
    pressableBtn : {
            backgroundColor : '#22689f',
            paddingHorizontal : 60,
            paddingVertical: 15,
            borderRadius : 10,
            textAlign : 'center',
            color : '#fff',
            fontWeight : 'bold',
    }
})
export default Fpassword;
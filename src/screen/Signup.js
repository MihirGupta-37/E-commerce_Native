import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Pressable, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';


const Signup = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    const[userInfo, SetUserInfo] = useState({
        userName : '',
        email : '',
        password : '',
        confPassword : '',
    })
    // const [userName, setUserName] = useState("");
    // // console.log(userName);
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confPassword, setconfPassword] = useState("");

    const {userName, email, password, confPassword} = userInfo

    const handleChangeText = (value, fieldName) => {
        // console.log(value, fieldName)
        SetUserInfo({...userInfo, [fieldName]: value})
    }

    const validate = (obj) =>{
        return Object.values(obj).every(value => value.trim())
    }

    const submitData = () => {
        return console.log(userName, confPassword, email, password)
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.header}><Text style = {styles.headerMain}>Create Your Account</Text>
            <Text style = {styles.subHeading}>Join our Community to get different feedbacks and reviews about Products!</Text></View>
            <View style = {styles.inputContainer}>
                <Text style = {styles.label}>Full Name</Text>
                <TextInput style = {styles.inputStyle} 
                autoCapitalize="none"
                autoCorrect = {false}
                value={userName}
                onChangeText={(storeData) => handleChangeText(storeData , 'userName')}
                 />
            </View>


            <View style = {styles.inputContainer}>
                <Text style = {styles.label}>Email</Text>
                <TextInput style = {styles.inputStyle} 
                autoCapitalize="none"
                autoCorrect = {false}
                keyboardType='email-address'
                value={email}
                onChangeText={(storeData) => handleChangeText(storeData , 'email')} />
            </View>

            <View style = {styles.inputContainer}>
                <Text style = {styles.label}>Password</Text>
                <TextInput style = {styles.inputStyle} 
                autoCapitalize="none"
                secureTextEntry
                autoCorrect = {false}
                value={password}
                onChangeText={(storeData) => handleChangeText(storeData , 'password')} />
            </View>

            <View style = {styles.inputContainer}>
                <Text style = {styles.label}>Confirm Password</Text>
                <TextInput style = {styles.inputStyle} 
                autoCapitalize="none"
                secureTextEntry
                autoCorrect = {false}
                value={confPassword}
                onChangeText={(storeData) => handleChangeText(storeData , 'confPassword')} />
            </View>

            <View style ={styles.textInputField}>
            <View style={styles.checkboxContainer}>
        {/* <CheckBox
        value = {toggleCheckBox}
        onValueChange = {() => setToggleCheckBox(!toggleCheckBox)}
        tintColors = {toggleCheckBox ? "#4630EB" : 'black'}
        /> */}
        </View>
            <Text style ={styles.inputField}>By Clicking Register, you agree to our
            <Text style ={styles.insideText}> Terms and Conditions</Text> (link to T&C) and have read our<Text style ={styles.insideText}> Privacy Policy</Text> (link to PP)</Text></View>

            <View style ={styles.buttonContainer}>
            <Pressable><Text style ={styles.pressableBtn} onPress={() => submitData()}>Register</Text></Pressable>
            <Pressable><Text style ={styles.pressableBtn}>Cancel</Text></Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
    },
    header : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        width : '90%',
    },
    headerMain : {
        fontSize : 32,
        paddingVertical : 25,
        color : 'black',
        fontWeight : '800',
    },
    subHeading : {
        paddingBottom : 30,
        textAlign : 'center',
    },
    label : {
        color : 'lightgrey',
        fontWeight : '400',
    },
    inputContainer : {
        marginTop : 5,
        width : '90%',
    },
    inputStyle : {
        borderBottomColor : 'lightgrey',
        borderBottomWidth : 2,
        marginBottom : 15,
        paddingBottom : 20,
        fontSize : 20,
    },
    textInputField : {
        marginBottom : 15,
        width : '70%',
        paddingVertical : 25,
        textAlign : 'center',
    },
    insideText : {
        color : '#22689f',
        fontWeight : 'bold',
    },
    buttonContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        width: '90%',
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
export default Signup;
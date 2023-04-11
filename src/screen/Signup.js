import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {
  validateEmail,
  validatePassword,
  validateName,
  validconfPassword,
} from './utils/Validations';
import Navigation from '../Navigation/NavigationScreen';
import {Button} from '../Components/Button';
import {TextField} from '../Components/TextField';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const Signup = props => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const fieldValues = {
    userName: '',
    email: '',
    password: '',
    confPassword: '',
  };
  // const [userName, setUserName] = useState("");
  // // console.log(userName);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [confPassword1, setconfPassword1] = useState('');

  // const [fieldPwd, setFieldPwd] = useState(false);
  // const [fieldPwd1, setfieldPwd1] = useState(false);
  const [passVisible, setPassVisible] = useState(true);
  const [passVisible1, setPassVisible1] = useState(true);
  const [values, setValues] = useState(fieldValues);
  const [errors, setErrors] = useState({
    userName: '',
    email: '',
    password: '',
    confPassword: '',
  });

  // const {userName, email, password, confPassword} = userInfo

  const handleChangeText = (key, mValue) => {
    console.log('key---->', key, mValue);
    // setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(values, "///");
    // if (errors[e.target.name]) {
    // setErrors({ ...errors, [e.target.name]: "" });
    // console.log(errors, "<><");
    setValues(value => {
      let newValue = {...value};
      if (key === 'userName') {
        newValue.userName = mValue;
      } else if (key === 'email') {
        newValue.email = mValue;
      } else if (key === 'password') {
        newValue.password = mValue;
      } else {
        newValue.confPassword = mValue;
      }
      return newValue;
    });
    setErrors(value => {
      let newValue = {...value};

      newValue.userName = '';

      newValue.email = '';

      newValue.password = '';

      newValue.confPassword = '';

      return newValue;
    });
  };
  // console.log("values:::", values);
  console.log('values:::', errors);

  const validate = () => {
    let valErrors = {...errors};
    let valid = true;

    const userNameError = validateName(values.userName);
    const emailError = validateEmail(values.email);
    const pwdError = validatePassword(values.password);
    const confPwdError = validconfPassword(values);
    // console.log(values.confPassword, 'values.confPassword');
    if (userNameError) {
      valErrors = {...valErrors, userName: userNameError};
      valid = false;
    }
    if (emailError) {
      valErrors = {...valErrors, email: emailError};
      valid = false;
    }
    if (pwdError) {
      valErrors = {...valErrors, password: pwdError};
      valid = false;
    }
    if (pwdError !== confPwdError) {
      valErrors = {...valErrors, confPassword: confPwdError};
      valid = false;
    }
    setErrors(valErrors);
    return valid;
  };
  // console.log(userInfo);

  const submitForm = e => {
    // e.preventDefault();
    if (!validate()) {
      return false;
    }
    console.log('Submitted', values);
    setValues(values);
    return true;
  };

  const onConditionPress = () => {
    return console.warn('Presssed Condition');
  };

  const onPrivacyPress = () => {
    return console.warn('Presssed Privacy');
  };

  const iconPress = () => {
    setPassVisible1(!passVisible1);
  };

  // const on = handleChangeText('password', value);

  return (
    <ScrollView>
      <View style={[styles.container]}>
        <View>
          <View style={styles.header}>
            <Text style={styles.headerMain}>Create Your Account</Text>
            <Text style={styles.subHeading}>
              Join our Community to get different feedbacks and reviews about
              Products!
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.inputStyle}
              autoCapitalize="none"
              autoCorrect={false}
              name="userName"
              value={values.userName}
              error={errors.userName}
              onChangeText={value => {
                handleChangeText('userName', value);
              }}
            />
            {/* {errors.userName ? <Text styles ={styles.errorText}>{errors}</Text>: null} */}
          </View>
          <View style={styles.invalidField}>
            {errors.userName ? (
              <Text style={styles.invalidTxt}>{errors.userName}</Text>
            ) : null}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.inputStyle}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              value={values.email}
              error={errors.email}
              onChangeText={value => handleChangeText('email', value)}
            />
          </View>
          <View style={styles.invalidField}>
            {errors.email ? (
              <Text style={styles.invalidTxt}>{errors.email}</Text>
            ) : null}
          </View>

          <TextField
            title="Password"
            name="password"
            secureTextEntry={passVisible}
            value={values.password}
            error={errors.password}
            onChangeText={value => onChange(value)}
            isIcon={true}
            iconName1={'visibility'}
            iconName2={'visibility-off'}
            isIconVisible={passVisible1}
            iconPress={iconPress}
          />

          <View style={styles.invalidField}>
            {errors.password ? (
              <Text style={styles.invalidTxt}>{errors.password}</Text>
            ) : null}
          </View>

          <TextField
            title="Confirm Password"
            name="confPassword"
            secureTextEntry={passVisible1}
            value={values.confPassword}
            error={errors.confPassword}
            isIcon={true}
            iconName1={'visibility'}
            iconName2={'visibility-off'}
            isIconVisible={passVisible1}
            iconPress={iconPress}
            OnChangeText={val => handleChangeText('confPassword', val)}
          />

          {/* <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.inputContainerPwd}>
              <TextField
                secureTextEntry={passVisible1}
                value={values.confPassword}
                error={errors.confPassword}
                onChangeText={value => handleChangeText('confPassword', value)}
              />
              <Icon
                style={[styles.iconEye, {width: '10%'}]}
                name={passVisible1 ? 'visibility' : 'visibility-off'}
                onPress={() => setPassVisible1(!passVisible1)}></Icon>
            </View>
          </View> */}

          <View style={styles.textInputField}>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={toggleCheckBox}
                onValueChange={() => setToggleCheckBox(!toggleCheckBox)}
                // tintColors={toggleCheckBox ? '#4630EB' : 'black'}
              />
            </View>
            <Text style={styles.inputField}>
              By Clicking Register, you agree to our
              <Text style={styles.insideText} onPress={onConditionPress}>
                {' '}
                Terms and Conditions
              </Text>{' '}
              (link to T&C) and have read our
              <Text style={styles.insideText} onPress={onPrivacyPress}>
                {' '}
                Privacy Policy
              </Text>{' '}
              (link to PP)
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              submitForm={submitForm}
              disabled={toggleCheckBox}
              // styles={[{backgroundColor: toggleCheckBox ? '#22689f' : 'grey'}]}
              title="Register"
            />
            {/* <Pressable onPress={submitForm}>
              <Text
                style={[
                  styles.pressableBtn,
                  {backgroundColor: toggleCheckBox ? '#22689f' : 'grey'},
                ]}
                disabled={!toggleCheckBox}>
                Register
              </Text>
            </Pressable> */}
          </View>
          <View style={styles.loginInput}>
            <Text>Already Have an Account?</Text>
            <TouchableOpacity>
              <Text
                style={styles.loginTxt}
                onPress={() => props.navigation.navigate('Login')}>
                {' '}
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems : 'center',
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  headerMain: {
    fontSize: 32,
    paddingVertical: 25,
    color: 'black',
    fontWeight: '800',
  },
  subHeading: {
    paddingBottom: 30,
    textAlign: 'center',
  },
  label: {
    color: '#625D5D',
    fontWeight: '400',
  },
  inputContainer: {
    width: '100%',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
    marginBottom: 15,
    paddingBottom: 5,
  },
  textInputField: {
    marginBottom: 15,
    width: '100%',
    paddingVertical: 15,
    textAlign: 'center',
  },
  insideText: {
    color: '#22689f',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
  },
  textInputField: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputField: {
    width: '90%',
  },
  inputStyle: {
    fontSize: 20,
  },
  invalidField: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  loginInput: {
    paddingBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  invalidTxt: {
    color: 'red',
  },
  loginTxt: {
    color: '#22689f',
    fontWeight: 'bold',
  },
  iconEye: {
    fontSize: 22,
    color: '#625D5D',
  },
  inputContainerPwd: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
});
export default Signup;

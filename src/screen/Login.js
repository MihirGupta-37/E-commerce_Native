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
import {validateEmail, validatePassword} from './utils/Validations';

const Login = props => {
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const fieldValues = {
    email: '',
    password: '',
  };

  const [values, setValues] = useState(fieldValues);

  const handleChangeText = (key, mValue) => {
    // setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(values, "///");
    // if (errors[e.target.name]) {
    // setErrors({ ...errors, [e.target.name]: "" });
    // console.log(errors, "<><");
    setValues(value => {
      let newValue = {...value};
      if (key === 'email') {
        newValue.email = mValue;
      } else {
        newValue.password = mValue;
      }
      return newValue;
    });
    setErrors(value => {
      let newValue = {...value};

      newValue.email = '';

      newValue.password = '';

      return newValue;
    });
  };

  // console.log('values:::', errors);

  const validate = () => {
    let valErrors = {...errors};
    let valid = true;

    const emailError = validateEmail(values.email);
    const pwdError = validatePassword(values.password);
    if (emailError) {
      valErrors = {...valErrors, email: emailError};
      valid = false;
    }
    if (pwdError) {
      valErrors = {...valErrors, password: pwdError};
      valid = false;
    }
    setErrors(valErrors);
    return valid;
  };

  const submitForm = e => {
    if (!validate()) {
      return false;
    }
    console.log('Submitted', values);
    setValues(values);
    return true;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerMain}>Account Login</Text>
          <Text style={styles.subHeading}>
            Join our Community to get different feedbacks and reviews about
            Products!
          </Text>
        </View>

        <TextField
          title="Email Address"
          name="email"
          keyboardType="email-address"
          autoCorrect={false}
          value={values.email}
          error={errors.email}
          onChangeText={val => {
            handleChangeText('email', val);
          }}
          isIcon={false}
          // iconName1={'visibility'}
          // iconName2={'visibility-off'}
          // isIconVisible={passVisible}
          // iconPress={iconPress}
        />

        {/* <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            value={values.email}
            error={errors.email}
            onChangeText={value => handleChangeText('email', value)}
          />
        </View> */}
        <View style={styles.invalidField}>
          {errors.email ? (
            <Text style={styles.invalidTxt}>{errors.email}</Text>
          ) : null}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            value={values.password}
            error={errors.password}
            onChangeText={value => handleChangeText('password', value)}
          />
        </View>
        <View style={styles.invalidField}>
          {errors.password ? (
            <Text style={styles.invalidTxt}>{errors.password}</Text>
          ) : null}
        </View>

        <View style={styles.buttonContainer}>
          <Pressable>
            <Text style={styles.pressableBtn} onPress={submitForm}>
              Login
            </Text>
          </Pressable>
        </View>
        <View style={styles.loginInput}>
          <Text>Don't Have an Account?</Text>
          <TouchableOpacity>
            <Text
              style={styles.loginTxt}
              onPress={() => props.navigation.navigate('Signup')}>
              {' '}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginInput}>
          <TouchableOpacity>
            <Text
              style={styles.loginTxt}
              onPress={() => props.navigation.navigate('Fpassword')}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    // alignItems: 'center',
    // display: 'flex',
    // justifyContent: 'center',
    // flexDirection: 'column',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 180,
  },
  headerMain: {
    fontSize: 32,
    paddingVertical: 25,
    color: 'black',
    fontWeight: '800',
  },
  subHeading: {
    textAlign: 'center',
  },
  label: {
    color: '#625D5D',
    fontWeight: '400',
  },
  inputContainer: {
    marginTop: 5,
    display: 'flex',
  },
  inputStyle: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
    marginBottom: 15,
    paddingBottom: 15,
    fontSize: 20,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  pressableBtn: {
    backgroundColor: '#22689f',
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 10,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  loginInput: {
    paddingBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  invalidField: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  invalidTxt: {
    color: 'red',
  },
  loginTxt: {
    color: '#22689f',
    fontWeight: 'bold',
  },
});
export default Login;

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';

import {validateEmail} from './utils/Validations';

const Fpassword = () => {
  const [errors, setErrors] = useState({
    email: '',
  });

  const fieldValues = {
    email: '',
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
      key === 'email';
      newValue.email = mValue;
      return newValue;
    });
    setErrors(value => {
      let newValue = {...value};

      newValue.email = '';

      return newValue;
    });
  };

  const validate = () => {
    let valErrors = {...errors};
    let valid = true;

    const emailError = validateEmail(values.email);
    if (emailError) {
      valErrors = {...valErrors, email: emailError};
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerMain}>Forgot Password</Text>
        <Text style={styles.subHeading}>
          Join our Community to get different feedbacks and reviews about
          Products!
        </Text>
      </View>

      <View style={styles.inputContainer}>
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
      </View>
      <View style={styles.invalidField}>
        {errors.email ? (
          <Text style={styles.invalidTxt}>{errors.email}</Text>
        ) : null}
      </View>

      <View style={styles.buttonContainer}>
        <Pressable>
          <Text style={styles.pressableBtn} onPress={submitForm}>
            Send OTP
          </Text>
        </Pressable>
      </View>
    </View>
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
  loginTxt: {
    textAlign: 'center',
  },
  invalidField: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  invalidTxt: {
    color: 'red',
  },
});
export default Fpassword;

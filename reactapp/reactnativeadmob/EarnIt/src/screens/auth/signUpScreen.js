import React, { useState } from "react";

import { StyleSheet, Alert } from "react-native";
import { signUpWithEmail } from "../../functions/FireAuthHelper";
import Loader from '../../components/Loader';
import { globalStyles } from './../../styles/global';

import { Formik } from 'formik';
import * as yup from 'yup';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); //For Loader Hide/Show

  /**
   * @description Function to Register with Email/Password.
   * @param null.
   */

  const registerWithEmail = () => {
    setIsLoading(true)
    signUpWithEmail(email, password)
      .then((user) => {
        console.log(user);
        alert("User registered Successfully");
        setEmail("");
        setPassword("");
        setIsLoading(false)
      })
      .catch((error) => {
        console.log("Error while registering phone number :-- ", error);
        Alert.alert(
          'Error',
          'Something went wrong!',
          [{
            text: "OK",
            onPress: () => setIsLoading(false)
          }]
        );
      });
  };

  const RegisterSchema = yup.object({
    email: yup.string().required().min(4),
    password: yup.string().required('Password is needed').min(8) .matches(
      /^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].**$/,
     'Need one special character',
  ),
   
  });

  return (
    <View>
     


      <Formik
        initialValues={{ email: '', Password: '',  }}
        validationSchema={RegisterSchema}
        onSubmit={(values, actions) => {
          // actions contain some methods to call on form
          actions.resetForm();
          RegisterWithEmail(setEmail = email, SetPassword = password)
        }}>
        {/* Formik provides these props automatically (any name accepted) */}
        {(formikProps) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Email'
              // this handles/changes the state behind the scenes for us
              onChangeText={formikProps.handleChange('email')}
              // this
              value={formikProps.values.email}
              onBlur={formikProps.handleBlur('email')}
            />
            <Text style={globalStyles.errorText}>{formikProps.touched.email && formikProps.errors.email}</Text>
            <TextInput
             style={globalStyles.input}
              placeholder='Password'
              onChangeText={formikProps.handleChange('password')}
              value={formikProps.values.password}
              onBlur={formikProps.handleBlur('password')}
            />
            <Text style={globalStyles.errorText}>{formikProps.touched.password && formikProps.errors.password}</Text>
           
          </View>
        )}
      </Formik>
      <Loader isAnimate={isLoading} />

    </View>

    
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    width: 200,
    alignSelf: "center",
    marginBottom: 20,
  },
});





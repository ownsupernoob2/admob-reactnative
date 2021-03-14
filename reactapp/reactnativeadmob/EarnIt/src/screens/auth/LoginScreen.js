import React, { useState } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Content,
  Label,
  Input,
  Form,
  Item,
  Button,
  Text,
  Icon
} from "native-base";
import { StyleSheet, Alert } from "react-native";
import { signInWithEmail } from "../../functions/FireAuthHelper";
import Loader from '../components/Loader';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); //For Loader Hide/Show

  /**
   * @description Function to Login with Email/Password.
   * @param null.
   */

  const loginWithEmail = () => {
    setIsLoading(true)
    signInWithEmail(email, password)
      .then((user) => {
        console.log(user);
        alert("User logged in Successfully");
        setEmail("");
        setPassword("");
        setIsLoading(false)
        navigation.navigate("ProfileScreen");
      })
      .catch((error) => {
        Alert.alert(
          'Something went wrong!',
          error
          [{
            text: "OK",
            onPress: () => setIsLoading(false)
          }]
        );
        // alert(error);
      });
  };

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Login</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Form>
          <Item floatingLabel style={{ margin: 20 }}>
            <Label>Email</Label>
            <Input
              placeholder="Email Address"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </Item>
          <Item floatingLabel style={{ margin: 20 }}>
            <Label>Password</Label>
            <Input
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
          </Item>
        </Form>


        <Button rounded style={styles.button} onPress={loginWithEmail}>
          <Text> Login </Text>
        </Button>
      </Content>
      <Loader isAnimate={isLoading} />
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    width: 200,
    alignSelf: "center",
    marginBottom: 20,
  },
});

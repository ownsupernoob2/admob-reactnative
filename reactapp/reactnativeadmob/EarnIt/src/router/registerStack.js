// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// //Screens
// import SignUpScreen from '../screens/auth/signUpScreen';
// import { Header } from '../shared/header';

// const { Navigator, Screen } = createStackNavigator();

// export const RegisterStack = ({ navigation }) => (
//   <Navigator
//     // headerMode='screen' //default option
//     initialRouteName='SignUpScreen'
//     screenOptions={{
//       gestureEnabled: false,
//       headerTintColor: '#444',
//       headerStyle: { backgroundColor: '#eee', height: 70 },
//       headerTitleStyle: { fontWeight: 'bold' },
//       headerTitleAlign: 'center',
//     }}>
//     <Screen
//       name='Register'
//       component={SignUpScreen}
//       options={{
//         headerTitle: () => <Header title='EarnIt Register' navigation={navigation} />,
//       }}
//     />
//   </Navigator>
// );
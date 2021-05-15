import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Signin, Signup, Profile} from '../screens';
import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();

const Auth = () => {
  const theme = useContext(ThemeContext);
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: theme.backgroundColor},
      }}>
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerTintColor: theme.text,
          headerLeft: ({onPress, tintColor}) => (
            <Icon name="left" size={38} color={tintColor} onPress={onPress} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default Auth;

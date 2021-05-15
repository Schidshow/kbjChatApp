import React, {useEffect, useContext} from 'react';
import {ThemeContext} from 'styled-components/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ChannelList, Profile} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const TabIcon = ({name, focused}) => {
  const theme = useContext(ThemeContext);
  return (
    <Icon
      name={name}
      size={26}
      color={focused ? theme.tabBtnActive : theme.tabBtnInactive}
    />
  );
};

const Tab = createBottomTabNavigator();

const Home = ({navigation, route}) => {
  useEffect(() => {
    const screenName = getFocusedRouteNameFromRoute(route) || 'List';
    navigation.setOptions({
      headerTitle: screenName,
    });
  });
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="List"
        component={ChannelList}
        options={{
          tabBarIcon: ({focused}) =>
            TabIcon({
              name: focused ? 'chatbox' : 'chatbox-outline',
              focused,
            }),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) =>
            TabIcon({
              name: focused ? 'ios-person-sharp' : 'md-person-outline',
              focused,
            }),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;

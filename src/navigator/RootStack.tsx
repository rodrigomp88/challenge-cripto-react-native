import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';

import Title from '../components/Header/Title';
import Profile from '../components/Header/Profile';

import theme from '../utils/theme';
import profile from '../assets/profile.png';

type RootStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
          borderBottomWidth: 0,
          shadowColor: 'transparent',
          shadowOpacity: 0,
          elevation: 0,
          height: 120,
        },
        headerTintColor: theme.colors.secondary,
        headerRightContainerStyle: {
          paddingRight: 25,
        },
        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
        headerRight: () => (
          <Profile
            img={profile}
            imgContainerStyle={{backgroundColor: theme.colors.primary}}
          />
        ),
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: props => (
            <Title mainText="CriptoTraker Pro" {...props} />
          ),
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootStack;

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';

import Title from '../components/Header/Title';
import Profile from '../components/Header/Profile';

import theme from '../utils/theme';
import profile from '../assets/profile.png';

type Props = {
  Home: undefined;
};

const Stack = createStackNavigator<Props>();

const RootStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
          elevation: 10,
          height: 120,
        },
        headerRightContainerStyle: {
          paddingRight: 25,
        },
        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
        headerRight: () => <Profile img={profile} />,
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

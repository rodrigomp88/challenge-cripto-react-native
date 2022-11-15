import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import AddNewCryptocurrency from '../screens/AddNewCryptocurrency';

import Title from '../components/Header/Title';
import Profile from '../components/Header/Profile';

import theme from '../utils/theme';
import profile from '../assets/profile.png';

export type PropsNavigator = {
  Home: undefined;
  AddNewCryptocurrency: undefined;
};

const Stack = createNativeStackNavigator<PropsNavigator>();

const RootStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => <Profile img={profile} />,
          headerTitle: props => (
            <Title mainText="CriptoTraker Pro" {...props} />
          ),
        }}
      />
      <Stack.Screen
        name="AddNewCryptocurrency"
        component={AddNewCryptocurrency}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootStack;

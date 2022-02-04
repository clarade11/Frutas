import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity ,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import FrigorificoPantalla from '../containers/FrigorificoPantalla';
import AnadirPantalla from '../containers/AnadirPantalla';

const MenuStack = createNativeStackNavigator();

//stack para pulsar para la navegacion
//inicio pantalla STACK
export default function StackScreen1() { //LAS DOS VENTANAS POR LAS QUE NAVEGAREMOS
    return (
      <MenuStack.Navigator>
        <MenuStack.Screen name="Frigorifico" component={FrigorificoPantalla} />
        <MenuStack.Screen name="Anadir" component={AnadirPantalla} />
      </MenuStack.Navigator>
    );
  }
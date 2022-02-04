import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const Tab = createBottomTabNavigator();

import FrigorificoPantalla from './src/containers/FrigorificoPantalla';
import AnadirPantalla from './src/containers/AnadirPantalla';

function App() {
  //--------ELEMENTOS DE LA PANTALLA-------
  return (
    //tab para navegacion abajo, o que nunca va a cambiar

    <NavigationContainer>

      <Tab.Navigator //LOS ICONOS DE LAS PANTALLAS PRINCIPALES DEL MENU
        
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => { //ICONOS
            let iconName;
            if (route.name === 'Frigorifico') {
              iconName = focused
                ? 'ios-cube-outline'
                : 'ios-cube';
            } else if (route.name === 'Anadir') {
              iconName = focused ? 'logo-apple'
             : 'logo-apple';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'black',
          tabBarActiveBackgroundColor:'#a7c263'
        }
        
        )}
      >
        
        
      <Tab.Screen options={{ headerShown: false }} name="Frigorifico" component={FrigorificoPantalla}
      options={{
        title: 'Frigorífico',
        headerStyle: {
          backgroundColor: '#a7c263',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center'
      }}/>
      
      <Tab.Screen options={{ headerShown: false }} name="Anadir" component={AnadirPantalla}
      options={{
        title: 'Añade una fruta',
        headerStyle: {
          backgroundColor: '#a7c263',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        
      }}/>


      </Tab.Navigator>
    </NavigationContainer>


  )
}
export default App;





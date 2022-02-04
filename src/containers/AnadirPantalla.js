import React, { useState, useEffect } from 'react';
import { Button, TouchableOpacity, Image, Text, ImageBackground, View, TextInput, Alert } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from '../styles/Styles';



export default function AnadirPantalla() {
  const [nombre, setNombre] = useState(null);
  const [precio, setPrecio] = useState(null);

  //--------ELEMENTOS DE LA PANTALLA-------
  return (
    <ImageBackground style={styles.imagenfondo}
      resizeMode='cover'
      source={require('../assets/frutasfondo.jpg')}>
      <View style={styles.viewfrutas}>
        <Text style={styles.enunciado} > Nombre de la fruta </Text>
        <ModalDropdown style={styles.input} textStyle={styles.opciones}
          options={['Pina', 'Manzana', 'Melocotón', 'Uvas', 'Naranja', 'Kiwi', 'Plátano', 'Pera']}
          onSelect={(id, nombre) => setNombre(nombre)}></ModalDropdown>
        <Image style={styles.desple} source={require('../assets/desplegable.jpg')} />


        <Text style={styles.enunciado} > Precio de la fruta </Text>
        <TextInput
          type="number"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={precio => setPrecio(precio)}
        />

        <View style={{ backgroundColor: 'white', borderStyle: 'solid', borderWidth: 2, borderColor: 'black' }}>
          <Text style={{ color: 'white', backgroundColor: 'red', textAlign: 'center' }}>NO SE VA A AÑADIR LA FRUTA EN ESTOS CASOS: </Text>
          <Text style={{ color: 'red', fontWeight: 'bold' }}>-Si escribe el precio con una "," en vez de con un "."</Text>
          <Text style={{ color: 'red', paddingBottom: 20, fontWeight: 'bold' }}>-Si usa el teclado para escribir letras en vez de números.</Text>
        </View>

        <View style={{ paddingTop: 20 }}>
          <Button
            title="Enviar"
            onPress={() => {
              if (isNaN(precio)) {
                Alert.alert("SOLO SE PUEDE INTRODUCIR NUMEROS CON PUNTO")
              } else {
                fetch('http://10.0.2.2:8080/fruits', {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json', 'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    "name": nombre,
                    "price": precio
                  }),
                })
                  .then((responseJson) => {
                    console.log('getting data from fectch', responseJson);
                    Alert.alert("Fruta añadida correctamente");
                    setFruits(null);
                    setPrice(null);
                  })
                  .catch(error => console.log(error));
              }
            }}
          />
        </View>
      </View>
    </ImageBackground>

  )
}
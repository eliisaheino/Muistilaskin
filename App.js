import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';


export default function App() {
  
    //Annettut numerot tallennetaan number-tilamuuttujiin
    //viesti-tilamuuttujaan asetetaan vastaus ja näytetään se käyttöliittymässä
    //data on flatlistiä varten
    const [number1, setNumber1] = useState ('');
    const [number2, setNumber2] = useState ('');
    const [viesti, setViesti] = useState ('');
    const [data, setData]  = useState ([]);

    //Vastauksen talletukseen
    let result;

   
     //funktio suorittaa + laskutoimituksen
     const pressedPlus = () => {
      result = parseInt(number1) + parseInt(number2);
      setViesti (result)
      pressedAdd()
     }

     //funktio suorittaa - laskutoimituksen
        const pressedMinus = () => {
          result = parseInt(number1) - parseInt(number2);
          setViesti (result) 
          pressedAdd()  
      }

      //Funktio lisää laskutoimituksen tuloksen listaan
       const pressedAdd = () => {
        setData([...data, { key: result}]);
        setNumber1('');
        setNumber2('');
     }


  return (
    
    <View style={styles.container}>
      <View style ={styles.container}>
      <Text style ={styles.text}>Calculator</Text>
      <Text style ={styles.text}> Result: {viesti} </Text>

      {/*2 syöttökenttää numeroille */}
      {/*onChange antaa muuttujalle sisällön */}
      <TextInput 
          style={styles.input} 
          onChangeText= {number1 => setNumber1(number1)}
          value={number1}
          keyboardType="numeric"/>
      <TextInput 
          style={styles.input}
          onChangeText= {number2 => setNumber2(number2)} 
          value={number2} 
          keyboardType="numeric"/>   
      </View>
      <View style ={styles.container2}>
      {/*Painikkeet plus ja miinuslaskuille */}    
      <Button onPress={pressedPlus} title= "+" />
      <Button onPress={pressedMinus} title= "-" />
      </View>
      <Text style={styles.text}>History</Text>

      {/*Flatlist listan näyttämiseen */}
      <FlatList 
        data={data}
        renderItem={({item}) => <Text style ={styles.item}>{item.key}</Text>}
        keyExtractor ={(item, index) => index.toString() } />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  input : {
    width:200  , 
    marginTop: 4,
    height: 30,
    borderColor: 'gray', 
    borderWidth: 1
  },
  text:{
    fontSize: 20,
    
  },
  item: {
    padding : 5,
    fontSize: 17,
    marginTop: 1,
  },
  
});
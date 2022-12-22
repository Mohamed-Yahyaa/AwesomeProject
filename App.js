import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button ,StyleSheet, Text, View } from 'react-native';
import  Table from './Compenents/table';



export default function App () {
 
const [name,setname]= useState("yahya");
const [age,setage]= useState("20");



  const handelPress=()=>{
    alert('hello world')
  }

 
 
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
     <Button onPress={handelPress} title='Click Button'></Button>

     <Table name={name}/>
     <Table name={age}/>
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
});

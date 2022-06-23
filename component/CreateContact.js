import React,{useState, useEffect} from 'react';
import {View,Text,Button,StyleSheet,TextInput,Alert} from 'react-native';

const CreateContact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if(phoneNumber[phoneNumber.length-1].length > 0){
      setPhoneNumber((prevState) => [...prevState, '']);
    }
    try{
      if((phoneNumber[phoneNumber.length-2].length === 0) && (phoneNumber.length >= 2)){
        setPhoneNumber((prevState) => {
          const newState = prevState.slice();
          newState.toUpperCase()
          return newState;
        })
      }
    }catch{}

  }, [phoneNumber])

  function addContact(){
    if((!firstName && !lastName) || phoneNumber.length === 1){
      Alert.alert('Something went worng', 'Please fill the all fields');
    }
    const myPhonenumber = phoneNumber.map((ph) => {
      return{
        label:'mobile',number:ph
      }
    });

    const contactInfo = {
      displayName: firstName + ' ' + lastName,
      givenName: firstName + ' ' + lastName,
      phoneNumber: myPhonenumber
      
    }
  }
  return (
    <View style={styles.container}>
     <View style={styles.inputContainer}>
       <TextInput
         style={styles.input}
         placeholder="FirstName"
         value={firstName}
         onChangeText={(text)=> setFirstName(text)}
         />

      <TextInput
         style={styles.input}
         placeholder="LastName"
         value={lastName}
         onChangeText={(text)=> setLastName(text)}
         />

        <Text> This is create contact page</Text>
    </View>
    {phoneNumber.map((phoneNumber, index) => (
      <View style={{...styles.inputContainer,marginVertical:0}}key={{index}}> 
      <TextInput
         style={styles.input}
         placeholder="Phone Number"
         keyboardType='number-pad'
         value={phoneNumber}
         onChangeText={(text)=> setPhoneNumber((prevState) =>{
           const newState = prevState.slice();
           newState[index] = text;
           return newState;
         })}
         />
    </View>
    ))}
    <Button
      title='Save'
      onPress={() => addContact()}
    />
    <View >
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{

  }
})

export default CreateContact
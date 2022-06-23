import React from 'react'
import {View, Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  FlatList,
  ActivityIndicator,
 Linking,
} from 'react-native';
import Contacts from 'react-native-contacts';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import MaterialIcon from 'react-native-vector-icons/MaterialIcon'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useState } from 'react';
import { getColorByLetter } from '../color';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';

const Profile = () => {

  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    getContact(route.params.contactInfo.id);
  },[route.parames.contactInfo.id])

  function getContact(id){
    Contacts.getContactById(id)
      .then((contact) => setContactInfo(
        {
          ...contact,
          color:getColorByLetter(contact.displayName[0])
        }
      ))
      .catch((error) => console.log(error));
  }

  function makeCall(phoneNumber){
    Linking.openURL(`tel:${phoneNumber}`)
  }
    
  function deleteContact(contact){
    Contacts.deleteContact(contact)
      .then(() =>Navigation.navigate('MyContacts'))
      .catch((error) => console.log(error));
  }

  if(!contactInfo){
    return <ActivityIndicator size={32} />
  }
  return (
  <View style={styles.container}>
    <ImageBackground 
      source={{url:contactinfo.hasThumbnail ? contactInfo.thumbnailpath : null}}
      style={{...styles.ImageBackground, backgroundColor:contactInfo.color}}
    >
      {
        !contactInfo.hasThumbnail
        ?
        <FontAwesome5 name='user-alt' size={125} color='white' />
        :
        null
      }

      <AntDesign 
        name='delete' size={125} color='white' 
        style={{position:'absolute', top:StatusBar.currentHeight, right:20}}
      />
    </ImageBackground>
    
  </View>
  )
}

const styles =StyleSheet.create({

})

export default Profile;
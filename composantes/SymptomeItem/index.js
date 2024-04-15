import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './style'



const SymptomeItem = (item) => {
  return (
    <View >
      <TouchableOpacity style = {styles.itemss}>
        <Image source={require('./../../assets/pain.png')} style = {styles.itemImage}/>
        <Text>{item.item.libelle}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SymptomeItem
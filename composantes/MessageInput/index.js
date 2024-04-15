import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { TextInput } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const MessageInput = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Message ici...' />
     <TouchableOpacity>
       <MaterialCommunityIcons name='send' style={styles.send}/>
     </TouchableOpacity>
    </View>
  )
}

export default MessageInput
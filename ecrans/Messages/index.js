import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { fakeChat } from '../../fakeData/fakeChat'
import MessageList from '../../composantes/MessageList'
import stylesmsg from './style'

const Messages = ({navigation}) => {
  return (
    <FlatList 
      data={fakeChat} 
      keyExtractor = {item => item.id} 
      style = {stylesmsg.root}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return <MessageList item = {item} navigation={navigation}/> 
      }} 

    />    
  )
}

export default Messages
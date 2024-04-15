import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { fakeConverisation } from '../../fakeData/fakeConverisation';
import MessageChat from '../../composantes/Message';
import MessageInput from '../../composantes/MessageInput';

const MessageDetail = ({route, navigation}) => {
  const {item} = route.params;

  useEffect(()=>{
    navigation.setOptions({title: item.fullName})
  });
  return (
    <View style={{flex: 1}}>
      <FlatList 
        data={fakeConverisation} 
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <MessageChat item = {item}/>
        }}
      />
      <MessageInput />
    </View>
  )
}

export default MessageDetail
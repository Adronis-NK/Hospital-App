import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime);

const MessageList = ({item, navigation}) => {
  return (
    <TouchableOpacity style={styles.messageContainer}
     onPress={()=>navigation.navigate("MessageDetail", {item})}>

      <Image
       source={{ uri : 'https://img.freepik.com/photos-premium/jeune-beau-docteur-africain-blanc-isole-phonendoscope-met-gants-medicaux_105818-405.jpg'}}
       style={styles.messageImg} 

      />
      <View style={styles.messageInfo}>
        <View style={styles.date_name}>
          <Text style={styles.name}>{item.fullName}</Text>
          <Text>{dayjs(item.date).fromNow(true)}</Text>
        </View>
        <Text>{item.last_message}</Text>
      </View>

    </TouchableOpacity>
  )
}

export default MessageList 
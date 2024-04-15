import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import { fakeSetting } from '../../fakeData/fakeSetting'
import SettingItem from '../../composantes/SettingItem'

const Setting = () => {
  return (
    <View style = {styles.container}>
      {/* Hearder */}
      <View style = {styles.header}>
        <Image source={ require('./../../assets/woman.jpg')} style={styles.image} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Sarah Doe</Text>
          <Text style={styles.userEmail}>sarahdoe@gmail.com</Text>
          <Text style={styles.userNumber}>+ 257 22 22 22</Text>
        </View>
      </View>
      {/* Fin hearder */}
      <FlatList 
        data={fakeSetting}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator = {false}
        renderItem={({item}) => {
          return <SettingItem item={item} />
        }}
      />
    </View>
  )
}

export default Setting
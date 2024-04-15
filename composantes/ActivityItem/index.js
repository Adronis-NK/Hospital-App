
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import SVG_HOSPITAL from './../../assets/svg/undraw_medicine_b-1-ol.svg'
import  itemstylefirst  from "./style";

const ActivityItem = ({item}) => {
  return (
    <View style={itemstylefirst.scrollableListItem}>
      <TouchableOpacity >
        <SVG_HOSPITAL width={60} height={60} />
        <Text style={itemstylefirst.mainText}>{item.mainText}</Text>
        <Text style={itemstylefirst.subText}>{item.subText}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ActivityItem
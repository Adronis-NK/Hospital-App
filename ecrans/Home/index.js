import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';

import dashboardStyle from './style.js';

import { FakeActivity } from '../../fakeData/fakeActivity.js';
import ActivityItem from '../../composantes/ActivityItem/index.js';

import { FakeSymptome } from '../../fakeData/fakeSymptome.js';
import SymptomeItem from '../../composantes/SymptomeItem/index.js';
import { fakeDoctor } from '../../fakeData/fakeDoctor.js';



const Home = () => {
  return (
    <ScrollView>
      {/* Debut du head */}
      <View style={dashboardStyle.header}>
        <Text style={dashboardStyle.userName}>John Doe</Text>
        <Image style={dashboardStyle.userImage} source={require('./../../assets/woman.jpg')} />
      </View>
      {/* Fin du head */}

      {/* Listes des activités */}
      <FlatList 
        data={FakeActivity} 
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator = {false}
        style = {dashboardStyle.scrollableList}
        renderItem={({item})=>{ return(<ActivityItem item={item} />)}
        }
      />
      {/* Fin de la liste des activités */}

      {/* Listes des symptomes */}
      <View style={dashboardStyle.title}>
        <Text style = {dashboardStyle.titleBold}>Quels sont les symptomes avez-vous?</Text>
      </View>
      <FlatList 
        data={FakeSymptome} 
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator = {false}
        style = {dashboardStyle.scrollableList}
        renderItem={({item})=>{ return(<SymptomeItem item={item} />)}
        }
      />
      {/* Fin du listes des symptomes */}
      {/* Listes des docteurs */}
      <View style={dashboardStyle.title_space_between}>
        <Text style = {dashboardStyle.titleBold}>Nos Docteurs</Text>
        <TouchableOpacity>
          <Text style={dashboardStyle.link}>Afficher tous</Text>
        </TouchableOpacity>
      </View>

      <View style={dashboardStyle.doctorsContainer}>
        {
          fakeDoctor.splice(0, 3).map((doctor, index)=>{
            return(
              <TouchableOpacity key={doctor.id} style={dashboardStyle.doctorCard}>
                <Image source={{ uri : `${doctor.img}`}} style={dashboardStyle.doctorImage}/>
                <View style={dashboardStyle.doctorInfo}>
                  <Text style={dashboardStyle.doctorName}>{doctor.fullName}</Text>
                  <Text style={dashboardStyle.doctorSpeciality}>{doctor.speciality}</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>

    </ScrollView>
  )
}

export default Home
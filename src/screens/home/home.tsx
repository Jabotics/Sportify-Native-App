import React from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import TopGround from './components/TopGround';
import GroundCard from '../../components/GroundCard';
import Icon from 'react-native-vector-icons/AntDesign';
import AllGrounds from './components/AllGrounds';
import AllSports from './components/AllSports';
import Review from './components/Review';

const Home = () => {
  return (
    <View className='bg-white flex-1'>
      {/* fixed components */}
      <View className='bg-white py-4'>
        <View className='mt-10'>
          <Header />
          <Searchbar />
        </View>
      </View>

      {/* Scrollable components */}
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Top Ground Component */}
        <View>
          <TopGround />
        </View>

        {/* All Sports Component */}
        <View className='mt-5'>
          <AllSports />
        </View>

        {/* All Grounds Component */}
        <View className='mt-5'>
          <AllGrounds />
        </View>

        {/* Review Component */}
        <View className='mt-10'>
          <Review />
        </View>
      </ScrollView>
    </View>
  )
}

export default Home;
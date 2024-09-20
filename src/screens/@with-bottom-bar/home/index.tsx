import React from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

// CUSTOM IMPORTS
import {
  
  Header,
  AllGrounds,
  AllSports,
  Footer,
  NewsLetter,
  Review,
  Searchbar,
  TopGround
} from './components'
import GroundCard from '@/components/shared/ground-card';

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
      <ScrollView >
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

        {/* NewsLetter Component */}
        <View className='mt-10'>
          <NewsLetter />
        </View>

        {/* Footer Component */}
        <View className='mt-10'>
          <Footer />
        </View>
      </ScrollView>
    </View>
  )
}

export default Home;
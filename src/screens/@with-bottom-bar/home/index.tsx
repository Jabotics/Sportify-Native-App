import React, { FC } from 'react'
import { ScrollView, StatusBar, View } from 'react-native';

// CUSTOM IMPORTS
import {
  
  AllGrounds,
  AllSports,
  Footer,
  NewsLetter,
  Review,
  TopGround
} from './components'
import GroundCard from '@/components/shared/ground-card';
// import { SafeAreaView } from 'react-native-safe-area-context';

const Home: FC = () => {
  return (
    <View className='bg-transparent flex-1 px-4'>

      {/* Scrollable components */}
      <ScrollView >
        {/* Top Ground Component */}
        <View>
          <TopGround />
        </View>

        {/* All Sports Component */}
        {/* <View className='mt-5'>
          <AllSports />
        </View> */}

        {/* All Grounds Component */}
        {/* <View className='mt-5'>
          <AllGrounds />
        </View> */}

        {/* Review Component */}
        {/* <View className='mt-10'>
          <Review />
        </View> */}

        {/* NewsLetter Component */}
        {/* <View className='mt-10'>
          <NewsLetter />
        </View> */}

        {/* Footer Component */}
        {/* <View className='mt-10'>
          <Footer />
        </View> */}
      </ScrollView>
    </View>
  )
}

export default Home;
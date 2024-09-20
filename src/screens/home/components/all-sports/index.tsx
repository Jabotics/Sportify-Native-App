import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

type sportsName = 'cricket' | 'football' | 'hockey' | 'swiming' | 'badminton';

const sportIcons = {
  cricket: require('@/assets/images/cricket.png'),
  hockey: require('@/assets/images/hockey.png'),
  football: require('@/assets/images/football.png'),
  swiming: require('@/assets/images/swiming.png'),
  badminton: require('@/assets/images/badminton.png'),
}

const sports: sportsName[] = ['cricket', 'hockey', 'football', 'swiming', 'badminton'];

const Sports = ({ name }: { name: sportsName }) => (
  <View className='border border-gray-400 w-[70px] h-16 p-1 rounded-md'>
    <Image source={sportIcons[name]} className='w-[100%] h-[100%]' style={{ resizeMode: 'cover' }} />
  </View>
)

const AllSports = () => {
  return (
    <View className='flex justify-center items-center mt-4'>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View className='flex flex-row gap-2'>
          {
            sports.map((sport: sportsName) => (
              <View key={sport}>
                <Sports name={sport} />
              </View>
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default AllSports
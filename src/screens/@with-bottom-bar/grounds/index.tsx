import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import {  ScrollView, Text, View } from 'react-native'

// CUSTOM IMPORTS
// import GroundCard from '../../components/GroundCard';
import Dropdown from '@/components/shared/dropdown';
import GroundCard from '@/components/shared/ground-card';

const GroundList = () => {

  return (
    <View style={{ flex: 1 }}>
      {/* Searchbar Component */}
      {/* <View className='mt-10'>
        <Searchbar />
      </View> */}

      {/* Sorting and Filter component */}
      <View className='mt-5'>
        <View className='flex flex-row justify-between mx-5 items-center'>
          <View>
            <Icon name='menu' size={20} />
          </View>
          <Dropdown data={['price low to high', 'price high to low']} onSelect={() => { }} />
        </View>
      </View>

      <View className='h-[1px] bg-gray-400 mt-4 mx-5' />

      {/* Ground List */}
      <View className='mt-6' style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          <View className='flex flex-row flex-wrap'>
            {
              [...Array(11)].map((_, index) => (
                <View className='ml-2 mt-2' key={index}>
                  <GroundCard />
                </View>
              ))
            }
          </View>
          <View>
            <Text className='mt-2 text-center text-lg text-gray-400'>You have reached last page</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default GroundList
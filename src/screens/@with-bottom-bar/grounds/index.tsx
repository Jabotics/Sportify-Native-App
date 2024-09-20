import React from 'react'
import { APIEndPoints } from '@/services/APIEndpoints';
import { RootState, useAppSelector } from '@/store';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native'
import { useFetchGroundsQuery } from '@/store/services/ground/groundApi'

interface ListItemProps {
  name: string;
  image: string;
  address: string;
  venue_name: string;
  dimensions:{
    boundary_type?: string;
    length?: string;
    width?: string;
  }
  ground_type: string;
}

const ListItems = ({ name, image, venue_name, address, dimensions, ground_type }: ListItemProps) => (
  <View className='border m-2 rounded p-2 bg-blue-200'>
    <Image source={{uri: `${APIEndPoints.BackendUrl}/${image}`}} width={100} height={100}/>
    <Text>{name} ({dimensions?.length} x {dimensions.width}) - {ground_type}</Text>
    <Text>{venue_name}</Text>      
    <Text>{address}</Text>
  </View>
);

const GroundList = () => {
  const { data } = useFetchGroundsQuery({});
  const grounds = useAppSelector((state: RootState) => state.ground.grounds);

  return (
    <SafeAreaView className='mt-10 bg-white'>
      <Text className='text-lg font-semibold text-center'>Ground List</Text>
      <FlatList
        data={grounds}
        renderItem={({ item }) => <ListItems name={item.name} image={item.images[0]} venue_name={item.venue.name} address={item.venue.address} dimensions={item.dimensions} ground_type={item.ground_type}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default GroundList
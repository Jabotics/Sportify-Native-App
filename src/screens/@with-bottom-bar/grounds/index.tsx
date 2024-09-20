import React, { FC } from "react";
import { APIEndPoints } from "@/services/APIEndpoints";
import { RootState, useAppSelector } from "@/store";
import { FlatList, Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { useFetchGroundsQuery } from "@/store/services/ground/groundApi";
import GroundCard from "@/components/shared/ground-card";

interface ListItemProps {
  name: string;
  image: string;
  address: string;
  venue_name: string;
  dimensions: {
    boundary_type?: string;
    length?: string;
    width?: string;
  };
  ground_type: string;
}

const ListItems = ({
  name,
  image,
  venue_name,
  address,
  dimensions,
  ground_type,
}: ListItemProps) => (
  <View className="border m-2 rounded p-2 bg-blue-200">
    <Image
      source={{ uri: `${APIEndPoints.BackendUrl}/${image}` }}
      width={100}
      height={100}
    />
    <Text>
      {name} ({dimensions?.length} x {dimensions.width}) - {ground_type}
    </Text>
    <Text>{venue_name}</Text>
    <Text>{address}</Text>
  </View>
);

const GroundList: FC = () => {
  const { data } = useFetchGroundsQuery({});
  const grounds = useAppSelector((state: RootState) => state.ground.grounds);

  return (
    <SafeAreaView className="mt-10 bg-white">
      {/* <Text className="text-lg font-semibold text-center">Ground List</Text> */}
      {/* <FlatList
        data={grounds}
        renderItem={({ item }) => <ListItems name={item.name} image={item.images[0]} venue_name={item.venue.name} address={item.venue.address} dimensions={item.dimensions} ground_type={item.ground_type}/>}
        keyExtractor={item => item.id}
      /> */}

      {/* <View className="mt-5">
        <View className="flex flex-row justify-between mx-5 items-center">
          <View>
            <Icon name="menu" size={20} />
          </View>
          <Dropdown
            data={["price low to high", "price high to low"]}
            onSelect={() => {}}
          />
        </View>
      </View> */}

      <View className="h-[1px] bg-gray-400 mt-4 mx-5" />

      {/* Ground List */}
      <View className="mt-6" style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          <View className="flex flex-row flex-wrap">
            {[...Array(11)].map((_, index) => (
              <View className="ml-2 mt-2" key={index}>
                <GroundCard />
              </View>
            ))}
          </View>
          <View>
            <Text className="mt-2 text-center text-lg text-gray-400">
              You have reached last page
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default GroundList;

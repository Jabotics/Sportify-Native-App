import { View, Text, ScrollView } from "react-native";

// CUSTOM IMPORTS
import GroundCard from "@/components/shared/ground-card";

const AllGroundList = () => {
  return (
    <View className="mt-6" style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex flex-col -ml-2 mr-2">
          {[...Array(11)].map((_, index) => (
            <View className="h-[65vh] w-full" key={index}>
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
  );
};

export default AllGroundList;

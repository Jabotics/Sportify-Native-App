import Icon from "react-native-vector-icons/Feather";
import { ScrollView, Text, View } from "react-native";

// CUSTOM IMPORTS
// import GroundCard from '../../components/GroundCard';
import Dropdown from "@/components/shared/dropdown";
import GroundCard from "@/components/shared/ground-card";
import useStatusBarStyle from "@/utils/hooks/useStatusBar";

const GroundList = () => {
  useStatusBarStyle("dark");

  return (
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
      {/* Sorting and Filter component */}
      <View className="mt-5">
        <View className="flex flex-row justify-between items-center">
          <View>
            <Icon name="menu" size={20} />
          </View>
          <Dropdown
            data={["price low to high", "price high to low"]}
            onSelect={() => {}}
          />
        </View>
      </View>

      <View className="h-[1px] bg-gray-400 mt-4" />

      {/* Ground List */}
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
    </View>
  );
};

export default GroundList;

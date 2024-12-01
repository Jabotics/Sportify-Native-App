import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Button,
  ScrollView,
  Pressable,
} from "react-native";
import React, { Fragment, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import { slots } from "@/utils/___mocks___/slots";

const Slots = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const handleSlotPress = (slot: { time: string; isAvailable: string }) => {
    if (slot?.isAvailable === "free") {
      setModalVisible(true);
      setSelectedSlot(slot?.time);
    }
  };

  return (
    <Fragment>
      <View className="w-full mb-4 flex flex-row items-center justify-center gap-2">
        <Text className="text-lg text-gray-400">Select Slots</Text>
        <Icon
          name="information-circle-outline"
          size={20}
          className="text-primary"
        />
      </View>

      <View className="mx-5 h-52 px-4 bg-gray-50 rounded-[20px]">
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            display: "flex",
            gap: 10,
            paddingVertical: 16,
          }}
          showsVerticalScrollIndicator={false}
        >
          {slots.map((slot, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSlotPress(slot)}
              className={`w-full h-12 ${
                slot.isAvailable === "free"
                  ? "bg-white"
                  : slot.isAvailable === "hold"
                  ? "bg-yellow-200/20"
                  : "bg-rose-200/20"
              } rounded-xl flex flex-row items-center justify-between px-3`}
            >
              <Text>{slot.time}</Text>

              <View className=" flex flex-row items-center justify-end gap-3">
                <View
                  className={`h-2 w-2 rounded-full ${
                    slot.isAvailable === "free"
                      ? "bg-green-300"
                      : slot.isAvailable === "hold"
                      ? "bg-yellow-400"
                      : "bg-rose-600"
                  }`}
                />
                <Text className="text-xs text-gray-400">
                  {slot.isAvailable}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/25 bg-opacity-50 px-5">
          <View className="bg-white p-6 rounded-2xl w-full">
            <Text className="text-base text-gray-400 mb-1">Time :</Text>
            <View className="px-5 py-2 border border-gray-400 rounded-lg mb-10 w-2/3">
              <Text className="w-full text-xs">
                {selectedSlot !== null ? selectedSlot : null}
              </Text>
            </View>

            <View className="w-full flex flex-row items-center gap-2">
              <Pressable className="flex-1 flex items-center justify-center bg-primary/75 py-3 rounded-2xl">
                <Text className="text-white">Book</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setModalVisible(false);
                  setSelectedSlot(null);
                }}
                className="flex-1 flex items-center justify-center py-3 rounded-2xl border border-gray-800"
              >
                <Text className="text-gray-800">Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </Fragment>
  );
};

export default Slots;

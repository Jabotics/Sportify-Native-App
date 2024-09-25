import { View, Text, TouchableOpacity, Modal, Button } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface SlotAvailableProps {
    available: boolean;
}

const SlotAvailable: React.FC<SlotAvailableProps> = ({ available }) => (
    <View className={`${available ? 'bg-teal-600' : 'bg-red-600'} w-16 h-12 rounded-md flex justify-center`}></View>
);

const slot = [true, false, false, true, true, true, false, true, true, false, false, false, false, true, true];

const Slots = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

    const handleSlotPress = (index: number) => {
        setSelectedSlot(index);
        setModalVisible(true);
    };

    return (
        <View className='mx-6 bg-[#d9d9d9] border h-[80%] rounded-lg border-gray-300'>
            <View className='flex flex-row p-6 gap-2'>
                <Text className='text-primary font-medium text-[15px]'>Select Slot</Text>
                <Icon name='information-circle-outline' size={20} className='text-primary' />
            </View>
            <View className='flex flex-row flex-wrap gap-2'>
                {slot.map((ava, i) => (
                    <TouchableOpacity key={i} onPress={() => handleSlotPress(i)}>
                        <SlotAvailable available={ava} />
                    </TouchableOpacity>
                ))}
            </View>

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View className="flex-1 justify-center items-center bg-opacity-50">
                    <View className="bg-white p-6 rounded-lg w-3/4">
                        <Text className="text-lg font-medium mb-4">Slot Details</Text>
                        <Text>
                            {selectedSlot !== null
                                ? `You selected slot number ${selectedSlot + 1}`
                                : 'No slot selected'}
                        </Text>
                        <Button title="Close" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Slots;

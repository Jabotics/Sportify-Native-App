import React, { useState } from 'react';
import { Modal, TouchableOpacity, Text, View, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface DropdownProps {
  data: string[];
  onSelect: (item: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ data, onSelect }) => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    onSelect(item);
    setVisible(false);
  };

  return (
    <View className='overflow-hidden'>
      <TouchableOpacity         
        onPress={() => setVisible(true)}
        className='border rounded-md p-1 px-2 flex flex-row items-center justify-between'
      >
        <Text className='text-center text-md mr-1'>{selectedItem || 'Sort'}</Text>
        <Icon name='down' size={12}/>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={data}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => handleSelect(item)}
                >
                  <Text className='text-[15px]'>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default Dropdown;

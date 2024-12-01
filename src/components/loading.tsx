import { View, Text } from 'react-native'
import React from 'react'
import { loadingStyles } from '@/styles/components/loading';

const Loading: React.FC = () => (
  <View style={loadingStyles.container}>
    <Text>Loading...</Text>
  </View>
);

export default Loading
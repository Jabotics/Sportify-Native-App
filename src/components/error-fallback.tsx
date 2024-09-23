import { View, Text } from 'react-native'
import { FC } from 'react'
import { errorStyles } from '@/styles/components/error-fallback'

const ErrorFallback: FC = () => {
  return (
    <View style={errorStyles.container}>
    <Text>Something went wrong while loading the component.</Text>
  </View>
  )
}

export default ErrorFallback
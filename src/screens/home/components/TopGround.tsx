import React from 'react';
import { Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const arr = [1,2,3]

const TopGroundComponent = () => (
    <View className='w-32 h-52 rounded-md overflow-hidden relative mx-1'>
        <Image
            source={require('../../../assets/images/ground.jpg')}
            style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
        />
        <View style={{ position: 'absolute', bottom: 40, left: 0, right: 0, justifyContent: 'center', alignItems: 'center' }} className='bg-black opacity-60 mx-4 rounded p-[3px]'>
            <Text className='text-white font-normal text-[12px] opacity-100'>Maidan Swiming Pool</Text>
        </View>
        <View style={{ position: 'absolute', bottom: 15, left: 0, right: 0, justifyContent: 'center', alignItems: 'center' }} className='bg-black opacity-60 rounded flex flex-row mx-4 p-[2px]'>
            <Icon name='location' size={15} color={'white'} />
            <Text className='text-white font-medium text-[10px]'>Maidan Howrah</Text>
        </View>
    </View>
)

const TopGround = () => {
    return (
        <View>
            <View>
                <Text className='text-center font-bold text-white'>Top Grounds Of The Month</Text>
            </View>
            <View className='mt-2 flex flex-row'>
                {
                    arr.map((item) => (
                        <View key={item}>
                            <TopGroundComponent />
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

export default TopGround
import React from 'react'
import { View } from '@tarojs/components'
import './index.less'

const Loading = () => {
  return <View className='loading'>
    <View className="sk-fading-circle">
      <View className="sk-circle sk-circle-5"></View>
      <View className="sk-circle sk-circle-6"></View>
      <View className="sk-circle sk-circle-7"></View>
      <View className="sk-circle sk-circle-8"></View>
      <View className="sk-circle sk-circle-9"></View>
      <View className="sk-circle sk-circle-10"></View>
      <View className="sk-circle sk-circle-11"></View>
      <View className="sk-circle sk-circle-12"></View>
      </View>
    </View>
}

export { Loading }
import { View, Text, Pressable, ImageBackground } from 'react-native'
import React, { FC } from 'react'
import { IStory } from './types'
import tw from 'twrnc'
import { useData } from '../../../../hooks/useData'
// import s from './Storyitem.css'

const StoryItem: FC<{ story: IStory }> = ({ story }) => {

  // const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/tinkoff-dc8b4.appspot.com/o/stories%2F1%2Fdh8t59d5y70.jpg?alt=media&token=e8b90e01-e3e5-41c1-bd8e-f3f54a829f99&_gl=1*1xjuu07*_ga*MTk2OTEzOTgwMS4xNjk2NjEyODYw*_ga_CW55HF8NVT*MTY5Njc2MDIwMi43LjAuMTY5Njc2MDIwMi42MC4wLjA.'

  const { setActiveStories } = useData()

  return (
    <Pressable onPress={() => { setActiveStories(story.images) }}>
      <View style={tw`w-24 h-24 rounded-2xl ml-4 border-solid border-blue-400 p-[0.15rem] border-[1px] relative`}>
        <ImageBackground source={{ uri: story.images[0] }}
          // <ImageBackground source={{uri: imageUrl}}
          resizeMethod='auto' style={tw`w-full h-full justify-end`}
          imageStyle={tw`rounded-xl`}
        >
          <View style={s.overlay}>
            <Text style={{ ...tw`text-white`, fontSize: 12, margin: 8 }}>{story.heading}</Text>

          </View>
        </ImageBackground>
      </View>
    </Pressable>
  )
}

export default StoryItem
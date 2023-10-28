import { View, Text } from 'react-native'
import React from 'react'
import { useData } from '../../../../hooks/useData'
// @ts-ignore
import {StoryContainer as SC} from 'react-native-stories-view'
import tw from 'twrnc'

const StoryContainer = () => {

    const {activeStories, setActiveStories} = useData()

    return activeStories && (
        <SC 
        visible 
        enableProgress 
        images={activeStories}
        imageStyle={{
            objectFit: 'contain'
        }}
        duration={20}
        onComplete={() => setActiveStories(null)}
        containerStyle={tw`w-full h-full`}
        />
    )
}

export default StoryContainer
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useStories } from './useStories'
import tw from 'twrnc'
import Loader from '../../../ui/Loader'
import StoryItem from './StoryItem'
import useLog from '../../../../hooks/useLog'
import { IStory } from './types'

const Stories = () => {
    const { stories, isLoading } = useStories()

    // const stories: IStory[] = [{} as IStory]
    // const isLoading = false;

    useLog(stories)

    return (
        <View style={tw`my-[1rem]`}>
            {isLoading ? <Loader /> :
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        stories.map(story => (
                            <StoryItem story={story} key={story._id} />
                        ))
                    }
                    {/* <StoryItem story={stories[0]}/> */}
                </ScrollView>
            }
        </View>
    )
}

export default Stories
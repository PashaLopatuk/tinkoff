import {View, Text, Pressable, ImageBackground} from 'react-native';

import {FC} from 'react';
import styles from './styles';
import {useData} from '../../../../hooks/useData';
import {IStory} from '../../../../types/IStory';

const StoryItem: FC<{story: IStory}> = ({story}) => {
  const {setActiveStories} = useData();

  return (
    <Pressable onPress={() => setActiveStories(story.images)}>
      <View style={styles.container}>
        <ImageBackground
          source={{uri: story.images[0]}}
          resizeMode={'cover'}
          style={styles.image}
          imageStyle={styles.imageStyle}>
          <Text style={styles.heading}>{story.heading}</Text>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

export default StoryItem;

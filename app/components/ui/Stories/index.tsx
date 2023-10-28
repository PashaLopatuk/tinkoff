import {ScrollView, Text, View} from 'react-native';
import styles from './styles';
import Loader from '../Loader';
import StoryItem from './StoryItem';
import {useStories} from '../../../hooks/useStories';

const Stories = () => {
  const {stories, isLoading} = useStories();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {stories.map(story => (
            <StoryItem key={story._id} story={story} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Stories;

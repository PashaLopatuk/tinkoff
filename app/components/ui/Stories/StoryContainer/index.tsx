import {useData} from '../../../../hooks/useData';
// @ts-ignore
import {StoryContainer as RNStoryContainer} from 'react-native-stories-view';
import styles from './styles';

const StoryContainer = () => {
  const {activeStories, setActiveStories} = useData();

  return (
    activeStories && (
      <RNStoryContainer
        visible={true}
        enableProgress={true}
        images={activeStories}
        duration={20}
        onComplete={() => setActiveStories(null)}
        containerStyle={styles.container}
      />
    )
  );
};

export default StoryContainer;

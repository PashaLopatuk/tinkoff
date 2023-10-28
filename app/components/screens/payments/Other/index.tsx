import {ScrollView, View} from 'react-native';
import SubHeading from '../../../ui/SubHeading';
import styles from '../Contacts/styles';
import OtherItem from './OtherItem';
import {otherItems} from './data';

const Other = () => {
  return (
    <View>
      <SubHeading text={'Important transfers'} />
      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        {otherItems.map(item => (
          <OtherItem key={item.title} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Other;

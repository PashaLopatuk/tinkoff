import { ScrollView, View } from 'react-native';
import SubHeading from '../../../ui/SubHeading';
import styles from '../Contacts/styles';
import OtherItem from './OtherItem';
import { otherItems } from './data';
import tw from 'twrnc'
import Padding from '../../home/Padding';

const Other = () => {
  return (
    <Padding style={tw`mt-3`}>
      <View style={tw`bg-white rounded-xl py-3`}>
        <SubHeading text={'Important transfers'} />
        <ScrollView
          style={styles.scrollView}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          {otherItems.map(item => (
            <OtherItem key={item.title} item={item} />
          ))}
        </ScrollView>
      </View>
    </Padding>
  );
};

export default Other;

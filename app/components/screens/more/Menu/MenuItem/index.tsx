import {Linking, Pressable, Text, View} from 'react-native';
import {FC} from 'react';
import {IMoreItem} from '../../../../../types/IMoreItem';
import styles from './styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const MenuItem: FC<{item: IMoreItem}> = ({item}) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => Linking.openURL(item.link)}>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>{item.title}</Text>
        <Text style={styles.contentDescription}>{item.description}</Text>
      </View>
      <View style={styles.badge}>
        <FontAwesome5Icon name={item.iconName} size={16} color={'#EDF4FE'} />
      </View>
    </Pressable>
  );
};

export default MenuItem;

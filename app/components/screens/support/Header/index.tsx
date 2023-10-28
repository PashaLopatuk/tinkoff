import {Image, Text, View} from 'react-native';
import {FC} from 'react';
import styles from './styles';

const Header: FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../../assets/tinkoff_logo.png')}
        style={styles.img}
      />
      <View>
        <Text style={styles.title}>Support</Text>
        <Text style={styles.subtitle}>We are here 24/7</Text>
      </View>
    </View>
  );
};

export default Header;

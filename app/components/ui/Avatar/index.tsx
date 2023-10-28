import {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface IAvatar {
  name?: string | null;
  size?: 'small' | 'large';
}

const Avatar: FC<IAvatar> = ({name, size = 'small'}) => {
  const isSmall = size === 'small';

  return (
    <View style={[styles.root, isSmall && styles.rootSmall]}>
      <Text style={[styles.text, isSmall && styles.textSmall]}>
        {name?.slice(0, 1)}
      </Text>
    </View>
  );
};

export default Avatar;

import {Pressable, Text, View} from 'react-native';
import {FC} from 'react';

import styles from './styles';
import Avatar from '../../../../ui/Avatar';
// import {handleTransfer} from '../../handleTransfer';
// import {useAccounts} from '../../../../../hooks/useAccounts';

const FavoriteItem = ({displayName} : {displayName: string}) => {


  return (
    <Pressable
      style={styles.container}
      onPress={() => {}}>
      <Avatar size={'large'} name={displayName} />
      <Text style={styles.label}>{displayName}</Text>
    </Pressable>
  );
};

export default FavoriteItem;

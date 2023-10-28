import Padding from '../Padding';
import {Text} from 'react-native';
import {FC} from 'react';
import styles from './styles';

const SubHeading: FC<{text: string; isCenter?: boolean}> = ({
  text,
  isCenter = false,
}) => {
  return (
    <Padding>
      <Text style={[styles.text, isCenter && styles.textCenter]}>{text}</Text>
    </Padding>
  );
};

export default SubHeading;

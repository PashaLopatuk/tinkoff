import {FC} from 'react';
import {Text} from 'react-native';
import styles from './styles';
import Padding from '../Padding';

interface IHeading {
  text: string;
  isCenter?: boolean;
}

const Heading: FC<IHeading> = ({text, isCenter}) => {
  return (
    <Padding>
      <Text style={[styles.text, isCenter && styles.textCenter]}>{text}</Text>
    </Padding>
  );
};

export default Heading;

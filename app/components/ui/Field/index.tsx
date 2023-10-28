import {FC, ReactNode} from 'react';
import {TextInput} from 'react-native';
import styles from './styles';
import { Style } from 'tailwind-rn';
import tw from 'twrnc'

interface IField {
  onChange: (val: string) => void;
  val: string;
  placeholder: string;
  isSecure?: boolean;
  style?: Style;
  icon?: ReactNode
}

const Field: FC<IField> = ({onChange, val, placeholder, isSecure, style, icon}) => {
  return (
    <TextInput
      style={{...styles.root, ...style, ...tw`bg-white`}}
      placeholder={placeholder}
      onChangeText={onChange}
      value={val}
      secureTextEntry={isSecure}
      showSoftInputOnFocus={false}
      autoCapitalize={'none'}
    />
  );
};

export default Field;

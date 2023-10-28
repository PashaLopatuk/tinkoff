import {View, Text} from 'react-native';
import {FC} from 'react';
import {IService} from '../../../../types/IService';
import styles from './styles';
// import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const gradients = [
  ['#433CA2', '#4A73C0'],
  ['#FF4270', '#fE0040'],
  ['#EA40EC', '#763DFB'],
  ['#FE8055', '#ED27A2'],
  ['#FFD53E', '#FF810A'],
  ['#7BAAF9', '#2255EA'],
  ['#569E0C', '#72B00E'],
  ['#5F5D64', '#343237'],
  ['#31F3F6', '#0BCCCE'],
  ['#FF4270', '#FE0040'],
  ['#F641AE', '#C11B80'],
  ['#D74339', '#B9271D'],
  ['#FF0E01', '#FE5A00'],
];

// const getRandomGradient = () => {
//   const min = 0;
//   const max = gradients.length - 1;

//   const randomNumber = Math.floor(Math.random() * (max - min) + min);

//   return gradients[randomNumber];
// };

const ServiceItem: FC<{service: IService}> = ({service}) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        {/* <LinearGradient
          colors={getRandomGradient()}
          style={styles.itemGradient}> */}
          <View style={styles.itemPercent}>
            <Text style={styles.itemPercentText}>{service.percent + '%'}</Text>
          </View>

          <FontAwesome5Icon name={service.iconName} size={20} color={'#FFF'} />
        {/* </LinearGradient> */}
      </View>
      <Text style={styles.text}>{service.title}</Text>
    </View>
  );
};

export default ServiceItem;

import {Pressable, Text, View} from 'react-native';
import styles from './styles';
import Avatar from '../../../../ui/Avatar';
import tw from 'twrnc'
// import {handleBalanceChange} from '../../handleBalanceChange';
// import {useAccounts} from '../../../../../hooks/useAccounts';
import {Svg, Path} from 'react-native-svg';
import {UI_BG} from '../../../../../styles';

const FavoriteItem = ({displayName}: { displayName: string }) => {


    return (
        <Pressable
            style={{...styles.container, ...tw`m-[-0.1rem]`}}
            onPress={() => {
            }}>
            <View style={tw`bg-[#F6F7F9] rounded-xl p-3 h-24 w-24 flex-col justify-between`}>
                <View
                    style={{
                        ...tw`h-7 w-7 bg-blue-500 rounded-tr rounded-bl text-white font-bold`,
                        ...{
                            // width: 20,
                            // height: 20,
                            // backgroundColor: 'lightgray',
                            // borderWidth: 10,
                            // borderColor: 'transparent',
                            // borderBottomColor: 'white',
                            // borderRightColor: 'white',
                            // overflow: 'hidden',
                        }
                    }}>
                    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3}
                         stroke="currentColor" style={tw`w-6 h-6 text-white font-bold m-auto `}>
                        <Path strokeLinecap="square" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                    </Svg>
                </View>
                <Text style={{...styles.label, ...tw`text-blue-500 text-base font-bold`}}>{displayName}</Text>
            </View>

        </Pressable>
    );
};

export default FavoriteItem;

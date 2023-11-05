import {Pressable} from "react-native";
import Svg, {Path} from "react-native-svg";

interface IBackButton {
    onPress: () => void
}

const BackButton: React.FC<IBackButton> = ({
                                               onPress
                                           }) =>
    <Pressable
        onPress={() => {
            onPress()
            console.log('Pressed back button!')
        }}
        style={{padding: 10, paddingStart: 0, paddingEnd: 30, marginTop: -10}}
    >
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
        >
            <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                strokeWidth={2.5}
                stroke="#3b82f6" // Змініть на "black" або на бажаний колір
            />
        </Svg>

    </Pressable>

export default BackButton
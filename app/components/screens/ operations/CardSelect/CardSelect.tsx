import SelectDropdown from 'react-native-select-dropdown'
// import {useAccounts} from "../../../../hooks/useAccounts";
import tw from "twrnc";
import {IAccount} from "../../../../types/IAccount";
import {Style} from "tailwind-rn";
import {UI_BG} from "../../../../styles";

interface ICardSelect {
    selectHandler: (selectedItem: any, index: number) => void
    accounts: IAccount[]
    buttStyle?: Style
}

const CardSelect: React.FC<ICardSelect> = ({selectHandler, accounts, buttStyle = {}}) => {
    return (
        <SelectDropdown
            data={accounts.map(item => item.cardNumber)}
            onSelect={selectHandler}
            dropdownOverlayColor={''}
            buttonStyle={{...tw`rounded-xl bg-[${UI_BG}]`, ...buttStyle}}
            defaultValueByIndex={0}

        />
    )
}

export default CardSelect
import SelectDropdown from 'react-native-select-dropdown'
// import {useAccounts} from "../../../../hooks/useAccounts";
import tw from "twrnc";
import {IAccount} from "../../../../types/IAccount";

interface ICardSelect {
    selectHandler: (selectedItem: any, index: number) => void
    accounts: IAccount[]
}

const CardSelect: React.FC<ICardSelect> = ({selectHandler, accounts}) => {


    return (
        <SelectDropdown
            data={accounts.map(item => item.name)}
            onSelect={selectHandler}
            dropdownOverlayColor={''}
            buttonStyle={tw`rounded-xl w-full`}
            defaultValueByIndex={0}

        />
    )
}

export default CardSelect
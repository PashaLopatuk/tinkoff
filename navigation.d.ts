import { TypeRootStackParamList } from './app/navigation/types'

declare global {
    namespace ReactNavigation {
        interface RooteParamList extends TypeRootStackParamList{}
    }
}

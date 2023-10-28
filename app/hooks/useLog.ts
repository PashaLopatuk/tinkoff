import { useEffect } from "react"

const useLog = (varToObserve: any) => {
    useEffect(() => console.debug(varToObserve), [varToObserve])
}

export default useLog
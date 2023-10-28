import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { collection, limit, onSnapshot, query, where } from 'firebase/firestore'
import { db } from "../../../utils/firebase";

interface IProfile {
    _id: string
    displayName: string
    docId: string
}

export const useProfile = () => {
    const { user } = useAuth()

    const [isLoading, setisLoading] = useState(true)
    const [profile, setProfile] = useState<IProfile>({} as IProfile)
    const [name, setName] = useState('')

    useEffect(() =>
        onSnapshot(
            query(
                collection(db, 'users'),
                where('_id', '==', user?.uid),
                limit(1)
            ),
            snapshot => {
                const profiles = snapshot.docs.map(d => ({
                    ...(d.data() as Omit<IProfile, 'docId'>),
                    docId: d.id
                }))[0]

                setProfile(profiles)
                setName(profiles.displayName)
                setisLoading(false)
            }
        ), [])

    useEffect(() => {
        console.log('Profile: ', profile)
    }, [profile])

    const value = useMemo(() => ({
        profile, isLoading, name, setName
    }), [isLoading, profile, name])

    return value
}
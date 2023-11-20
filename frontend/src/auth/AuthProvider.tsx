import React, { useEffect, useMemo } from 'react'
import { pb } from '../services/pocketbase';

const AuthContext = React.createContext({ user: pb.authStore.model });


export const AuthProvider = ({ children }: any) => {


    const [user, setUser] = React.useState<any>(pb.authStore.model);


    useEffect(() => {
        pb.authStore.onChange((auth) => {
            setUser(pb.authStore.model)
        });

    }, []);

    const contextValue = useMemo(() => {
        return {
            user,
        };
    }, [user])

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    return React.useContext(AuthContext);
}
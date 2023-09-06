import React, { ReactNode, createContext, useState } from "react";


const AuthContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(["", () => {}]);

const AuthProvider = ({children}:{children:ReactNode})=>{

    const[state,setState] = useState<string>("")

    return(
        <AuthContext.Provider value={[state,setState]}>
            {children}
        </AuthContext.Provider>
    )

}

export{AuthContext,AuthProvider}
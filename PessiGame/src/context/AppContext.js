import { createContext ,useState} from "react";
import React from 'react'
//khi muốn sử dụng kho , thì gọi thằng này (quản lý kho)
export const AppContext = createContext()

//tạo kho 
export const AppContextProvider = (props) => {
    const {children} = props;
    const [isDangNhap, setisDangNhap] = useState(false);
    const [inforUser, setinforUser] = useState({})
    return(
        
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}
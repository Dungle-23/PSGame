import { createContext, useState } from "react";
import React from 'react'
//khi muốn sử dụng kho , thì gọi thằng này (quản lý kho)
export const AppContext = createContext()

//tạo kho 
export const AppContextProvider = (props) => {
    const { children } = props;
    const [soPepsi, setSoPepsi] = useState(0)
    const [soCam, setSoCam] = useState(0)
    const [soBayUp, setSoBayUp] = useState(0)
    const [soDiem, setSoDiem] = useState(0)
    const [soDiemColl,setSoDiemColl] = useState(1)
    const [randomImageScore, setRandomImageScore] = React.useState(0);
    const [randomImagePrize, setRandomImagePrize] = React.useState('');
    return (

        <AppContext.Provider
            value={{
                soPepsi, setSoPepsi,
                soCam, setSoCam,
                soBayUp, setSoBayUp,
                soDiem, setSoDiem,
                randomImageScore, setRandomImageScore,
                randomImagePrize, setRandomImagePrize,
                soDiemColl,setSoDiemColl,
            }
            }>
            {children}
        </AppContext.Provider>
    )
}
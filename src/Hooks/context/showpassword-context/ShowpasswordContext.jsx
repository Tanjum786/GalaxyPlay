import { createContext,useState,useContext } from "react";

const showpasswordcontext=createContext();
const ShowpasswordProvider=(({children})=>{
    const [showpassword,setShowpassword]=useState("password")
    const ShowpasswordFun=(()=>{
        showpassword==="password"?setShowpassword("text"):setShowpassword("password")
    })
    return(
        <showpasswordcontext.Provider value={{showpassword,setShowpassword,ShowpasswordFun}}>
            {children}
        </showpasswordcontext.Provider>
    )
})


const usePassword=()=>useContext(showpasswordcontext);
export{usePassword,ShowpasswordProvider}
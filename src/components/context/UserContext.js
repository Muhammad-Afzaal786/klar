import { createContext, useState,useEffect } from "react";
import Data from '../Data';
import Data2 from '../Data2'
export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [cData, setCdata] = useState(Data);
    const [list, setList] = useState([]);
    const [box, setBox] = useState(Data2);
    const [show , setShow] = useState(false)
    const [isColor, setColor] = useState(false);
    
  
    useEffect(() => {
        localStorage.setItem("SetData", JSON.stringify(list));
      }, [list]);
    

  const value = {
    cData,
    setCdata,
    list,
    setList,
    box,
    setBox,
    isColor,
    setColor,
    show,
    setShow
   
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

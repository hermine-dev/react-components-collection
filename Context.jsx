import React, { createContext, useState, useContext } from 'react';


const MyContext = createContext();

const useMyContext = () => useContext(MyContext);

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState('');

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <MyContext.Provider value={{ data, updateData }}>
      {children}
    </MyContext.Provider>
  );
}

export { MyContext, MyContextProvider, useMyContext };
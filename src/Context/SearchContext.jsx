import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [getData2, SetgetData2] = useState([]);

  return (
    <SearchContext.Provider value={{ getData2, SetgetData2 }}>
      {children}
    </SearchContext.Provider>
  );
};

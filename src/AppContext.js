// // AppProvider.js
// import React, { createContext, useState } from 'react';

// const AppContext = createContext();

// const AppProvider = ({ children }) => {
//   const [avatarName, setAvatarName] = useState('Designer');

//   return (
//     <AppContext.Provider value={{ avatarName, setAvatarName }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export { AppContext, AppProvider };


import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [avatarName, setAvatarName] = useState('Designer');

  return (
    <AppContext.Provider value={{ avatarName, setAvatarName }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

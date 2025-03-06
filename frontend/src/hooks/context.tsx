import { createContext, ReactElement, useState } from 'react';
import { AppContextType } from './context.types';

const AppContext = createContext<AppContextType>({
    activeAddress: null,
    setActiveAddress: ()=>{}
  }
);

export const MyProvider = ({ children } : { children: ReactElement }) => {
  const [activeAddress, setActiveAddress] = useState<number | null>(0);

  return (
    <AppContext.Provider value={{ activeAddress, setActiveAddress }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

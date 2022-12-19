import React,{ useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
  const drawerWidth = 250; 
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    return <AppContext.Provider value={{handleDrawerOpen,handleDrawerClose,open,drawerWidth}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
export { AppContext, AppProvider };
  
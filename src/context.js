import React,{ useState, useContext,useRef } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
  const drawerWidth = 250; 
  const [open, setOpen] = useState(false);
  const [category, setcategory] = useState('pizza')
  const [cart, setcart] = useState([])
  const cartRef = useRef(null)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addToCart = (item) => {
    setcart([...cart,item])
  }

  const removeFromCart = (item) => {
    const newCart = cart.filter(i => {
      return i!==item
    })
    setcart(newCart)
  }
    return <AppContext.Provider value={{handleDrawerOpen,handleDrawerClose,open,drawerWidth,category,setcategory,cart,addToCart,removeFromCart,cartRef}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
export { AppContext, AppProvider };
  
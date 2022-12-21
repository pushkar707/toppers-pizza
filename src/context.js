import React,{ useState, useContext,useRef } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
  const drawerWidth = 250; 
  const [open, setOpen] = useState(false);
  const [category, setcategory] = useState('pizza')
  const [cart, setcart] = useState([])  
  const cartRef = useRef(null)

  const saveToLocalStorage = (item) => {
    localStorage.setItem('react-toppers-app-cart',JSON.stringify(item))
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addToCart = (name,size,type) => {
    setcart([...cart,{name,size,type}])
    saveToLocalStorage([...cart,{name,size,type}])
  }

  const removeFromCart = (item) => {
    const newCart = cart.filter(i => {
      return i!==item
    })
    setcart(newCart)
    saveToLocalStorage(newCart)
  }
    return <AppContext.Provider value={{handleDrawerOpen,handleDrawerClose,open,drawerWidth,category,setcategory,cart,setcart,addToCart,removeFromCart,cartRef}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
export { AppContext, AppProvider };
  
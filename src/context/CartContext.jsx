import { createContext, useContext, useState } from "react";



const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({children}) => {



    const [cartList, setCartList] = useState([])

    const addToCart = (newProduct) =>{

        const iProduct = cartList.findIndex(prod => prod.id === newProduct.id)

        if (iProduct === -1) {
            setCartList([...cartList,newProduct])
        } else {
            cartList[iProduct].quantity += newProduct.quantity
            setCartList([...cartList])
        }
    }




    const totalQuantity = () => cartList.reduce((totalQuantity, productObject) => totalQuantity += productObject.quantity, 0)
    


    const totalPrice = () => {
        return cartList.reduce((totalPrice, productObject) => totalPrice += (productObject.price * productObject.quantity), 0)
    }
    


    const deleteProduct = (pid) =>{

        setCartList(cartList.filter(product => product.id !== pid))  
           
    }
    


    const emptyCart = () => {
        setCartList([])
    }
    


    return(
        <CartContext.Provider value={{

            cartList,
            addToCart,
            totalQuantity,
            totalPrice,
            deleteProduct,
            emptyCart,
            
        }}>
            {children}
        </CartContext.Provider> 
    )
}
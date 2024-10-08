import { createContext, useState, useEffect } from "react";
import axios from 'axios'
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:5000";
    const [token, setToken] = useState("")

    const [food_list, setFood_List] = useState([])

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {

            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
            console.log(itemId);
        }
        else {
            setCartItems((prev) => ({
                ...prev, [itemId]: prev[itemId] + 1
            }))
        }
    }

    const removeFormCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev, [itemId]: prev[itemId] - 1
        }))
    }


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItems[item]
            }

        }
        return totalAmount;
    }

    useEffect(() => {
        async function load_data() {
            await fetchfoodList();
            if (localStorage.getItem('token')) {
                setToken(localStorage.getItem('token'))
            }
        }
        load_data()
    }, [])


    const fetchfoodList = async () => {
        const responce = await axios.get(`${url}/api/food/list`)
        setFood_List(responce.data.data)
    }

    const contextValue = {
        food_list,
        cartItems,
        url,
        token,
        setCartItems,
        addToCart,
        removeFormCart,
        getTotalCartAmount,
        setToken

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
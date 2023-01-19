import { createContext, useContext, useEffect } from "react";
import axios from "axios";

const Appcontext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {

    const getProducts = async (url) => {
        try {
            const res = await axios.get(url);
            // console.log(res);
            const products = await res.data;
        } catch (error) {
            console.log(error);
        }



    }

    useEffect(() => {
        getProducts(API);
    }, [])




    return (
        <Appcontext.Provider value={{ h: 'hihurr' }}>{children}</Appcontext.Provider>
    )
}

const useProductContext = () => {
    return useContext(Appcontext);
}


export { AppProvider, Appcontext, useProductContext };
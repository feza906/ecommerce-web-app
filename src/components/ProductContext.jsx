import axios from 'axios';
import {createContext,useContext,useEffect, useState} from 'react';


const AppContext = createContext();
const API = 'https://api.pujakaitem.com/api/products';


const AppProvider = ({children}) => {
    const [featureProduct,setFeatureProduct] = useState([]);
    const isFeatured = (value) => {
        return value.featured === true;
    }
    const getFeatureProducts = async (url) => {
        const res = await axios.get(url);
        const products = await res.data;
        console.log(products);
        const Feature = products.filter(isFeatured);
        console.log(Feature);
        setFeatureProduct(Feature);
    }
    useEffect(() => {
        getFeatureProducts(API);
    },[])
return <AppContext.Provider value={featureProduct}>
    {children}
</AppContext.Provider>
}
const useGlobal = () => {
    return useContext(AppContext)
}

export {AppProvider,AppContext,useGlobal};
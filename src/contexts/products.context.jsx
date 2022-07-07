import { createContext, useState, useEffect } from 'react';
import PRODUCTS from '../../shop-data.json';


export const ProductsContext = createContext({
    products: [],
});

const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products};

    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}

export default ProductsProvider;
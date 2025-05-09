import {useState, useContext, createContext} from "react";
import {useQuery} from '@tanstack/react-query';



const fetchProducts = async()=>{
  try {
    const res = await fetch('https://www.dummyjson.com/products')
    return res.json()
  } catch (error) {
    console.error("Error fetching", error);
  }
}



interface Product{
  category: string;
};

interface FetchResponse{
  products: Product[];
}


let ProductContext = createContext(null);

const ProductProvider = ({children})=>{
  const {data, isLoading} = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts
  })


  return(
    <ProductContext.Provider value={{data, isLoading}}>
      {children}
    </ProductContext.Provider>
  )
};

export let useProduct = ()=>  useContext(ProductContext);

export default ProductProvider;

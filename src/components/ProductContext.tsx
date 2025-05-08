import {useState, useContext, createContext} from "react";
import {useQuery} from '@tanstack/react-query';



let fetchProducts = async()=>{
  try {
    let res = await fetch('https://www.dummyjson.com/products')
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

interface ProductContextType{
  data: FetchResponse | undefined;
  isLoading: boolean;
};

let ProductContext = createContext<ProductContextType | null>();

const ProductProvider = ({children})=>{
  let {data, isLoading} = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts
  })


  return(
    <ProductContext.Provider value={{data, isLoading}}>
      {children}
    </ProductContext.Provider>
  )
};

let useProduct = ()=> useContext(ProductContext);


export {ProductProvider as default, useProduct};

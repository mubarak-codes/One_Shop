import {useState, useEffect} from 'react';

interface Product{
  category: string;
};

interface FetchResponse{
  products: Product[];
}


const Sidebar = () => {
  const [category, setCategory] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string[]>(["apple", "watch", "fashion", "trend", "shoes", "shirt"])

  useEffect(()=>{
    fetchProducts()
  },[])

    let fetchProducts = async ()=>{
     try {
       let res = await fetch('https://dummyjson.com/products');
       let data: FetchResponse = await res.json();
       
       let uniqueCategory = Array.from(new Set(data.products.map(product => product.category)));
       setCategory(uniqueCategory) 
       
      } catch (error) {
        console.error("Error fetching products", error)
      }
    };

    fetchProducts();
  


  return (
    <>
      <section className="px5 px10-sm">
        <h1 className="ff-rubik">ONE SHOP</h1>

        {/*search  */}
        <div className="w250px mb4">
         <input placeholder="Search..." className=" rounded-3 b2 mb2" />
         <div className="flex gap-2">
           <input placeholder="Search..." className=" rounded-3 b2" />
           <input placeholder="Search..." className="rounded-3 b2" />
         </div>
        </div>

        {/*category*/}
        <div className="mb4">
          <h4 className="ff-rubik fs5">Category</h4>
          {category.map((category, index)=> (
            <label key={index} className="block mb2">{category}
              <input type="radio" name="category" value={category} className="me2 inline h100" />
              
            </label>
          ))}
        </div>
      </section>
    </>
  )
}

export default Sidebar

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
      <section className="px5 px10-sm w300px">
        <h1 className="ff-rubik">ONE SHOP</h1>

        {/*search  */}
        <section className=" mb6">
         <input placeholder="Search..." className=" rounded-3 b input mb2 w100 focus-fs2 transit" />
         <div className="flex gap-2 w100">
           <input placeholder="Search..." className=" rounded-3 b input w100 focus-fs2 transit" />
           <input placeholder="Search..." className="rounded-3 b input w100 focus-fs2 transit" />
         </div>
        </section>

        {/*category*/}
        <section className="mb6">
          <h4 className="ff-rubik fs5 mb3">Category</h4>
          {category.map((category, index)=> (
            <label key={index} className="block mb1">
              <input type="radio" name="category" value={category} className="me2 vertical-center" />
              {category}
            </label>
          ))} 
        </section>

        {/*keyword*/}
        <section className="mb6">
          <h4 className="ff-rubik fs5 mb3">Keyword</h4>
          {keyword.map((keyword, index)=>(
            <div key={index} className="text-capitalize opacity75  hover-b b b-trans p1 rounded-3 transit mb1">{keyword}</div>
          ))}
        </section>

        {/*reset button*/}
        <button className="btn-night fs2 p2 px6 rounded-3">
          Reset filter
        </button>

      </section>
    </>
  )
}

export default Sidebar

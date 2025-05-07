import {useState, useEffect} from 'react';
import {useQuery} from '@tanstack/react-query';


let fetchProducts = async()=>{
  try {
    let res = await fetch('https://www.dummyjson.com/products')
    let data: FetchResponse = await res.json()
    return data;
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

let products: FetchResponse;

const Sidebar = () => {
  let {data, isLoading} = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts
  })
  
  const [category, setCategory] = useState([]);
  const [keyword, setKeyword] = useState(["apple", "watch", "fashion", "trend", "shoes", "shirt"])

  useEffect(()=>{
    if(data) {
      let fetchCategory = Array.from(new Set(data.products.map(product => product.category)))
      setCategory(fetchCategory)
    }
  }, [data])



  return (
    <>
      <section className=" w150px w200px-md fixed pt5">

        {/*search*/}
        <section className=" mb6">
         <input type="text" placeholder="Search" className=" rounded-3 b mb2 w100 h50px focus-fs2 transit" />
         <div className="flex gap-2 w100">
           <input type="number" placeholder="Min" className="rounded-3 b w100 h50px focus-fs2 transit" />
           <input type="number" placeholder="Max" className="rounded-3 b w100 h50px focus-fs2 transit" />
         </div>
        </section>

        {/*category*/}
        <section className="mb6">
          <h4 className="ff-rubik fs5 mb3">Category</h4>
          {category.map((category, index)=> (
            <label key={index} className="block mb1">
              <input type="radio" name="category" value={category} className="me2 vertical-center select-yellow" />
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

export {Sidebar as default, products};

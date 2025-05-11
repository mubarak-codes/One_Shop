import {useProduct} from './ProductContext'



const Sidebar = ()=>{
  let {data, isLoading} = useProduct()

  let uniqueCategory = Array.from(new Set(data?.products?.map((product)=> product.category)))



  return(
    <>
      <section className="">
        {/*search*/}
        <div className="mb5">
          <input type="text" placeholder="Search..." className="w100 h50px mb2"/>
          <div className="flex gap-2">
            <input type="text" placeholder="Search..." className="w100 h50px"/>
            <input type="text" placeholder="Search..." className="w100 h50px"/>
          </div>
        </div>
      
        <h5 className="ff-rubik">Category</h5>
        {isLoading?
          <div className="spinner1"></div>:
        <div>{uniqueCategory.map((category, index)=>(
          <label key={index}>
            <input type="radio" name="category" value={category} />
          {category}</label>
        ))}
        </div>
        }
      </section>

    </>
  )
};


export default Sidebar;

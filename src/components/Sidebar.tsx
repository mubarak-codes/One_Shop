import {useProduct} from './ProductContext'



const Sidebar = ()=>{
  let {data, isLoading} = useProduct()

  let uniqueCategory = Array.from(new Set(data?.products?.map((product)=> product.category)))



  return(
    <>
      <section className="">
        {/*search*/}
        <div className="mb5">
          <input type="text" placeholder="Search..." />
        </div>
      
        <h5 className="ff-rubik">Category</h5>
        {isLoading?
          <div className="spinner1"></div>:
        <div>{uniqueCategory.map((category, index)=>(
          <div key={index}>{category}</div>
        ))}
        </div>
        }
      </section>

    </>
  )
};


export default Sidebar;

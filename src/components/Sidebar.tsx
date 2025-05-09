import {useProduct} from './ProductContext'



const Sidebar = ()=>{
let {data, isLoading} = useProduct()

if (isLoading) {
  return(<div>loading</div>)
}

  return(
    <>
      <section className="px5 px10-sm px19-md pt17 bg-gray10">
        sidebar
        {data.products.map((pro)=>(
          <div>{pro.title}</div>
        ))}
      </section>

    </>
  )
};


export default Sidebar;

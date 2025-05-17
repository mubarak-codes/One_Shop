import {useProduct} from './ProductContext'
import {useState, useEffect} from 'react';



const Hero = ()=>{
  let {data, isLoading} = useProduct()

  let uniqueCategory = Array.from(new Set(data?.products?.map((product)=> product.category)))



  return(
    <>
      <section className="my5">
        {/*search*/}
        <div className="mb5">
          <input type="text" placeholder="Search..." className="w100 h50px mb2 form rounded-3"/>
                  </div>
      
        <h5 className="ff-poppins-semibold fs4">Category</h5>
        {isLoading?
          <div className="spinner1"></div>:
        <div className="d-grid gr2">{uniqueCategory.map((category, index)=>(
          <label key={index} className="flex items-center ">
            <input type="radio" name="category" value={category} className="me2 radio-blue"/>
            <div className="text-capitalize opacity75">{category}</div>
          </label>
        ))}
        </div>
        }

          <div className="flex gap-2 mt4">
            <input type="number" placeholder="Min..." className="w100 h50px form rounded-3"/>
            <input type="number" placeholder="Max..." className="w100 h50px form rounded-3"/>
          </div>

      </section>

    </>
  )
};


export default Hero;

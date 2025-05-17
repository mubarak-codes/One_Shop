import { useState } from "react";
import {useProduct} from './ProductContext'



const FilterContent = () => {
  let {data, isLoading} = useProduct()

  let uniqueCategory = Array.from(new Set(data?.products?.map((product)=> product.category)))




  return (
    <section className="bb">
    <h6 className="ff-poppins-semibold fs3">Category</h6>
        {isLoading?
          <div className="spinner1"></div>:
        <div className="">{uniqueCategory.map((category, index)=>(
          <label key={index} className="flex items-center fs2">
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

  )
};

export default FilterContent;

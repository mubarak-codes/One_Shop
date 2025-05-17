import {useState, useEffect} from 'react';



const Hero = ()=>{
  

  return(
    <>
      <section className="my5">
        {/*search*/}
        <div className="mb5 flex gap-5">
          <input type="text" placeholder="Search..." className="w100 h50px mb2 form rounded-3"/>
          <button className="bi bi-search btn-blue br2 px8 h50px"></ button>
        </div>
          <div className="mb5 flex gap9">
          <input type="text" placeholder="Search..." className="w100 h50px mb2 form rounded-3"/>
          <button className="bi bi-search btn-blue br2 px8 h50px"></ button>
        </div>

      
        
      </section>

    </>
  )
};


export default Hero;

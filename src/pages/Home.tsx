import Products from '../components/Products'
import Hero from '../components/Hero'
import FilterContent from '../components/FilterContent'


const Home = ()=>{

  return(
    <>
      <section className="px5 px10-sm px19-md pt17 bg-gray10">
        <Hero />
        <Products />
        <FilterContent />

      </section>

    </>
  )
};


export default Home;

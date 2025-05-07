import Navbar from '../components/Navbar';
import {Outlet} from 'react-router-dom';


const Layout1 = ()=>{


  return(
    <>
      <section>
        <Navbar />
        <Outlet />
      </section>
    </>
  )
};


export default Layout1;
